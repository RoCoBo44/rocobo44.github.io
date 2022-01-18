import img from "../img/projects/portfolio-1.jpg"
import sNNake_img from "../img/projects/sNNake.gif"
import WiggleGAN_img from "../img/projects/WiggleGAN.gif"
import recom_img from "../img/projects/recom.gif"
import hallow_img from "../img/projects/hallow.gif"
import survivor_img from "../img/projects/sur.gif"
import unighi_img from "../img/projects/unighi.gif"
import thesis_img from "../img/projects/wgan.gif"
import xmas_img from "../img/projects/xmas.gif"
import glance_img from "../img/projects/glance.jpg"

export const projects_data = [
  {
    name: "Wiggle-GAN: Stereoscopic simulation using Generative Adversarial Neural Networks",
    group: ["Machine Learning", "3D/VFX" ],
    image: WiggleGAN_img,
    description: "This was my thesis project in which I worked with Pytorch and implemented a Wasserstein GAN with almost a Pix2Pix architecture and Improved Consistency Regularization methods. Also I gathered Images to create a special Dataset to solve this problem",
    github: "https://github.com/RoCoBo44/Wiggle-GAN",
    colab: "https://colab.research.google.com/drive/1N5HJ1geVM1ymLoE5C2jkLs3F_tQn-s-r#scrollTo=S96ivS6PHS-S"
  },
  {
    name: "sNNake",
    group: ["Machine Learning" ],
    image: sNNake_img,
    description: "Using JAVA I coded a Neural Network from scratch that employs backpropagation in order to learn. I followed the Object Oriented manners in order to utilize flexiblearchitectures. Then, I applied those architectures to solve the snake game",
    github: "https://github.com/RoCoBo44/sNNake"
  },
  {
    name: "Musical Recommendation using Neural Networks",
    group: ["Machine Learning" ],
    image: recom_img,
    description: "By using the Keras Library I implemented a neural network that given your likes in music and your account information such as the country of residence, it recommends you a song to listen to. A way to mitigate the cold start problem",
  },
  {
    name: "ImageApp challenge",
    group: ["Full-stack"],
    image: img,
    description: "The task consisted in building a very basic RESTful API that enables a set of functionalities to the client/user. A simple web page using HTML + CSS + Javascript as the front-end for the user interaction. The front-end was connected to the Flask + Python that acted as the backend of the solution",
    github: "https://github.com/RoCoBo44/ImageApp"
  },
  {
    name: "Survivor Set Reconstruction in 3D",
    group: ["3D/VFX" ],
    image: survivor_img,
    description: "I recreated the voting booth of Survivor and added myself in it. Also used PIFuHD to add some people in the background. This was done in Blender and After Effects",
    link: "https://www.instagram.com/p/COgvFW3p8NQ/"
  },
  {
    name: "Thesis AfterMatch",
    group: ["3D/VFX" ],
    image: thesis_img,
    description: "This animation was a little celebration of my years in the univesity. I applied my WiggleGAN to recreated some wigglegrams and also did some rotobrush practice",
    link: "https://www.instagram.com/p/CGlSEG6ppeW/"
  },
  {
    name: "Halloween project",
    group: ["3D/VFX" ],
    image: hallow_img,
    description: "By using a pumpkin that I created in blender, I wanted to make a spooky animation. The main focus was in practicing with bones and water simulation. This was done in Blender and After Effects",
    link: "https://www.instagram.com/p/CGlSEG6ppeW/"
  },
  {
    name: "Uni 3D Reconstruction in ghibli style ",
    group: ["3D/VFX" ],
    image: unighi_img,
    description: "This was for a challenge, I recreated my faculty building and mimicked the ghibli style. This was done in Blender and After Effects",
    link: "https://www.instagram.com/p/CH8SWJsJKMY/"
  },
  {
    name: "Glance Music Video ",
    group: ["3D/VFX" ],
    image: glance_img,
    description: "Reactable music video made with Photoshop and After Effects",
    link: "https://www.instagram.com/p/B_X70dHhE-9/"
  },
  {
    name: "XMAS 2020",
    group: ["3D/VFX" ],
    image: xmas_img,
    description: "Winter video abouth a grumpy snowman. This was done in Blender and After Effects",
    link: ""
  },
];

export const projects_buttons = [
  {
    name: "All"
  },
  {
    name: "Machine Learning"
  },
  {
    name: "Full-stack"
  },  
  {
    name: "3D/VFX"
  }
];