Package.describe({
  name: 'selaias:wepay',
  version: '0.1.0',
  summary: 'WePay API wrapper for Meteor.',
  git: 'https://github.com/selaias/meteor-wepay.git',
  documentation: 'README.md'
});

 Npm.depends({ "wepay": "0.0.5" });

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('check');
  api.addFiles('wepay.js', 'server');
  
  api.export('WePay', 'server');
});


