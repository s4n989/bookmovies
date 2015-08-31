/**
 * Created by sandepan on 7/28/2015.
 */
define(['ember'],
    function(Ember) {
        var app = Ember.Application.create({
            LOG_TRANSITIONS: true
        });

        app.Router.map(function() {
            this.route('movie', { path: '/' });
        });
        window.App = app;

        return app;
    }
);
