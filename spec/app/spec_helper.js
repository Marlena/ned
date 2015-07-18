require('babel/polyfill');
require('jasmine_dom_matchers');
require('jasmine-ajax');
require('../spec_helper');

var jQuery = require('jquery');
var MockPromises = require('mock-promises');
var React = require('react');
var {Promise} = require('es6-promise');
var {withContext} = require('./support/react_helper');

global.oldPromise = global.Promise;
global.MockPromise = Promise;

Object.assign(global, {
  $: jQuery,
  jQuery,
  MockPromises,
  Promise,
  React,
  withContext,
  ned: {}
});

beforeEach(function() {
  $('body').find('#root').remove().end().append('<div id="root"/>');

  var Cursor = require('pui-cursor');
  Cursor.async = false;

  var Layout = require('../../server/components/layout');
  spyOn(Layout, 'init');
  jasmine.clock().install();
  jasmine.Ajax.install();
  MockPromises.install(Promise);
});

afterEach(function() {
  jasmine.clock().tick(1);
  jasmine.clock().uninstall();
  jasmine.Ajax.uninstall();
  MockPromises.contracts.reset();
});