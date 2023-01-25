let monthlyPrices = document.querySelectorAll('.container__month');
  let yearlyPrices = document.querySelectorAll('.container__year');

  document.querySelector('.input').addEventListener('change', e => { 
  for (const monthlyPrice of monthlyPrices) {monthlyPrice.style.display = e.target.checked ? 'block' : 'none'};
  for (const yearlyPrice of yearlyPrices) {yearlyPrice.style.display = e.target.checked ? 'none' : 'block'};
});