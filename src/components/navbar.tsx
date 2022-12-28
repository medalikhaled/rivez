import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { data: sessionData } = useSession();
  return (
    <nav
      aria-label="navigation bar"
      className="fixed flex w-full items-center justify-center gap-4 bg-white/30 py-2 text-xl text-[#121212] text-[poppins] backdrop-blur-md"
    >
      {sessionData ? (
        <Link href="/profile" className="mr-auto flex translate-x-12 gap-1">
          {sessionData.user?.image && (
            <Image
              src={sessionData.user?.image}
              alt="profile image"
              width={30}
              height={20}
              className="rounded-full"
            />
          )}
          <span>{sessionData.user?.name || "User Profile"}</span>{" "}
        </Link>
      ) : (
        <div className="hover:cursor-pointer" onClick={() => signIn()}>
          Sign In
        </div>
      )}

      <Link href="/">Home</Link>

      {sessionData ? (
        <Link className="mr-auto" href="/dashboard">
          Dashboard
        </Link>
      ) : null}
    </nav>
  );
}
