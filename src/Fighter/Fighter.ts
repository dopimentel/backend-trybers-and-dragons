import Energy from '../Energy';

export interface BasicFighter {
  lifePoints: number;
  strength: number;
}
export interface Attacker<T> {
  attack(enemy: T): void;
  special?(enemy: T): void;
}

export interface Damageable {
  receiveDamage(attackPoints: number): number;
}

export interface SimpleFighter extends BasicFighter, Attacker<SimpleFighter>, Damageable { }

export interface Levelable {
  levelUp(): void;
}
export interface Defenseble extends BasicFighter {
  defense: number;
  energy?: Energy;

}

export default interface Fighter extends SimpleFighter, Defenseble, Levelable {}
