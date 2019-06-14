/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI_Palette_Mgmnt/UI_Palette_Mgmnt/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
