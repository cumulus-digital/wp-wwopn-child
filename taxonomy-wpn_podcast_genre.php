<?php
/**
 * WWOPN Child theme
 * Listing of podcasts within a genre
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

\get_header();
?>

<main role="main" class="archive taxonomy podcasts">

    <?php \get_template_part('templates/podcasts/taxonomy-header') ?>

    <?php if (\have_posts()): ?>
        
        <div class="row">
            <div class="row-container cards">
            <?php while (\have_posts()): \the_post() ?>

                <?php \get_template_part('templates/pages/base') ?>

            <?php endwhile ?>
            </div>
        </div>

        <?php if (is_paginated()): ?>
            <?php \get_template_part('templates/pages/pagination') ?>
        <?php endif ?>

    <?php else: ?>
        <article class="row">
            <div class="row-container">
                There are no podcasts here! <a href="/pods">Check out the rest of our shows</a>.
            </div>
        </article>
    <?php endif ?>

</main>

<?php
\get_footer();