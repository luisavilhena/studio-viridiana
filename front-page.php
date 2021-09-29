<?php

get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

<main class="home-template structure-color-green">
</main>
<div class="loading">
	<div class="loading_first-line">
		<div class="loading_first-line_studio">
			<div class="loading_studio_s">s</div>
			<div class="loading_studio_t">t</div>
			<div class="loading_studio_u">u</div>
			<div class="loading_studio_d">d</div>
			<div class="loading_studio_i">i</div>
			<div class="loading_studio_o">o</div>
		</div>
		<div class="loading_first-line_viridiana">
			<div class="loading_viridiana_v">v</div>
			<div class="loading_viridiana_i">i</div>
			<div class="loading_viridiana_r">r</div>
			<div class="loading_viridiana_i2">i</div>
			<div class="loading_viridiana_d">d</div>
			<div class="loading_viridiana_i3">i</div>
			<div class="loading_viridiana_a">a</div>
			<div class="loading_viridiana_n">n</div>
			<div class="loading_viridiana_a">a</div>
		</div>
	</div>
	<div class="loading_second-line">
		<div class="loading_second-line_interiors">
			<div class="loading_interiors_i">i</div>
			<div class="loading_interiors_n">n</div>
			<div class="loading_interiors_t">t</div>
			<div class="loading_interiors_e">e</div>
			<div class="loading_interiors_r">r</div>
			<div class="loading_interiors_i2">i</div>
			<div class="loading_interiors_o">o</div>
			<div class="loading_interiors_r">r</div>
			<div class="loading_interiors_s">s</div>
		</div>
		<div class="loading_second-line_e">
			<div class="loading_e">&</div>
		</div>
		<div class="loading_second-line_design">
			<div class="loading_design_d">d</div>
			<div class="loading_design_e">e</div>
			<div class="loading_design_s">s</div>
			<div class="loading_design_i">i</div>
			<div class="loading_design_g">g</div>
			<div class="loading_design_n">n</div>
		</div>
	</div>
</div>
<?php endwhile; ?>

<?php
get_footer();