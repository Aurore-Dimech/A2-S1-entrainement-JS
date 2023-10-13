let tueur = {
    nom: 'Jason',
    pdv: 100
}

class Caractéristiques {
    constructor(nom, personnage, mortProb, degatsProb, dmProb){
        this.nom = nom
        this.personnage = personnage
        this.mortProb = mortProb
        this.degatsProb = degatsProb
        this.dmProb = dmProb
    }
}

let survivants = [
    emo = new Caractéristiques ('tr0pd4rk', null, 0.1, 0.2, 0.7),
    theGayOne = new Caractéristiques ('Gayyyy', null, 0.7, 0.2, 0.1),
    ThePOCone = new Caractéristiques ('LeSeulPasBlancPourLesCotas', null, 0.8, 0.1, 0.1),
    plotArmor = new Caractéristiques ('IlSurvitTuSaisPasComment', null, 0.025, 0.9, 0.075),
    himbo = new Caractéristiques('IlFaitDeSonMieux', null, 0.2, 0.5, 0.3)
]

let prenoms = [
    'Ashoka',
    'Anakin',
    'Obi-Wan',
    'Padmé',
    'Qui-Gon',
    'Grievous',
    'Maul',
    'Dooku',
    'Palpatine',
    'Yoda',
    'Luke',
    'Leila',
    'Jar Jar',
    'C3P0',
    'Chewbacca',
    'Boba',
    'Grogu',
    'Jabba'
]

for (i = 0 ; i < survivants.length ; i++) {
    let randPerso = Math.floor(Math.random()*prenoms.length)
    survivants[i].personnage = prenoms[randPerso];
    prenoms.splice(randPerso, 1)
}

let morts = []

while (survivants.length != 0 && tueur.pdv > 0) {
    let persoAttaque = survivants[Math.floor(Math.random() * survivants.length)];
    console.log(`${tueur.nom} attaque ${persoAttaque.personnage}`)
    let a = Math.random();
    if (a < persoAttaque.mortProb){
        console.log(`${persoAttaque.personnage} est mort.e de peur devant ${tueur.nom}... RIP !`)
        morts.push(persoAttaque.personnage)
        survivants.splice(survivants.indexOf(persoAttaque), 1)
    } else if (a < persoAttaque.mortProb + persoAttaque.degatsProb) {
        tueur.pdv -= 10
        if (tueur.pdv > 0){
            console.log(`${persoAttaque.personnage} marave ${tueur.nom} ! Ce dernier perd 10pv. Il lui reste donc ${tueur.pdv}pv`)
        } else {
            console.log(`${tueur.nom} se prend un finish de la part de ${persoAttaque.personnage} et est donc DCD :O`)
        }
    } else {
        tueur.pdv -= 15
        if (tueur.pdv > 0){
            console.log(`${persoAttaque.personnage} se donne corps et âme pour donner un uppercut à ${tueur.nom}... GG (${tueur.nom} -15pv ; ses pv sont à ${tueur.pdv}) mais RIP ${persoAttaque.personnage}`)
        } else {
            console.log(`Et c'est un double KO ! ${tueur.nom} est mort, mais à quel prix... RIP ${persoAttaque.personnage} !`)
        }
        morts.push(persoAttaque.personnage)
        survivants.splice(survivants.indexOf(persoAttaque), 1)
    }
}

if (survivants.length == 0) {
    console.log(`${tueur.nom} a tué tout le monde :( 
sniff ${morts}`)
} else {
    console.log(`Les survivants ont gagné, mais RIP à ${morts} `)
}



// while (prenoms.length > 5){
//     prenoms.splice([Math.floor(Math.random()*prenoms.length)], 1);
// }

// Object.keys(prenoms).forEach(key => {
//     prenoms[key] = archetypes[Math.floor(Math.random()*archetypes.length)]
// })