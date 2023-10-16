const toggleBtn = document.querySelector('[type="checkbox"]');
const pricesMonthly = document.querySelectorAll('.price--monthly');
const pricesAnnually = document.querySelectorAll('.price--annually');

const togglePrices = () => {
  const hideClass = 'hide';

  pricesMonthly.forEach((price) => {
    price.classList.toggle(hideClass, !toggleBtn.checked);
  });

  pricesAnnually.forEach((price) => {
    price.classList.toggle(hideClass, toggleBtn.checked);
  });
};

toggleBtn.addEventListener('click', togglePrices);
