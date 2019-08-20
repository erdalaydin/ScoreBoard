import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";

export default class Scoreboard extends Component {
 

      state = {
        players: [
          { id: 1, name: "Erdal", score: 2 },
          { id: 2, name: "Filiz", score: 5 },
          { id: 3, name: "İrfan",  score: 4 },
        ]
      }
      


  incrementScoreOfPlayer = id => {
    this.setState({
      players: this.state.players.map(player => (
        player.id === id
          ? { ...player, score: player.score + 1 }
          : player
      ))
    });
  }

  decrementScoreOfPlayer = id => {
    this.setState({
      players: this.state.players.map(player => (
        player.id === id
          ? { ...player, score: player.score - 1 }
          : player
      ))
    });
  }
render() {
    

    return <div className="scoreboard">
    <h1>Scoreboard</h1>
    <ul>
    {
            [ ...this.state.players ]
                .sort((a,b )=> a.score - b.score)
                .map(player => (
                <Player {...player} key={player.id} incrementScore={this.incrementScoreOfPlayer} decrementScore={this.decrementScoreOfPlayer}/>
                ))
            }</ul>
    </div>
  }
}



