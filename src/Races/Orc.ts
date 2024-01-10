import Race from './Race';

export default class Orc extends Race {
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Orc._maxInstances = maxInstances;
  }

  private _maxLifePoints = 74;
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}