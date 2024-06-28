"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Importuj instancję db
import Navbar from "./components/navbar";
import Footer from "./components/footer"

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, 'projects');
      const projectSnapshot = await getDocs(projectsCollection);
      const projectList = projectSnapshot.docs.map(doc => ({
        id: doc.id, // Pobieranie ID dokumentu
        ...doc.data() // Pobieranie danych dokumentu
      }));
      setProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mb-16">
        <h1 className="projects-h1  mb-8 text-center">Nasze Projekty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="rounded-md w-full h-auto mb-4"
              />
              <h2 className="text-lg font-semibold  mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
