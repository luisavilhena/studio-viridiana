<?php
 
use Carbon_Fields\Block;
use Carbon_Fields\Field;
 
add_action( 'after_setup_theme', 'studio_viridiana' );
 
function images_columns() {
	Block::make( 'Colunas com imagens' )
		->add_fields( array(
			Field::make('complex', 'imgs', 'Imagens')
			  ->add_fields(array(
			    Field::make('image', 'img', 'Imagem'),
			  ))
			  ->set_layout('tabbed-vertical')
		) )
		->set_render_callback( function ( $block ) {
 
			// ob_start();
			?>
 
			<div class="image-columns">
				<?php foreach ($block['imgs'] as $imgs) : ?>
				<div class="image-columns__item">
					<div style="background-image: url('<?php echo wp_get_attachment_image_src($imgs['img'],'vertical-b')[0]; ?>');">
					</div>
				</div>
				<?php endforeach;  ?>
			</div>
			<?php
 
			// return ob_get_flush();
		} );
}
add_action( 'carbon_fields_register_fields', 'images_columns' );