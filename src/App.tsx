import React from 'react';
import Pizza from "./Pizza";
import Topping from "./Topping";



const topping_array = [
    {
        "name":"Pepperoni",
        "image_url":"https://i.imgur.com/NL5AYgd.jpg"
    },
    {
        "name":"Sausage",
        "image_url":"https://i.imgur.com/plDv6xA.jpg"
    },
    {
        "name":"Bacon",
        "image_url":"https://i.imgur.com/YqRM6BQ.jpg"
    },
    {
        "name":"Mushrooms",
        "image_url":"https://i.imgur.com/SUBhUFu.jpg"
    },
    {
        "name":"Cheese",
        "image_url":"https://i.imgur.com/IdcUzRq.jpg"
    }];


function App() {
  return (
    <div className="App">
        <div>hello11</div>
        <div className="Pizza">

            {/*<Pizza topping = {["a","b","c"]} />*/ }

            {
                topping_array.map(
                    topping_item =>
                        <Pizza key={topping_item.name}
                               topping_name = {topping_item.name}  /* 컴포넌트에 지정 처리, 지정이지만 하나의 property임 */
                               topping_image = {topping_item.image_url}
                        />
                    )
            }

        </div>


        {/*<div className="Topping">*/}

            {/*
                topping_array.map(
                    topping_item =>
                        <Topping key={topping_item.name} topping_item_list = {topping_item}/> // 컴포넌트에 직접 처리
                )
            */}

        {/*</div>*/}

    </div>
  );
}

export default App;
