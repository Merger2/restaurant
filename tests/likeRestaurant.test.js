/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-db';

describe('Favorite Restaurant Integration Test', () => {
  const restaurantData = { id: 1, name: 'Restoran A' };

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to add a restaurant to the favorite list', async () => {

    await FavoriteRestaurantIdb.putRestaurant(restaurantData);


    const favoriteRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(favoriteRestaurant).toEqual(restaurantData);
  });

  it('should not add the same restaurant twice', async () => {

    await FavoriteRestaurantIdb.putRestaurant(restaurantData);
    await FavoriteRestaurantIdb.putRestaurant(restaurantData);


    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    expect(allRestaurants).toEqual([restaurantData]);
  });

  it('should be able to remove a restaurant from the favorite list', async () => {

    await FavoriteRestaurantIdb.putRestaurant(restaurantData);


    await FavoriteRestaurantIdb.deleteRestaurant(1);


    const deletedRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(deletedRestaurant).toBeUndefined();
  });

  it('should not add a restaurant without an ID', async () => {

    await FavoriteRestaurantIdb.putRestaurant({ name: 'Restoran Tanpa ID' });


    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    expect(allRestaurants).toEqual([]);
  });
});
