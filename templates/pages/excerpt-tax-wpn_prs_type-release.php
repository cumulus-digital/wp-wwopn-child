<?php
/**
 * WWOPN Child theme
 * Template
 * Override for wpn_prs_type excerpts
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

$title_tag = 'h2';
$show_image = true;
$show_date = true;
$show_source = true;
if ($args) {
	if (array_key_exists('title_tag', $args)) {
		$title_tag = $args['title_tag'];	
	}
	if (array_key_exists('show_image', $args)) {
		$show_image = $args['show_image'];	
	}
	if (array_key_exists('show_date', $args)) {
		$show_date = $args['show_date'];
	}
	if (array_key_exists('show_source', $args)) {
		$show_source = $args['show_source'];
	}
}
?>

<article
	id="post-<?php \the_ID() ?>"
	<?php \post_class( 'archive excerpt' ) ?>
>
	<?php if (\get_post_meta(\get_the_ID(), '_wpn_prs_meta_prlink', true)): ?>
        <a href="<?php echo \esc_url(\get_post_meta(\get_the_ID(), '_wpn_prs_meta_prlink', true)) ?>" title="<?php \esc_attr(\get_the_title()) ?>" target="_blank" rel="nofollow noopener">
    <?php else: ?>
        <a href="<?php \the_permalink() ?>" title="<?php echo \esc_attr(\get_the_title()) ?>">
    <?php endif ?>
		<?php if ($show_image): ?>
			<?php \get_template_part('templates/pages/featured_image'); ?>
		<?php endif ?>
		<header>
			<<?php echo $title_tag ?>>
				<?php \the_title() ?>
			</<?php echo $title_tag ?>>
			<?php if ($show_date || $show_source): ?>
			<div class="meta">
				<?php if ($show_date): ?>
				<time datetime="<?php echo \get_the_date('Y-m-d', get_the_ID()) ?>">
					<?php echo \get_the_date('F j, Y', get_the_ID())?>
				</time>
				<?php endif ?>
				<?php if ($show_source && \get_post_meta(get_the_ID(), '_wpn_prs_meta_prsource', true)): ?>
					<div class="source">
						<?php echo \esc_html(\get_post_meta(get_the_ID(), '_wpn_prs_meta_prsource', true)) ?>
					</div>
				<?php endif ?>
			</div>
			<?php endif ?>
		</header>
		<div class="body">
			<?php echo \wp_trim_excerpt(\get_the_excerpt()) ?>
		</div>
	</a>
</article>