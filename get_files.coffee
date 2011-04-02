#!/usr/bin/env coffee

_ = require "underscore"
root._ = _
require "./drews-mixins.coffee"


getExtension = (file) ->
  file = file.split "."
  file[file.length - 1]

addToObjectArray = (obj, key, arrayValue) ->
  arr = obj[key]
  if not obj[key]
    obj[key] = []
  obj[key] = arrayValue

addFileToFilesToOutput = (file, done) ->
  extension = getExtension file
  fs.readFile "./examples/#{file}", (err, data) ->
    console.log file
    addToObjectArray filesToOutput, extension, {name: file, content: data.toString()}
    done()


fs = require "fs"
filesToOutput = {}
fs.readdir "./examples", (err, files) ->
  todos = []
  for file in files
    todos.push (done) ->
      addFileToFilesToOutput(file, done)
    _.doThese todos, (results) ->
      filesCode = """
        var files = #{JSON.stringify(filesToOutput)};
      """
      fs.writeFile "./examples.js", filesCode, (err) ->
        if err then throw err
        console.log "saved"
