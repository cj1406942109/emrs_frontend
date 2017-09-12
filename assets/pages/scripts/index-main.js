require.config({
    baseUrl: "../assets/",
    paths: {
        /**
         * if lt IE 9
         * "respond":"global/plugins/respond.min",
         * "excanvas":"global/plugins/excanvas.min",
         * "ie8.fix":"global/plugins/ie8.fix.min",
         * endif
         */

        /**
         *  BEGIN CORE PLUGINS
         */
        "jQuery": "global/plugins/jquery.min",
        "vue": "global/plugins/vue.min",
        "bootstrap": "global/plugins/bootstrap/js/bootstrap.min",
        "js.cookie": "global/plugins/js.cookie.min",
        "jquery.slimscroll": "global/plugins/jquery-slimscroll/jquery.slimscroll.min",
        "jquery.blockui": "global/plugins/jquery.blockui.min",
        "bootstrap-switch": "global/plugins/bootstrap-switch/js/bootstrap-switch.min",
        /**
         *  BEGIN CORE PLUGINS
         */

        /**
         *  BEGIN PAGE LEVEL PLUGINS
         */
        "moment": "global/plugins/moment.min",
        "daterangepicker": "global/plugins/bootstrap-daterangepicker/daterangepicker.min",
        "raphael": "global/plugins/morris/raphael-min",
        "morris": "global/plugins/morris/morris.min",
        "jquery.waypoints": "global/plugins/counterup/jquery.waypoints.min",
        "jquery.counterup": "global/plugins/counterup/jquery.counterup.min",
        "amcharts": "global/plugins/amcharts/amcharts/amcharts",
        "serial": "global/plugins/amcharts/amcharts/serial",
        "pie": "global/plugins/amcharts/amcharts/pie",
        "radar": "global/plugins/amcharts/amcharts/radar",
        "light": "global/plugins/amcharts/amcharts/themes/light",
        "patterns": "global/plugins/amcharts/amcharts/themes/patterns",
        "chalk": "global/plugins/amcharts/amcharts/themes/chalk",
        "ammap": "global/plugins/amcharts/ammap/ammap",
        "worldLow": "global/plugins/amcharts/ammap/maps/js/worldLow",
        "amstock": "global/plugins/amcharts/amstockcharts/amstock",
        "fullcalendar": "global/plugins/fullcalendar/fullcalendar.min",
        "horizontal-timeline": "global/plugins/horizontal-timeline/horizontal-timeline",
        "jquery.flot": "global/plugins/flot/jquery.flot.min",
        "jquery.flot.resize": "global/plugins/flot/jquery.flot.resize.min",
        "jquery.flot.categories": "global/plugins/flot/jquery.flot.categories.min",
        "jquery.easypiechart": "global/plugins/jquery-easypiechart/jquery.easypiechart.min",
        "jquery.sparkline": "global/plugins/jquery.sparkline.min",
        "jquery.vmap": "global/plugins/jqvmap/jqvmap/jquery.vmap",
        "jquery.vmap.russia": "global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia",
        "jquery.vmap.world": "global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world",
        "jquery.vmap.europe": "global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe",
        "jquery.vmap.germany": "global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany",
        "jquery.vmap.usa": "global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa",
        "jquery.vmap.sampledata": "global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata",
        /**
         *  END PAGE LEVEL PLUGINS
         */

        /**
         *  BEGIN THEME GLOBAL SCRIPTS
         */
        "app": "global/scripts/app.min",
        /**
         *  END THEME GLOBAL SCRIPTS
         */

        /**
         *  BEGIN PAGE GLOBAL SCRIPTS
         */
        "dashboard": "pages/scripts/dashboard.min",
        /**
         *  END PAGE GLOBAL SCRIPTS
         */

        /**
         *  BEGIN THEME LAYOUT SCRIPTS
         */
        "layout": "layouts/layout/scripts/layout.min",
        "demo": "layouts/layout/scripts/demo.min",
        "quick-sidebar": "layouts/global/scripts/quick-sidebar.min",
        "quick-nav": "layouts/global/scripts/quick-nav.min",
        /**
         *  END THEME LAYOUT SCRIPTS
         */
    },

    shim: {
        "jQuery": { exports: "$" },
        "bootstrap": { deps: ["jQuery"] },
        "jquery.slimscroll": { deps: ["jQuery"] },
        "jquery.blockui": { deps: ["jQuery"] },
        "bootstrap-switch": { deps: ["jQuery"] },
        "daterangepicker": { deps: ["jQuery", "moment"] },
        "morris": { deps: ["jQuery", "raphael"] },
        "jquery.waypoints": { deps: ["jQuery"] },
        "jquery.counterup": { deps: ["jquery.waypoints"] },
        "serial": { deps: ["amcharts"] },
        "pie": { deps: ["amcharts"] },
        "radar": { deps: ["amcharts"] },
        "light": { deps: ["amcharts"] },
        "patterns": { deps: ["amcharts"] },
        "chalk": { deps: ["amcharts"] },
        "worldLow": { deps: ["ammap"] },
        "amstock": { deps: ["amcharts"] },
        "fullcalendar": { deps: ["jQuery", "moment"] },
        "horizontal-timeline": { deps: ["jQuery"] },
        "jquery.flot": { deps: ["jQuery"] },
        "jquery.flot.resize": { deps: ["jquery.flot"] },
        "jquery.flot.categories": { deps: ["jquery.flot"] },
        "jquery.easypiechart": { deps: ["jQuery"] },
        "jquery.sparkline": { deps: ["jQuery"] },
        "jquery.vmap": { deps: ["jQuery"] },
        "jquery.vmap.russia": { deps: ["jquery.vmap"] },
        "jquery.vmap.world": { deps: ["jquery.vmap"] },
        "jquery.vmap.europe": { deps: ["jquery.vmap"] },
        "jquery.vmap.germany": { deps: ["jquery.vmap"] },
        "jquery.vmap.usa": { deps: ["jquery.vmap"] },
        "jquery.vmap.sampledata": { deps: ["jquery.vmap"] },
        "app": { deps: ["bootstrap", "jquery.slimscroll", "jquery.blockui", "bootstrap-switch"] },
        "dashboard": { deps: ["app", "daterangepicker", "jquery.vmap", "fullcalendar", "jquery.easypiechart", "jquery.sparkline", "morris", "serial", "pie", "radar", "light", "patterns"] },
        "demo": { deps: ["app"] },
        "layout": { deps: ["app"] },
        "quick-sidebar": { deps: ["app"] },
        "quick-nav": { deps: ["app"] },
    },
    wrapShim: true
});

