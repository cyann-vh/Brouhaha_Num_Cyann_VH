let data;
let taille = ['gothic', 'bold']


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