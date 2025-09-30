import { motion } from "framer-motion";

export default function Mheader() {
  return (
    <header className="relative bg-darkgray text-sexyblue">
      <div className="p-8 md:p-6">
        <div className="flex flex-col justify-center items-center text-center max-w-screen-lg mx-auto">
          <div className="relative group">
            <img
              src="/logo_svg.svg"
              alt="Logo"
              className="h-28 w-28 sm:h-40 sm:w-40 md:h-50 md:w-50 mx-auto transition-all duration-500 ease-in-out group-hover:scale-110 border-2 border-sexyblue rounded-full shadow-lg hover:shadow-sexyblue/80"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl md:text-4xl sm:text-4xl font-bold font-domine">
              Capistor
            </h1>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-transparent via-sexyblue to-transparent opacity-50" />
      <div className="h-2 bg-gradient-to-b from-gray-200/30 to-transparent" />
    </header>
  );
}