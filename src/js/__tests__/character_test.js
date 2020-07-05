import {Character} from '../character';

//Прверка имени
test('Имя = ""', () => {
    expect(() => {
        new Character('', 'Bowman', 10, 10);
    }).toThrow();
})

test('Имя состоит из одной буквы', () => {
    expect(() => {
        new Character('a', 'Bowman', 10, 10);
    }).toThrow();
})

test('Имя состоит из 2х букв', () => {
    expect(new Character('an', 'Bowman', 10, 10)).toHaveProperty('name', 'an');
})

test('Имя состоит больше 2х букв', () => {
    expect(new Character('anna', 'Bowman', 10, 10)).toHaveProperty('name', 'anna');
})

test('Имя состоит из 10 букв', () => {
    expect(new Character('annaBanana', 'Bowman', 10, 10)).toHaveProperty('name', 'annaBanana');
})

test('Имя состоит больше 10 букв', () => {
    expect(() => {
        new Character('anna Banana Bahana', 'Bowman', 10, 10);
    }).toThrow();
})

//Проверка типа
test('Тип не соответсвует массиву типов', () => {
    expect(() => {
        new Character('name', 'Abvgdyka', 10, 10);
    }).toThrow();
})

test('Тип = Bowman', () => {
    expect(new Character('name', 'Bowman', 10, 10)).toHaveProperty('type', 'Bowman');
})

test('Тип = Daemon', () => {
    expect(new Character('name', 'Daemon', 10, 10)).toHaveProperty('type', 'Daemon');
})

test('Тип = Magician', () => {
    expect(new Character('name', 'Magician', 10, 10)).toHaveProperty('type', 'Magician');
})

test('Тип = Swordsman', () => {
    expect(new Character('name', 'Swordsman', 10, 10)).toHaveProperty('type', 'Swordsman');
})

test('Тип = Undead', () => {
    expect(new Character('name', 'Undead', 10, 10)).toHaveProperty('type', 'Undead');
})

test('Тип = Zombie', () => {
    expect(new Character('name', 'Zombie', 10, 10)).toHaveProperty('type', 'Zombie');
})

