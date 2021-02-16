import React from "react";


const A = 65 // ASCII character code

interface IState {
    justClicked : any
    letters : any
}

class Alphabet extends React.Component <{},IState> {
    constructor(props : any) {
        super(props);
        this.state = {
            justClicked: null,
            letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
        };
    }
    handleClick(letter : any) {
        this.setState({ justClicked: letter });
    }
    render() {
        return (
            <div>
                Just clicked: {this.state.justClicked}
                <ul>
                    {this.state.letters.map((letter:any) =>
                        <li key={letter} data-letter = {letter} >
                            {letter}
                            {/*<button onClick={() => this.handleClick(letter)}>click</button>*/}
                            <button onClick={this.handleClick.bind(this,letter)}>click</button>

                        </li>

                    )}
                </ul>
            </div>
        )
    }
}

export default Alphabet;