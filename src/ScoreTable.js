import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    const getTotalScore = () => {
      let totalScore = 0
      for (let key in scores) {
        if (scores[key]) totalScore += scores[key]
      }
      return totalScore
    }

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={evt => doScore("ones", ones.evalRoll)}
                description={ones.description} />
              <RuleRow
                name="Twos"
                score={scores.twos}
                doScore={evt => doScore("twos", twos.evalRoll)}
                description={twos.description} />
              <RuleRow
                name="Threes"
                score={scores.threes}
                doScore={evt => doScore("threes", threes.evalRoll)}
                description={threes.description} />
              <RuleRow
                name="Fours"
                score={scores.fours}
                doScore={evt => doScore("fours", fours.evalRoll)}
                description={fours.description} />
              <RuleRow
                name="Fives"
                score={scores.fives}
                doScore={evt => doScore("fives", fives.evalRoll)}
                description={fives.description} />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                doScore={evt => doScore("sixes", sixes.evalRoll)}
                description={sixes.description} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={threeOfKind.description}
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow description={fourOfKind.description}
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow description={fullHouse.description}
                name="Full House"
                score={scores.fullHouse}
                doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow description={smallStraight.description}
                name="Small Straight"
                score={scores.smallStraight}
                doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow description={largeStraight.description}
                name="Large Straight"
                score={scores.largeStraight}
                doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow description={yahtzee.description}
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow description={chance.description}
                name="Chance"
                score={scores.chance}
                doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;