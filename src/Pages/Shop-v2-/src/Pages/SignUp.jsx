import React from "react";
import {
  Form,
  useOutletContext,
  useActionData,
  redirect,
} from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebaseConfig";
const auth = getAuth();

export async function signUpAction({ request }) {
  let URLSearchParams = new URL(request.url).searchParams;
  let formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const surname = formData.get("surname");

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  updateProfile(auth.currentUser, {
    displayName: name,
    surname,
  })
    .then(() => {
      console.log("Profile Added.");
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  let redirect = false;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;

      redirect = true;
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
    }
  });

  if (redirect) {
    localStorage.setItem("isLoggedIn", true);
    throw redirect(
      URLSearchParams.get("redirectTo")
        ? URLSearchParams.get("redirectTo")
        : "/shop-basket/checkout"
    );
  } else {
    return "This email already in use. Please try a different email.";
  }
}

const SignUp = () => {
  const { searchParamsList } = useOutletContext();
  const [searchParams, setSearchParams] = searchParamsList;
  const errorMessage = useActionData();
  return (
    <main className="py-28 pb-48 px-6 bg-slate-100">
      {errorMessage && (
        <h2 className="text-red-500 text-center pb-2 font-semibold text-[18px]">
          {errorMessage}
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
        <h2 className="font-bold text-center text-[30px]">Kayıt Ol</h2>
        <div className="flex flex-col gap-3 w-full max-w-lg">
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                className="peer h-10  bg-slate-100 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-600 autofill text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Ad
              </label>
            </div>
            <div className="relative">
              <input
                id="surname"
                name="surname"
                type="text"
                className="peer h-10  bg-slate-100 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                placeholder=" "
              />
              <label
                htmlFor="surname"
                className="absolute left-0 -top-3.5 text-gray-600 autofill text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Soyad
              </label>
            </div>
          </div>
          <div className="relative mt-5">
            <input
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
              Giriş Yap
            </button>
          </div>
        </div>
      </Form>
    </main>
  );
};

export default SignUp;
