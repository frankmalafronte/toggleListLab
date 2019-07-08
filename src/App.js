
import React, {Component} from 'react'
import cats from './cats.js'
import dogs  from './dogs.js'
import List from './List.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {animal: true}
    }

    handleClick(){
        this.setState({animal: !this.state.animal})
    }

render(){
    return (<div><button onClick = {()=> this.handleClick()} >
    change button 
    </button>
    {this.state.animal? (
    <List animal = {cats}/>) : (
    <List animal ={dogs} />)  }
    </div>
    )
}
}

export default App




