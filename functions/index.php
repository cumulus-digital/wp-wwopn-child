<?php

namespace WWOPN_Child;

if (!defined('ABSPATH')) {
    die('No direct access allowed');
}

const PARENT_PREFIX = 'cmls_base';
const CHILD_PREFIX = 'wwopn_child';

require __DIR__ . '/helpers.php';
require __DIR__ . '/setup/index.php';
require __DIR__ . '/t3d/t3d-inject-classes.php';