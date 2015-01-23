Package.describe({
  name: 'nucleuside:transcompiler',
  version: '0.0.1',
  summary: 'Compile Coffeescript, Sass and Less client side',
  git: 'https://github.com/nucleuside/meteor-transcompiler',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.addFiles([
    'lib/worker.js'
  ], ['client'], {isAsset: true});

  api.addFiles([
    'lib/sass.js',
    'lib/sass.worker.js',
    'client/transcompiler.js'
  ], 'client');

  api.export('NucleusTranscompiler', ['client']);
});
