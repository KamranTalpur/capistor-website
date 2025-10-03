export interface ProductImage {
  url: string;
  alt: string;
  thought: string;
  detail: string;
}

export interface Product {
  [x: string]: any;
  id: number;
  name: string;
  category: string;
  images: ProductImage[];
}

export const loadProducts = async (): Promise<Product[]> => {
  return getFallbackProducts();
};

export const getFallbackProducts = (): Product[] => [
  {
    id: 1,
    name: "Physical Pomodoro Timer",
    category: "Productivity Tools",
    images: [
      {
        url: "/product_images/placeholder.png",
        alt: "Physical Pomodoro Timer",
        thought: "Stay productive in cycles",
        detail:
          "The Physical Pomodoro Timer is a hardware-based productivity tool designed to implement the Pomodoro technique. Built with an Arduino microcontroller, it features a custom PCB, LEDs, a buzzer, and buttons for user interaction. The timer cycles through 25-minute work periods and 5-minute breaks, with visual and auditory cues to signal transitions.",
      },
    ],
  },
  {
    id: 2,
    name: "RGB Laser Projector",
    category: "Optics & Displays",
    images: [
      {
        url: "/product_images/placeholder1.png",
        alt: "RGB Laser Projector",
        thought: "Vivid laser displays",
        detail:
          "The RGB Laser Projector is an advanced optics system combining red, green, and blue lasers through a dichroic x-cube to create vibrant displays. Controlled by an STM32 microcontroller, it uses galvanomirrors for precise beam steering and raster scanning. Firmware in C handles PWM, UART debugging, and integrates with Python scripts for spectroscopy.",
      },
    ],
  },
  {
    id: 3,
    name: "Modular ESP32 Incubator",
    category: "Agricultural Automation",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "ESP32 Egg Incubator",
        thought: "Smart incubation",
        detail:
          "A custom PCB for an egg incubator, using ESP32 with temperature and humidity sensors, heater, and fan control. Includes IoT features for remote monitoring via a mobile app. Firmware in C++ leverages I2C, PWM, and Firebase integration, highlighting PCB design, embedded programming, and IoT expertise.",
      },
    ],
  },
  {
    id: 4,
    name: "Instrument Remote Access Tool",
    category: "Research Tools",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Instrument Remote Access",
        thought: "Automate data collection",
        detail:
          "This Python-based tool enables remote access and data collection from scientific instruments. It uses pyserial for communication, matplotlib for visualization, and SSH for secure connections. Automates experiments, reduces manual intervention, and demonstrates proficiency in Python scripting and serial communication.",
      },
    ],
  },
  {
    id: 5,
    name: "Battery-Less iPhone 7 Modification",
    category: "Hardware Hacking",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "iPhone 7 Modification",
        thought: "Reimagining power delivery",
        detail:
          "An ongoing project exploring powering an iPhone 7 without its battery. Involves bypassing protection circuits and designing custom power delivery using external sources or supercapacitors. Highlights hardware hacking, circuit design, and reverse engineering with sustainable electronics potential.",
      },
    ],
  },
  {
    id: 6,
    name: "DIY Arduino Egg Incubator",
    category: "IoT & Education",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Arduino Egg Incubator",
        thought: "Accessible incubation tech",
        detail:
          "An Arduino-based incubator project with Nano, LCD, RTC, sensors, and actuators. Firmware in C++ manages environment control. Schematics and components provided in EasyEDA format, with Firebase mobile app integration. Educational and open-source for community learning.",
      },
    ],
  },
  {
    id: 7,
    name: "Library Management App",
    category: "Mobile Apps & Robotics",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Library Management App",
        thought: "Books meet robotics",
        detail:
          "A React Native app enabling book search and control of a Jetson Nano robot for library tasks. Demonstrates skills in mobile app development, robotics integration, and JavaScript frameworks with applications in library automation.",
      },
    ],
  },
  {
    id: 8,
    name: "Pneumatic Press Timer",
    category: "Industrial Solutions",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Pneumatic Press Timer",
        thought: "Precision timing",
        detail:
          "An Arduino Nano-based timer for a pneumatic press, featuring button configuration and memory retention. Firmware in C++ ensures precise and reliable timing for industrial applications.",
      },
    ],
  },
  {
    id: 9,
    name: "Sound Classification on RPi",
    category: "Embedded AI",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Sound Classification on Raspberry Pi",
        thought: "Smarter sound detection",
        detail:
          "Implements a CNN on Raspberry Pi for real-time sound classification. Uses Python, TensorFlow, and Keras to process audio, with Bokeh for visualization. Highlights machine learning, embedded AI, and IoT development.",
      },
    ],
  },
  {
    id: 10,
    name: "Smart Stick for Blind",
    category: "Assistive Technology",
    images: [
      {
        url: "/product_images/placeholder.jpg",
        alt: "Smart Stick for Blind",
        thought: "Guidance through tech",
        detail:
          "A Raspberry Pi-based stick for visually impaired users. Uses sonar sensors for obstacle detection, with Python processing data to provide auditory or haptic feedback. Showcases accessibility-focused embedded systems design.",
      },
    ],
  },
];
