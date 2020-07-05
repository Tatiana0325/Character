export class Character {
    constructor(name, type, attack, defence) {
        try {
            if ((name.length >= 2) && (name.length <= 10)) {
                this.name = name;
            }
        } catch(err) {
            throw new Error('длина строки должна находтися в диапазоне от 2 до 10 символов')
        };

        try{
            if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) != -1) {
                this.type = type;
            }
        } catch{
            throw new Error('Такого типа нет')
        };

        this.health = 100;

        this.level = 1;

        this.attack = attack;

        this.defence = defence;
    }
}