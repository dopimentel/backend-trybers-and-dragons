import Race from './Race';

export default class Halfling extends Race {
  constructor(name: string, dexterity: number, maxInstances = Infinity) {
    super(name, dexterity);
    Halfling._maxInstances = maxInstances;
  }

  private _maxLifePoints = 60;
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

const half = new Halfling('Bilbo', 10);
console.log(Halfling.createdRacesInstances()); // 1