import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";

const Account: NextPage = () => {
  //TODO: Add Form and Mutaion using react hook form and tRPC
  const { data: sessionData } = useSession();
  return (
    <div className="grid h-screen min-h-screen place-content-center text-8xl text-black">
      account details for {sessionData && sessionData.user?.name}
    </div>
  );
};

export default Account;
