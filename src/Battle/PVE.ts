import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  protected opponents: SimpleFighter[];
  constructor(player: SimpleFighter, opponents: SimpleFighter[]) {
    super(player);
    this.opponents = opponents;
  }

  private getAliveOpponents() {
    return this.opponents.filter((opponent) => opponent.lifePoints > 0);
  }

  private thereAreAliveOpponents() {
    return this.getAliveOpponents().length > 0;
  }

  private opponentsAttack() {
    this.getAliveOpponents().forEach((opponent) => opponent.attack(this.player));
    return super.fight();
  }

  private attackOpponents() {
    this.getAliveOpponents().forEach((opponent) => this.player.attack(opponent));
  }

  override fight() {
    while (super.fight() > 0 && this.thereAreAliveOpponents()) {
      this.attackOpponents();
      if (this.thereAreAliveOpponents()) return this.opponentsAttack();
    }
    return super.fight();
  }
}