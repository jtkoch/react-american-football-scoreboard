//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  console.log(score);
  console.log(setScore);
  console.log(useState);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Bears</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score}</div>
          </div>
            <div className="app">
                <div className="timer">{seconds}</div>
                <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                  {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                  Reset
                </button>
              </div>
            </div>
          <div className="away">
            <h2 className="away__name">Broncos</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick ={() => 
            setScore (score + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick ={() => 
            setScore(score + 3)}>Home Field Goal</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick ={() => 
            setAwayScore (awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick ={() => 
            setAwayScore (awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;