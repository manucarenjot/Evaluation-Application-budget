let depenseFixe = document.getElementById('depenseFixe');
let loyerCharge = document.getElementById('loyerCharges');
let credit = document.getElementById('credit');
let eauGazElec = document.getElementById('eauGazElec');
let telNet = document.getElementById('telNet');
let assurHabitat = document.getElementById('assurHabita');
let assurVehic = document.getElementById('assuVehic');
let mutuel = document.getElementById('mutuel');
let fraisGarde = document.getElementById('fraisGarde');
let impotRev = document.getElementById('impotRev');
let impotLocaux = document.getElementById('impotLocaux');
let depenseCourantes = document.getElementById('depenseCourantes');
let courses = document.getElementById('courses');
let essence = document.getElementById('essence');
let sport = document.getElementById('sport');
let depenseOcas = document.getElementById('depenseOcas');
let sortie = document.getElementById('sorties');
let autre = document.getElementById('autre');
let depensesTotal = document.getElementById('depensesTotal');

let calcdepenses = document.getElementById('calcDepenses');



/**
 function to add all the inputs
 */
function calculDesDepenses() {
depensesTotal.innerHTML = 'Total : ' + (Number.parseInt(depenseFixe.value) +
    Number.parseInt(loyerCharge.value)
+ Number.parseInt(credit.value)
+ Number.parseInt(eauGazElec.value)
+ Number.parseInt(telNet.value)
+ Number.parseInt(assurHabitat.value)
+ Number.parseInt(assurVehic.value)
+ Number.parseInt(mutuel.value)
+ Number.parseInt(fraisGarde.value)
+ Number.parseInt(impotRev.value)
+ Number.parseInt(impotLocaux.value)
+ Number.parseInt(depenseCourantes.value)
+ Number.parseInt(courses.value)*4
+ Number.parseInt(essence.value)*4
+ Number.parseInt(sport.value)/12
+ Number.parseInt(depenseOcas.value)
+ Number.parseInt(sortie.value)*4
+ Number.parseInt(autre.value));
    console.log(depensesTotal);
    console.log(depenseFixe);
}

calcdepenses.addEventListener("click", ()=>{
    calculDesDepenses()
})