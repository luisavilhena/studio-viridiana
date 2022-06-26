<?php
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'studio_viridiana' );
 
function carousel() {
	Block::make( 'Carousel' )
		->add_fields( array(
			Field::make('text', 'text', 'Título'),
			Field::make('text', 'subtitle', 'Subtítulo'),
			Field::make('complex', 'carousel', 'Carousel')
			  ->add_fields(array(
			    Field::make('image', 'img', 'Image'),
			  ))
			  ->set_layout('tabbed-vertical')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
 
			<div class="carousel">
				<div id="carousel-img">
					<?php foreach ($block['carousel'] as $carousel) : ?>
						<?php if ($carousel['img']) : ?>
					<div class="item" style ="background-image: url('<?php echo wp_get_attachment_image_src($carousel['img'],'image_desktop_full_no_crop')[0]; ?>');">
					</div>
						<?php endif; ?>
					<?php endforeach;  ?>					
				</div>
				<div class="carousel-text">
					<h1>
						<?php echo $block['text']; ?>
					</h1>
					<p>
						<?php echo $block['subtitle']; ?>
					</p>
				</div>
			</div>

			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'carousel' );