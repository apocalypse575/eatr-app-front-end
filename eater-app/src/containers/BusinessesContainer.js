import React from 'react'

import Businesses from '../components/Businesses'
import Favorites from '../components/Favorites'

const URL = 'http://localhost:3000/api/v1/businesses'

class BusinessesContainer extends React.Component {

  state = {
    businesses: [],
    favorites: []
  }

  fetch = () => {
    fetch(URL)
      .then(response => response.json())
      .then(businesses => this.setState({
          businesses: businesses
      })
    )
  }

  componentDidMount(){
    this.fetch()
  }

  addToFavorites = (business) => {
    // const business = this.state.businesses.find(business => business.id === parseInt(businessId))
    // const foundBusiness = this.state.favorites.find(business => business.id === parseInt(businessId))
    //   if(!foundBusiness){
    //     this.setState({
    //       favorites: [...this.state.favorites, business]
    //     })
    //   }

    if(!this.state.favorites.includes(business)){
      this.setState({
        favorites: [...this.state.favorites, business]
      })
    }
  }

  removeFromFavorites = (favorite) => {
    const findFavorite = this.state.favorites.find(fav => fav === favorite)
    const index = this.state.favorites.indexOf(findFavorite)
    const newArray = [...this.state.favorites]
    newArray.splice(index, 1);
    this.setState({
      favorites: newArray
    })
  }


  render(){

    console.log(this.state.favorites);

    return(
      <div>
        <Favorites favorites={this.state.favorites} removeFromFavorites={this.removeFromFavorites}/>
        <Businesses businesses={this.state.businesses} addToFavorites={this.addToFavorites}/>
      </div>
    )
  }
}

export default BusinessesContainer
