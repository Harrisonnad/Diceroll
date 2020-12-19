import React, { Component } from 'react'

export default class Die extends Component {
    static defaultProps = {
        dice =[
            { id: 1, side: 'fas fa-dice-one' },
            { id: 2, side: 'fas fa-dice-two' },
            { id: 3, side: 'fas fa-dice-three' },
            { id: 4, side: 'fas fa-dice-four' },
            { id: 5, side: 'fas fa-dice-five' },
            { id: 6, side: 'fas fa-dice-six' },
        ]
    }
    constructor(props) {
        super(props)
    
        this.state = {
             number: 6,
        }
    }
    rollDice() {
        let rand = Math.floor(Math.random * this.number);


    }
    render() {
        return (
            <div>
                <i class={dice.}></i>
            </div>
        )
    }
}
