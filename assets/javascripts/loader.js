
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

Neatline.on('start', function() {

  NProgress.configure({ showSpinner: false });
  NProgress.start();

  Neatline.vent.on('MAP:ingest', function() {
    NProgress.done();
  });

});
