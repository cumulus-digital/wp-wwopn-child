<?php
/**
 * WWOPN Child theme
 * Override default Podcast archive with page identified
 * by the slug "pods"
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

\query_posts('pagename=pods');

$genres = \get_terms(array(
	'taxonomy' => 'wpn_podcast_genre',
	'hide_empty' => true
));
array_walk($genres, function($genre){
	$genre->link = \get_term_link($genre);
});

\get_header();
?>

<main role="main" class="single podcasts">

	<div class="row">
		<div class="row-container">
			<?php while (\have_posts()): \the_post() ?>

				<?php \get_template_part('templates/pages/base'); ?>

			<?php endwhile ?>
		</div>
	</div>

</main>

<?php if ($genres): ?>
	<section class="genre-features">
		<?php foreach($genres as $genre): ?>
			<div class="row">
				<div class="row-container">
					<article class="genre">
						<header>
							<h2 class="t3d-color-highlight t3d-direction-left t3d-length-medium">
								<a href="<?php echo $genre->link ?>" title="View all <?php echo \esc_attr($genre->name) ?>">
									<?php echo \esc_html($genre->name) ?>
								</a>
							</h2>
							<a href="<?php echo $genre->link ?>" title="View all <?php echo \esc_attr($genre->name) ?>" class="more">
								View all
							</a>
						</header>
						<div class="body">
							<?php echo \do_shortcode('[podcasts-genre id=' . $genre->term_id . ']') ?>
						</div>
					</article>
				</div>
			</div>
		<?php endforeach ?>
	</section>
<?php endif ?>

<?php
\get_footer();
