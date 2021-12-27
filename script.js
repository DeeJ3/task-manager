var date = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

setColor()
function setColor() {
    timeBlock.each(function() {
        var id = $(this).attr('id')
        if(currentHour > id) {
            $(this).addClass('past')
        } else if (currentHour == id) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}
