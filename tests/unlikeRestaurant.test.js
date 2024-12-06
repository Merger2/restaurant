/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-db';

describe('Unliking A Restaurant', () => {
  const restaurantData = { id: 1, name: 'Restoran A' };

  beforeEach(async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurantData);
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);


    const removedRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(removedRestaurant).toBeUndefined();
  });

  it('should not throw error when trying to unlike a restaurant not in the list', async () => {

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    expect(allRestaurants).toEqual([]); // Harus tetap kosong
  });
});
