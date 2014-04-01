
<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Narrative -->
<div id="neatline-narrative" class="narrative">

  <header>

    <!-- Credits. -->
    <span><a href="<?php echo WEB_ROOT; ?>">&larr; View all</a></span> &bull;
    <span>By <a href="https://twitter.com">@yourhandle</a></span>,
    <span>with <a href="http://omeka.org">Omeka</a></span>
    <span>and <a href="http://neatline.org">Neatline</a></span>

  </header>

  <!-- Content. -->
  <h1><?php echo nl_getExhibitField('title'); ?></h1>
  <?php echo nl_getExhibitField('narrative'); ?>

</div>

<!-- Exhibit. -->
<div class="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
</div>

<!-- WMS spinner. -->
<div id="wms-loader">
  <div class="three-quarters"></div>
  <span>Loading imagery...</span>
</div>

<!-- Zoom buttons. -->
<div id="zoom">
  <div class="btn in">+</div>
  <div class="btn out">-</div>
</div>

<?php echo foot(); ?>
