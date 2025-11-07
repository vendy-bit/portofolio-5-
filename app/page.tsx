import Image from "next/image";
import { useEffect, useState } from "react";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container mx-auto h-screen px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
          {/* Bagian teks */}
          <div className="md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-y-2 py-6 md:py-0">
            {/* Baris pertama */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <h1 className="text-xl sm:text-2xl text-white font-bold">
                I'm Ready For Job
              </h1>
              <RotatingText
                texts={['Administration', 'Staff Legal', 'IT Support', 'Web Programming']}
                mainClassName="px-2 sm:px-3 bg-[#C6F10E] text-black overflow-hidden py-1 justify-center rounded-lg text-xl sm:text-2xl font-bold inline-flex transition-all"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* Baris kedua dan ketiga */}
            <div className="mt-1 flex flex-col items-center md:items-start space-y-0.5">
              <SplitText
                text="I'm Vendy Setiawan"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left"
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              <SplitText
                text="Staff Administration"
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#C6F10E] text-center md:text-left"
                delay={75}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>

            {/* Baris keempat */}
            <BlurText
              text="I am a Computer Network and Telecomunication Engineering graduate with a Junior Technical Support qualification. I have experience in Administration, specializing in Land Management and Regional Development. My expertise includes Administrative Management, Data and Information Analysis, Document Management, and Public Communication. Outside of academics, I have diverse interents, including technology and information."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-sm sm:text-base mt-2 text-gray-300 max-w-lg leading-relaxed text-center md:text-left"
            />
          </div>


          {/* Bagian 3D */}
          <div className="md:col-span-6 flex justify-center items-center">
            <Lanyard
              position={[0, 0, isMobile ? 20 : 10]}   // ✅ kalau di HP, kameranya lebih jauh
              gravity={[0, isMobile ? -20 : -40, 0]}  // ✅ gravity dikurang biar halus
            />          </div>
        </div>
      </div>
    </div>
  );
}
