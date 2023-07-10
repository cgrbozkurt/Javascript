var a1=10;

var b1=a1;
console.log(a1);
console.log(b1);

var name="Cagri Bozkurt"

console.log(name);

name="Bozkurt Cagri"

console.log(name);

// Let kullanımında bir değişkene ikinci kez değer veremezsin !!!! 
// Örneğin yukarda a1 değeri verdiğimiz için let a1i kabul etmedi o yüzden a2 kullandık 
let mane="Sadio"
console.log(mane)

let a2,b2;
a2=10;
b2=20;
console.log(a2+b2);

const name1="constla verilen değer sonradan değiştirilirse hata verir"
console.log(name1); 

// name1="degismezzzz!!!!"  burada olduğu gibi değiştirirsen hata verir

// const a;
// a=19; şeklindede verilemez 

const a=[1,2,3,4,5,6]
console.log(a);
a.push(7,8,9);
console.log(a);

let value;
value=String(1234);
value=parseFloat("3.24 ")
value=parseInt("1453")


console.log(value);
console.log(typeof value);

value=String(false);
console.log(value);
console.log(typeof value);

value=(3.12).toString();
console.log(value);


const c = "13" + "hello" ;

console.log(c);

const b=Number("14")+35 ;
console.log(b);



