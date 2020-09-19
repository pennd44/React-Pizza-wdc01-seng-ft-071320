import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizzaArray: [],
    selectedPizza: {},
    // size: "Small",
    vegetarianCheck: null,
    // notVegetarianCheck: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(pizzas=> this.setState({
      pizzaArray: pizzas
    }))
  }

  findPizza=(id)=>{
    let foundPizza = this.state.pizzaArray.find(pizza=>
      pizza.id==id)
    this.setState({
      selectedPizza: foundPizza,
      vegetarianCheck: foundPizza.vegetarian,
      // notVegetarianCheck: !foundPizza.vegetarian
    })
    console.log(this.state.selectedPizza)
  }

  toggleVegetarian=()=>{

    this.setState({
      vegetarianCheck: !this.state.vegetarianCheck
    })  
  }

  editPizza=(e)=>{
    e.preventDefault()
    let topping= e.target[0].value
    let size= e.target[1].value
    let vegetarian=  e.target[2].checked? true:false
    
    let newArray = this.state.pizzaArray
    let editedPizza= {...this.state.selectedPizza, topping: topping, size, vegetarian}
    newArray.splice(newArray.indexOf(this.state.selectedPizza),1,editedPizza)
    this.setState({pizzaArray: newArray})

    fetch('http://localhost:3000/pizzas/'+ editedPizza.id,
    {method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      topping,
      size,
      vegetarian
    })
    }).then(res=>res.json())
    .then(newpizza=> console.log(newpizza))
    // newArray = this.state.pizzaArray.map(pizza=>{return({...pizza, )})
    // let foundPizza = this.state.pizzaArray.find(pizza=>
    //   pizza.id==id)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza = {this.state.selectedPizza} editPizza = {this.editPizza} vegetarianCheck={this.state.vegetarianCheck} toggleVegetarian={this.toggleVegetarian}/>
        <PizzaList pizzas={this.state.pizzaArray} findPizza={this.findPizza}/>
      </Fragment>
    );
  }
}

export default App;
