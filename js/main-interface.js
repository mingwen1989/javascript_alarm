var Alarm = require('./../js/Alarm.js').Alarm;
var update = function() {
  $('#insertTime').text(moment().format('HH:mm'));		
};

$(document).ready(function() {

  setInterval(update, 1000);

  $('#time').bootstrapMaterialDatePicker({format : 'HH:mm'});

  
  	$('#clock').submit(function(event){
  		event.preventDefault();
  		
  		var x = $('#time').val();

  		var newAlarm = new Alarm(x);


			var timeStamp;

  		setInterval(function() {

  		  timeStamp = moment().format('HH:mm');

	      $('#hidden-time').text(moment().format('HH:mm'));
	      
	      var userAlarm = newAlarm.show();
	      if(timeStamp === userAlarm) {
	        $("#bomb").show();
	      }
	     
	    }, 1000);

	

	    $('#alarmTime').text("Your alarm is set for: " + newAlarm.show());
  		console.log(newAlarm.show());
  		

	  });



});

//alarm takes half a minute to post...