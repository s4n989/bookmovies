/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app'], function (app, jquerySeat) {
    app.MovieController = Ember.ObjectController.extend({
        basicInfoPresent: false,
        userName: "",
        numSeats: 0,
        rows: [],
        columns: [],
        bookedSeats: [],
        currentSelection:[],
        seats: [],
        sc:{},
        bookingHistory: [],
        validateNumSeats: function () {
            var numSeats = this.get("numSeats");
            if (typeof numSeats != Number || numSeats > 50) {
                numSeats = 0;
            }
        }.observes("numSeats"),
        actions: {
            showSeats: function () {
                var userName = this.get("userName");
                var numberSeats = this.get("numSeats");
                if (userName && numberSeats > 0) {
                    $("#seats").css("visibility","visible");
                } else {
                    alert("Either Name or Number of seats are entered incorrectly")
                }
            },
            submitSelection:function(){
                var self = this;
                var bookingHistory = this.get('bookingHistory') ? this.get('bookingHistory') : [];
                bookingHistory.push({userName:self.get("userName"), total: self.get("currentSelection").length,selectedSeats:self.get("currentSelection")});
                this.set("bookingHistory", bookingHistory);
                var htmlData = "<table border='2' style='width: 20%'>" +
                    "<th>Name</th>" +
                    "<th>No Of Seats</th>" +
                    "<th style='40%'>Seats</th>";
                bookingHistory.forEach(function(booking){
                    htmlData = htmlData +
                        "<tr>" +
                        "<td>"+ booking.userName+"</td>" +
                        "<td>"+ booking.total+"</td>" +
                        "<td>"+ booking.selectedSeats+"</td>" +
                        "</tr>"
                })
                 htmlData = htmlData + "</table>";
                $('#booking-history').html(htmlData);

                var sc = this.get("sc");
                sc.get(sc.find('selected').seatIds).status('unavailable');
                self.set("currentSelection", []);
                self.set("userName",'');
                self.set("numSeats", 0);
                $("#seats").css("visibility","hidden");
            }
        }
    });
})