#!/bin/bash
cpy 'src/index.html' dist
webpack --config webpack-production.config.js --progress --colors --watch
