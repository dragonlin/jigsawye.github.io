document.body.onload = increment;

function increment() {
  var number = 0;

  var oneDay = 24 * 60 * 60 * 1000;
  var startDate = new Date(2014,07,01);
  var nowDate = new Date();
  var diffDays = Math.round(Math.abs((+nowDate - +startDate) / oneDay));
  var $coding = document.querySelector('#coding')

  function pad(num, size) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  var interval = setInterval(function() {
      $coding.innerText = pad(number, 3);

      if (number >= diffDays) {
          clearInterval(interval);
      }

      if ((number / diffDays) <= 0.95) {
        number += Math.round(Math.random() * 15);
      } else {
        number++;
      }
  }, 20);
}
