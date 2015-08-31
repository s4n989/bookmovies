/**
 * Created by sandepan on 7/29/2015.
 */
define([], function(){
    // file to specify all the requried server level ajax calls
    var getBookingStatus = function(){
        return {
            bookedSeats:['A3','A4','A5','A6','J8','J9']
        };
    };

    return {
        getBookingStatus: getBookingStatus
    }
});
