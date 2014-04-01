
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

Neatline.on('start', function() {
  Neatline.vent.on('MAP:ingest', function() {

    var layers = Neatline.request('MAP:getWmsLayers');
    var loader = $('#wms-loader');

    _.each(layers, function(layer) {

      // When loading starts.
      layer.events.register('loadstart', layer, function() {
        loader.show();
      });

      // When loading finishes.
      layer.events.register('loadend', layer, function() {

        // Are any layers loading?
        var loading = _.reduce(layers, function(memo, layer) {
          return memo || layer.loading;
        }, false);

        if (!loading) loader.hide();

      });

    });

  });
});
