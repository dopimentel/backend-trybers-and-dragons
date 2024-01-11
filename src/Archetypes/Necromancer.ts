import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  protected static _createdArchetypeInstances = 0;
  private type_: EnergyType;
  constructor(name: string, maxInstances = Infinity) {
    super(name);
    Necromancer._maxInstances = maxInstances;
    Necromancer._createdArchetypeInstances += 1;
    this.type_ = 'mana';
  }

  public get energyType(): EnergyType {
    return this.type_;
  }
}