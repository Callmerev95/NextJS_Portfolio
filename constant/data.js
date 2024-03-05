// icons
import {
  HiHome,
  HiUser,
  HiSquare2Stack,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { FaBug, FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

export const LINKS = [
  {
    title: "home",
    icon: <HiHome />,
    path: "/",
  },
  {
    title: "about",
    icon: <HiUser />,
    path: "/about",
  },
  {
    title: "work",
    icon: <HiSquare2Stack />,
    path: "/work",
  },
  {
    title: "testimonials",
    icon: <HiChatBubbleBottomCenterText />,
    path: "/testimonials",
  },
  {
    title: "contact",
    icon: <HiEnvelope />,
    path: "/contact",
  },
];

// ACCORDION SECTION
export const ACCORDION = [
  {
    question: "What sets your approach apart from others?",
    answer: "I prioritize a holistic approach",
  },
  {
    question: "How do you ensure client statisfaction?",
    answer: "I prioritize active communication and collaboration",
  },
  {
    question: "How you balance creativity in your design?",
    answer:
      "I approach each project with a blend of innovation and practicality",
  },
  {
    question: "What sets your approach apart from others?",
    answer: "I prioritize a holistic approach",
  },
];

// About data
export const aboutData = [
  {
    title: "expertise",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UI/UX Designer - XYZ Company",
        year: "2012 - 2023",
      },
      {
        title: "Web Developer - XYZ Company",
        year: "2010 - 2012",
      },
      {
        title: "Freelance - Upwork",
        year: "2008 - 2010",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Full Stack Development - ABC University, USA",
        year: "null",
      },
      {
        title: "FrontEnd Development - ABC University, London",
        year: "null",
      },
      {
        title: "Graphic Designing - ABC University, Indonesia",
        year: "null",
      },
    ],
  },
];

// Work data
export const workData = [
  {
    title: "FrontEnd",
    projects: [
      {
        title: "Website",
        url: "/img1.png",
      },
      {
        title: "Website",
        url: "/img2.png",
      },
      {
        title: "Application",
        url: "/img3.png",
      },
      {
        title: "Application",
        url: "/img4.png",
      },
    ],
  },
  {
    title: "Backend",
    projects: [
      {
        title: "Website",
        url: "/img4.png",
      },
      {
        title: "Website",
        url: "/img3.png",
      },
      {
        title: "Application",
        url: "/img1.png",
      },
      {
        title: "Application",
        url: "/img5.png",
      },
    ],
  },
  {
    title: "Full Stack",
    projects: [
      {
        title: "Website",
        url: "/img1.png",
      },
      {
        title: "Website",
        url: "/img2.png",
      },
      {
        title: "Application",
        url: "/img3.png",
      },
    ],
  },
];

// Testimonial data
export const testimonialData = [
  {
    url: "/person-1.jpg",
    name: "Olivia Anderson",
    position: "Customer",
    message:
      "Lorem, ipsum dolor sit amet Ullam dolore molestiae veritatis aspernatur vero totam est consequuntur illo at dolor.",
  },
  {
    url: "/person-2.jpg",
    name: "Lucas Taylor",
    position: "Customer",
    message:
      "Lorem, ipsum dolor sit amet Ullam dolore molestiae veritatis aspernatur vero totam est consequuntur illo at dolor.",
  },
  {
    url: "/person-3.jpg",
    name: "Emma Brown",
    position: "Customer",
    message:
      "Lorem, ipsum dolor sit amet Ullam dolore molestiae veritatis aspernatur vero totam est consequuntur illo at dolor.",
  },
  {
    url: "/person-4.jpg",
    name: "Shopia Martinez",
    position: "Customer",
    message:
      "Lorem, ipsum dolor sit amet Ullam dolore molestiae veritatis aspernatur vero totam est consequuntur illo at dolor.",
  },
];
