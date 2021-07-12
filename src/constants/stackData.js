// cSpell:ignore Reactos
import React from "react"
import { v4 as uuidv4 } from "uuid"

import { BsCode } from "react-icons/bs"
import { AiOutlineCode } from "react-icons/ai"
import { RiStackLine, RiGatsbyFill } from "react-icons/ri"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs,FaVuejs } from "react-icons/fa"
import { SiJavascript, SiJekyll, SiRails, SiReactos } from "react-icons/si"
import { DiRuby, DiMongodb } from "react-icons/di"

const stackData = [
  {
    id: uuidv4(),
    category: "Front End",
    icon: <BsCode />,
    languages: [
      {
        id: uuidv4(),
        language: "HTML",
        icon: <FaHtml5 />,
      },
      {
        id: uuidv4(),
        language: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        id: uuidv4(),
        language: "Javascript",
        icon: <SiJavascript />,
      },
      {
        id: uuidv4(),
        language: "ReactJS",
        icon: <FaReact />,
      },
      {
        id: uuidv4(),
        language: "VueJS",
        icon: <FaVuejs />,
      },
    ],
  },
  {
    id: uuidv4(),
    category: "Back End",
    icon: <AiOutlineCode />,
    languages: [
      {
        id: uuidv4(),
        language: "NodeJS",
        icon: <FaNodeJs />,
      },
      {
        id: uuidv4(),
        language: "Ruby",
        icon: <DiRuby />,
      },
      {
        id: uuidv4(),
        language: "MongoDB",
        icon: <DiMongodb />,
      },
    ],
  },
  {
    id: uuidv4(),
    category: "Others",
    icon: <RiStackLine />,
    languages: [
      {
        id: uuidv4(),
        language: "Gatsby",
        icon: <RiGatsbyFill />,
      },
      {
        id: uuidv4(),
        language: "Jekyll",
        icon: <SiJekyll />,
      },
      {
        id: uuidv4(),
        language: "Ruby on Rails",
        icon: <SiRails />,
      },
      {
        id: uuidv4(),
        language: "MERN",
        icon: <SiReactos />,
      },
    ],
  },
]

export default stackData
