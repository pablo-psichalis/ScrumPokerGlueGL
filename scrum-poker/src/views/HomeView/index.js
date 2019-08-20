import React from 'react';
import './style.css';

class HomeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }
    }

    onValueChange = (e) => {
        let value = e.target.value;
        this.setState({ inputValue: value });
    }

    render() {
        const { inputValue } = this.state;

        return (
            <div className="container">
                <div className="item">
                    <p>Cómo te llamas?</p>
                </div>
                <div className="item">
                    <input
                        onChange={this.onValueChange}
                        value={inputValue}
                    />
                </div>
            </div>
        )
    }

}

export default HomeView;