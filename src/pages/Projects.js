import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import login from "../images/Login.jpg";
import Todo from "../images/Todo.jpg";
import GoogleKeep from "../images/Keep.png";
import QuizApp from "../images/Quiz.jpg";
import Weather from "../images/weather.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Weather APP",
      imageUrl: Weather,
      src:"https://fooddeliverytoyou.netlify.app/",
    },
    {
      id: 2,
      name: "Login",
      imageUrl: login,
    },
    {
      id: 3,
      name: "To-do App",
      imageUrl: Todo,
    },
    // {
    //   id: 4,
    //   name: "CRUD Application",
    //   imageUrl: CRUDApplication,
    // },
    {
      id: 5,
      name: "Quiz App",
      imageUrl: QuizApp,
    },
    {
      id: 6,
      name: "Google Keep",
      imageUrl: GoogleKeep,
    },

    // {
    //   id: 7,
    //   name: "Library Management",
    //   imageUrl: project1,
    //   URL:"https://fooddeliverytoyou.netlify.app/" ,
    // },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
