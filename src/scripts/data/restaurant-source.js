import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getListRestaurants() {
    const response = await fetch(API_ENDPOINT.GET_LIST);
    const responseJson = await response.json();
    if (responseJson.error) {
      throw new Error('Failed to fetch restaurant list');
    }
    return responseJson.restaurants;
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const responseJson = await response.json();
    if (responseJson.error) {
      throw new Error('Failed to search restaurants');
    }
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL(id));
    const responseJson = await response.json();
    if (responseJson.error) {
      throw new Error('Failed to fetch restaurant detail');
    }
    return responseJson.restaurant;
  }

  static async addReview(id, name, review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });

    const responseJson = await response.json();
    if (responseJson.error) {
      throw new Error('Failed to add review');
    }
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
