<?php
/**
 * WWOPN Child theme
 * Template
 * Header for podcast taxonomies
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');
?>

<header class="row page_title taxonomy_header">
    <div class="row-container">
        <a href="/pods" class="backlink">Back <span>to the Pods</span></a>
        <h1 class="t3d-color-black t3d-direction-left t3d-length-medium">
            <?php if (\is_tax('wpn_podcast_tag')): ?>
                <span>Tag:</span>
            <?php endif ?>
            <?php echo \esc_html(\single_term_title()) ?>
        </h1>
    </div>
</header>

<?php $current_term = \get_queried_object() ?>
<?php if ($current_term && $current_term->taxonomy !== 'wpn_podcast_tag'): ?>
    <?php $tax_tags = get_category_tags($current_term, 'wpn_podcast_tag') ?>
    <?php if (count($tax_tags)): ?>
        <aside class="tags">
            <div class="row-container">
                Tags:
                <?php echo \wp_generate_tag_cloud($tax_tags, array(
                    'smallest' => 1,
                    'largest' => 1,
                    'unit' => 'em',
                    'orderby' => 'count',
                    'order' => 'DESC'
                )) ?>
            </div>
        </aside>
    <?php endif ?>
<?php endif ?>