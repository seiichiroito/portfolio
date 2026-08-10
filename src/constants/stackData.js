// cSpell:ignore Reactos
import React from "react"

import { BsCode } from "react-icons/bs"
import { AiOutlineCode } from "react-icons/ai"
import { RiStackLine, RiGatsbyFill } from "react-icons/ri"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaVuejs } from "react-icons/fa"
import { SiJavascript, SiJekyll, SiRubyonrails } from "react-icons/si"
import { DiRuby, DiMongodb, DiReact } from "react-icons/di"

const stackData = [
  {
    id: "front-end",
    category: "Front End",
    icon: <BsCode />,
    languages: [
      {
        id: "html",
        language: "HTML",
        icon: <FaHtml5 />,
      },
      {
        id: "css",
        language: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        id: "javascript",
        language: "Javascript",
        icon: <SiJavascript />,
      },
      {
        id: "react",
        language: "ReactJS",
        icon: <FaReact />,
      },
      {
        id: "vue",
        language: "VueJS",
        icon: <FaVuejs />,
      },
    ],
  },
  {
    id: "back-end",
    category: "Back End",
    icon: <AiOutlineCode />,
    languages: [
      {
        id: "node",
        language: "NodeJS",
        icon: <FaNodeJs />,
      },
      {
        id: "ruby",
        language: "Ruby",
        icon: <DiRuby />,
      },
      {
        id: "mongodb",
        language: "MongoDB",
        icon: <DiMongodb />,
      },
    ],
  },
  {
    id: "others",
    category: "Others",
    icon: <RiStackLine />,
    languages: [
      {
        id: "gatsby",
        language: "Gatsby",
        icon: <RiGatsbyFill />,
      },
      {
        id: "jekyll",
        language: "Jekyll",
        icon: <SiJekyll />,
      },
      {
        id: "rails",
        language: "Ruby on Rails",
        icon: <SiRubyonrails />,
      },
      {
        id: "mern",
        language: "MERN",
        icon: <DiReact />,
      },
    ],
  },
]

export default stackData
