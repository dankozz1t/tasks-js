const nameRef = document.querySelector('.city-name');
const forecastRef = document.querySelector('.forecast');

const BASE_URL = 'http://api.weatherapi.com/v1/';
const TYPE = 'forecast.json';
const API_KEY = '?key=878edb375c3746b09be132732221508';
const LOCATION = '&q=Lviv';
const DAYS = '&days=5';

fetch(`${BASE_URL}${TYPE}${API_KEY}${LOCATION}${DAYS}`)
  .then(r => {
    return r.json();
  })
  .then(renderSW);

function renderSW({ location: { name }, forecast: { forecastday } }) {
  nameRef.textContent = name;
  const markup = forecastday.reduce(
    (
      acc,
      {
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }
    ) =>
      acc +
      `<li class="forecast__item">
	<h3 class="forecast__date">${date}</h3>
	<img class="forecast__img" src="${icon}" alt="${text}">
	<p class="forecast__temp">${avgtemp_c}</p>
	<p class="forecast__rain">${text}</p>
</li>
`,
    ''
  );
  forecastRef.innerHTML = markup;
}
