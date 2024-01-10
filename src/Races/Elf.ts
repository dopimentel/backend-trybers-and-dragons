import Race from './Race';

export default class Elf extends Race {
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Elf._maxInstances = maxInstances;
  }

  private _maxLifePoints = 99;
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

// const elf1 = new Elf('Legolas', 10);
// const elf2 = new Elf('Elrond', 10);
// console.log(Elf.createdRacesInstances()); // 2
