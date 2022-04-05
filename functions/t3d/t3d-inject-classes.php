<?php
/**
 * Inject t3d classes and styles into blocks
 */

namespace WWOPN_Child;

if (!defined('ABSPATH')) {
    die('No direct access allowed');
}

add_filter('render_block', function ($block_content, $block, $instance) {
    $affectedBlocks = [
        'core/paragraph',
        'core/heading',
        'kadence/advancedheading'
    ];

    if (! in_array($block['blockName'], $affectedBlocks)) {
        return $block_content;
    }

    $attrs = $block['attrs'];

    if (isset($attrs['t3dEnabled']) && $attrs['t3dEnabled']) {
        $block_content = preg_replace('/--t3d-color:\s?#[a-zA-Z0-9]+/', '', $block_content);
        $block_content = preg_replace('/\s?t3d\-[a-zA-Z\-]+\s?/', ' ', $block_content);
        $class = [];
        if (isset($attrs['t3dDirection'])) {
            $class[] = "t3d-direction-{$attrs['t3dDirection']}";
        } else {
            $class[] = "t3d-direction-left";
        }
        if (isset($attrs['t3dLength'])) {
            $class[] = "t3d-length-{$attrs['t3dLength']}";
        } else {
            $class[] = "t3d-length-short";
        }
        if (isset($attrs['t3dStroke'])) {
            $class[] = 't3d-stroke';
        }
        $style = '';
        if (isset($attrs['t3dCustomColor'])) {
            $style .= '--t3d-color:' . esc_attr($attrs['t3dCustomColor']);
        }
        $block_content = str_replace('class="', 'class="' . implode(' ', $class) . ' ', $block_content);
        if (stripos($block_content, 'style=')) {
            $block_content = str_replace('style="', 'style="' . $style . ';', $block_content);
        } else {
            $block_content = str_replace('class=', 'style="' . $style . '" class=', $block_content);
        }
    }
    return $block_content;
}, 10, 3);
