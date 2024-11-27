/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('LikingRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant ',  ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak Ada restoran yang ditampilkan', '.restaurant-item__not__found');
});
