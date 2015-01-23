var Transcompiler = function() {
  var base_path = "/packages/nucleuside_transcompiler/";

  this._initialize_sass = function() {
    Utils.add_script(base_path + 'lib/sass/sass.worker.js', 'Sass', function() {
      this.Sass = window.Sass;
      window.Sass = null;
      this.Sass.initialize(base_path + "lib/sass/worker.min.js");
    }, this);
  };

  this._initialize_less = function() {
    Utils.add_script(base_path + "lib/less.js", 'less', function() {
      this.less = window.less;
      window.less = null;
    }, this);
  };

  this._initialize_coffeescript = function() {
    Utils.add_script(base_path + "lib/coffee-script.js", 'CoffeeScript', function() {
      this.CoffeeScript = window.CoffeeScript;
      window.CoffeeScript = null;
    }, this);
  };

  this.initialize = function() {
    return this;
  };
};

NucleusTranscompiler = new Transcompiler().initialize();
