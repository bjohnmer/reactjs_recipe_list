import React, { Component } from 'react';
import '../../App.css'
let _updated = false;
class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      my_recipe: {}
    }
  }
  componentDidMount() {
    _updated = false;
    //  console.log(this.props.recipe)
  }
  componentDidUpdate(){
    if (!_updated && Object.keys(this.props.recipe).length > 0) {
      // console.log('entro')
      this.setState({my_recipe: this.props.recipe});
      _updated = true;
    }
  }
  render() {
    return(
      <div className="mt-5">
        <div className="row">
          { Object.keys(this.state.my_recipe).length > 0 &&
              // console.log(this.state.my_recipe.drinks[0]) &&
              <div className="card mt-3">
                <div className="row no-gutters">
                  <div className="col">
                    <div className="card-block mx-3">
                      <h5 className="mt-3 card-title"><b>{this.state.my_recipe.drinks[0].strDrink}</b></h5>
                      <p className="card-text">
                        <ul style={{ paddingLeft: 0.9 + 'rem' }}>
                          <li className="line-height">{this.state.my_recipe.drinks[0].strIngredient1}</li>
                          <li className="line-height">{this.state.my_recipe.drinks[0].strIngredient2}</li>
                          <li className="li-non-styled small">y 4 ingredientes mas.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="col-auto">
                    <img src={this.state.my_recipe.drinks[0].strDrinkThumb} className="img-card rounded m-3" style={{ marginLeft: 0 + " !important" }} alt=""/>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}
export default Page;
