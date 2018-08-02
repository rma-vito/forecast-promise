const toDateString = require('./toDateString');

module.exports = options => {
	const qs = {};

	qs.start_date = toDateString(options.startDate);

	if (options.endDate) {
		qs.end_date = toDateString(options.endDate);
	}

	return qs;
};
