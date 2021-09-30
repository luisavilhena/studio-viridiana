<!--?php /* Template name: About */ ?-->
<?php

get_header(); ?>

<main id="about" class="structure-container structure-color-light-pink">
	<?php while (have_posts()) : the_post(); ?>
	<div class="about__content structure-container__content">
		<div class="about__content__fixed">
			<h2 class="about__content__fixed-title">
				<?php echo carbon_get_theme_option('fixed_title'); ?>
			</h2>
			<div class="about__content__fixed-box">
				<h3 class="about__content__fixed-box__subtitle">
					<?php echo carbon_get_theme_option('fixed_subtile_1'); ?>
				</h3>
				<div class="about__content__fixed-box__description rich-text">
					<?php echo carbon_get_theme_option('fixed_description_1'); ?>
				</div>
			</div>
			<div class="about__content__fixed-box">
				<h3 class="about__content__fixed-box__subtitle">
					<?php echo carbon_get_theme_option('fixed_subtile_2'); ?>
				</h3>
				<div class="about__content__fixed-box__description rich-text">
					<?php echo carbon_get_theme_option('fixed_description_2'); ?>
				</div>
			</div>
			<div class="about__content__fixed-box">
				<h3 class="about__content__fixed-box__subtitle">
					<?php echo carbon_get_theme_option('fixed_subtile_3'); ?>
				</h3>
				<div class="about__content__fixed-box__description rich-text">
					<?php echo carbon_get_theme_option('fixed_description_3'); ?>
				</div>
			</div>
		</div>
		<div class=about__content__scroll>
			<div style="background-image: <?php echo get_the_post_thumbnail_url(carbon_get_theme_option('image_1'), FULL); ?>">
			</div>
		</div>
	</div>
	<?php endwhile; ?>

</main>


<?php
get_footer();