-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "carSlug" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
