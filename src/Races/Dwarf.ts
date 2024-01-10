import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Dwarf._maxInstances = maxInstances;
    Dwarf._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}