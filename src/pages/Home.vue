<script setup>
import { useRouter } from 'vue-router'
import mainImg from '@/img/main.jpg'
import depthImg from '@/img/main-depth.png'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const router = useRouter()
const canvasContainer = ref(null)

const viewCurriculum = () => {
  router.push('/curriculum')
}

let scene, camera, renderer, mesh, animationId
let isTextureLoaded = false
let imgWidth = 5
let imgHeight = 5

onMounted(() => {
  if (!canvasContainer.value) return

  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.z = 3

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
  canvasContainer.value.appendChild(renderer.domElement)

  const textureLoader = new THREE.TextureLoader()
  
  textureLoader.load(mainImg, (colorTexture) => {
    textureLoader.load(depthImg, (depthTexture) => {
      imgWidth = colorTexture.image.width
      imgHeight = colorTexture.image.height
      isTextureLoaded = true

      const uniforms = {
        uImage: { value: colorTexture },
        uDepthMap: { value: depthTexture },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uDisplacementScale: { value: 0.1 },
        uIntensity: { value: 0.005 },
      }

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        transparent: true,
        vertexShader: `
          uniform sampler2D uDepthMap;
          uniform float uDisplacementScale;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec4 depthData = texture2D(uDepthMap, uv);
            
            float depth = depthData.r; 
            vec3 pos = position;
            
            // displacementScale is now a dynamic uniform controlled by mouse state
            pos.z += (depth - 0.5) * uDisplacementScale;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uImage;
          uniform sampler2D uDepthMap;
          uniform vec2 uMouse;
          uniform float uIntensity;
          varying vec2 vUv;

          void main() {
            vec4 depthData = texture2D(uDepthMap, vUv);
            float depth = depthData.r;
            
            // intensity is now a dynamic uniform controlled by mouse state
            vec2 parallax = uMouse * (depth - 0.5) * uIntensity;
            vec2 newUv = vUv - parallax;
            
            gl_FragColor = texture2D(uImage, newUv);
          }
        `
      })
      
      const geometry = new THREE.PlaneGeometry(1, 1, 256, 256)
      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      updateSize()
    })
  })

  const updateSize = () => {
    if (!renderer || !isTextureLoaded) return

    const vWidth = window.innerWidth * 0.90
    const vHeight = window.innerHeight * 0.85
    const windowAspect = vWidth / vHeight
    const imgAspect = imgWidth / imgHeight

    let canvasW, canvasH
    
    // Fit the rendering canvas perfectly without ruining aspect ratio
    if (imgAspect > windowAspect) {
      canvasW = vWidth
      canvasH = vWidth / imgAspect
    } else {
      canvasH = vHeight
      canvasW = vHeight * imgAspect
    }

    renderer.setSize(canvasW, canvasH)
    
    // Update camera to match
    camera.aspect = imgAspect;
    camera.updateProjectionMatrix();

    // Scale mesh to perfectly fit the viewport given the camera perspective
    const vFov = camera.fov * Math.PI / 180;
    const visibleHeight = 2 * Math.tan(vFov / 2) * (camera.position.z - 0.5);
    const visibleWidth = visibleHeight * camera.aspect;
    
    if (mesh) {
      mesh.scale.set(visibleWidth, visibleHeight, 1);
    }
  }

  const targetMouse = new THREE.Vector2(0, 0)
  const currentMouse = new THREE.Vector2(0, 0)
  
  const targetRotation = new THREE.Vector2(0, 0)
  const currentRotation = new THREE.Vector2(0, 0)

  // Dynamic Shader Parameters
  const settings = {
    idle_displacement: 0.0, // Subtle pop when idle
    hover_displacement: 0.5, // Full pop on hover
    idle_intensity: 0.0,  // Subtle parallax when idle
    hover_intensity: 0.005  // Dramatic parallax on hover
  }

  let targetDisplacement = settings.idle_displacement
  let currentDisplacement = settings.idle_displacement
  let targetIntensity = settings.idle_intensity
  let currentIntensity = settings.idle_intensity

  const onMouseMove = (event) => {
    if (!renderer || !renderer.domElement) return
    const rect = renderer.domElement.getBoundingClientRect()
    if (rect.width === 0) return
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const nx = (x / rect.width) * 2 - 1
    const ny = (y / rect.height) * 2 - 1

    targetRotation.x = ny * 0.12 
    targetRotation.y = nx * 0.12
    targetMouse.x = nx
    targetMouse.y = ny

    targetDisplacement = settings.hover_displacement
    targetIntensity = settings.hover_intensity
  }



  const onMouseLeave = () => {
    targetRotation.x = 0
    targetRotation.y = 0
    targetMouse.x = 0
    targetMouse.y = 0

    // Ramp down to idle levels on exit
    targetDisplacement = settings.idle_displacement
    targetIntensity = settings.idle_intensity
  }

  window.addEventListener('resize', updateSize)

  canvasContainer.value.addEventListener('mousemove', onMouseMove)
  canvasContainer.value.addEventListener('mouseleave', onMouseLeave)

  const animate = () => {
    animationId = requestAnimationFrame(animate)

    if (mesh) {
      // Smoothly interpolate rotation
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05
      
      mesh.rotation.x = currentRotation.x
      mesh.rotation.y = currentRotation.y
      
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05
      
      currentDisplacement += (targetDisplacement - currentDisplacement) * 0.05
      currentIntensity += (targetIntensity - currentIntensity) * 0.05

      mesh.material.uniforms.uMouse.value.set(currentMouse.x, currentMouse.y)
      mesh.material.uniforms.uDisplacementScale.value = currentDisplacement
      mesh.material.uniforms.uIntensity.value = currentIntensity
    }

    renderer.render(scene, camera)
  }
  
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  if (renderer) renderer.dispose()
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white flex-col relative overflow-hidden">
    <div 
      class="relative z-10 cursor-pointer image-container inline-block" 
      @click="viewCurriculum"
      ref="canvasContainer"
    >
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
  perspective: 1000px;
}

.image-container:hover {
  transform: scale(1.005);
}

.image-container:active {
  transform: scale(0.995);
}
</style>
