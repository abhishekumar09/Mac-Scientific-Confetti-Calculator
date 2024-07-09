"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
// Calculate height without padding.
function innerHeight(el) {
  var style = window.getComputedStyle(el, null);
  // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34
  if (!style) return el.clientHeight;
  return el.clientHeight - parseInt(style.getPropertyValue("padding-top"), 10) - parseInt(style.getPropertyValue("padding-bottom"), 10);
}

// Calculate width without padding.
function innerWidth(el) {
  var style = window.getComputedStyle(el, null);
  // Hidden iframe in Firefox returns null, https://github.com/malte-wessel/react-textfit/pull/34
  if (!style) return el.clientWidth;
  return el.clientWidth - parseInt(style.getPropertyValue("padding-left"), 10) - parseInt(style.getPropertyValue("padding-right"), 10);
}