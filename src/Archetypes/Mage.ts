import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  protected static _createdArchetypeInstances = 0;
  private type_: EnergyType;
  constructor(name: string, maxInstances = Infinity) {
    super(name);
    Mage._createdArchetypeInstances += 1;
    Mage._maxInstances = maxInstances;
    this.type_ = 'mana';
  }

  public get energyType(): EnergyType {
    return this.type_;
  }
}