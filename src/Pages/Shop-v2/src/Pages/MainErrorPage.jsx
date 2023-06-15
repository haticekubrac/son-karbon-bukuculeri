import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const MainErrorPage = () => {
  const error = useRouteError()
  return (
    <main className="w-screen h-screen flex items-center flex-col justify-center py-10">
      <div className="flex items-center flex-col justify-center mb-auto gap-2">
        <h1 className="font-bold text-[32px]">New Error Detected</h1>
        <h1 className="font-semibold text-[32px]">Message: {error.message}</h1>
      </div>
      <h1 className="font text-[32px] mb-auto"><NavLink to="/" className={"cool-link-not-found underline-offset-1 text-sky-500"}>Go To Home</NavLink></h1>
    </main>
  );
};

export default MainErrorPage;
