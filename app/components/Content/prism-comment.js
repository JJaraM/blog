Prism.languages.comment = {
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
    env.content = env.content.replace(/&lt;&lt;/g, '');
    env.content = env.content.replace(/[>]/g, '');
    env.content = env.content.replace(/[/]/g, '');
  }
  if (env.type === 'sup') {
    env.content = env.content.replace(/\^/g, '');
  }
});

/**************************************************/

Prism.languages.gitclone = {
  'keyword': null,
  'strong': /([\*]{2}(.*?)[\*]{2})/,
  'prism-btn': /([<]{2}(.*?)[\>]{2})/,
  'sup': /(['^']{2}(.*?)['^']{2})/,
  'punctuation': /[(){};:]/
};

Prism.hooks.add('wrap', function(env) {
  if (env.type === 'strong') {
    env.content = env.content.replace(/\*/g, '');
  }
  if (env.type === 'prism-btn') {
    env.content = env.content.replace(/&lt;&lt;/g, '');
    env.content = env.content.replace(/[>]/g, '');
  }
  if (env.type === 'sup') {
    env.content = env.content.replace(/\^/g, '');
  }
});

Prism.languages.insertBefore('gitclone', 'number', {
  'btn': {
    pattern: /([<]{2}(.*?)[\>]{2})/,
    lookbehind: true,
    inside: Prism.languages.gitclone,
    greedy: true
  }
});

Prism.languages.insertBefore('gitclone', 'operator', {
  'strong': {
    pattern: /([\*]{2}(.*?)[\*]{2})/,
    lookbehind: true,
    inside: Prism.languages.gitclone,
    greedy: true
  }
});

/**************************************************/

Prism.languages.gitclonesmall = {
  'keyword': null,
  'strong': /([\*]{2}(.*?)[\*]{2})/,
  'prism-btn': /([<]{2}(.*?)[\>]{2})/,
  'sup': /(['^']{2}(.*?)['^']{2})/,
  'punctuation': /[(){};:]/
};

Prism.hooks.add('wrap', function(env) {
  if (env.type === 'strong') {
    env.content = env.content.replace(/\*/g, '');
  }
  if (env.type === 'prism-btn') {
    env.content = env.content.replace(/&lt;&lt;/g, '');
    env.content = env.content.replace(/[>]/g, '');
  }
  if (env.type === 'sup') {
    env.content = env.content.replace(/\^/g, '');
  }
});

Prism.languages.insertBefore('gitclonesmall', 'number', {
  'btn': {
    pattern: /([<]{2}(.*?)[\>]{2})/,
    lookbehind: true,
    inside: Prism.languages.gitclone,
    greedy: true
  }
});

Prism.languages.insertBefore('gitclonesmall', 'operator', {
  'strong': {
    pattern: /([\*]{2}(.*?)[\*]{2})/,
    lookbehind: true,
    inside: Prism.languages.gitclone,
    greedy: true
  }
});

/****************************************/
Prism.languages.cisco = {
  'keyword': null,
  'strong': /([\*]{2}(.*?)[\*]{2})/,
  'prism-btn': /([<]{2}(.*?)[\>]{2})/,
  'sup': /(['^']{2}(.*?)['^']{2})/,
  'cmd': /(.*?)#|((.*?))>/
};

Prism.languages.insertBefore('cisco', 'operator', {
  'cmd': {
    pattern: /(.*?)#|((.*?))>/,
    lookbehind: true,
    inside: Prism.languages.cisco,
  }
});
