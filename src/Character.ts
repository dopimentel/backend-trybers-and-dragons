import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _arquetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    RaceDefault = Elf,
    ArchetypeDefault = Mage,

  ) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new RaceDefault(name, this._dexterity);
    this._arquetype = new ArchetypeDefault(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._arquetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get name(): string {
    return this._name;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._arquetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  private incrementMaxLifePoints(increment: number): void {
    this._maxLifePoints += increment;
    
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  private incrementAttributes(increment: number): void {
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
  }

  private restoreEnergy(): void {
    this._energy.amount = 10;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength * 2);
  }

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    this.incrementAttributes(increment);
    this.incrementMaxLifePoints(increment);
    this.restoreEnergy();
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }
}