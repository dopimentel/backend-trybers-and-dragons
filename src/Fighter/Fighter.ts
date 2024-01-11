import Energy from '../Energy';

export interface BasicFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export interface Attacker {
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
}

export interface Levelable {
  levelUp(): void;
}

export interface Damageable {
  receiveDamage(attackPoints: number): number;
}

export default interface Fighter extends BasicFighter, Attacker, 
  Levelable, Damageable {}
