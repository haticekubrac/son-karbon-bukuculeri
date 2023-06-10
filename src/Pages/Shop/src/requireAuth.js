import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "false") {
    throw redirect(
      `/log-in?message=Oncesinde oturum acmaniz gerekmektedir.&redirectTo=${pathname}`
    );
  }
}
