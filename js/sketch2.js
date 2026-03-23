let data;
let taille = ['grand', 'moyen' , 'petit' , 'barre']


function preload() {
  data = loadJSON("js/data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
  listeMotsAvecFrequences(smsListe)
  let nbrSms = smsListe.length;
  //console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random("nombre de sms:"+ nbrSms));

  smsListe = shuffle(smsListe);

  let texte = random(smsListe.cont)
 
   console.log(texte)

   for (let i = 0; i <smsListe.length; i++) {

    let smsData = smsListe[i];
    let texte = smsData.cont;

  if(typeof texte == 'object'){
    texte = texte.__text;
   }
   

  let mois = getMois(smsData.date);

let saison;

if (mois <= 10) {
    saison = "cool";
  } else {

    aleatoire = int(random(12)) //Dés à 12 faces, réduit le nombre de messages
    saison = "dot";
if(aleatoire == 1){
      let boite2 = select('#boite2');
    let p2 = createP(texte);
    boite2.child(p2);
    p2.addClass(saison); 
}
    
  }

  let p = createP(texte);

  p.addClass(saison);  

  console.log(mois);
 
   
   }
   


}