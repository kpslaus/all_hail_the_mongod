var request = require('request');
var cheerio = require('cheerio');

console.log("grabbing article headers from NYtimes");

request("https://www.nytimes.com/2016/09/13/world", function(err, res, html){
	
	var $ = cheerio.load(html);
	var result = [];

$('p.summary').each(function(i, element){

	var summary = $(this).text();

	var link = $(element).children().attr('href');

	result.push({
		summary: summary,
		link: link
	});
});

	console.log(result);
	console.log("if this don't work imma cry");
})