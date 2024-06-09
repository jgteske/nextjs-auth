'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // some server stuff
  // like clearing information about the user, ...
  await signOut();
};
