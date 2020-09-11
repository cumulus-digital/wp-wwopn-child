<?php
/**
 * Masthead Menu Search Form
 */
namespace WWOPN_Child;
if (!defined('ABSPATH')) die('No direct access allowed');
?>
<div class="search">
	<form action="/" method="get">
		<input type="hidden" name="t" value="page,wpn_podcast,wpn_prs">
		<input type="text" name="s" id="search" value="<?php \the_search_query() ?>">
		<input type="submit" value="Search">
	</form>
</div>