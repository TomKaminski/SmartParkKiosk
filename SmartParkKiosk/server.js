﻿var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');
connect().use(serveStatic('./www/')).listen(3000);