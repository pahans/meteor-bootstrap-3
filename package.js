Package.describe({
  name: "pahans:bootstrap-3",
  summary: "HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
  version: "3.2.0-2",
  git: "https://github.com/pahans/meteor-bootstrap-3.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
  api.addFiles(path.join('bootstrap-override.css'), 'client');
});
