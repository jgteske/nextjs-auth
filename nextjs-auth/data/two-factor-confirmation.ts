import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const towFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return towFactorConfirmation;
  } catch {
    return null;
  }
};
