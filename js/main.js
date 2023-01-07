// Dark Mode

var elBody = document.querySelector('body');
var elMode = document.querySelector('.mode-btn');

elMode.addEventListener('click', function () {
  elBody.classList.toggle('dark');
});

// Dark Mode

const elForm = document.querySelector('.js-form');
const elInput = document.querySelector('.search');
const elSelect = document.querySelector('.filter-regions');
const elTemplate = document.querySelector('.js-template').content;
const elList = document.querySelector('.js-list');

const fragment = document.createDocumentFragment();

const renderRegions = (arr, node) => {
  arr.forEach((el) => {
    let newTemplate = elTemplate.cloneNode(true);
    newTemplate.querySelector('.card-img-top').src = el.flags.svg;
    newTemplate.querySelector('.card-title').textContent = el.name.common;
    newTemplate.querySelector('.population').textContent =
      'Population: ' + el.population;
    newTemplate.querySelector('.region').textContent = 'Region: ' + el.region;
    newTemplate.querySelector('.capital').textContent =
      'Capital: ' + el.capital;
    fragment.appendChild(newTemplate);
    node.innerHTML = '';
  });
  node.appendChild(fragment);
};

const asyncFetch = async () => {
  let response = await fetch('https://restcountries.com/v3.1/all');
  let data = await response.json();
  renderRegions(data, elList);
};

elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (elInput.value != '') {
    fetch(`https://restcountries.com/v3.1/name/${elInput.value.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          renderRegions(data, elList);
        }
      });
  }
});

elSelect.addEventListener('change', () => {
  if (elSelect.value != 0) {
    if (elSelect.value == 1) {
      fetch('https://restcountries.com/v3.1/region/africa')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderRegions(data, elList);
          }
        });
    }
    if (elSelect.value == 2) {
      fetch('https://restcountries.com/v3.1/region/america')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderRegions(data, elList);
          }
        });
    }
    if (elSelect.value == 3) {
      fetch('https://restcountries.com/v3.1/region/asia')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderRegions(data, elList);
          }
        });
    }
    if (elSelect.value == 4) {
      fetch('https://restcountries.com/v3.1/region/europe')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderRegions(data, elList);
          }
        });
    }
    if (elSelect.value == 5) {
      fetch('https://restcountries.com/v3.1/region/oceania')
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            renderRegions(data, elList);
          }
        });
    }
  } else {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          renderRegions(data, elList);
        }
      });
  }
});
asyncFetch();
