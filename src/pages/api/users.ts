import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "PUT") {
    const session = await getSession({ req });

    const updateUserRequest = req.body as {
      name: string;
      email: string;
    };

    const updatedUser = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        name: updateUserRequest.name,
        email: updateUserRequest.email,
      },
    });

    return res.status(200).json(updatedUser);
  }
}
