
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

Neatline.on('start', function() {

  var narrative = $('div.narrative');
  var exhibit   = $('div.exhibit');
  var bubble    = $('div.bubble');

  // Cache the width of the narrative.
  var textWidth = narrative.outerWidth();

  var position = function() {

    var width = $(window).width();

    // Fill width with exhibit.
    exhibit.outerWidth(width + textWidth);

    // Fill height with content.
    exhibit.add(narrative).outerHeight($(window).height());

    // Refresh OpenLayers.
    Neatline.execute('MAP:updateSize');

  };

  $(window).resize(position);
  position();

});
