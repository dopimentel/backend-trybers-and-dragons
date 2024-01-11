import Energy from '../Energy';

export interface BasicFighter {
  lifePoints: number;
  strength: number;
}
export interface Defenseble extends BasicFighter {
  defense: number;
  energy?: Energy;

}
export interface Attacker<T> {
  attack(enemy: T): void;
  special?(enemy: T): void;
}

export interface Levelable {
  levelUp(): void;
}

export interface Damageable {
  receiveDamage(attackPoints: number): number;
}

export default interface Fighter extends Defenseble, Attacker<Fighter>, 
  Levelable, Damageable {}
