"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);

      if (!user) {
        router.push("/");
      }
    };

    getUser();
  }, [router, supabase]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-full  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white shadow rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Nagłówek profilu */}
            <div className="bg-[#1a1a1a] px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Profil użytkownika
                </h2>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:block"
                >
                  Wyloguj się
                </button>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:hidden"
                >
                  <FiLogOut size={24} />
                </button>
              </div>
            </div>

            {/* Zawartość profilu */}
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Informacje podstawowe
                  </h3>
                  <div className="mt-3 border-t border-gray-200 pt-3">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-1 text-sm text-gray-900">
                          {user.email}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Ostatnie logowanie
                        </label>
                        <div className="mt-1 text-sm text-gray-900">
                          {new Date(
                            user.last_sign_in_at || ""
                          ).toLocaleDateString("pl-PL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zabezpieczenia */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Zabezpieczenia
                  </h3>
                  <div className="mt-3 border-t border-gray-200 pt-3">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Status email
                        </label>
                        <div className="mt-1 text-sm">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.email_confirmed_at
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {user.email_confirmed_at
                              ? "Zweryfikowany"
                              : "Niezweryfikowany"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Metoda autoryzacji
                        </label>
                        <div className="mt-1 text-sm text-gray-900">
                          Email i hasło
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
