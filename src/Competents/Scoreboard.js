import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";
import AddPlayer from './AddPlayer'

export default class Scoreboard extends Component {
 

      state = {
        players: [
          { id: 1, name: "Erdal", score: 2 },
          { id: 2, name: "Filiz", score: 5 },
          { id: 3, name: "İrfan",  score: 4 },
        ]
      }
      
      addPlayer = (name) => {
        const player = {
          id: Math.round(Math.random()*100000),
          name,
          score: 0
        }
        this.setState({
          players: this.state.players.concat(player)
        })
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
            <AddPlayer addPlayer={this.addPlayer} />    </div>
  }
}



