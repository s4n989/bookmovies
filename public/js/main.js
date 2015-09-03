/**
 * Created by sandepan on 7/28/2015.
 */
require.config({
    baseUrl: 'js',
    waitSeconds: 0,
    paths: {
        jquery: 'libs/jquery.min',
        ember: 'libs/ember',
        handlebars: 'libs/handlebars',
        underscore: 'libs/underscore.min',
        text: 'libs/text-loader-plugin',
        ember_template: 'libs/ember-template-compiler',
        d3:'libs/d3.min',
        Q:'libs/q',
        jquerySeat:'libs/jquery.seat-charts.min'
    },

    shim: {
        ember: {
            deps: ['jquery','handlebars'],
            exports: 'Ember'
        },
        jquerySeat:{
          deps:['jquery']
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'handlebars'
        },
        d3:{
            exports:'d3'
        }
    }
});

require([
    'app',

    'routes/movieRoute',

    'controllers/movieController',

    'views/movieView',

    'services/movieServices'
]);