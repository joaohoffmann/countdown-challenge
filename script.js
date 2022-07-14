function countDown(){
  const countDate = new Date('December 25, 2022 00:00:00').getTime()
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minutes);
  const textSeconds = Math.floor((gap % minutes) / second);

  document.querySelector('.day').innerHTML = textDay
  document.querySelector('.hour').innerHTML = textHour
  document.querySelector('.minutes').innerHTML = textMinutes
  document.querySelector('.seconds').innerHTML = textSeconds 

}

setInterval(countDown, 1000)