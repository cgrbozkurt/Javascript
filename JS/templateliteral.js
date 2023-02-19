const name="Baybars";
const secondname="Enes";
const lastname="Bozkurt";

const a=`Ad:${name}\nİkinciAd:${secondname}\nSoyad:${lastname}`



// console.log(a);

function b() {
    return "merhaba";
}

const html= `
<ul>
<li>${name}</li>
<li>${secondname}</li>
<li>${lastname}</li>
<li>${10*3}</li>
<li>${b()}</li>


</ul>
`;

document.body.innerHTML = html;