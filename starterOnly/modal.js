function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// mon code-------------------------------------------------


//fermeture modal via la croix
function closeModal(){
  modalbg.style.display = "none";
}
document.getElementById("close-form").addEventListener("click", closeModal);

// vérification du champ prénom au moins 2 caractères et pas vide
//création d'un nouvel élément pour message de retour
    let firstname = "";
let newElement = document.createElement("p");
document.getElementById("datafirst").appendChild(newElement);
newElement.setAttribute("id","messageFirstName");
function verifFirstName (e){
    firstname = e.target.value;
   if (firstname.length >= 2 && firstname.trim() != "") {
      newElement.style.display="none";
       }else{
        newElement.style.display="block";
        newElement.style.color="red";
  newElement.textContent="vérifier le champ prénom";
    return false;
     }
     
    }
document.getElementById("first").addEventListener("input", verifFirstName);

    // vérification du nom de famille au moins 2 caractères et pas vide
let lastname = "";
      // création message de retour 
let newElementBis = document.createElement("p");
document.getElementById("datalast").appendChild(newElementBis);
newElementBis.setAttribute("id","messageLastName");
function verifLastName (e){
  lastname = e.target.value;
  if (lastname.length >= 2 && lastname.trim() != "") {
    newElementBis.style.display="none";
        }else{
  newElementBis.style.display="block";
  newElementBis.textContent="Minimum 2 caractères pour le champ du nom";
  
  return false;
    }
  }
document.getElementById("last").addEventListener("input", verifLastName);

  // vérification adresse mail si valide
  let mail = "";
    // création message de retour si erreur
    let newElementMail = document.createElement("p");
document.getElementById("dataemail").appendChild(newElementMail);
newElementMail.setAttribute("id","messageMail");
  function verifMail (e){
  mail = e.target.value;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(regex)){
    newElementMail.style.display="none";
      }else{
newElementMail.style.display="block";
  newElementMail.textContent="Veuillez vérifier le champ mail";
    return false;
      }
  }
    document.getElementById("email").addEventListener("input", verifMail);

    // on récupère la date d'anniversaire 
    let anniv = "";
    let birthD = document.getElementById("birthdate");
    let newElementAnniv = document.createElement("p");
        document.getElementById("databirth").appendChild(newElementAnniv);
        newElementAnniv.setAttribute("id","messageAnniv");
    function getAnniv(e){
    anniv =  e.target.value;
      const regexDeux = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
                if(anniv.match(regexDeux)){
     newElementAnniv.style.display="none";
             }else{
           newElementAnniv.style.display="block";
           newElementAnniv.textContent="Veuillez vérifier le champ date de naissance";
            return false;
         }     

}
birthD.addEventListener("input", getAnniv);
      
 
    // vérification nombre de concours, une valeur numérique est saisie
let nbccrs = 0;
function verifCcrs (e){
  nbccrs = e.target.value;
      if(isNaN(nbccrs)){
      return false;
  }else{
    
  }
}
document.getElementById("quantity").addEventListener("input", verifCcrs);

//un champ radio est sélectionné, on récupère la valeur
let valeur;
function getradio(){
  const radios = document.getElementsByName('location');
  for(let i = 0; i < radios.length; i++){
   radios[i].addEventListener("click", function (){
   valeur = radios[i].value;
     return valeur;
      })
            }
     }
getradio(); 

   //case conditions générales est cochée, l'autre case est facultative
    let cg = document.getElementById("checkbox1");
    let valcg = true;
    //création message retour
    let newElementCg = document.createElement("p");
    document.getElementById("datacg").appendChild(newElementCg);
    newElementCg.setAttribute("id","messageCg");
    function verifCg (e){
            valcg = e.target.checked;
    if (valcg == false) {
      
      newElementCg.style.display="block";
        newElementCg.textContent="Vous devez vérifier que vous acceptez les termes et conditions";
  
    }else{
      
      document.getElementById("messageCg").style.display="none";
    }
   }
    cg.addEventListener("input", verifCg);
   
    
//envoi du formulaire
//création d'un élément pour les messages d'erreur
const valForm = document.createElement("p");
document.getElementById("formulaire").appendChild(valForm);
valForm.setAttribute("id","messagevalForm");

function validate(){
    //vérification champ conditions générales
if(valcg == false){
newElementCg.style.display="none";
valForm.style.color="red";
valForm.innerHTML="vérifier conditions générales";
document.getElementById("datacg").style.border="2px solid red";
return false;
    }

  //verification champ prénom
  if (firstname.length >= 2 && firstname.trim() != "") {
  }else{
  valForm.style.color="red";
  valForm.innerHTML="vérifier champ prénom";
  document.getElementById("first").style.border="2px solid red";
 return false;
 }

 //vérification champ nom
 if (lastname.length >= 2 && lastname.trim() != "") {
 }else{
 valForm.style.color="red";
 valForm.innerHTML="vérifier champ nom";
 document.getElementById("last").style.border="2px solid red";
 return false;
 }
//vérification champ mail rempli
  if (mail == "") {
  valForm.style.color="red";
  valForm.innerHTML="vérifier champ mail";
  document.getElementById("email").style.border="2px solid red";
  return false;
  }

 // verification date d'anniversaire
  if(anniv==""){ 
    valForm.style.color="red";
   valForm.innerHTML="vérifier champ date de naissance";
   document.getElementById("databirth").style.border="2px solid red";
   return false;
  }
 //vérification champ concours
  if(nbccrs == " "){
  valForm.style.color="red";
  valForm.innerHTML="vérifier champ concours";
 document.getElementById("quantity").style.border="2px solid red";
  return false;
  }
     //verification champ participation tournoi
  if (valeur == undefined) {
    valForm.style.color="red";
   valForm.innerHTML="vérifier champ tournoi";
   document.getElementById("radiodata").style.border="2px solid red";
    return false;
  }
        // message de confirmation envoi 
     
 modalbg.style.background="black";
 modalbg.style.color="white";
 modalbg.style.fontSize="40px";
 modalbg.innerHTML='Merci, votre reservation a été retenue. <a href="index.html" title="fermer"> fermer </a>';
 modalbg.style.textAlign="center";
 modalbg.style.paddingTop="150px";


  }

 


      
       
  
  
    
  
  


