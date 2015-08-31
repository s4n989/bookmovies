/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app'], function(app){
    app.MovieController = Ember.ObjectController.extend({
        basicInfoPresent:false,
        userName:"",
        numSeats:0,
        validateNumSeats:function(){
            var numSeats = this.get("numSeats");
            if(typeof numSeats != Number || numSeats > 50){
                numSeats = 0;
            }
        }.observes("numSeats"),
        actions:{
            showSeats: function(){
                var userName = this.get("userName");
                var numberSeats = this.get("numSeats");
                if(userName && numberSeats > 0) {
                    this.set("basicInfoPresent", true);
                }else{
                    alert("Either Name or Number of seats are entered incorrectly")
                }
            }
        }
    });
})