"user client";

//import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    //logout()
    signOut();
  };

  return (
    <span onClick={onClick} className="curser-pointer">
      {children}
    </span>
  );
};
