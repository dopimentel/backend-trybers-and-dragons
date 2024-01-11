import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdArchetypeInstances = 0;
  private type_: EnergyType;
  constructor(name: string, maxInstances = Infinity) {
    super(name);
    Mage._maxInstances = maxInstances;
    Mage._createdArchetypeInstances += 1;
    this.type_ = 'mana';
  }

  public get energyType(): EnergyType {
    return this.type_;
  }

  public static override createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}