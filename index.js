'use strict'
var yaml = require('js-yaml')

exports.name = 'yaml'
exports.outputFormat = 'json'

exports.render = function (str) {
  return JSON.stringify(yaml.safeLoad(str))
}
