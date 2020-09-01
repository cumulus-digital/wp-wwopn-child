<?php
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

function registerBackendScriptsAndStyles() {
    $assets = include(
        child_theme_path() . '/build/child_backend.asset.php'
    );
    \wp_register_script(
        CHILD_PREFIX . '-backend_scripts',
        child_theme_url() . '/build/child_backend.js',
        $assets['dependencies'],
        $assets['version'],
        true
    );
    if (\is_admin()) {
        \wp_enqueue_script(CHILD_PREFIX . '-backend_scripts');
    }
}
\add_action('init', ns('registerBackendScriptsAndStyles'));

function enqueueEditorAssets() {
    \wp_enqueue_script(CHILD_PREFIX . '-backend_scripts');
}
//\add_action('enqueue_block_editor_assets', ns('enqueueEditorAssets'));

function editorSetupStyles() {
    \add_editor_style('build/child_backend.css');
}
\add_action( 'after_setup_theme', ns('editorSetupStyles'), 11);
