var _ = require('lodash');

function standard (name) {
  return function (req, res) {
    res.render( name, { title: 'Kelsey Breseman– ' + name });
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

exports.projects = standard('projects');

exports.blogIndex = standard('blogIndex');

exports.yule = standard('yule');

exports.climateChange = function (req, res) {
  res.render('climateChange', {title: 'Climate Change Book'});
};

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

exports.oom = function (req, res) {
  res.redirect('https://frijol.gitbooks.io/orienteering-software-tutorials/content/');
};

exports.blogRedirect = function(req, res) {
  res.redirect('//medium.com/@ifoundtheme');
};

exports.lituya = function(req, res) {
  res.redirect('https://docs.google.com/document/d/1i8jQvZ7hx--KG3jRFhxBs-ej7HPpC3qjj1OLpEoKLnU/edit?usp=sharing');
};

exports.sanjuans = function(req, res) {
  res.redirect('https://docs.google.com/document/d/1wlsHaqT478m3ml9DkGXnYh6P6nfKwhQ3cn-OHphMwbo/edit');
};
