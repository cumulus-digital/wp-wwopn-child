<?php
/**
 * CMLS Base Theme
 * Template
 * Masthead Menu
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

\get_header();
?>
<main role="main" class="search">

	<header class="row page_title">
		<div class="row-container">
			<h1 class="t3d-color-brand t3d-direction-left t3d-length-medium has-highlight-color">Search Results</h1>
			<?php \get_template_part('templates/masthead/search') ?>
		</div>
	</header>

	<?php if (\have_posts()): ?>

		<div class="row">
			<div class="row-container">
			<?php while (\have_posts()): \the_post() ?>

				<?php \get_template_part('templates/pages/excerpt', make_post_class()); ?>
				
			<?php endwhile ?>
			</div>
		</div>

		<?php if (is_paginated()): ?>
			<?php \get_template_part('templates/pages/pagination'); ?>
		<?php endif ?>

	<?php else: ?>

		<article class="row">
			<div class="row-container">
				<p>Sorry, nothing found.</p>
			</div>
		</article>

	<?php endif ?>

</main>
<?php
\get_footer();