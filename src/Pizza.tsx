import React from "react"
import {stringify} from "querystring";


function Pizza( {topping} :any   /*props : any {}*/){



    return(
        <div className="Topping">
            <h2>Pizza - Topping :  {topping}</h2>
            {/*<h2>Pizza - Topping {props.topping}</h2>*/}
        </div>
    );


}

export default Pizza;