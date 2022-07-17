let id = 0;


Prism.languages.references = {
    'keyword': null,
    'strong': /([\*]{2}(.*?)[\*]{2})/,
    'bullet': /([<]{2}(.[0-9]?)[\>]{2})/, //Original ([/]*[<]{2}(.*?)[\>]{2})
    'sup': /(['^']{2}(.*?)['^']{2})/,
    'punctuation': /[(){};:]/
  };

  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'strong') {
      env.content = env.content.replace(/\*/g, '');
    }
    if (env.type === 'bullet') {
      env.tag = "i";
      env.content = env.content.replace(/&lt;&lt;/g, '');
      env.content = env.content.replace(/[>]/g, '');
      env.content = env.content.replace(/[/]/g, '');
      env.attributes.data_Value = env.content;
      env.content = ''
    }

    if (env.type === 'sup') {
      env.content = env.content.replace(/\^/g, '');
      id++;
      env.attributes.id = '#text-#ref-' + id;
    }
  });

