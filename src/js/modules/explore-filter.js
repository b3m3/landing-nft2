const exploreFilter = () => {
  const range = document.querySelector('input[type="range"]');
  const textValue = document.querySelector('.range-value span');
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
  
  range.addEventListener('input', () => {
    textValue.textContent = range.value;
  });
};

export default exploreFilter;