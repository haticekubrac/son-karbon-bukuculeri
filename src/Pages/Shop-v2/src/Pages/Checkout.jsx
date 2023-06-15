import React, { useEffect, useState } from "react";
import { requireAuth } from "../requireAuth";
import {
  useNavigation,
  useOutletContext,
  Form,
  useActionData,
  useSubmit,
  redirect
} from "react-router-dom";
import BasketCard from "../Components/BasketCard";
import { app } from "../firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { async } from "@firebase/util";
const db = getFirestore(app);

export async function loader({ request }) {
  await requireAuth(request);
  return "";
}

export async function checkoutAction({ request }) {
  const formData = await request.formData();

  if (formData.get("coupon-code")) {
    async function findDiscount(code) {
      const docRef = doc(db, "userCoupons", code);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().percentage;
      } else {
        // docSnap.data() will be undefined in this case
        return 0;
      }
    }
    const discount = await findDiscount(formData.get("coupon-code"));
    localStorage.setItem("couponCode", formData.get("coupon-code"));

    return { discount, discountMessage: "İndirim Oranı:" + discount };
  }

  else {
    return {entered: true}
  }
}

const Checkout = () => {
  const { basket, searchParamsList } = useOutletContext();
  const [basketProducts, dispatchBasketProducts] = basket;
  const [firstProducts, setFirstProducts] = useState(basketProducts);
  const [searchParams, setSearchParams] = searchParamsList;
  const navigation = useNavigation();
  const [discount, setDiscount] = useState(0);
  const dataDiscount = useActionData()?.discount || 0;
  const entered = useActionData()?.entered || false;
  let submit = useSubmit();

  useEffect(() => {
    setDiscount(dataDiscount === 0 ? 0 : dataDiscount);
    console.log(dataDiscount === 0 ? 0 : dataDiscount);
  }, [dataDiscount]);
  
  useEffect(() => {
    if (JSON.stringify(basketProducts) !== "[]" && entered) {
      console.log("clearing started");
      dispatchBasketProducts({ type: "clear" });
    }
  }, []);


  let totalValues = [];
  basketProducts.forEach((product) => {
    let total =
      product.number *
      product.price.replace(/[.]/g, "").replace(/[,]/g, ".").replace(/TL/, "");

    total = total.toFixed(2);
    totalValues.push(total);
  });

  if (entered) {
    return (
      <main className="bg-gray-100 py-24 md:py-24 px-2 md:px-4 flex flex-col gap-5 text-center">
        {JSON.stringify(firstProducts) !== "[]" ? (
          <div>
            <h2 className="font-semibold text-[20px]">
              🥳 Siparişiniz alınmıştır. Tahmini varış süresi 3 gündür.
            </h2>
            <h2 className="font-semibold text-[20px]">
              Yine Bekleriz &#128075;
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="font-semibold text-[20px]">
              Sipariş edebilmeniz için önce sepetinizde ürün olması
              gerekmektedir. Lütfen sepetinize ürün ekleyin.
            </h2>
          </div>
        )}
      </main>
    );
  } else {
    return (
      <main className="flex flex-col lg:grid lg:grid-cols-2">
        <section className="py-28 pb-48 px-6 space-y-7">
          <Form
            replace
            className="space-y-12 flex flex-col"
            method="POST"
            onSubmit={(event) => {
              submit(event.currentTarget);
            }}
          >
            <div className="flex flex-col  items-center">
              <h2 className="font-semibold text-[20px]">Kupon</h2>
              <div className="flex flex-col gap-3 w-full max-w-lg">
                <div className="relative flex flex-row">
                  <input
                    id="coupon-code"
                    name="coupon-code"
                    type="text"
                    className="peer h-10 w-full rounded-s-xl p-3 mt-3  border-y-2 border-l-2  border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                    required
                  />
                  <button
                    className="bg-gray-900 hover:bg-gray-700 text-white rounded-e-xl font-semibold px-5 mt-3"
                    onSubmit={(event) => {
                      submit(event.currentTarget);
                    }}
                    
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </Form>

          <Form replace className="space-y-12 flex flex-col" method="POST">
            <div className="space-y-12 flex flex-col  items-center">
              <h2 className="font-bold text-center text-[30px]">
                Kart Bilgileri
              </h2>
              <div className="flex flex-col gap-3 w-full max-w-lg">
                <div className="relative">
                  <input
                    required
                    id="card-num"
                    name="card-num"
                    type="text"
                    className="peer h-10 w-full  border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="card-num"
                    className="absolute left-0 -top-3.5 text-gray-600   text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Kart Numarası
                  </label>
                </div>
                <div className="relative mt-5">
                  <input
                    required
                    id="skt"
                    name="skt"
                    type="text"
                    className="peer h-10   w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="skt"
                    className="absolute left-0 -top-3.5 text-gray-600  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Son Kullanma Tarihi (AA/YY)
                  </label>
                </div>
                <div className="relative mt-5">
                  <input
                    required
                    id="ccv"
                    name="ccv"
                    type="text"
                    className="peer h-10   w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="ccv"
                    className="absolute left-0 -top-3.5 text-gray-600  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    CCV
                  </label>
                </div>
                <div className="relative mt-5">
                  <input
                    required
                    id="owner"
                    name="owner"
                    type="text"
                    className="peer h-10   w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="owner"
                    className="absolute left-0 -top-3.5 text-gray-600  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Kart Sahibinin Adı
                  </label>
                </div>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-700 text-white w-full font-bold p-4 rounded-3xl"
                    onSubmit={() => (event) => {
                      submit(event.currentTarget);
                    }}
                  >
                    Ödeme Yap
                    {/* {navigation.state === "submitting"
                      ? "Ödeme Yapılıyor..."
                      : navigation.state === "loading"
                      ? "Ödeme Yapıldı!"
                      : "Ödeme Yap"} */}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </section>
        <section className="md:px-10 bg-gray-100 py-10">
          <div className="flex flex-col md:px-10 bg-gray-100 py-10">
            {/* Spetim Text */}
            <div>
              <h1 className="font-semibold px-5 text-[25px] md:text-[28px] pb-2">
                Sepet
              </h1>
            </div>
            {/* Sepetteki Ürünler */}
            {JSON.stringify(firstProducts) !== JSON.stringify([]) ? (
              <div>
                <div className="flex flex-col px-5 overflow-y-scroll checkout-basket-h">
                  {console.log(
                    typeof basketProducts,
                    JSON.stringify(basketProducts),
                    JSON.stringify([])
                  )}
                  {basketProducts.map((product) => (
                    <BasketCard
                      key={product.path}
                      text={product.text}
                      price={product.price}
                      path={product.path}
                      number={product.number}
                      img={product.img}
                      dispatchBasketProducts={dispatchBasketProducts}
                      imgClassName={
                        "md:w-[120px] lg:w-[140px] md:h-[120px] lg:h-[140px]"
                      }
                      textClassName={"md:text-[18px] lg:text-[19px]"}
                      priceClassName={"md:text-[16px]"}
                      total={true}
                    />
                  ))}
                </div>
                <div className="border-t-2 pt-5 flex flex-col px-5 gap-7">
                  <div className="flex flex-col items-center xsm:flex-row justify-between">
                    <h4 className="font-semibold text-[16px] md:text-[18px]">
                      Toplam
                    </h4>
                    <h4 className="font-semibold text-[16px] md:text-[18px] text-red-600">
                       {discount ? "İndirim Oranı: "+ discount+"%" : ""}
                    </h4>
                    <h4 className="font-semibold text-[16px] md:text-[18px]">
                      {`${(
                        totalValues
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + Number(currentValue),
                            0
                          )
                          .toFixed(2) *
                        ((100 - discount) / 100)
                      ).toFixed(2)}`.replace(/[.]/g, ",")}{" "}
                      TL
                    </h4>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="font-semibold text-[20px]">
                  Sipariş edebilmeniz için önce sepetinizde ürün olması
                  gerekmektedir. Lütfen sepetinize ürün ekleyin.
                </h2>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }
};

export default Checkout;
