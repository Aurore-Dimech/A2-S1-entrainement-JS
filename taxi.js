let personnage = {
    name: 'John',
    santeMentale: 10
}

let musiques = [
    "Anissa de Wejdene",
    "The Sun The Moon The Stars de Aether Realm",
    "The Dancer and The Moon de Blackmore's Night",
    "Into The Unknown de The Blasting Company",
    "L'empire du côté obscure de IAM"
]

let trajet = {
    radio : musiques[Math.floor(Math.random()*musiques.length)],
    feuxRouges : 30,
    changement : 0
}

while(trajet.feuxRouges > 0 && personnage.santeMentale > 0){
        if(trajet.radio != musiques[0]){
            console.log(`La musiques jouée actuellement est ${trajet.radio} ! 
Il reste ${trajet.feuxRouges} feux avant d'arriver.`)
            trajet.feuxRouges-- ;
            trajet.radio = musiques[Math.floor(Math.random()*musiques.length)]
        } else {
            console.log(`La musiques jouée actuellement est ${trajet.radio} ! 
Il reste ${trajet.feuxRouges} feux avant d'arriver.`)
            personnage.santeMentale--
            trajet.changement++
            trajet.feuxRouges--
            trajet.radio = musiques[Math.floor(Math.random()*musiques.length)]
        }
}

if(personnage.santeMentale <= 0){
    console.log('explosion')
}

if(trajet.feuxRouges == 0){
    console.log(`John est bien arrivé à destination ! Cela lui aura demandé de changer de taxi ${trajet.changement} fois.`)
}