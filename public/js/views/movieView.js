/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app', "text!templates/movie.hbs", 'jquerySeat'], function (app, movieTemplate) {
    app.MovieView = Ember.View.extend({
        template: Ember.Handlebars.compile(movieTemplate),
        didInsertElement: function () {
            var self = this.controller;
            var $counter = $('#counter');
            var sc = $('#seat-map').seatCharts({
                map: [
                    'aaaaaaaaaa',
                    'aaaaaaaaaa',
                    '__________',
                    'aaaaaaaa__',
                    'aaaaaaaaaa',
                    'aaaaaaaaaa',
                    'aaaaaaaaaa',
                    'aaaaaaaaaa',
                    'aaaaaaaaaa',
                    'aa__aa__aa'
                ],
                naming: {
                    top: false,
                    getLabel: function (character, row, column) {
                        return column;
                    }
                },
                legend: { //Definition legend
                    node: $('#legend'),
                    items: [
                        [ 'a', 'available', 'Option' ],
                        [ 'a', 'unavailable', 'Sold']
                    ]
                },
                click: function () {
                    var currentSelection = self.get('currentSelection');
                    var numSeats = self.get("numSeats");
                    var selectedSeats = sc.find('selected').length + 1;
                    if (selectedSeats <= numSeats) {
                        if (this.status() == 'available') {
                            currentSelection.push('R' + (this.settings.row + 1) + ' S' + this.settings.label);
                            $counter.text(sc.find('selected').length + 1);
                            self.set("currentSelection", currentSelection);
                            return 'selected';
                        } else if (this.status() == 'selected') { //Checked
                            currentSelection.splice(currentSelection.indexOf('R' + this.settings.row + 1 + ' S' + this.settings.label), 1);
                            self.set("currentSelection", currentSelection);
                            return 'available';
                        } else if (this.status() == 'unavailable') { //sold
                            return 'unavailable';
                        } else {
                            return this.style();
                        }
                    } else {
                        return this.style();
                    }
                }
            });
            //sold seat
            if (sc) {
                sc.get(['1_2', '4_4', '4_5', '6_6', '6_7', '8_5', '8_6', '8_7', '8_8', '10_1', '10_2']).status('unavailable');
                this.controller.set("sc", sc);
            }
        }
    })
})