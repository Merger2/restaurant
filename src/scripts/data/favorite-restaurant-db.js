/* eslint-disable no-prototype-builtins */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;


const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
});


const checkDB = async () => {
  const db = await dbPromise;
  const allRestaurants = await db.getAll(OBJECT_STORE_NAME);
  return allRestaurants;
};

checkDB();

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return null;
    }
    const db = await dbPromise;
    return db.get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    const db = await dbPromise;
    return db.getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    if (!id) {
      return;
    }
    const db = await dbPromise;
    return db.delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
