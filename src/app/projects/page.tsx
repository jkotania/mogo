"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SkeletonCard from "@/components/SkeletonCard";

interface Project {
  id: number;
  title: string | null;
  description: string;
  image: string | null;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Dodajemy sztuczne opóźnienie 2 sekundy
        await new Promise((resolve) => setTimeout(resolve, 100));

        const { data, error } = await supabase.from("projects").select("*");

        if (error) {
          console.error("Błąd podczas pobierania projektów:", error);
          return;
        }

        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Wystąpił nieoczekiwany błąd:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto p-4 mb-16">
        <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-light text-center mb-2 lg:mb-8">
          Nasze Projekty
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            // Wyświetl 6 szkieletów podczas ładowania
            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)
          ) : projects && projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="relative aspect-square mb-4">
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title || "Projekt"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="rounded-md object-cover"
                  />
                </div>
                <h2 className="text-xl text-black font-semibold mb-2">
                  {project.title || "Projekt bez tytułu"}
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              Brak dostępnych projektów
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
