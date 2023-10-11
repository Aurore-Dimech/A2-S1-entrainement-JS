class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return (Math.random() < this.luck);
    }
    
    attackPokemon(pokemon) {
        let degatsRecus = this.attack - pokemon.defense
        pokemon.hp -= degatsRecus
        console.log(`Dégats reçus par ${pokemon.name}: ${degatsRecus} ; Vie restante : ${pokemon.hp}`)
    }
}

let hoOh = new Pokemon('Ho-Oh', 100, 70, 106, 0.5)
let raikou = new Pokemon('Raikou', 85, 75, 90, 0.5)

while(hoOh.hp > 0 && raikou.hp > 0){
    if(hoOh.isLucky()) {
        hoOh.attackPokemon(raikou)
        if (raikou.hp < 0)
        {
            console.log(`${raikou.name} est mort !`)
            break;
        }
    } else {
        console.log(`${raikou.name} a eu de la chance !`)
    }

    if(raikou.isLucky()) {
        raikou.attackPokemon(hoOh)
        if (hoOh.hp < 0)
        {
            console.log(`${hoOh.name} est mort !`)
            break;
        }
    } else {
        console.log(`${hoOh.name} a eu de la chance !`)
    }

    
}

