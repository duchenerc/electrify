<?php get_header(); ?>

<article id="main" class="aside">
	<div class="c f">
		<article id="article">
				
			<h1>Category: &ldquo;<?php single_cat_title(); ?>&rdquo;</h1>
			
			<div class="listing-start cf">
				<?php if ( $desc = category_description() ) { echo $desc; } ?>
			</div>

			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'listing' ); ?>

			<?php endwhile; endif; ?>
			
			<div class="listing-end cf">
				<?php get_template_part( 'ui', 'posts-scroll' ); ?>
			</div>
		</article>
	</div>
</article>

<?php get_footer(); ?>