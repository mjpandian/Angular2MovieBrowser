"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var directors_component_1 = require('./directors.component');
platform_browser_dynamic_1.bootstrap(directors_component_1.DirectorsComponent)
    .then(function (success) { return console.log('Bootstrap Success'); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map