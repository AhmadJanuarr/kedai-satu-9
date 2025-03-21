import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const DATAS_MENUS = [
  {
    id: 1,
    img: "/images/menu-1.jpeg",
    title: "Main course",
  },
  {
    id: 2,
    img: "/images/menu-2.jpeg",
    title: "Drinks & Snacks",
  },
  {
    id: 3,
    img: "/images/menu-3.jpeg",
    title: "Coffee & Spesial",
  },
];

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center w-full h-min-screen">
      <div className="relative flex flex-col items-center justify-center w-full px-5">
        <div className="absolute w-full h-96 bg-[#f7c8a5] -z-10"></div>
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-5 text-4xl font-delius"
          >
            Kedai satu 9
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-center text-[0.9rem] font-deliusSwash xl:text-[1.5rem]"
          >
            Nikmati berbagai pilihan menu lezat yang siap menggoyang lidahmu! Dari makanan khas hingga hidangan modern
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col mx-5 mt-5">
        {DATAS_MENUS.map((menu) => (
          <motion.figure
            key={menu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={menu.img}
              alt={menu.title}
              className="object-cover rounded-lg"
              onClick={() => setSelectedImage(menu.img)}
            />
            <figcaption className="pt-2 pb-6 font-semibold text-center font-deliusSwash">
              ----{menu.title}----
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center px-5 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.figure
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.img src={selectedImage} alt="selected" className="object-cover rounded-lg" />
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute flex items-end justify-end w-full -top-6 0 -right-5"
                onClick={() => setSelectedImage(null)}
              >
                <X size={44} className="text-red-700" />
              </motion.button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
