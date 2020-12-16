// * start first stream
  let endtime = "january 01 2021, 00:00 GMT+0200";


  // changing the format 3:4:5 => 03:04:05
  function makeCorrectDate(uncorrectDate) {
    let correctDate = uncorrectDate;
    if (uncorrectDate < 10) {
      correctDate = "0" + uncorrectDate;
    }
    return correctDate.toString();
  }

  // how much time is left
  function getDateRemaining(timesup) {
    // total = time is left
    let total = Date.parse(timesup) - Date.now();
    let second = Math.floor((total / 1000) % 60);
    let minute = Math.floor((total / 1000 / 60) % 60);
    let hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    let day = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total: total,
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  }

  function setTime(id, timesup) {
    let days = document.querySelectorAll(".days");
    let hours = document.querySelectorAll(".hours");
    let minutes = document.querySelectorAll(".minutes");
    let seconds = document.querySelectorAll(".seconds");

    // timer update every 1000ms
    setInterval(update, 1000);
    function update() {
      let total = getDateRemaining(timesup);
      let nowdate = Date.now();
      if (nowdate <= Date.parse(endtime)) {
        days.forEach(function (day) {
          day.textContent = makeCorrectDate(total.day);
        })
        hours.forEach(function (hour) {
          hour.textContent = makeCorrectDate(total.hour);
        })
        minutes.forEach(function (minute) {
          minute.textContent = total.minute;
        })
        seconds.forEach(function (second) {
          second.textContent = makeCorrectDate(total.second);
        })
      } else {
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
      }
    }
  }
  setTime("timer", endtime);

