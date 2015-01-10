function standard (name) {
  return function (req, res) {
    res.render( name, { title: name });
  };
}

exports.index = function (req, res) {
  res.render('index', { title: 'Kelsey Breseman' });
};

exports.interviews = standard('interviews');

exports.adventures = standard('adventures');

exports.editing = standard('editing');

exports.writing = standard('writing');

exports.speaking = standard('speaking');

exports.mentoring = standard('mentoring');

exports.coding = standard('coding');

exports.learntocode = function (req, res) {
	res.render('learntocode', { title: 'Learn to Code'});
};

exports.cmd101mac = function (req, res) {
	res.render('cmd101mac', {title: 'Command Line 101 for Mac'});
};

exports.cmd101win = function (req, res) {
	res.render('cmd101win', {title: 'Command Line 101 for Windows'});
};

exports.cadence = function (req, res) {
	res.redirect('http://peaceful-atoll-3426.herokuapp.com/');
};

exports.pelican = function (req, res) {
  res.render('pelican', {title: 'Pelican'});
};
