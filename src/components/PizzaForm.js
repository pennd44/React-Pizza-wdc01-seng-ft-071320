import React from "react"

const PizzaForm = (props) => {
  // console.log(props.findPizza)
  return(
      <div className="form-row" >
        <form onSubmit={(e)=>props.editPizza(e)}>
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.selectedPizza.topping
                // null
              }/>
        </div>
        <div className="col">
          <select value={
            null
            // props.selectedPizza.size
            } className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={()=>props.toggleVegetarian()} className="form-check-input" type="radio" value="Vegetarian" checked={
              props.vegetarianCheck
              // props.selectedPizza.vegetarian
              }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={()=>props.toggleVegetarian()} className="form-check-input" type="radio" value="Not Vegetarian" checked={
              !props.vegetarianCheck
              // !props.selectedPizza.vegetarian
              }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
        </form>
      </div>

  )
}

export default PizzaForm
