import { EnergyType } from '../Energy';

export default abstract class Archetype {
  protected static _createdArchetypeInstances = 0;
  protected static _maxInstances = 0;
  protected _name: string;
  protected _special: number;
  protected _cost: number;
  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype._createdArchetypeInstances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    if (this._maxInstances === 0) throw new Error('Not implemented');
    return this._createdArchetypeInstances;
  }

  public abstract get energyType(): EnergyType;
}
