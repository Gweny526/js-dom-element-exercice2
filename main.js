// 1
let divContent = document.querySelector('#content')
console.log(divContent);

// 2
// c'est pour montrer une faute a ne pas reproduire
let divContentAll = document.querySelectorAll('#content')
console.log(divContentAll);

// 3
let classImportant = document.querySelector('.important')
console.log(classImportant);

// 4
let classImportantAll = document.querySelectorAll('.important')
console.log(classImportantAll);

// 5
classImportantAll.forEach(el =>{
    let monText = el.textContent
    // aller chercher la derniere lettre et la mettre en maj le .toLowerCase c'est pour s'assurer que le rest est en minuscule
    console.log(monText.substring(0, monText.length-1).toLowerCase() + monText.substring(monText.length-1).toUpperCase());
})

// 6
let idContent =document.getElementById('content')
console.log(idContent);
let paraGrand = document.getElementsByClassName('grandParagraphe')[0]
console.log(paraGrand);