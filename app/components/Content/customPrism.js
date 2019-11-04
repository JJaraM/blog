/*js*/
Prism.languages.insertBefore('js', 'number', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('js', 'operator', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('js', 'comment', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/,
	'sup':/(['^']{2}(.*?)['^']{2})/
});


/*java*/
Prism.languages.insertBefore('java', 'number', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('java', 'operator', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('java', 'comment', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

/*bash*/
Prism.languages.insertBefore('bash', 'number', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('bash', 'operator', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('bash', 'comment', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});
