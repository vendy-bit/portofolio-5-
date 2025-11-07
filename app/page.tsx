import Image from "next/image";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center items-start h-screen pl-8">

            {/* Baris pertama */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
              <RotatingText
                texts={['Administration', 'Staff Legal', 'IT Support', 'Web Programming']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* Baris kedua dan ketiga */}
            <div className="mt-4 flex flex-col items-center space-y-0">
              <SplitText
                text="I'm Vendy Setiawan"
                className="text-5xl font-semibold text-center block"
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="Staff Administration"
                className="text-5xl font-semibold text-center text-[#C6F10E]"
                delay={75}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>

            {/* Baris keempat */}
            <BlurText
              text="I am a Computer Network and Telecomunication
              Engineering graduate with a Junior Technical
              Support qualification. I have experience in
              Administration, specializing in Land Management
              and Regional Development. My expertise includes
              Administrative Management, Data and Information
              Analysis, Document Management, and Public
              Communication. Outside of academics, I have diverse
              interents, including technology and information."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base mb-8 text-center"
            />
          </div>

          <div className="col-span-6">
            <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div >
    </div >
  );
}

