<!--?php /* Template name: Shop */ ?-->
<?php

get_header(); ?>

<main id="about" class="structure-container structure-color-green">
	<?php while (have_posts()) : the_post(); ?>
	<div class="about__content structure-container__content">
		<?php the_content(); ?>
	</div>
	<?php endwhile; ?>
</main>