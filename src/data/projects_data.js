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
import puralax_img from "../img/projects/puralax.jpg"
import pio_img from "../img/projects/lowpio.gif"

export const projects_data = [
  {
    name: "Wiggle-GAN: Stereoscopic simulation using Generative Adversarial Neural Networks",
    group: ["Machine Learning", "3D/VFX" ],
    image: WiggleGAN_img,
    description: "This was my thesis project in which I worked with Pytorch and implemented a Wasserstein GAN based on the Pix2Pix architecture and Improved Consistency Regularization methods. I also gathered Images to create a special Dataset to solve this problem.",
    github: "https://github.com/RoCoBo44/Wiggle-GAN",
    colab: "https://colab.research.google.com/drive/1N5HJ1geVM1ymLoE5C2jkLs3F_tQn-s-r#scrollTo=S96ivS6PHS-S",
    youtube: "https://www.youtube.com/watch?v=K8w2wHLjH_s",
    document: "https://drive.google.com/file/d/1W1iknMNRfvGbtZnOUvzVnTIMiFck1erv/view?usp=sharing"
  },
  {
    name: "sNNake",
    group: ["Machine Learning" ],
    image: sNNake_img,
    description: "Using JAVA I coded a Neural Network from scratch that employs backpropagation in order to train itself. I followed the Object Oriented patterns in order to utilize flexible architectures. Then I applied those architectures to solve the snake game.",
    github: "https://github.com/RoCoBo44/sNNake",
    document: "https://docs.google.com/document/d/17Ei6uatSuve8_-Oeoi2MqiXI9mek3Nz7VTWpr3EHNC0/edit?usp=sharing"
  },
  {
    name: "Music Recommendation using Neural Networks",
    group: ["Machine Learning" ],
    image: recom_img,
    description: "By using the Keras Library I implemented a neural network that given your likes taste in music and your information such as the country of residence, it recommends you a song to listen to. It propose a way to mitigate the 'cold-start problem'.",
  },
  {
    name: "Puralax game implementation and solution using backtracking and B&B algorithms",
    group: ["Machine Learning" ],
    image: puralax_img,
    description: "Project was done in C++ using QT. The goal was to implement the game Puralax and then apply techniques like Backtracking and Branch and Bound to solve every level a generate new ones.",
    github: "https://github.com/RoCoBo44/PuralaxGame-and-Solutions",
    document: "https://docs.google.com/document/d/1ddmZcQ14kEJiht3qSLA6j_DrJiPz9vPd4_3CIwfUXsc/edit?usp=sharing"
  },
  {
    name: "ImageApp challenge",
    group: ["Full-stack"],
    image: img,
    description: "The task consisted in building a very basic RESTful API that enables a set of functionalities to the client/user. A simple web page using HTML + CSS + Javascript as the front-end for the user interaction. The front-end was connected to the Flask + Python that acted as the backend of the solution.",
    github: "https://github.com/RoCoBo44/ImageApp"
  },
  {
    name: "Survivor Set Reconstruction in 3D",
    group: ["3D/VFX" ],
    image: survivor_img,
    description: "I recreated the voting booth from the reality show Survivor and added myself in it. Also used PIFuHD to add some people in the background. This was made in Blender and After Effects.",
    link: "https://www.instagram.com/p/COgvFW3p8NQ/"
  },
  {
    name: "Thesis celebration video",
    group: ["3D/VFX" ],
    image: thesis_img,
    description: "This animation was a little celebration of my years in the univesity. I applied my WiggleGAN to recreated some wigglegrams and also did some rotobrush practice.",
    link: "https://www.instagram.com/p/CGlSEG6ppeW/"
  },
  {
    name: "Halloween project",
    group: ["3D/VFX" ],
    image: hallow_img,
    description: "By using a pumpkin that I created in blender, I wanted to make a spooky animation. The main focus was in practicing with bones and water simulation. This was done in Blender and After Effects.",
    link: "https://www.instagram.com/p/CGlSEG6ppeW/"
  },
  {
    name: "Uni 3D Reconstruction in ghibli style ",
    group: ["3D/VFX" ],
    image: unighi_img,
    description: "This was for a challenge, mimicking the ghibli style I recreated my university building. This was made in Blender and After Effects.",
    link: "https://www.instagram.com/p/CH8SWJsJKMY/"
  },
  {
    name: "Glance Music Video ",
    group: ["3D/VFX" ],
    image: glance_img,
    description: "Music video made with Photoshop and After Effects.",
    link: "https://www.instagram.com/p/B_X70dHhE-9/"
  },
  {
    name: "XMAS 2020",
    group: ["3D/VFX" ],
    image: xmas_img,
    description: "Winter video abouth a grumpy snowman, where I created the model, the bones and did the animation. Made in Blender and After Effects.",
    link: ""
  },{
    name: "Lowpoly chicken animation",
    group: ["3D/VFX" ],
    image: pio_img,
    description: "Wanted to do some test animations with bones using a model download from the web. Made in Blender.",
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