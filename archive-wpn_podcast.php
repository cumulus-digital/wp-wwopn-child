<?php
/**
 * WWOPN Child theme
 * Override default Podcast archive with page identified
 * by the slug "pods"
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

\query_posts('pagename=pods');
\get_header();
?>

<main role="main" class="single">

    <div class="row">
        <div class="row-container">
            <?php while (\have_posts()): \the_post() ?>

                <?php \get_template_part('templates/pages/base'); ?>

            <?php endwhile ?>
        </div>
    </div>

</main>

<?php
\get_footer();
