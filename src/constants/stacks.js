// cSpell:ignore Reactos
import React from "react"

import { BsCode } from "react-icons/bs"
import { AiOutlineCode } from "react-icons/ai"
import { RiStackLine, RiGatsbyFill } from "react-icons/ri"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiJekyll, SiRails, SiReactos } from "react-icons/si"
import { DiRuby, DiMongodb } from "react-icons/di"

const stackData = [
  {
    id: 1,
    category: "Front End",
    icon: <BsCode />,
    languages: [
      {
        id: 1,
        language: "HTML",
        icon: <FaHtml5 />,
      },
      {
        id: 2,
        language: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        id: 3,
        language: "Javascript",
        icon: <SiJavascript />,
      },
      {
        id: 4,
        language: "React",
        icon: <FaReact />,
      },
    ],
  },
  {
    id: 2,
    category: "Back End",
    icon: <AiOutlineCode />,
    languages: [
      {
        id: 5,
        language: "NodeJS",
        icon: <FaNodeJs />,
      },
      {
        id: 6,
        language: "Ruby",
        icon: <DiRuby />,
      },
      {
        id: 7,
        language: "MongoDB",
        icon: <DiMongodb />,
      },
    ],
  },
  {
    id: 3,
    category: "Others",
    icon: <RiStackLine />,
    languages: [
      {
        id: 8,
        language: "Gatsby",
        icon: <RiGatsbyFill />,
      },
      {
        id: 9,
        language: "Jekyll",
        icon: <SiJekyll />,
      },
      {
        id: 10,
        language: "Ruby on Rails",
        icon: <SiRails />,
      },
      {
        id: 11,
        language: "MERN",
        icon: <SiReactos />,
      },
    ],
  },
]

export default stackData
