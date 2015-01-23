Utils = {
  add_script: function(src, success_prop, success_callback, context) {
    /**
     * Added a script to the document with src.
     * Arguments:
     *
     * * src    : string - the source of the script to add
     * * success_prop   : property to check on window object when script is done loading
     * * success_callback       : function - function to execute when script is successfully added
     */

    context = context || window;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.head.appendChild(script);

    // do not set the interval for invoking callback if success_prop is not provided
    if (typeof success_prop !== 'string')
      return;

    var test_interval = Meteor.setInterval(function() {
      if (! window[success_prop]) return;

      success_callback.call(context);
      Meteor.clearInterval(test_interval);
    });
  }
};
