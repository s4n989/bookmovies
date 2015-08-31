/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app', "text!templates/movie.hbs"], function (app, movieTemplate) {
    app.MovieView = Ember.View.extend({
        template: Ember.Handlebars.compile(movieTemplate)
    })
})