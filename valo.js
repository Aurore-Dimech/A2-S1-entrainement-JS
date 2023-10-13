const personnage = [
    {nom: 'Omen', capacite: 'smoker'},
    {nom: 'Jett', capacite: 'killer'},
    {nom: 'Phoenix', capacite: 'flasher'},
    {nom: 'Fade', capacite: null},
    {nom: 'Chamber', capacite: null}
]

// let attaquants = []
// let defenseurs = []
// let attaquantsEnVie = []
// let defenseursEnVie = []


// for (i= 0; i < personnage.length; i++){
//     attaquants.push(personnage[i])
//     defenseurs.push(personnage[i])
// }
// console.log(attaquants, defenseurs)


let manche = 0; //compter les manches pour les arrêter à la 13ème

function plantSpike(proba){
    return (Math.random()*100 < proba)
} // formule pour def la plant du spike


// for (i = 0; i < personnage.length; i++){
//     console.log(i)
//     attaquantsEnVie.push(personnage[i])
//     defenseursEnVie.push(personnage[i])
//     }
//     console.log(attaquantsEnVie, defenseursEnVie)

let mancheDef = 0
let mancheAtt = 0

while(mancheDef < 13 || mancheAtt < 13){
    manche++
    console.log(`Début de la manche ${manche}`)

    attaquants = []
    defenseurs = []

    for (i = 0; i < personnage.length ; i++){
        attaquants.push(personnage[i])
        defenseurs.push(personnage[i])
    }

    // Array.prototype.push.apply(attaquantsEnVie, attaquants);
    // reset les attaquants et les défenseurs à chaque manche
    // Array.prototype.push.apply(defenseursEnVie, defenseurs);



    selectEquipe = Math.random()
    selectAttaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
    selectDefenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

    if(selectEquipe > 0.5){
        console.log(`${selectAttaquant.nom} des attaquants tue ${selectDefenseur.nom} des défenseurs`)
        defenseurs.splice(defenseurs.indexOf(selectDefenseur), 1)
    } else {
        console.log(`${selectDefenseur.nom} des défenseurs tue ${selectAttaquant.nom} des attaquants`)
        attaquants.splice(attaquants.indexOf(selectAttaquant), 1)
    }

    let spikePlanted = null
    if (attaquants.length < 5){
        spikePlanted = plantSpike(40)
    } else {
        spikePlanted = plantSpike(60)
    }

    if (spikePlanted) {
        console.log("La spike n'est pas plantée")
    } else {console.log("La spike est plantée")}

    while (attaquants.length > 0 && defenseurs.length > 0){
        selectAttaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
        selectDefenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]
        gagnant = Math.random()*100
        
        if (spikePlanted) {
            if (gagnant <= 70) {
                console.log(`${selectAttaquant.nom} des attaquants tue ${selectDefenseur.nom} des défenseurs`)
                defenseurs.splice(defenseurs.indexOf(selectDefenseur), 1)
            } else {
                console.log(`${selectDefenseur.nom} des défenseurs tue ${selectAttaquant.nom} des attaquants`)
                attaquants.splice(attaquants.indexOf(selectAttaquant), 1)
            }
        } else {
            if (gagnant <= 50){
                console.log(`${selectAttaquant.nom} des attaquants tue ${selectDefenseur.nom} des défenseurs`)
                defenseurs.splice(defenseurs.indexOf(selectDefenseur), 1)
            } else {
                console.log(`${selectDefenseur.nom} des défenseurs tue ${selectAttaquant.nom} des attaquants`)
                attaquants.splice(attaquants.indexOf(selectAttaquant), 1)
            }
        }
    }

    if (attaquants.length == 0){
        mancheDef++
        console.log(`Les défenseurs gagnent cette manche ! Ils en ont donc pour l'instant gagné ${mancheDef}
Attaquants : ${mancheAtt} manches gagnées ; Défenseurs : ${mancheDef} manches gagnées`)
        if (mancheDef >= 13) {break}
    } else {
        mancheAtt++
        console.log(`Les attanquant gagnent cette manche !
Attaquants : ${mancheAtt} manches gagnées ; Défenseurs : ${mancheDef} manches gagnées`)
        if (mancheAtt >= 13) {break}
    }
}
