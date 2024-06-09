// hooks can be used in client components
import { useSession } from 'next-auth/react';

export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user.role;
};
