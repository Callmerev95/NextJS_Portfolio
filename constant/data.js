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
