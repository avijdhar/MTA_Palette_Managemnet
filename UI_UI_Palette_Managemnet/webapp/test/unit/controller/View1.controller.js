/*global QUnit*/

sap.ui.define([
	"UI_Palette_Mgmnt/UI_Palette_Mgmnt/controller/View1.controller"
], function (oController) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
