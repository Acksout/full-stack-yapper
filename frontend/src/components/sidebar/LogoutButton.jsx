import React from "react";
import { LuLogOut } from "react-icons/lu";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <LuLogOut className="text-white cursor-pointer transform rotate-180 flip-x size-6" />
    </div>
  );
};

export default LogoutButton;
