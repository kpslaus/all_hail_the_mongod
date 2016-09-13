var React = require ('react');
var request = require ('request');
var ReactDOM = require ('react-dom');

var moment = require('moment');

var name;

var comment = moment();

ReactDOM.render(

	<div className='container'>

		<h2>Name {name}.</h2>
		<h3>Comment {comment}</h3>
	</div>

	document.getElementById('app');
	
	);

