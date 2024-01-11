import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected opponent: SimpleFighter;
  constructor(player: SimpleFighter, opponent: SimpleFighter) {
    super(player);
    this.opponent = opponent;
  }

  override fight() {
    while (super.fight() > 0 && this.opponent.lifePoints > 0) {
      this.player.attack(this.opponent);
      if (this.opponent.lifePoints > 0) {
        this.opponent.attack(this.player);
      }
    }

    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}