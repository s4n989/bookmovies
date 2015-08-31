/**
 * Created by sandepan on 7/28/2015.
 */

define(['app', '../services/movieServices'], function (app, movieServices) {
    app.MovieRoute = Ember.Route.extend({
        model: function () {
            return movieServices.getBookingStatus();
        },
        setupControllers: function (controller, model) {
            var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            var columnCount = 12;
            var seats = [];
            var bookedSeats = model.bookedSeats ? model.bookedSeats : [];
            for (var i = 0; i < rows.length; i++) {
                for (var j = 0; j < columnCount; j++) {
                    if (bookedSeats.indexOf(rows[i] + j) > -1) {
                        seats[i][j] = true;
                    } else {
                        seats[i][j] = false;
                    }
                }
            }
            controller.setProperties({
                bookedSeats: bookedSeats,
                seats: seats,
                rows: rows,
                columnCount: columnCount
            })
        }
    });
})