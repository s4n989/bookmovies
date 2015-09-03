/**
 * Created by sandepan on 7/28/2015.
 */

define(['app', '../services/movieServices'], function (app, movieServices) {
    app.MovieRoute = Ember.Route.extend({
        model: function () {
            return movieServices.getBookingStatus();
        },
        setupController: function (controller, model) {
            var rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            var columns = [1,2,3,4,5,6,7,8,9,10,11,12];
            var seats = new Array();
            var bookedSeats = model.bookedSeats ? model.bookedSeats : [];
            for (var i = 0; i < rows.length; i++) {
                for (var j = 0; j < columns.length; j++) {
                    if (bookedSeats.indexOf(rows[i] + j) > -1) {
                        seats[i][j] = {booked: 1, selected: 0};
                    } else {
                        if (!seats[i]) seats[i] = new Array();
                        seats[i][j] = {booked: 0, selected: 1};
                    }
                }
            };
            controller.setProperties({
                "bookedSeats":bookedSeats,
                "seats":seats,
                "rows":rows,
                "columns":columns
            })
        }
    });
})