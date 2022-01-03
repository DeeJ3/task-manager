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

$('.saveBtn').on('click', function() {
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(id, task)
    showTask()
})

showTask()

function showTask() {
    for(var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#'+ i).text(currentTask)
    }
}