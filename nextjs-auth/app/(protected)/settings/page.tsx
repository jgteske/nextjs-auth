"use client";

import { useCurrentUser } from "@/hooks/user-current-user";
//import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
    //logout();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
