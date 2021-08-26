//Dom Elements 
 const daysEl = document.getElementById('days-c');
 const hoursEl = document.getElementById('hours-c');
 const minsEl = document.getElementById('mins-c');
 const secondsEl = document.getElementById('sec-c');


 
 const newYearCounter = ()=>{
     const newYearDate = new Date('1 Jan 2022');
     const currentDate = new Date();
     const totalSeconds =  (newYearDate - currentDate) / 1000;
     const days = Math.floor((totalSeconds / 3600) / 24); 
     const hours = Math.floor((totalSeconds / 3600)) % 24; 
     const mins = Math.floor((totalSeconds / 60)) % 60; 
     const seconds = Math.floor(totalSeconds) % 60; 

     daysEl.textContent = formatTime(days);
     hoursEl.textContent = formatTime(hours);
     minsEl.textContent = formatTime(mins);
     secondsEl.textContent = formatTime(seconds);
 }

 function formatTime(time){
     return time < 10 ? `0${time}` : time;
 }

 setInterval(newYearCounter, 1000);