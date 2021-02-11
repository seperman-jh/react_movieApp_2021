import React from "react"




function Topping( props : any ){ //인자에서 원하는 키를 선언하고 싶으면 {props.keyname}을 입력

    console.log(props);


    return(
        <div className="Topping_item">
            <h2>Topping - Item :  {props.topping_item_list.name}</h2>
            {/*<h2>Pizza - Topping {props.topping}</h2>*/}
        </div>
    );


}






export default Topping;