require(
    [
        /**
         * if lt IE 9
         * "respond",
         * "excanvas",
         * "ie8.fix",
         * endif
         */

        /**
         *  BEGIN CORE PLUGINS
         */
        "jQuery",
        "vue",
        "bootstrap",
        "js.cookie",
        "jquery.slimscroll",
        "jquery.blockui",
        "bootstrap-switch",
        /**
         *  BEGIN CORE PLUGINS
         */

        /**
         *  BEGIN PAGE LEVEL PLUGINS
         */
        "moment",
        "daterangepicker",
        "morris",
        "raphael",
        "jquery.waypoints",
        "jquery.counterup",
        "amcharts",
        "serial",
        "pie",
        "radar",
        "light",
        "patterns",
        "chalk",
        "ammap",
        "worldLow",
        "amstock",
        "fullcalendar",
        "horizontal-timeline",
        "jquery.flot",
        "jquery.flot.resize",
        "jquery.flot.categories",
        "jquery.easypiechart",
        "jquery.sparkline",
        "jquery.vmap",
        "jquery.vmap.russia",
        "jquery.vmap.world",
        "jquery.vmap.europe",
        "jquery.vmap.germany",
        "jquery.vmap.usa",
        "jquery.vmap.sampledata",
        /**
         *  END PAGE LEVEL PLUGINS
         */

        /**
         *  BEGIN THEME GLOBAL SCRIPTS
         */
        "app",
        /**
         *  END THEME GLOBAL SCRIPTS
         */

        /**
         *  BEGIN PAGE GLOBAL SCRIPTS
         */
        "dashboard",
        /**
         *  END PAGE GLOBAL SCRIPTS
         */

        /**
         *  BEGIN THEME LAYOUT SCRIPTS
         */
        "layout",
        "demo",
        "quick-sidebar",
        "quick-nav",
        /**
         *  END THEME LAYOUT SCRIPTS
         */
    ],
    function($) {

        $(document).ready(function() {
            alert('hello');
        });
    }
);