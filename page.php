<?php

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>


<main id="page-default" class="structure-container structure-color-light-pink">
  <div class="structure-container__content">
    <?php the_content(); ?>
  </div>
</main>
<?php endwhile; ?>

<?php
get_footer();

