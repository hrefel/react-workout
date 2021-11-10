import React from 'react';
import cardStyle from './card.css'

class Card extends React.Component {
    constructor() {
        super();
        this.state ={
            title: "BELAJAR",
            subTitle: "HAHAHAHA"
        }
    }
    
    render() {
        return (
            <div class="card">
                <div class="card-header">{this.state.title}</div>
                <div class="card-body"></div>
            </div>
        )
    }
}

export default Card;