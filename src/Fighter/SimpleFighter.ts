import { Attacker, BasicFighter, Damageable } from './Fighter';

export default interface SimpleFighter extends BasicFighter, Attacker<SimpleFighter>, Damageable { }