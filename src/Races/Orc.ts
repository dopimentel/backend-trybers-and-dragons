import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Orc._maxInstances = maxInstances;
    Orc._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}