<?php
/**
 * Helper functions
 */
namespace CMLS_Base;
if (!defined('ABSPATH')) die('No direct access allowed');

/**
 * Namespace a given function or class name, given as a string.
 *
 * @param string $str
 * @return string
 */
function ns($str) {}

/**
 * Return the URL of this theme's directory URL.
 *
 * @return string
 */
function theme_url() {}

/**
 * Return the URL of the active theme's directory URL. If a child theme
 * is active, this will return that theme's URL.
 *
 * @return string
 */
function child_theme_url() {}

/**
 * Return the filesystem path of this theme's directory.
 *
 * @return string
 */
function theme_path() {}

/**
 * Return the filesystem path of the active theme directory.
 * If a child theme is active, this will return that theme's path.
 *
 * @return void
 */
function child_theme_path() {}

/**
 * find and return an array value by key, with an optional default value
 * if the key does not exist.
 *
 * @param array $array
 * @param string $key
 * @param mixed $default
 * @return mixed
 */
function gav($array, $key, $default = null) {}

/**
 * Determine if a given array key value is filled
 *
 * @param array $array
 * @param string $key
 * @return boolean
 */
function hav($array, $key) {}

/**
 * Return a basic post title without "protected" or "private" prepends,
 * but still filtered by the_title filter.
 *
 * @param integer $post_id
 * @return string
 */
function base_post_title($post = 0) {}

/**
 * Convert a given hex color value to an array of R, G, and B values
 *
 * @param string $hex
 * @return array
 */
function getRGB($hex) {}

/**
 * Convert a given hex value to an "R, G, B" string
 *
 * @param string $hex
 * @return string
 */
function rgbS($hex) {}

/**
 * Return the copyright field from the theme customizer
 *
 * @return string
 */
function getCopyright() {}

/**
 * Determine if the current WP query is paginated
 *
 * @return boolean
 */
function is_paginated() {}

/**
 * Fetch a relative link to a file post's actual image file
 *
 * @param mixed $post
 * @return string|null
 */
function getURLFromFilePost($post) {}