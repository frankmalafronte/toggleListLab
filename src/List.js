import React, {Component} from 'react'
  
const List =(props) =>{
    return (<div>
        <ul>
        {props.animal.map(el  => <li>
            <img src ={el.image}
            ></img>
            {el.name}
        </li>)}    
        </ul>
    </div>

    )
}

export default List