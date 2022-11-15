import {
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiStrapi,
  SiPostgresql,
  SiReact,
  SiGraphql,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import todoListImg from "../assets/images/todo-list.png";
import blogImg from "../assets/images/blog.png";
import randogramImg from "../assets/images/randogram.png";
import viaImg from "../assets/images/via.png";
import shopperImg from "../assets/images/shopper.JPG";

// import enLangContent from "../lang/en.json";
// import frLangContent from "../lang/fr.json";

export const skillsData = [
  {
    id: 1,
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: "React",
    icon: <SiReact />,
  },
  {
    id: 3,
    name: "SASS",
    icon: <SiSass />,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    id: 6,
    name: "Strapi",
    icon: <SiStrapi />,
  },
  {
    id: 7,
    name: "Express",
    icon: <SiExpress />,
  },
  {
    id: 8,
    name: "NodeJs",
    icon: <SiNodedotjs />,
  },
  {
    id: 9,
    name: "PostgresQL",
    icon: <SiPostgresql />,
  },

  {
    id: 10,
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    id: 11,
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 12,
    name: "Typescript",
    icon: <SiTypescript />,
  },
];

export const worksData = [
  {
    id: 1,
    name: "Shopper",
    description: "Shop everywhere, everytime you want !",
    github: "https://github.com/Benjamin-Boy/shopper-app",
    host: "https://shopperify.netlify.app/",
    image: shopperImg,
    tags: [
      {
        skillId: skillsData[1].id,
        skillName: skillsData[1].name,
        skillIcon: skillsData[1].icon,
      },
      {
        skillId: skillsData[3].id,
        skillName: skillsData[3].name,
        skillIcon: skillsData[3].icon,
      },
      {
        skillId: skillsData[11].id,
        skillName: skillsData[11].name,
        skillIcon: skillsData[11].icon,
      },
    ],
  },
  {
    id: 2,
    name: "Randogram",
    description: "Hike there for fresh & virtual air",
    github: "https://github.com/Benjamin-Boy/randogram-app",
    host: "",
    image: randogramImg,
    tags: [
      {
        skillId: skillsData[1].id,
        skillName: skillsData[1].name,
        skillIcon: skillsData[1].icon,
      },
      {
        skillId: skillsData[2].id,
        skillName: skillsData[2].name,
        skillIcon: skillsData[2].icon,
      },
      {
        skillId: skillsData[5].id,
        skillName: skillsData[5].name,
        skillIcon: skillsData[5].icon,
      },
    ],
  },
  {
    id: 3,
    name: "Blog",
    description: "If you like to read lorem poems, it is the place to be",
    github: "https://github.com/Benjamin-Boy/blog-app",
    host: "https://bennyblog.netlify.app/",
    image: blogImg,
    tags: [
      {
        skillId: skillsData[1].id,
        skillName: skillsData[1].name,
        skillIcon: skillsData[1].icon,
      },
      {
        skillId: skillsData[2].id,
        skillName: skillsData[2].name,
        skillIcon: skillsData[2].icon,
      },
      {
        skillId: skillsData[5].id,
        skillName: skillsData[5].name,
        skillIcon: skillsData[5].icon,
      },
    ],
  },
  {
    id: 4,
    name: "Todo List",
    description: "A simple todo list made with React and Sass",
    github: "https://github.com/Benjamin-Boy/todolist-app",
    host: "http://marvelous-todo.surge.sh/",
    image: todoListImg,
    tags: [
      {
        skillId: skillsData[1].id,
        skillName: skillsData[1].name,
        skillIcon: skillsData[1].icon,
      },
      {
        skillId: skillsData[2].id,
        skillName: skillsData[2].name,
        skillIcon: skillsData[2].icon,
      },
    ],
  },
  {
    id: 5,
    name: "Via",
    description: "A social app that connects you to your neighbourhood",
    github: "https://github.com/O-clock-Daguerre/projet-08-via",
    host: "",
    image: viaImg,
    tags: [
      {
        skillId: skillsData[1].id,
        skillName: skillsData[1].name,
        skillIcon: skillsData[1].icon,
      },
      {
        skillId: skillsData[2].id,
        skillName: skillsData[2].name,
        skillIcon: skillsData[2].icon,
      },
      {
        skillId: skillsData[7].id,
        skillName: skillsData[7].name,
        skillIcon: skillsData[7].icon,
      },
      {
        skillId: skillsData[8].id,
        skillName: skillsData[8].name,
        skillIcon: skillsData[8].icon,
      },
      {
        skillId: skillsData[6].id,
        skillName: skillsData[6].name,
        skillIcon: skillsData[6].icon,
      },
    ],
  },
];
