import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  protected static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Elf._maxInstances = maxInstances;
    Elf._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}