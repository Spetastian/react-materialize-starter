/*
    This file is going to be the entry point for webpack.
    Just to make it clear what is bundled.
    
    Webpack will be configured to do the following (see webpack.config.js):

    - By including the main react component here webpack will be able to traverse all imports from there and
    transpile all JS and JSX modules into ES5 compliant code in a single bundle that the browser can use.

    - By including index.html here webpack will be able to include the HTML code and extract that into a separate HTML 
    together with the JS bundle.

    - The same goes for app.css as for index.html.
*/

import './App'
import './index.html'
import './app.css'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'