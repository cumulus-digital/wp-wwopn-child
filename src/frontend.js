import './frontend.scss';
import jQuery from 'jquery';

window.CHILD_PREFIX = "wwopn_child";

let $j = jQuery.noConflict();

// Additional head CSS files for cssVars ponyfill
window.additionalCssIncludes = window.additionalCssIncludes || [];
window.additionalCssIncludes.push(
    'link#' + window.CHILD_PREFIX + '_style-css'
);

(function($, window, undefined) {

    $(function(){

        // Note iframes that have finished loading
        $('iframe').on('load', function() {
            this.classList += ' loaded';
        });

        // .tgmp-onair class links can open TGMP's onair tray
        $('body').on('click', function(e) {
            if (
                window.tgmp &&
                e.target.is('.tgmp_onair, .tgmp_onair a')
            ) {
                e.preventDefault();
                window.tgmp.onair();
            }
        });

    });

}($j, window.self));