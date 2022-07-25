function selamVer(isim:string){
    return "Merhaba " + isim;
}

let mesaj= selamVer("veli");
console.log(mesaj)

let sehir:string
sehir="ankara"
sehir="antalya"

let sayi:number
sayi=1
sayi=2

let sayilar:number[]=[1,2,3,4]
let sayilar2:Array<number>=[1,2,3,4]

enum Renk{Kirmizi=1,Siyah,Mavi}
let renk:Renk=Renk.Kirmizi

let deger:any ="Ankara"
deger=2;
deger={}

function selamVer2():void{
    console.log("hi")
    //return 5;
}