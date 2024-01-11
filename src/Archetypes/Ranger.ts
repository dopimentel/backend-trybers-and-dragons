import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private type_: EnergyType;
  constructor(name: string, maxInstances = Infinity) {
    super(name);
    Ranger._maxInstances = maxInstances;
    Ranger._createdArchetypeInstances += 1;
    this.type_ = 'stamina';
  }

  public get energyType(): EnergyType {
    return this.type_;
  }

  public static override createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}