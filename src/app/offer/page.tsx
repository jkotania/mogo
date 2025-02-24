"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import SkeletonOffer from "@/components/SkeletonOffer";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  id: number;
  name: string;
  background_color: string;
  width: string;
  is_expandable: boolean;
}

interface Offer {
  id: number;
  category_id: number;
  text: string;
  price: string;
  image: string | null;
  order_number: number;
}

export default function Offer() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [offers, setOffers] = useState<Record<number, Offer[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));
        // Pobierz kategorie
        const { data: categoriesData, error: categoriesError } = await supabase
          .from("categories")
          .select("*")
          .order("name", { ascending: true });

        if (categoriesError) {
          console.error("Błąd podczas pobierania kategorii:", categoriesError);
          return;
        }

        // Ustaw własną kolejność
        const orderedCategories = ["Salon", "Sypialnia", "Kuchnia", "Schody"];
        const sortedCategories = categoriesData?.sort(
          (a, b) =>
            orderedCategories.indexOf(a.name) -
            orderedCategories.indexOf(b.name)
        );

        setCategories(sortedCategories || []);

        // Pobierz oferty dla wszystkich kategorii
        const { data: offersData, error: offersError } = await supabase
          .from("offers")
          .select("*")
          .order("order_number");

        if (offersError) {
          console.error("Błąd podczas pobierania ofert:", offersError);
          return;
        }

        // Grupuj oferty według category_id
        const groupedOffers: Record<number, Offer[]> = {};
        offersData?.forEach((offer) => {
          if (!groupedOffers[offer.category_id]) {
            groupedOffers[offer.category_id] = [];
          }
          groupedOffers[offer.category_id].push(offer);
        });

        setOffers(groupedOffers);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col justify-center font-light p-6">
        <h1 className="w-full text-6xl text-center text-black border-0 border-solid max-md:max-w-full max-md:text-5xl">
          Oferta
        </h1>
        <div className="flex flex-col justify-center items-center px-5 py-2 w-full text-4xl text-black max-md:max-w-full">
          <div className="flex flex-col items-center mt-8 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full">
            {loading ? (
              <SkeletonOffer />
            ) : (
              <>
                {/* Statyczna belka "Projekt mebli" */}
                <div
                  className="flex gap-5 justify-between px-4 py-4 w-full rounded-3xl text-white"
                  style={{ backgroundColor: "#121CFF", maxWidth: "1001px" }}
                >
                  <div className="text-2xl sm:text-4xl">Projekt mebli</div>
                  <div className="text-right text-2xl sm:text-4xl whitespace-nowrap">
                    od 260 zł
                  </div>
                </div>

                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="w-full flex flex-col items-center"
                  >
                    <div
                      className={`flex gap-5 justify-between items-center px-4 py-4 mt-7 w-full rounded-3xl text-white max-md:flex-wrap`}
                      style={{
                        backgroundColor: category.background_color,
                        maxWidth: category.width,
                      }}
                      onClick={() => {
                        if (category.is_expandable) {
                          setActivePanel(
                            activePanel === category.id ? null : category.id
                          );
                        }
                      }}
                    >
                      <div className="text-2xl sm:text-4xl flex items-center z-20">
                        {category.name}
                      </div>
                      {category.is_expandable ? (
                        <div className="text-right flex items-center">
                          <svg
                            className={`h-10 w-8 transition-transform ${
                              activePanel === category.id
                                ? "transform rotate-180"
                                : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M19 9l-7 7-7-7"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="text-right text-2xl sm:text-4xl whitespace-nowrap flex items-center">
                          {offers[category.id]?.[0]?.price}
                        </div>
                      )}
                    </div>

                    {category.is_expandable && (
                      <AnimatePresence>
                        {activePanel === category.id && (
                          <motion.div
                            className={`panel p-8 text-white w-full mt-[-20px] rounded-b-3xl overflow-hidden`}
                            style={{
                              backgroundColor: category.background_color,
                              maxWidth: category.width,
                            }}
                            initial={{ clipPath: "inset(0 0 100% 0)" }}
                            animate={{ clipPath: "inset(0 0 0% 0)" }}
                            exit={{ clipPath: "inset(0 0 100% 0)" }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            onClick={(e) => {
                              if (e.target === e.currentTarget) {
                                setActivePanel(null);
                              }
                            }}
                          >
                            {offers[category.id]?.map((offer) => (
                              <div
                                key={offer.id}
                                className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 w-full z-10 ease-in-out"
                              >
                                {offer.image && (
                                  <div className="w-24 h-24 relative flex-shrink-0">
                                    <Image
                                      src={offer.image}
                                      alt={offer.text}
                                      fill
                                      className="rounded-lg object-cover"
                                    />
                                  </div>
                                )}
                                <span className="flex-grow text-center sm:text-left text-2xl sm:text-4xl break-words">
                                  {offer.text}
                                </span>
                                <span className="flex-shrink-0 text-2xl sm:text-4xl whitespace-nowrap">
                                  {offer.price}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* Statyczna belka "Wniesienie mebli" */}
                <div
                  className="flex gap-5 justify-between px-4 py-4 mt-7 w-full rounded-3xl text-white"
                  style={{ backgroundColor: "#1a1a1a", maxWidth: "691px" }}
                >
                  <div className="text-2xl sm:text-4xl">Wniesienie mebli</div>
                  <div className="text-right text-2xl sm:text-4xl whitespace-nowrap">
                    150 zł
                  </div>
                </div>

                <div
                  className="justify-center items-center px-16 py-2 mt-7 max-w-full text-2xl text-white text-center rounded-3xl w-[900px] max-md:px-5 max-md:max-w-full"
                  style={{ backgroundColor: "#121CFF" }}
                >
                  Bezpłatna dostawa i montaż przy zakupie 2 usług.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
