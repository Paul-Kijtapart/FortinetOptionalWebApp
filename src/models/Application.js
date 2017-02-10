var Application = function(name, type, date, company, error, reason, solution) {
	this.name = name;
	this.type = type;
	this.date = new Date(date);
	this.company = company;
	this.error = error;
	this.reason = reason;
	this.solution = solution;
};

Application.prototype.toString = function() {
	return this.name + ' , ' + this.company;
};

export default Application;