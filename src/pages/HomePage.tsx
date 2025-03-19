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
    <div className="w-full h-min-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col w-full px-5 relative">
        <div className="absolute w-full h-96 bg-[#99BC85] -z-10"></div>
        <h1 className="text-4xl mt-5">Kedai satu 9</h1>
        <p className="mt-5 text-center text-[0.8rem]">
          Nikmati berbagai pilihan menu lezat yang siap menggoyang lidahmu! Dari makanan khas hingga hidangan modern
        </p>
      </div>
      <div className="flex flex-col mt-5">
        {DATAS_MENUS.map((menu) => (
          <motion.figure>
            <img
              src={menu.img}
              alt={menu.title}
              className="object-cover rounded-lg"
              onClick={() => setSelectedImage(menu.img)}
            />
            <figcaption className="text-center pt-2 pb-6">{menu.title}</figcaption>
          </motion.figure>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 px-5 bg-black bg-opacity-80 flex justify-center items-center"
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
                className="absolute -top-6 0 -right-5 w-full items-end justify-end flex"
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
