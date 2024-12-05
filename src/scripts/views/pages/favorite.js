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

    if (!restaurantContainer) {
      console.error('Element #likeRestaurant tidak ditemukan.');
      return;
    }

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = '<p id="query" class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;