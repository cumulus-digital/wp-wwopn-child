<?php
/**
 * WWOPN Child theme
 * Single WPN_PODCAST template
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

\get_header();

$header_color = false;
$header_3d_color = false;
$header_image = array(
	'id' => null,
	'post' => null,
	'url' => null
);
$page_subtitle = null;
$genres = null;
$tags = array();
$popular_tags = array();
$store_links = array();
$social_links = array();
$player_embed = null;

if (\get_the_ID()) {
	$header_color = \get_post_meta(\get_the_id(), '_wpn_podcast_meta_headercolor', true);
	$header_image['id'] = \get_post_meta(\get_the_ID(), '_wpn_podcast_meta_headerimage', true);
	if ($header_image['id']) {
		$header_image['post'] = \get_post($header_image['id']);
		$header_image['url'] = \wp_get_attachment_image_src($header_image['post']->ID, 'full')[0];
	}
	$header_3d_color = \get_post_meta(\get_the_id(), '_wpn_podcast_meta_header3dcolor', true);

	$page_subtitle = \WWOPN_Podcast\CPT::getSubTitle();
	$genres = \wp_get_post_terms(\get_the_ID(), 'wpn_podcast_genre');
	$tags = \wp_get_post_terms(\get_the_ID(), 'wpn_podcast_tag', array('fields' => 'all'));
	if ($tags) {
		$popular_tags = \wp_tag_cloud(array(
			'taxonomy' => 'wpn_podcast_tag',
			'format' => 'array',
			'include'  => array_column($tags, 'term_id'),
			'number' => 3,
			'orderby' => 'count',
			'order' => 'DESC',
			'echo' => false,
			'smallest' => 1,
			'largest' => 1,
			'unit' => 'em',
		));
	}
	$store_links = \WWOPN_Podcast\CPT::getStoreLinks();
	$social_links = \WWOPN_Podcast\CPT::getSocialLinks();
	$player_embed = \WWOPN_Podcast\CPT::getPlayerEmbed();
}
?>

<main role="main" class="single podcast">

	<div class="row">
		<div class="row-container">
			<?php while (\have_posts()): \the_post() ?>

				<article
					id="podcast-<?php \the_ID() ?>"
					<?php \post_class(array('podcast')) ?>
					itemscope itemtype="http://schema.org/RadioSeries"
				>
					<?php if ($header_color): ?>
						<style>
							article#podcast-<?php \the_ID() ?> header.page_title {
								background-color: <?php echo \esc_html($header_color) ?>;
							}
						</style>
					<?php endif; ?>
					<?php if ($header_3d_color): ?>
						<style>
							article#podcast-<?php \the_ID() ?> header.page_title h1,
							article#podcast-<?php \the_ID() ?> header.page_title h2 {
								--t3d-color: <?php echo \esc_html($header_3d_color) ?>;
							}
						</style>
					<?php endif; ?>
					<header
						class="
							row
							alignfull
							page_title
							<?php echo $header_color ? 'has_header_color' : '' ?>
							<?php echo $header_image['url'] ? 'has_header_image' : '' ?>
							<?php echo $page_subtitle ? 'has_subtitle' : '' ?>
						"
					>

						<div class="header-bg-container">
							<?php if ($header_image['url']): ?>
								<img src="<?php echo $header_image['url'] ?>" alt="">
							<?php endif ?>
						</div>

						<div class="row-container">

							<?php if (\has_post_thumbnail()): ?>
								<figure class="featured_image">
									<a href="<?php \the_permalink() ?>" title="<?php echo \the_title() ?>">
										<?php \the_post_thumbnail('full', [ 'alt' => \esc_attr(\get_the_title()) ]); ?>
									</a>
								</figure>
							<?php endif ?>

							<div class="title">

								<div class="meta">
									<div class="genres">
										<?php if ($genres): ?>
											<?php foreach($genres as $genre): ?>
												<a href="<?php echo \esc_url(\get_term_link($genre)) ?>" rel="tag" itemprop="genre" title="See more <?php echo \esc_attr($genre->name) ?> podcasts">
													<?php echo \esc_html($genre->name) ?>
												</a>
												<?php echo next($genres) ? ', ' : '' ?>
											<?php endforeach ?>
										<?php endif ?>
									</div>
									<?php if ($popular_tags): ?>
										<aside class="tags">
											<ul
												itemprop="keywords"
												content="<?php echo implode(', ', array_column($tags, 'name')) ?>"
											>
												<?php foreach($popular_tags as $tag): ?>
													<li><?php echo $tag ?></li>
												<?php endforeach ?>
											</ul>
										</aside>
									<?php endif ?>
								</div>

								<h1
									itemprop="name headline"
									content="<?php echo \get_the_title() ?>"
									class="t3d-color-highlight t3d-direction-right t3d-length-long"
								>
									<?php \the_title() ?>
								</h1>
								<?php if ($page_subtitle): ?>
									<h2
										itemprop="alternativeHeadline"
										class="t3d-color-highlight t3d-direction-right t3d-length-long"
									>
										<?php echo \esc_html($page_subtitle); ?>
									</h2>
								<?php endif ?>
							</div>

						</div>
					</header>

					<div class="body">

						<?php if ($store_links): ?>
							<aside class="storelinks">
								<ul>
									<?php foreach($store_links as $store=>$storelink): ?>
										<li class="<?php echo \esc_attr($store) ?>">
											<a
												href="<?php echo \esc_url($storelink) ?>"
												target="_blank"
												rel="noopener"
												class="storelink"
												data-podcast-id="<?php \the_ID() ?>"
												data-podcast-title="<?php \the_title_attribute() ?>"
												data-store="<?php echo \esc_attr($store) ?>"
											>
												<?php if (get_static_asset('badges', $store, 'svg')): ?>
													<img src="<?php echo get_static_asset('badges', $store, 'svg') ?>" alt="listen on <?php echo \esc_attr($store)?>">
												<?php else: ?>
													listen on <?php echo \esc_html($store) ?>
												<?php endif ?>
											</a>
										</li>
									<?php endforeach ?>
								</ul>
							</aside>
						<?php endif ?>

						<div class="description">
							<div class="description-body">
								<?php \the_content() ?>
							</div>

							<?php if ($social_links): ?>
								<aside class="social">
									<ul>
										<?php foreach($social_links as $service=>$link): ?>
											<li class="<?php echo \esc_attr($service) ?>">
												<a
													href="<?php echo \esc_url($link) ?>"
													taget="_blank"
													rel="noopener"
												>
													<?php if (get_static_asset('social', $service, 'svg')): ?>
														<img src="<?php echo get_static_asset('social', $service, 'svg') ?>" alt="">
													<?php endif ?>
													<span><?php echo \esc_html(ucfirst($service)) ?></span>
												</a>
											</li>
										<?php endforeach ?>
									</ul>
								</aside>
							<?php endif ?>

							<?php if ($tags): ?>
								<aside class="tags">
									<h5>Tags:</h5>
									<?php
										\the_terms(
											\get_the_ID(),
											'wpn_podcast_tag',
											'', '', ''
										)
									?>
								</aside>
							<?php endif ?>
						</div>

						<?php if ($player_embed): ?>
							<div class="player_embed"><?php echo $player_embed ?></div>
						<?php endif ?>

					</div>

				</article>

			<?php endwhile ?>
		</div>
	</div>

</main>

<?php
\get_footer();