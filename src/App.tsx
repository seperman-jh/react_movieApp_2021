import React from "react";
import PropTypes from "prop-types";

interface IState {
    count: number;
}

class App extends React.Component <{}, IState>  {

    state = {
      count : 0
    };

    add = () => {

       this.setState(current => ({count: current.count +1}));

    };

    render (){
        return (
            <div className = "State_Class">
                <h2>
                    hi111
                </h2>
                <h3>
                    count : {this.state.count}
                </h3>

                <button onClick={() => this.add()}>add</button>
                <button>minus</button>

            </div>
        );
    };




}

export default App;