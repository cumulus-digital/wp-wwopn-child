<?php

namespace WWOPN_Child;

if (!defined('ABSPATH')) {
    die('No direct access allowed');
}

function frontendScriptsAndStyles()
{
    if (
        $GLOBALS['pagenow'] != 'wp-login.php'
        && ! \is_admin()
    ) {
        $assets = include(
            child_theme_path() . '/build/child_frontend.asset.php'
        );
        \wp_register_script(
            CHILD_PREFIX . '_script-frontend',
            child_theme_url() . '/build/child_frontend.js',
            array_merge(
                $assets['dependencies'],
                array(
                    PARENT_PREFIX . '_script-frontend'
                )
            ),
            $assets['version'],
            true
        );
        \wp_enqueue_script(CHILD_PREFIX . '_script-frontend');

        \wp_register_style(
            CHILD_PREFIX . '_style',
            child_theme_url() . '/build/child_frontend.css',
            array(PARENT_PREFIX . '_style'),
            null,
            'all'
        );
        \wp_enqueue_style(CHILD_PREFIX . '_style');
    }
}
\add_action('wp_enqueue_scripts', ns('frontendScriptsAndStyles'));

// Do not add srcset if we specifically request full size images
\add_filter('post_thumbnail_size', function ($size) {
    if (is_string($size) && 'full' === $size) {
        \add_filter(
            'wp_calculate_image_srcset_meta',
            ns('__return_null_and_remove_current_filter')
        );
    }
    return $size;
});
function __return_null_and_remove_current_filter($var)
{
    \remove_filter(current_filter(), __FUNCTION__);
    return null;
}

// Order search results by post type
function searchOnlyPostTypes($order = '')
{
    if (\is_main_query() && \is_search()) {
        //$query->set('orderby', array('post_type' => 'asc', 'date' => 'desc'));
        global $wpdb;
        $neworder =
            "FIELD({$wpdb->posts}.post_type, 'page', 'wpn_podcast', 'wpn_prs')," .
            "CASE
				WHEN {$wpdb->posts}.post_type='page' THEN {$wpdb->posts}.post_date
				WHEN {$wpdb->posts}.post_type='wpn_prs' THEN {$wpdb->posts}.post_date
			END DESC," .
            "CASE WHEN {$wpdb->posts}.post_type='wpn_podcast' THEN {$wpdb->posts}.post_title END ASC";
        return $neworder;
    }
    return $order;
}
\add_filter('posts_orderby', ns('searchOnlyPostTypes'));

// Filter possible search post types
function searchFieldOnlyPostTypes($post_types)
{
    return 'page,wpn_podcast,wpn_prs';
}
\add_filter('search_field_post_types', ns('searchFieldOnlyPostTypes'));
