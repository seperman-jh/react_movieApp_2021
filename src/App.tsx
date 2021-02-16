import React from "react";
import PropTypes from "prop-types";

interface Istate {
    count: number;
    isLoading :boolean;
    book:boolean;
}

class App extends React.Component <{}, Istate>  {

    constructor(props : any) {
        super(props);
        console.log("Mount Start");

        this.state = {
            count : 0,
            isLoading : true,
            book : false
        }

        this.remove = this.remove.bind(this);

    }


    add = () => { {/* 축약형, arrow 함수일경우, binding 개념이 포함되있음 (ES6 이상부터) */}

       this.setState(current => ({count: current.count +1}));

    };

    remove() { {/* 기본, 함수형태로 사용할경우 constructor에서 bind 해줘야함 -- 18번째줄  https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined*/}

        this.setState(current => ({count: current.count - 1}));

        // this.setState({count: this.state.count - 1}); 되긴하는데, state에 직접 접근해서 사용하지말고, current를 사용할것

    };

    componentDidMount() {
        console.log("Component Rendered!");

        setTimeout (() => {this.setState(current => ({isLoading : true, book : true}))}, 6000)
        //setTimeout (() => {this.setState({isLoading : false})}, 3000) // setState는 interface 안에 값만 사용할수 있도록 정의되있음

        //setTimeout (() => {this.state.isLoading = false}, 3000)

    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<Istate>, snapshot?: any) {

        console.log(prevState);
        console.log("Component updated!!");
    }

    componentWillUnmount() {

        console.log("Mount Killed!");
    }




    render (){

        console.log("Rendering....");

        const isLoading = this.state.isLoading;


        return (
            <div className = "State_Class">
                <h2>
                    hi111
                </h2>
                <h3>
                    count : {this.state.count}
                </h3>


                <button onClick={this.add}>add</button> {/* 함수를 사용하면, 새로운 함수 생성하기때문에 성능 영향줄수 있다. 콜백이 필요할경우는 함수처리  */}
                <button onClick={this.remove}>minus</button>


                <h3>
                    Current Loading : {isLoading ? "true" : "false"}
                </h3>


            </div>
        );
    };




}

export default App;