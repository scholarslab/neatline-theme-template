
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

Neatline.on('start', function() {

  var map = Neatline.request('MAP:getMap');

  $('.btn.in').click(function() {
    map.zoomIn();
  });

  $('.btn.out').click(function() {
    map.zoomOut();
  });

});
