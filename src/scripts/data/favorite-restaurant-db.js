import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

// Cek apakah dbPromise berhasil dibuat dan object store berhasil dibuat
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    console.log('Upgrade triggered, creating object store...');
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
      console.log(`Object store ${OBJECT_STORE_NAME} created.`);
    }
  },
});

// Fungsi untuk melihat isi DB
const checkDB = async () => {
  const db = await dbPromise;
  const allRestaurants = await db.getAll(OBJECT_STORE_NAME);
  console.log('Restaurants in DB:', allRestaurants);
};

checkDB();  // Pastikan DB bisa diakses dan object store berfungsi

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      console.error('Restaurant ID is required');
      return null; // Mengembalikan null jika id tidak ada
    }
    const db = await dbPromise;
    console.log('Getting restaurant with ID:', id);
    return db.get(OBJECT_STORE_NAME, id); // Ambil berdasarkan ID
  },

  async getAllRestaurant() {
    const db = await dbPromise;
    return db.getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant || !restaurant.id) {
      console.error('Invalid restaurant data: Missing ID');
      return;
    }
    const db = await dbPromise;
    console.log('Adding restaurant:', restaurant);
    return db.put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    if (!id) {
      console.error('Restaurant ID is required to delete');
      return;
    }
    const db = await dbPromise;
    console.log('Deleting restaurant with ID:', id);
    return db.delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
