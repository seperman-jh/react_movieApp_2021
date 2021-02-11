import React from "react"
import PropTypes from "prop-types"





function Pizza( {topping_name, topping_image, topping_rating } :any   /*props : any */){ //인자에서 원하는 키를 선언하고 싶으면 {props.keyname}을 입력

    return(
        <div className="Topping">
            <h2>Pizza - Topping :  {topping_name}   </h2>
            <h4>{topping_rating} / 5.0   </h4>
            <img style={{width:"20%"}} src={topping_image} alt={topping_name} />
            {/*<h2>Pizza - Topping {props.topping}</h2>*/}
        </div>
    );

}


Pizza.propTypes = { /* 컴포넌트 property validation, property가 제대로 넘어왔는지 확인 작업. value 누락도 확인 가능 */
    topping_name    : PropTypes.string.isRequired,
    topping_image   : PropTypes.string.isRequired,
    topping_rating  : PropTypes.number.isRequired
}

    /* 샘플

    https://reactjs.org/docs/typechecking-with-proptypes.html
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    optionalObjectWithShape: PropTypes.shape({
       color: PropTypes.string,
       fontSize: PropTypes.number
    }),

    */


export default Pizza;