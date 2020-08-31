<?php
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');

function frontendScriptsAndStyles() {
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
