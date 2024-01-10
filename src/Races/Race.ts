export default abstract class Race {
  private static _createdRacesInstances = 0;
  private static _maxInstances = 0;
  private _name: string;
  private _dexterity: number;
  private _maxLifePoints = 0;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._createdRacesInstances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    if (Race._maxInstances === 0) throw new Error('Not implemented');
    return Race._createdRacesInstances;
  }

  abstract get maxLifePoints(): number;
}