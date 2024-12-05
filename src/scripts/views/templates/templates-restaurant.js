import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const createDetailTemplate = (item) => `
   <section class="item-detail">
    <div class="item__header">
      <h2 class="item__title">${item.name || 'No name available'}</h2>
     <img class="item__poster lazyload" 
           data-src="${CONFIG.IMAGE_URL + (item.pictureId || 'default-image.jpg')}" 
           alt="${item.name || 'No name available'}" />
    </div>
    
    <div class="item__info">
      <h3>Information</h3>
      <div class="item__info__section">
        <h4>Category</h4>
        <p>${item.categories ? item.categories.map((category) => category.name).join(', ') : 'N/A'}</p>
      </div>
      <div class="item__info__section">
        <h4>City</h4>
        <p>${item.city || 'No city available'}</p>
      </div>
      <div class="item__info__section">
        <h4>Address</h4>
        <p>${item.address || 'No address available'}</p>
      </div>
      <div class="item__info__section">
        <h4>Rating</h4>
        <p>⭐️ <span>${item.rating || 'No rating available'}</span></p>
      </div>
    </div>
  
    <div class="item__overview">
      <h3>Description</h3>
      <p>${item.description || 'No description available'}</p>
    </div>

    <div class="item__reviews">
      <h3>Customer Reviews</h3>
      <div class="reviews__list">
        ${item.customerReviews && item.customerReviews.length > 0
    ? item.customerReviews.map((review) => `
            <div class="review__card">
              <div class="review__header">
                <h4 class="review__name">${review.name || 'Anonymous'}</h4>
                <p class="review__date">${review.date || 'No date available'}</p>
              </div>
              <div class="review__content">
                <p>${review.review || 'No review content'}</p>
              </div>
            </div>
          `).join('')
    : '<p>No reviews available</p>'
}
      </div>
    </div>
  </section>
`;

const createHeroSection = () => {
  return `
    <header>
      <section id="hero">
        <div class="hero main-container">
          <h4>Enjoy an unforgettable experience!</h4>
          <h1>Resto Review</h1>
          <div class="hero-cta">
            <a href="#/restaurant">
              <button class="cta-button">See Restaurant</button>
            </a>
            <a href="#/favorite">
              <button class="cta-button">Favorite</button>
            </a>
          </div>
        </div>
        <div class="header-shadow"></div>
      </section>
    </header>
  `;
};

const createItemTemplate = (item) => {
  const itemId = item.id ? item.id : 'default';

  return `
    <div class="item">
      <div class="item__header">
        <img class="item__header__poster" 
             alt="${item.name || 'No name available'}"
             src="${
  item.pictureId
    ? CONFIG.IMAGE_URL + item.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
        <div class="item__header__rating">
          <p>⭐️<span class="item__header__rating__score">${item.rating || 'N/A'}</span></p>
        </div>
        <div class="item__header__city">
          <p>${item.city || 'Unknown City'}</p>
        </div>
      </div>
      <div class="item__content">
        <h3>
          <a href="/#/detail/${itemId}">${item.name || 'No name available'}</a>
        </h3>
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="unlikeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;



export { createDetailTemplate, createItemTemplate, createLikeButtonTemplate, createUnlikeButtonTemplate, createHeroSection };
