let value;

// const value1=14;
// const value2=3;
const langs = "java , python , c+ , vs";

// value = value1 + value2 ;
// value=value1 - value2;
// value=value1*value2; çarpma 
// value=value1/value2bölme
// value=value1%value2;kalan

// value=Math.PI;
// value=math.E;
// value=Math.round(3.454); sayıyı yuvarlar
// value=Math.ceil(3.1); küsürat ne olursa olsun üst sayıya yuvarlar 
// value=Math.floor(3.8); küsürata bakmadan sayıyı alta yuvarlar
// value=Math.abs(-35); mutlak değer
// value=Math.sqrt(16); kökünü alır
// value=Math.pow(5,2); soldaki üstü sağdaki 
// value=Math.max(-13, -1, -412); en yüksek sayıyı seçer
// value=Math.min(-13, -1, -412); en düşük sayıyı seçer

const firstname= "cagri";
const lastname= "bozkurt";
value= firstname + " " +lastname;
value+="      " + "fzt";
value= value.length;
value= firstname.concat(lastname , " " , "111" ," " , "222"  )
value= firstname.toLowerCase();
value= firstname[0];
value= firstname[firstname.length - 1];
value= firstname.indexOf("c");
value= firstname.indexOf("q");
value= firstname.charAt("0");
value= firstname.charAt(firstname.length - 1);
value=langs.split(",");
value=langs.replace("python" , "zaporye")
value=langs.includes("python1");

console.log(value);