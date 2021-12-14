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

calcdepenses.addEventListener("click", () => {
    calculDesDepenses()
})

let salaire = document.getElementById('salaire');
let aide = document.getElementById('aide');
let rentes = document.getElementById('rentes');
let autreRecettes = document.getElementById('autreRecettes');
let recetteTotal = document.getElementById('recettesTotal');
let calcRecette = document.getElementById('calcRecette');


function calculRecette() {
    recetteTotal.innerHTML = 'Total : '+ (Number.parseInt(salaire.value)
    + Number.parseInt(aide.value)
    + Number.parseInt(rentes.value)
    + Number.parseInt(autreRecettes.value));
}

calcRecette.addEventListener("click", () => {
    calculRecette()
})

let epargne = document.getElementById('libre');
let calcEpargne = document.getElementById('calcEpargne');
let epargneTotal = document.getElementById('epargneTotal');

function calculEpargne() {
    epargneTotal.innerHTML = 'Total : ' + (Number.parseInt(epargne.value));
}



calcEpargne.addEventListener("click", () => {
    calculEpargne()
})


let resultat = document.getElementById('resultat');
let calcResultat = document.getElementById('calcResultat');

let test

function calcTotal() {
    resultat.innerHTML = (Number.parseInt(salaire.value)
        + Number.parseInt(aide.value)
        + Number.parseInt(rentes.value)
        + Number.parseInt(autreRecettes.value)
        - Number.parseInt(depenseFixe.value)
        - Number.parseInt(loyerCharge.value)
        - Number.parseInt(credit.value)
        - Number.parseInt(eauGazElec.value)
        - Number.parseInt(telNet.value)
        - Number.parseInt(assurHabitat.value)
        - Number.parseInt(assurVehic.value)
        - Number.parseInt(mutuel.value)
        - Number.parseInt(fraisGarde.value)
        - Number.parseInt(impotRev.value)
        - Number.parseInt(impotLocaux.value)
        - Number.parseInt(depenseCourantes.value)
        - Number.parseInt(courses.value)*4
        - Number.parseInt(essence.value)*4
        - Number.parseInt(sport.value)/12
        - Number.parseInt(depenseOcas.value)
        - Number.parseInt(sortie.value)*4
        - Number.parseInt(autre.value)
        - Number.parseInt(epargne.value)
    );


}

calcResultat.addEventListener("click", () => {
    calculDesDepenses()
    calculRecette()
    calculEpargne()
    calcTotal()
    console.log(Number.parseInt(resultat.innerHTML))

    if (Number.parseInt(resultat.innerHTML) < 0) {
        document.getElementById('sad').style.display = 'initial';
        document.getElementById('happy').style.display = 'none';
    }
    if (Number.parseInt(resultat.innerHTML) > 0) {
        document.getElementById('happy').style.display = 'initial';
        document.getElementById('sad').style.display = 'none';
    }
})
