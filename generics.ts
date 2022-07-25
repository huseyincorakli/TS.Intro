
function deger(x:number):number{
    return x;
}
function deger2(x:string):string{
    return x;
}

let sayi= deger(10);
//console.log(sayi);

let harf= deger2("A");
//console.log(harf);


//Generic Function

function deger3<T>(x:T):T{
    return x;
}

let sayi2=deger3<number>(10);
let harf2 = deger3<string>("B");

console.log(harf2);
console.log(sayi2);


//Generic Class

class GenericClass<T>{
    degisken:T;
    fonksiyon<T>(x:T):T{
        return x;
    }
}
let sinif= new GenericClass<number>();
sinif.fonksiyon(2)