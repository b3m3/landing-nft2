const timer = () => {
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const second = document.querySelector('.second');

  const calcTime = () => {
    const finalDate = new Date("06.06.2024");
    const currentDate = new Date();
  
    const diff = finalDate - currentDate;

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    second.textContent = s < 10 ? '0' + s : s;
  };

  setInterval(calcTime, 1000);
};

export default timer;