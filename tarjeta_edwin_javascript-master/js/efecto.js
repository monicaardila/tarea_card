let button_plus = document.querySelector('.tamano')
let button_moins = document.querySelector('.px')
let card2 =  document.querySelector('.card2')
let card_k =  document.querySelector('.card_k')
let btn = document.querySelector('.btn')
let far = document.querySelector('.fa-folder')

let cont=0;

button_plus.addEventListener('click', plus);
button_moins.addEventListener('click', moins);

function plus(){
    cont+=5;
    console.log(cont)//linea para imprimir en consola 
    card2.style.borderTopLeftRadius = cont + "px";
    card2.style.borderTopRightRadius = cont + "px";
    card_k.style.borderBottomLeftRadius = cont + "px";
    card_k.style.borderBottomRightRadius = cont + "px";
}

function moins(){
    cont-=5;
    console.log(cont)//linea para imprimir en consola ç
    card2.style.borderTopLeftRadius = cont + "px";
    card2.style.borderTopRightRadius = cont + "px";
    card_k.style.borderBottomLeftRadius = cont + "px";
    card_k.style.borderBottomRightRadius = cont + "px";
}

function changeColor(){
    let color = document.getElementById("colorText");
    card2.style.backgroundColor = color.value;
    btn.style.backgroundColor = color.value;
    far.style.backgroundColor = color.value;
}

function border(){
    let bord = document.getElementById("cardBorder").value;
    document.getElementById("cardBorder").style.borderRadius = "15px";
}



