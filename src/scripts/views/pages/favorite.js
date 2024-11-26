import FavoriteRestaurantIdb from '../../data/favorite-restaurant-db';
import { createItemTemplate } from '../templates/templates-restaurant';

const Favorite = {
  async render() {
    return `
       <div class="content">
      <h2 class="content__heading">Your Like Restaurant</h2>
      <div id="likeRestaurant" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#likeRestaurant');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Favorite;