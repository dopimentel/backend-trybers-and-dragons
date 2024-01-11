export default abstract class Race {
  protected static _createdRacesInstances = 0;
  protected static _maxInstances = 0;
  private _name: string;
  private _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    if (this._maxInstances === 0) {
      throw new Error('Not implemented');
    }
    return this._createdRacesInstances; 
  }

  abstract get maxLifePoints(): number;
}