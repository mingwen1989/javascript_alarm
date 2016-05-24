$(document).ready(function update(){
  $('#insertTime').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  setInterval(update, 1000);
});

