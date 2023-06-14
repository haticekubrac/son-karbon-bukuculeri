import React from "react";
import {
  Form,
  useOutletContext,
  useActionData,
  redirect,
  useNavigation,
} from "react-router-dom";

import { app } from "../firebaseConfig";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function loginAction({ request }) {
  let URLSearchParams = new URL(request.url).searchParams;
  let formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const auth = getAuth();
  let emailAuth = false;

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      emailAuth = true;
      const user = userCredential.user;
      console.log(emailAuth, "fir");
      // ...
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  if (emailAuth) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "false") {
      localStorage.setItem("isLoggedIn", true);
      throw redirect(
        URLSearchParams.get("redirectTo")
          ? URLSearchParams.get("redirectTo")
          : "/shop-basket/checkout"
      );
    } else {
      return {
        message:
          "Zaten oturumunuz açık durumdadır, giriş yapmanıza gerek yoktur.",
      };
    }
  } else {
    return {
      message:
        "E-posta adresiniz veya şifreniz yanlış. Lütfen tekrar kontrol edin.",
    };
  }
}

const LogIn = () => {
  const { searchParamsList } = useOutletContext();
  const [searchParams, setSearchParams] = searchParamsList;
  const message = useActionData();
  const navigation = useNavigation();
  return (
    <main className="py-28 pb-48 px-6 bg-slate-100">
      {message && (
        <h2 className="text-red-500 text-center pb-2 font-semibold text-[18px]">
          {message.message}
        </h2>
      )}
      {searchParams.get("message") && (
        <h2 className="text-red-500 text-center pb-2 font-semibold text-[18px]">
          Öncesinde oturum açmanız gerekmektedir.
        </h2>
      )}
      <Form
        replace
        method="POST"
        className="space-y-12 flex flex-col  items-center"
      >
        <h2 className="font-bold text-center text-[30px]">Giriş Yap</h2>
        <div className="flex flex-col gap-3 w-full max-w-lg">
          <div className="relative">
            <input
              required
              id="email"
              name="email"
              type="email"
              className="peer h-10 w-full bg-slate-100 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600  autofill text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              E-posta
            </label>
          </div>
          <div className="relative mt-5">
            <input
              required
              id="password"
              name="password"
              type="password"
              className="peer h-10  bg-slate-100 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-600 autofill text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Şifre
            </label>
          </div>

          <div className="pt-5">
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 text-white w-full font-bold p-4 rounded-3xl"
            >
              {navigation.state === "submitting"
                ? "Giriş Yapılıyor..."
                : navigation.state === "loading"
                ? "Giriş Yapıldı!"
                : "Giriş Yap"}
            </button>
          </div>
        </div>
      </Form>
    </main>
  );
};

export default LogIn;
