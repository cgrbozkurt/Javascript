class araba{
    constructor(renk){
        this.renk=renk;
        this.hiz=0;
    }
    hizlandir(){
        this.hiz+=13;
    }
}

class motorlu extends araba{
    constructor(renk,motor){
        super(renk);
        this.motor=motor;

    }
}

const oto=new araba("kırmızı");
oto.hizlandir();
console.log(oto);

let tasit=new motorlu("siyah","1.5dcl");
tasit.hizlandir();
console.log(tasit);