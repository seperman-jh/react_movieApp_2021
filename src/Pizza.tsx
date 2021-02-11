import React from "react"




function Pizza( {topping_name, topping_image } :any   /*props : any */){ //인자에서 원하는 키를 선언하고 싶으면 {props.keyname}을 입력

    return(
        <div className="Topping">
            <h2>Pizza - Topping :  {topping_name}   </h2>
            <img style={{width:"20%"}} src={topping_image} />

            {/*<h2>Pizza - Topping {props.topping}</h2>*/}
        </div>
    );

}

export default Pizza;