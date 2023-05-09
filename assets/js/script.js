
var currentTime = document.getElementById('currentDay');
currentTime.textContent = dayjs().format('dddd, MMMM D');

const textarea1 = document.getElementById('textarea1');
const saveBtn1 = document.getElementById('save-btn1');

const textarea2 = document.getElementById('textarea2');
const saveBtn2 = document.getElementById('save-btn2');

const textarea3 = document.getElementById('textarea3');
const saveBtn3 = document.getElementById('save-btn3');

const textarea4 = document.getElementById('textarea4');
const saveBtn4 = document.getElementById('save-btn4');

const textarea5 = document.getElementById('textarea5');
const saveBtn5 = document.getElementById('save-btn5');

const textarea6 = document.getElementById('textarea6');
const saveBtn6 = document.getElementById('save-btn6');

const textarea7 = document.getElementById('textarea7');
const saveBtn7 = document.getElementById('save-btn7');

const textarea8 = document.getElementById('textarea8');
const saveBtn8 = document.getElementById('save-btn8');

const textarea9 = document.getElementById('textarea9');
const saveBtn9 = document.getElementById('save-btn9');

window.onload = function () {
  var savedText1 = localStorage.getItem('myText1');
  if (savedText1) {
    textarea1.value = savedText1;
  }

  var savedText2 = localStorage.getItem('myText2');
  if (savedText2) {
    textarea2.value = savedText2;
  }

  var savedText3 = localStorage.getItem('myText3');
  if (savedText3) {
    textarea3.value = savedText3;
  }

  var savedText4 = localStorage.getItem('myText4');
  if (savedText4) {
    textarea4.value = savedText4;
  }

  var savedText5 = localStorage.getItem('myText5');
  if (savedText5) {
    textarea5.value = savedText5;
  }

  var savedText6 = localStorage.getItem('myText6');
  if (savedText6) {
    textarea6.value = savedText6;
  }

  var savedText7 = localStorage.getItem('myText7');
  if (savedText7) {
    textarea7.value = savedText7;
  }

  var savedText8 = localStorage.getItem('myText8');
  if (savedText8) {
    textarea8.value = savedText8;
  }

  var savedText9 = localStorage.getItem('myText9');
  if (savedText9) {
    textarea9.value = savedText9;
  }


};

saveBtn1.addEventListener('click', function () {
  localStorage.setItem('myText1', textarea1.value);
});

saveBtn2.addEventListener('click', function () {
  localStorage.setItem('myText2', textarea2.value);
});

saveBtn3.addEventListener('click', function () {
  localStorage.setItem('myText3', textarea3.value);
});

saveBtn4.addEventListener('click', function () {
  localStorage.setItem('myText4', textarea4.value);
});

saveBtn5.addEventListener('click', function () {
  localStorage.setItem('myText5', textarea5.value);
});

saveBtn6.addEventListener('click', function () {
  localStorage.setItem('myText6', textarea6.value);
});

saveBtn7.addEventListener('click', function () {
  localStorage.setItem('myText7', textarea7.value);
});

saveBtn8.addEventListener('click', function () {
  localStorage.setItem('myText8', textarea8.value);
});

saveBtn9.addEventListener('click', function () {
  localStorage.setItem('myText9', textarea9.value);
});
updateDayCalendar()

function updateDayCalendar() {
  var events = document.getElementsByClassName('col-8 col-md-10 description');
  var currentTime = dayjs().format('hA');
       console.log(events)
  console.log(currentTime);

  for (var i = 0; i < events.length; i++) {
    var eventRow = document.getElementsByClassName("col-2 col-md-1 hour text-center py-3");
    var eventTime = eventRow[i].textContent.trim();

    console.log(eventTime);

    if (currentTime < eventTime) {
      // Event is in the future
      events[i].style.backgroundColor = '#77dd77';
    } else if (currentTime > eventTime) {
      // Event is in the past
      events[i].style.backgroundColor = '#d3d3d3';
    } else {
      // Event is happening now
      events[i].classList.add('present');
    }
  }
}

// Call the updateDayCalendar function every minute
setInterval(updateDayCalendar, 60000);



