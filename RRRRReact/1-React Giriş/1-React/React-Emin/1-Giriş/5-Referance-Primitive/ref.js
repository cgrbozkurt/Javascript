let object={value:20};

//spread ile alıp value değerini değiştirmezsek her iki value değeri(object dahil) de değişir
let object2={...object};

console.log(object2);
object2.value=30;

console.log(object2);
console.log(object);
