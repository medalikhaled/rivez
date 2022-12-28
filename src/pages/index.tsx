import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Hero from "../components/Hero";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Rivez</title>
        <meta
          name="description"
          content="Une Application web pour les étudiants et les instructeurs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-fit min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Hero />
        <section>
          <AuthShowcase />
        </section>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  // console.log(sessionData);

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="p-5" />
      <p className="z-[99] text-center text-2xl text-white">
        {sessionData && (
          <span>
            Logged in as{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
              {sessionData.user?.name}
            </span>
          </span>
        )}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>

      <div className="flex gap-4">
        {sessionData && (
          <button className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
            <Link href="/account_details">Complete Account</Link>
          </button>
        )}
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    </div>
  );
};
