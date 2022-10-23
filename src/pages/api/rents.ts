import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const session = await getSession({ req });

    const rents = await prisma.rent.findMany({
      where: {
        userId: session?.user.id,
      },
    });

    return res.status(200).json(rents);
  }

  if (req.method === "POST") {
    const session = await getSession({ req });

    const rentRequest = req.body as {
      carSlug: string;
      startDate: string;
      endDate: string;
    };

    await prisma.rent.create({
      data: {
        carSlug: rentRequest.carSlug,
        startDate: rentRequest.startDate,
        endDate: rentRequest.endDate,
        userId: session?.user.id,
      },
    });

    return res.status(200).json({ success: true });
  }
}
