function sum(a, b, c, d) {
    return a + b + c + d;
}

var toplamSonuc = sum(
    parseInt(localStorage.getItem("beslenmeDeger")),
    parseInt(localStorage.getItem("ulaşımDeger")),
    parseInt(localStorage.getItem("enerjiDeger")),
    parseInt(localStorage.getItem("atıkDeger"))
    )
console.log(toplamSonuc);

var dunyaSayisi;

if (toplamSonuc = 0) {
    dunyaSayisi = 1.5;
}

else if (toplamSonuc <= 20) {
    dunyaSayisi = 3;
}

else if (toplamSonuc <= 40) {
    dunyaSayisi = 4.5;
}

else if (toplamSonuc <= 60) {
    dunyaSayisi = 6;
}

else if (toplamSonuc <= 80) {
    dunyaSayisi = 7.5;
}

else if (toplamSonuc <= 100) {
    dunyaSayisi = 9;
}

else if (toplamSonuc <= 120) {
    dunyaSayisi = 10.5;
}

else if (toplamSonuc <= 140) {
    dunyaSayisi = 12;
}

// FEEDBACKS

function shocked() {
    alert("Şaşkın mı hissediyorsun? 😮\n\nBiz de o yollardan geçtik. Aslında, hala bundan kurtulamadık. Birçoğumuz için ayak izimiz istediğimizden daha yüksek. Bunun bir kısmı, parçası olduğumuz toplumun altyapı ve hizmetlerinden kaynaklanıyor. Toplumsal değişim kulağa ürkütücü gelebilir, ancak gidişatı değiştirmek için yapabileceğimiz pek çok şey var. Bunu denemeye hazır mısınız?");
  }

  function inspired() {
    alert("İlham almış mı hissediyorsun? 🤩\n\nArtık ayak izinizi biliyorsunuz ve harekete geçmeye hazırsınız! Gezegenimizin ekolojik bütçesini yeniden dengeye getirmek için sizin coşkunuza ve enerjinize ihtiyacımız var. Bunun için ne gerekiyor? Açıkçası, halihazırda bilmediğimiz ve hazırda sahip olmadığımız hiçbir şey. Daha fazla insanın mevcut çözümler hakkında bilgi sahibi olması ve bunları daha fazla yerde uygulaması gerekiyor.");
  }

  function helpless() {
    alert("Çaresiz mi hissediyorsun? 😣\n\nAyak izi sonucunuz ne olursa olsun, 'Bir kişi ne fark yaratabilir ki?' diye düşünüyor olabilirsiniz. Ya da, 'Hiçbir anlamı yok, mahvolduk.' Ama yalnız değilsiniz. Kişisel yolculuğumuzun bir noktasında, özellikle de küresel sorunlar hakkında daha fazla bilgi edindikçe, herkes bunu hissediyor. Sizi şimdi bu alandan çıkmak için kendinize meydan okumaya davet ediyoruz - gerçekte her birimizin yapabileceği çok şey var!");
  }

  function intrigued() {
    alert("Meraklı mı hissediyorsun? 🤔\n\nAyak iziniz hakkında daha fazla bilgi edinmek ister misiniz? Sonuçlarınızın dökümüne göz atın. Peki ya Ekolojik Ayak İzi'nin arkasındaki yaklaşım ve bunun kategorilere göre dağılımını merak ediyor musunuz? Bu konuda edinmek istediğiniz bilgileri sonuç bölümünden öğrenebilirsiniz. Dünya Limit Aşım Günü'nün tarihini değiştirmek için neler yapabileceğinizi merak ediyorsanız 'Çözümler' kısmını incelemeyi unutmayın!");
  }

  function worried() {
    alert("Endişeli mi hissediyorsun? 😬\n\nAyak izi sonucunuz ne olursa olsun, 'Oh hayır, toplumumuz çok fazla kaynak kullanıyor. Geleceğim için korkuyorum.' diye endişeye kapılmayın, yalnız değilsiniz. Çoğumuz iklim değişikliği ve ekolojik aşım gibi zor gerçekler hakkında düşünürken korkuyor veya endişeleniyoruz. Ama bu aşırı derecede endişelenmenizi gerektiren sorun değil. Bugün şu basit eylemi gerçekleştirmeyi deneyin: nasıl hissettiğinizi ve neyi savunduğunuzu paylaşın.");
  }

  function confused() {
    alert("Karmaşık mı hissediyorsun? 🤯\n\nKafanız sorularla dolup taşıyorsa, aradığınız cevaplardan bazılarını 'Çözümler' bölümünde bulabilirsiniz. Belki de çevre dostusunuz ve ayak izinizin neden bu kadar büyük olduğunu merak ediyorsunuz. Yollar ve sağlık hizmetleri gibi hizmetlerin de Ayak İzinize dahil olduğunu biliyor muydunuz? Belki de 'Bu test yasal mı ki!' diye düşünüyorsunuz. Ya da 'Harika bir test, şimdi ne yapabilirim? Unutmayın, değişime başlamak da nasıl düşüneceğinize karar vermek de sizin elinizde!");
  }
