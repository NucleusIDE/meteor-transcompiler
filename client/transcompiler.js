NucleusTranscompiler = {
  _initialize_sass: function() {
    this.Sass.initialize("/packages/nucleuside_transcompiler/lib/sass/worker.min.js");

  },
  _initialize: function() {
    this.Sass = window.Sass;
    window.Sass = null;
  }
};


NucleusTranscompiler._initialize();
