import React, {Component} from 'react';

class Combat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlayer : undefined,
            selectedTarget : undefined,
            isPlayerSelected: false,
            playerSquad : this.props.playerSquad,
            opponentSquad: [
                this.props.playerFactory("Lorena Zuniga", 400, 10, 4),
                this.props.playerFactory("Alexandra Sage", 600, 40, 5),
            ],
        }

        this.handlePlayerClick = this.handlePlayerClick.bind(this);
    }

    handlePlayerClick = (clicked_id) => {
        this.setState({isPlayerSelected : !this.state.isPlayerSelected});
        console.log(clicked_id);
        if(clicked_id === this.state.selectedPlayer) {
            this.setState({selectedPlayer : undefined});
            return;
        }
        this.setState({selectedPlayer : clicked_id});
    }

    opponentTakeDamage = (clicked_id) => {
        this.setState({selectedTarget : clicked_id});
        console.log(this.state.opponentSquad[clicked_id]);
    }

    render(){

        let selectedStyles = {
            backgroundColor: 'yellow',
        }
        return(
            <div className="main-game">
            <div className="player-squad">
            {
                this.state.playerSquad.map((member,i) => {
                    return (
                    <li key={"player" + member.id}  style = {this.state.selectedPlayer === member.id ? selectedStyles : {border:'solid 1px'}} onClick={() => this.handlePlayerClick(member.id)}>
                    <h2>{member.name}</h2>
                    <h3>{member.hp} / {member.maxHealth}</h3>
                    </li>
                    )
                })
            }
            </div>
            <div className="opponent-squad">
                {
                    this.state.opponentSquad.map((member, i) => {
                        return (
                            <li key={"opponent" + member.id} onClick={this.state.isPlayerSelected ? () => this.opponentTakeDamage(member.id) : undefined}>
                                <h2>{member.name}</h2>
                                <h3>{member.hp} / {member.maxHealth}</h3>
                            </li>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}

export default Combat;