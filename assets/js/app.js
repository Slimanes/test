/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
require ('../css/app.css');

// start the Stimulus application
//import './bootstrap';
import $ from 'jquery';
//global.$ = $;
import 'bootstrap';

console.log('Hello web pack encore it\'s Itachi !!');

$(document).ready(function () {
    console.log('jquery marche');

});
