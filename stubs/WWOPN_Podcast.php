<?php
namespace WWOPN_Podcast;

class CPT {
    static function register() {}
    static function rest_register_featuredimage(){}
    static function getID($pod_id) {}
    /**
	 * Retrieve featured image URL for given podcast
	 * @param  WP_Post|array|integer  $pod_id        podcast
	 * @return string|null
	 */
    static function getFeaturedImage($pod_id = NULL) {}
    static function getSocialLinks($pod_id = NULL) {}
    static function getStoreLinks($pod_id = NULL) {}
    static function getPlayerEmbed($pod_id = NULL) {}
    static function getSubtitle($pod_id = NULL) {}
}

class Tag {}
class Genre {}