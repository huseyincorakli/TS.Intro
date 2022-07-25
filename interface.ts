interface IProduct{
    id : number;
    name:string;
    unitPrice:number;
}

class Product2{
    id : number;
    name:string;
    unitPrice:number;
}
function save(product:IProduct){
    console.log(product.name+ " " + "kaydedildi.")
}
function save2(product2:Product2){
    console.log(product2.name+ " " + "kaydedildi.")
}
//her deger bilgisi verilmeli
save({id:1,name:"laptop",unitPrice:2500});

//istedigimiz  degeri vermeyebiliriz.
let mouse= new Product2()
mouse.name="Steel Series";
save2(mouse)


interface IPersonService{
    save();
}

class CustomerService implements IPersonService{
    save() {
        throw new Error("Method not implemented.");
    }

}