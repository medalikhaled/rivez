import Lottie from "lottie-react";
import hamsterAnimation from "../../public/hamster.json";
import studentAnimation from "../../public/student.json";
import { signOut, useSession } from "next-auth/react";

export default function Hero() {
  const { data: sessionData } = useSession();
  return (
    <main>
      <div className="h-[500px] w-[500px]">
        {sessionData ? (
          <HeroContent />
        ) : (
          <Lottie animationData={hamsterAnimation} loop />
        )}
      </div>
    </main>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="p-5" />
      <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl text-4xl font-extrabold text-white text-transparent">
        Welcome to Our Club!
      </h1>
      <div className="z-[0] w-[400px]">
        <Lottie animationData={studentAnimation} loop />
      </div>
    </div>
  );
}
