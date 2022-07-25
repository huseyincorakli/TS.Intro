class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi;
        this._pencereSayisi=pencereSayisi;
        this._kat=kat;
    }
    yemekYe(){
        console.log("evin "+ this._kat+ ".katınnda " + "Yemek yenildi!");
    }
}

//let ev= new Ev(3,4,5);

//ev.yemekYe();

//##################################
//Inheritance
class Kisi{
    /* encapsulation= herhangi bir nesnenin degerini diger nesnelerden saklayarak ve
         bunlara erişimi sınırlandırarak yanlış kullanımlardan koruma yöntemi */
    private _isim:string;

    get isim():string{
        return "Sayın "+ this._isim;
    }
    set isim(ad:string){
       this._isim=ad;
    }

    kaydet(){
        console.log("Kişi Kaydedildi")
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış yapıldı")
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi")
    }
}
let musteri=new Musteri;
musteri.kaydet();
musteri.isim="ali";
console.log(musteri.isim);
musteri.satisYap();

let personel=new Personel;
personel.maasOde();

//private tanımladığı nesne içerisinde geçerli
//protected inherit edilen sınıf içerisinde de geçerli
//public heryerde geçerli