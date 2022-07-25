var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " " + "kaydedildi.");
}
function save2(product2) {
    console.log(product2.name + " " + "kaydedildi.");
}
//her deger bilgisi verilmeli
save({ id: 1, name: "laptop", unitPrice: 2500 });
//istedigimiz  degeri vermeyebiliriz.
var mouse = new Product2();
mouse.name = "Steel Series";
save2(mouse);
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
        throw new Error("Method not implemented.");
    };
    return CustomerService;
}());
