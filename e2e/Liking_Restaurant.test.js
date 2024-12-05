/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking and unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.item__content a');
  const firstRestaurant = locate('.item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');


  I.amOnPage('/#/favorite');
  I.seeElement('.item');

  const likedRestaurant = await I.grabTextFrom('.item__content a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);

  I.amOnPage('/');
  I.click(firstRestaurant);

  I.seeElement('#unlikeButton');
  I.click('#unlikeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
