import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ReactList from 'react-list';
import RecipeCard from '../partials/RecipeCard.js';
import '../../App.css'
class Page extends Component {
  constructor(props) {
    super(props);
    this.getRecipe = this.getRecipe.bind(this);
  }

  getRecipe(id){
    this.props.get_recipe(id);
  }
  
  componentDidMount() {
    this.props.get_recipe_list();
    //let data_var = 'Templete de React.JS con Bootstrap y sus dependencias. Para proyecto Inicial.';
    //this.props.set_test(data_var);
  }
  
  componentDidUpdate(){
    if (Object.keys(this.props.recipe_list).length > 0){
      
    }
  }
  render() {
    var my_recipe
    return(
      <div className="mt-5">
        <div className="row">
          { Object.keys(this.props.recipe_list).length > 0 &&
              this.props.recipe_list.drinks.map((recipe, recipe_index) => {
                my_recipe = this.getRecipe(recipe.idDrink)
                console.log(my_recipe)
                return(
                  <NavLink to={'/recipe/' + recipe.idDrink} key={recipe_index} className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <RecipeCard recipe={my_recipe} {...this.props}/>
                  </NavLink>
                )
              }
            )
          }
        </div>
      </div>
    );
  }
}
export default Page;
