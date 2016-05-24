exports.Alarm  = function(time){
	this.time = time;
}

exports.Alarm.prototype.show = function() {
	var x = this.time;
	var y = x.split(" ").pop();
	return y;
}