//DOM(Document Object Model)
// console.log("hello  baba");
// function valuer(valeur){
//     console.log(valeur)
// }
//var touches = document.querySelectorAll(".touhes")
// touches.addEventlistener("click",()=>{console.log(this)});
const touches =[...document.querySelectorAll('.bouton')];
// console.log(touches)
const listeKeycode = touches.map(touche => touche.dataset.key);
// console.log(listeKeycode)
const ecran = document.querySelector('.ecran','0');

document.addEventListener('keydown', (e) =>{
    // const valeur = e.key;
    const valeur = e.keyCode.toString();
    calculer(valeur) 

})
    // const valeur = e.key;
//     //calculer(valeur)
//     console.log(e.keycode)
//     if(e.keyCode >95 && e.keyCode <106){
//         ecran.innerHTML += e.key
//     }
    
   
//  })
document.addEventListener('click', (e)=>{
    // console.log(e)
    const valeur = e.target.dataset.key;
    calculer(valeur)

})
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        console.log(listeKeycode)
    }
        switch(valeur){
            case '8':
                ecran.textContent = ''
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const iindexkey = listeKeycode.indexOf(valeur);
                const touche = touches[iindexkey];
                ecran.textContent += touche.innerHTML;


        }
    }
    window.addEventListener('error', (e)=>{
        alert('Une erreur a étè produite dans votre calcul :' + e.message)
    })
// })
// // string.split([delimiter [, count]]);