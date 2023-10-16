const toggleBtn = document.querySelector('[type="checkbox"]');
const pricesMonthly = document.querySelectorAll('.price--monthly');
const pricesAnnually = document.querySelectorAll('.price--annually');

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.checked) {
    pricesMonthly.forEach((price) => price.classList.remove('hide'));
    pricesAnnually.forEach((price) => price.classList.add('hide'));
  } else {
    pricesMonthly.forEach((price) => price.classList.add('hide'));
    pricesAnnually.forEach((price) => price.classList.remove('hide'));
  }
});
