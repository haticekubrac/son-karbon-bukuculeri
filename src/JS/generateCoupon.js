import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRKlvpVuVLZDx--1TAP2EuYF2A5AvtOvQ",
  authDomain: "cw-shop-v2.firebaseapp.com",
  projectId: "cw-shop-v2",
  storageBucket: "cw-shop-v2.appspot.com",
  messagingSenderId: "1001166916253",
  appId: "1:1001166916253:web:9f8b5064a9921126972274",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function generateCoupon(percentage) {
  let randomCoupon = "";
  let characters = "0123456789abcdefABCDEF";

  // Run for loop to generate coupon randomly
  for (let i = 0; i < 7; i++) {
    randomCoupon += characters[Math.floor(Math.random() * 22)];
  }

  await setDoc(doc(db, "userCoupons", randomCoupon), {
    code: randomCoupon,
    percentage,
  });

  return randomCoupon;
}
