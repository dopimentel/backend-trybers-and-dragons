import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  protected static _createdArchetypeInstances = 0;
  private type_: EnergyType;
  constructor(name: string, maxInstances = Infinity) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    Warrior._maxInstances = maxInstances;
    this.type_ = 'stamina';
  }

  public get energyType(): EnergyType {
    return this.type_;
  }
}