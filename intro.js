function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer("veli");
console.log(mesaj);
var sehir;
sehir = "ankara";
sehir = "antalya";
var sayi;
sayi = 1;
sayi = 2;
var sayilar = [1, 2, 3, 4];
var sayilar2 = [1, 2, 3, 4];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(Renk[1]);
