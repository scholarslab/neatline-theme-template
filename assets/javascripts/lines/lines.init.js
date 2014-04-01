
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

Neatline.module('Lines', function(Lines) {


  Lines.addInitializer(function() {
    Lines.__controller = new Neatline.Lines.Controller();
  });


});
