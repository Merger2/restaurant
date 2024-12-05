import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter';


/* eslint-disable no-undef */
describe('Searching restaurant', () => {
  let presenter;
  let favoriteRestaurants;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantContainer = () => {
    document.body.innerHTML = `
        <div id="restaurant-search-container">
          <input id="query" type="text">
          <div class="restaurant-result-container">
            <ul class="restaurants">
            </ul>
          </div>
        </div>
      `;
  };

  const constructorPresenter = () => {
    favoriteRestaurants = {
      getAllRestaurant: jest.fn(),
      searchRestaurants: jest.fn(),
    };

    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
    });
  };

  beforeEach(() => {
    setRestaurantContainer();
    constructorPresenter();
  });

  describe('when query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('restoran a');

      expect(presenter.latestQuery).toEqual('restoran a');
    });

    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('restoran a');


      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restoran a');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant').length).toEqual(1);

      presenter._showFoundRestaurants([
        { id: 1, name: 'Satu' },
        { id: 2, name: 'Dua' },
      ]);
      expect(document.querySelectorAll('.restaurant').length).toEqual(2);
    });

    it('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([
        { id: 1, name: 'Satu' },
      ]);

      expect(document.querySelectorAll('.restaurant__name')
        .item(0).textContent)
        .toEqual('Satu');

      presenter._showFoundRestaurants([
        { id: 1, name: 'Satu' },
        { id: 2, name: 'Dua' },
      ]);

      const movieTitles = document.querySelectorAll('.restaurant__name');

      expect(movieTitles.item(0).textContent).toEqual('Satu');
      expect(movieTitles.item(1).textContent).toEqual('Dua');
    });

    it('should show - for found restaurant without name', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);

      expect(document.querySelectorAll('.restaurant__name')
        .item(0).textContent)
        .toEqual('-');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(3);

          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restoran a') {
          return [
            { id: 111, name: 'restoran abc' },
            { id: 222, name: 'ada juga restoran abcde' },
            { id: 333, name: 'ini juga boleh restoran a' },
          ];
        }

        return [];
      });

      searchRestaurants('restoran a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          const movieTitles = document.querySelectorAll('.restaurant__name');

          expect(movieTitles.item(0).textContent).toEqual('restoran abc');
          expect(movieTitles.item(1).textContent).toEqual('ada juga restoran abcde');
          expect(movieTitles.item(2).textContent).toEqual('ini juga boleh restoran a');

          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
        if (query === 'restoran a') {
          return [
            { id: 111, name: 'restoran abc' },
            { id: 222, name: 'ada juga restoran abcde' },
            { id: 333, name: 'ini juga boleh restoran a' },
          ];
        }

        return [];
      });

      searchRestaurants('restoran a');
    });
  });

  describe('when query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurant.mockImplementation(() => []);

      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
  });
});