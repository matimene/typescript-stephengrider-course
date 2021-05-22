import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let playedGames = 0;

    for (let match of matches) {
      if (match[1] === "Man United" || match[2] === "Man United") {
        playedGames++;
      }
    }

    return `Team ${this.team} played ${playedGames} games`;
  }
}
