import React from "react";
import PropTypes from "prop-types";

interface Istate {
    count: number;
}

class App extends React.Component <{}, Istate>  {


    state = {
      count : 0
    };

    add = () => {

       this.setState(current => ({count: current.count +1}));

    };

    remove = () => {

        this.setState(current => ({count: current.count - 1}));

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

                <button onClick={this.add}>add</button> {/* 함수를 사용하면, 새로운 함수 생성하기때문에 성능 영향줄수 있다. 콜백이 필요할경우는 함수처리  */}
                <button>minus</button>

            </div>
        );
    };




}

export default App;