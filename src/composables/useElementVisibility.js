import { ref, onMounted, onUnmounted } from 'vue'

export function useElementVisibility(options = { threshold: 0.1 }) {
    const isVisible = ref(false)
    const target = ref(null)

    let observer = null

    onMounted(() => {
        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
                // Once visible, we can stop observing if we only want enter animations
                if (target.value) {
                    observer.unobserve(target.value)
                }
            }
        }, options)

        if (target.value) {
            observer.observe(target.value)
        }
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return {
        isVisible,
        target
    }
}
