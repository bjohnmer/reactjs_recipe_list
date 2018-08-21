import React, { Component } from 'react';
import '../../App.css'
class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      my_recipe: this.props.recipe_id || {}
    }
  }
  componentDidMount() {
    //let data_var = 'Templete de React.JS con Bootstrap y sus dependencias. Para proyecto Inicial.';
    //this.props.set_test(data_var);
  }

  render() {
    return(
      <div className="container mt-5">
        <h1>algo</h1>
      </div>
    );
  }
}
export default Page;
