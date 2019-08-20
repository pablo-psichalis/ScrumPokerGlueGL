import React from 'react';
import './style.css';

class VotingView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <p className="item">Elige tu puntuación:</p>

                <button type="button" className="points-button" value="1">1</button>
                <button type="button" className="points-button" value="2">2</button>
                <button type="button" className="points-button" value="3">3</button>

                <button type="button" className="points-button" value="5">5</button>
                <button type="button" className="points-button" value="8">8</button>
                <button type="button" className="points-button" value="13">13</button>

                <button type="button" className="points-button" value="20">20</button>
                <button type="button" className="points-button" value="40">40</button>
                <button type="button" className="points-button" value="100">100</button>

                <button type="button" className="points-button" value="?">?</button>

            </div>
        );
    }
}

export default VotingView;