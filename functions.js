function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
//Default Parameters
//y tanımlı ise tanımlı oldugu deger döner aksi halde default olan 4 değeri ile x toplanıp döner
function topla3(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
//Optional Parameters
//eğer y tanımlı ise x ile toplanıp değer tanımlı degil ise sadece x döner şart blogunu kaldırırsak ve x+y döndermeye çalışırsak NaN döneceketir...(Sonda olması gerekir)
function topla4(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
//Rest Parameters
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("ali", "veli", "salih"));
function davetEt2() {
    var davetliler = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        davetliler[_i] = arguments[_i];
    }
    return davetliler.join(" ");
}
console.log(davetEt2("ali", "veli", "salih"));
