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

async function generateCoupon(percentage) {
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


function sum(a, b, c, d) {
  return a + b + c + d;
}

var toplamSonuc = sum(
  parseInt(localStorage.getItem("beslenmeDeger")),
  parseInt(localStorage.getItem("ulaşımDeger")),
  parseInt(localStorage.getItem("enerjiDeger")),
  parseInt(localStorage.getItem("atıkDeger"))
);

console.log(toplamSonuc);

localStorage.setItem("toplamDeger", toplamSonuc);

// DUNYA SAYISI
var dunyaSayisi;

// İndirim oranı değişkeni
var oran;

if (toplamSonuc === 0) {
} else if (0 < toplamSonuc && toplamSonuc <= 20) {
  oran = 10;
  dunyaSayisi = 12;
  yarimDunya = 0;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world5").style.display = "block";
  document.getElementById("world6").style.display = "block";
  document.getElementById("world7").style.display = "block";
  document.getElementById("world8").style.display = "block";
  document.getElementById("world9").style.display = "block";
  document.getElementById("world10").style.display = "block";
  document.getElementById("world11").style.display = "block";
  document.getElementById("world12").style.display = "block";
} else if (20 < toplamSonuc && toplamSonuc <= 40) {
  oran = 15;
  dunyaSayisi = 10;
  yarimDunya = 5;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world5").style.display = "block";
  document.getElementById("world6").style.display = "block";
  document.getElementById("world7").style.display = "block";
  document.getElementById("world8").style.display = "block";
  document.getElementById("world9").style.display = "block";
  document.getElementById("world10").style.display = "block";
  document.getElementById("world4.0.5").style.display = "block";
} else if (40 < toplamSonuc && toplamSonuc <= 60) {
  oran = 20;
  dunyaSayisi = 9;
  yarimDunya = 0;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world5").style.display = "block";
  document.getElementById("world6").style.display = "block";
  document.getElementById("world7").style.display = "block";
  document.getElementById("world8").style.display = "block";
  document.getElementById("world9").style.display = "block";
} else if (60 < toplamSonuc && toplamSonuc <= 80) {
  oran = 30;
  dunyaSayisi = 7;
  yarimDunya = 5;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world5").style.display = "block";
  document.getElementById("world6").style.display = "block";
  document.getElementById("world7").style.display = "block";
  document.getElementById("world3.0.5").style.display = "block";
} else if (80 < toplamSonuc && toplamSonuc <= 100) {
  oran = 35;
  dunyaSayisi = 6;
  yarimDunya = 0;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world5").style.display = "block";
  document.getElementById("world6").style.display = "block";
} else if (100 < toplamSonuc && toplamSonuc <= 120) {
  oran = 40;
  dunyaSayisi = 4;
  yarimDunya = 5;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world2").style.display = "block";
  document.getElementById("world3").style.display = "block";
  document.getElementById("world4").style.display = "block";
  document.getElementById("world2.0.5").style.display = "block";
} else if (120 < toplamSonuc && toplamSonuc <= 140) {
  oran = 45;
  dunyaSayisi = 1;
  yarimDunya = 5;
  document.getElementById("discount-percentage").innerText = oran.toString();
  document.getElementById("discount-cupon").innerText = await generateCoupon(
    oran
  );
  document.getElementById("discount").style.display = "block";
  document.getElementById("world1").style.display = "block";
  document.getElementById("world1.0.5").style.display = "block";
}

// MAX DEGER
document.getElementById("dunyaS").innerHTML =
  dunyaSayisi + "," + yarimDunya + " Dünya";

var maxValue = Math.min(
  parseInt(localStorage.getItem("beslenmeDeger")),
  parseInt(localStorage.getItem("ulaşımDeger")),
  parseInt(localStorage.getItem("enerjiDeger")),
  parseInt(localStorage.getItem("atıkDeger"))
);

var maxKey, renkliMetin;

if (maxValue === parseInt(localStorage.getItem("beslenmeDeger"))) {
  maxKey = " Beslenme Alışkanlıkları";
  document.getElementById("encok").style.color = "blue";
}

if (maxValue === parseInt(localStorage.getItem("ulaşımDeger"))) {
  maxKey = " Ulaşım Alışkanlıkları";
  document.getElementById("encok").style.color = "red";
}

if (maxValue === parseInt(localStorage.getItem("enerjiDeger"))) {
  maxKey = " Enerji Alışkanlıkları";
  document.getElementById("encok").style.color = "green";
}

if (maxValue === parseInt(localStorage.getItem("atıkDeger"))) {
  maxKey = " Atık Yönetimi Alışkanlıkları";
  document.getElementById("encok").style.color = "orange";
}

document.getElementById("encokk").innerHTML =
  "En Çok Dikkat Etmeniz Gereken Alan: ";
document.getElementById("encok").innerHTML = maxKey;

// FEEDBACKS

function shocked() {
  alert(
    "Şaşkın mı hissediyorsunuz? 😮\n\nBiz de o yollardan geçtik. Aslında, hala bundan kurtulamadık. Birçoğumuz için ayak izimiz istediğimizden daha yüksek. Bunun bir kısmı, parçası olduğumuz toplumun altyapı ve hizmetlerinden kaynaklanıyor. Toplumsal değişim kulağa ürkütücü gelebilir, ancak gidişatı değiştirmek için yapabileceğimiz pek çok şey var. Bunu denemeye hazır mısınız?"
  );
}

function inspired() {
  alert(
    "İlham almış mı hissediyorsunuz? 🤩\n\nArtık ayak izinizi biliyorsunuz ve harekete geçmeye hazırsınız! Gezegenimizin ekolojik bütçesini yeniden dengeye getirmek için sizin coşkunuza ve enerjinize ihtiyacımız var. Bunun için ne gerekiyor? Açıkçası, halihazırda bilmediğimiz ve hazırda sahip olmadığımız hiçbir şey. Daha fazla insanın mevcut çözümler hakkında bilgi sahibi olması ve bunları daha fazla yerde uygulaması gerekiyor."
  );
}

function helpless() {
  alert(
    "Çaresiz mi hissediyorsunuz? 😣\n\nAyak izi sonucunuz ne olursa olsun, 'Bir kişi ne fark yaratabilir ki?' diye düşünüyor olabilirsiniz. Ya da, 'Hiçbir anlamı yok, mahvolduk.' Ama yalnız değilsiniz. Kişisel yolculuğumuzun bir noktasında, özellikle de küresel sorunlar hakkında daha fazla bilgi edindikçe, herkes bunu hissediyor. Sizi şimdi bu alandan çıkmak için kendinize meydan okumaya davet ediyoruz - gerçekte her birimizin yapabileceği çok şey var!"
  );
}

function intrigued() {
  alert(
    "Meraklı mı hissediyorsunuz? 🤔\n\nAyak iziniz hakkında daha fazla bilgi edinmek ister misiniz? Sonuçlarınızın dökümüne göz atın. Peki ya Ekolojik Ayak İzi'nin arkasındaki yaklaşım ve bunun kategorilere göre dağılımını merak ediyor musunuz? Bu konuda edinmek istediğiniz bilgileri sonuç bölümünden öğrenebilirsiniz. Dünya Limit Aşım Günü'nün tarihini değiştirmek için neler yapabileceğinizi merak ediyorsanız 'Çözümler' kısmını incelemeyi unutmayın!"
  );
}

function worried() {
  alert(
    "Endişeli mi hissediyorsunuz? 😬\n\nAyak izi sonucunuz ne olursa olsun, 'Oh hayır, toplumumuz çok fazla kaynak kullanıyor. Geleceğim için korkuyorum.' diye endişeye kapılmayın, yalnız değilsiniz. Çoğumuz iklim değişikliği ve ekolojik aşım gibi zor gerçekler hakkında düşünürken korkuyor veya endişeleniyoruz. Ama bu aşırı derecede endişelenmenizi gerektiren sorun değil. Bugün şu basit eylemi gerçekleştirmeyi deneyin: nasıl hissettiğinizi ve neyi savunduğunuzu paylaşın."
  );
}

function confused() {
  alert(
    "Karmaşık mı hissediyorsunuz? 🤯\n\nKafanız sorularla dolup taşıyorsa, aradığınız cevaplardan bazılarını 'Çözümler' bölümünde bulabilirsiniz. Belki de çevre dostusunuz ve ayak izinizin neden bu kadar büyük olduğunu merak ediyorsunuz. Yollar ve sağlık hizmetleri gibi hizmetlerin de Ayak İzinize dahil olduğunu biliyor muydunuz? Belki de 'Bu test yasal mı ki!' diye düşünüyorsunuz. Ya da 'Harika bir test, şimdi ne yapabilirim? Unutmayın, değişime başlamak da nasıl düşüneceğinize karar vermek de sizin elinizde!"
  );
}

// SERTİFİKA

var sertifikaButon = document.getElementById("sertifikaButon");
var sertifika = document.getElementById("sertifika");
var isim = document.getElementById("isim");
var tikButon = document.getElementById("tik");
var sertifikaİsim;
var öneriler = document.getElementById("öneriler");
var öneriTik = document.getElementById("öneriTik");

sertifikaButon.addEventListener("click", function () {
  sertifikaButon.classList.remove("d-flex");
  isim.classList.add("d-flex");
  sertifikaButon.style.display = "none";
  isim.style.display = "block";
  tikButon.style.display = "block";
});

tikButon.addEventListener("click", function () {
  isim.classList.remove("d-flex");
  isim.style.display = "none";
  sertifika.style.display = "block";
  sertifikaİsim = document.getElementById("isiminput").value;
  document.getElementById("kullanıcıİsmi").innerHTML = sertifikaİsim;
});

öneriTik.addEventListener("click", function () {
  öneriler.style.display = "none";
  alert("Yanıtınız için teşekkür ederiz!");
});
