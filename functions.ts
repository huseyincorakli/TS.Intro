function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number):number{
    return x+y;
}

//Default Parameters
//y tanımlı ise tanımlı oldugu deger döner aksi halde default olan 4 değeri ile x toplanıp döner
function topla3(x:number,y:number=4):number{
    return x+y;
}

//Optional Parameters
//eğer y tanımlı ise x ile toplanıp değer tanımlı degil ise sadece x döner şart blogunu kaldırırsak ve x+y döndermeye çalışırsak NaN döneceketir...(Sonda olması gerekir)
function topla4(x:number,y?:number):number{
    if (y) {
        return x+y;
    }
    return x;
}


//Rest Parameters
function davetEt(ilkDavetli:string,...digerleri:string[]):string {
    return ilkDavetli+ " "+digerleri.join(" ");
}

console.log(davetEt("ali","veli","salih"));

function davetEt2(...davetliler:string[]):string {
    return davetliler.join(" ");
}
console.log(davetEt2("ali","veli","salih"));