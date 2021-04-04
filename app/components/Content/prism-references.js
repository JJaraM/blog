let id = 0;


Prism.languages.references = {
    'keyword': null,
    'strong': /([\*]{2}(.*?)[\*]{2})/,
    'bullet': /([<]{2}(.*?)[\>]{2})/,
    'sup': /(['^']{2}(.*?)['^']{2})/,
    'punctuation': /[(){};:]/
  };

  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'strong') {
      env.content = env.content.replace(/\*/g, '');
    }
    if (env.type === 'bullet') {
      console.log(env);
      env.tag = "i";

      env.content = env.content.replace(/&lt;&lt;/g, '');
      env.content = env.content.replace(/[>]/g, '');
      env.content = env.content.replace(/[/]/g, '');
      env.attributes.data_Value = env.content;
      env.content = ''
      //env.attributes.id = '#point-#ref-' + env.content;

      //env.attributes.data = "1";
      //id = env.content;
    }

    if (env.type === 'sup') {
      env.content = env.content.replace(/\^/g, '');
      env.attributes.id = '#text-#ref-' + id;
    }
  });

