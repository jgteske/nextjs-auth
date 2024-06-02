"use client";

//import { logout } from "@/actions/logout";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    signOut();
    //logout();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
