import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  protected static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Halfling._maxInstances = maxInstances;
    Halfling._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}