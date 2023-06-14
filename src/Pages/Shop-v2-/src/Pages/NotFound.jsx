import React from "react";
import { NavLink } from "react-router-dom";

const MainErrorPage = () => {
  return (
    <main className="w-screen h-screen flex items-center flex-col justify-center pt-20">
      <div className="flex items-center flex-col justify-center mb-auto">
        <h1 className="font-semibold text-[32px]">Page Not Found</h1>
        <h1 className="font-bold text-[32px]">404</h1>
      </div>
    </main>
  );
};

export default MainErrorPage;
