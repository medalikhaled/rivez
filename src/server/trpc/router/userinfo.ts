import { prisma } from "./../../db/client";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  //TODO: Add the info mutations (role mutaion,...)
  /*
  infos: publicProcedure
    .input(z.object({ role: z.string().nullish().nullish() }))
    .mutation(async ({ input: { role, ctx } }) => {
      //  const role = prisma.user.create
      return {
        //Mutation
      };
    }),

    */
});
