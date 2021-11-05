<!--?php /* Template name: Shop */ ?-->
<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
<main id="page-shop" class="structure-container structure-color-green">
	<div class="about__content structure-container__content">
		<?php the_content(); ?>
	</div>
</main>
<?php endwhile; ?>