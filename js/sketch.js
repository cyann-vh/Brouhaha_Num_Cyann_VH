let data;
let taille = ['grand', 'moyen' , 'petit' , 'barre']


function preload() {
  data = loadJSON("js/data.json");
}

function setup(){
	let smsListe = data.corpus.sms;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe).cont); //affiche le premier sms

  let texte = random(smsListe.cont)
 
   console.log(texte)

   //let p = createP(texte)

   for (let i = 0; i <smsListe.length; i++) {
    let smsData = smsListe[i];
    let texte = smsData.cont;
  if(typeof texte == 'object'){
    texte = texte.__text;
   }
    let p = createP(texte)
    p.addClass(random(taille))

       let top = random(200)+'px' 
p.style('top', top);
   }
   


}