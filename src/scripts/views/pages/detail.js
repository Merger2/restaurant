import FavoriteRestaurantIdb from '../../data/favorite-restaurant-db';
import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createDetailTemplate } from '../templates/templates-restaurant';

const Detail = {
  async render() {
    return `
       <div id="restaurants-detail" class="restaurants-detail"></div>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurants-detail');

    restaurantContainer.innerHTML = createDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant:{
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        imageUrl: `${CONFIG.IMAGE_URL}${restaurant.pictureId}`,
      },
    });
  },
};

export default Detail;