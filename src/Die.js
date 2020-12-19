import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 6,
        }
    }

    render() {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'animate'}`}></i>
            </div>
        )
    }
}
