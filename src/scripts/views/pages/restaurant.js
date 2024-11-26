import RestaurantSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/templates-restaurant';

const RestaurantList = {
  async render() {
    return `
      <section id="hero">
      <div class="hero main-container">
        <h4>Enjoy an unforgettable experience!</h4>
        <h1>Resto Review</h1>
        <div class="hero-cta">
          <a href="#restaurants">
            <button class="cta-button">See Restaurant</button>
          </a>
          <a href="#/favorite">
            <button class="cta-button">Favorite</button>
          </a>
        </div>
      </div>
      <div class="header-shadow"></div>
    </section>
    <div class="content">
      <h2 class="content__heading">Available Restaurants</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurantData = await RestaurantSource.getListRestaurants();
      const restaurantContainer = document.querySelector('#restaurants');
      restaurantContainer.innerHTML = '';

      if (restaurantData.length === 0) {
        restaurantContainer.innerHTML = '<p>No restaurants available.</p>';
        return;
      }

      const fragment = document.createDocumentFragment();

      restaurantData.forEach((restaurant) => {
        const restaurantElement = document.createElement('div');
        restaurantElement.innerHTML = createItemTemplate(restaurant);
        fragment.appendChild(restaurantElement);
      });

      restaurantContainer.appendChild(fragment);
    } catch (error) {
      console.error('Failed to fetch restaurant data:', error);
      document.querySelector('#restaurants').innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
  },
};

export default RestaurantList;
