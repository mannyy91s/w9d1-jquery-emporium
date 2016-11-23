//this is only necessary because alot of people include the jquery script in the head. This checks the html before running the script.
// $(document).ready(function(){
    // var text = $('h1').html()
    // for( let i= 0; i < 5; i++) {
    //     $('h1:first').after('<h1>' + text + '-' + i + '</h1>')
    // }
    // $('#box').css({backgroundColor: 'red'})
    // $('#box').after('<button>Click Me</button')

// })

// the above ready code is the same as this.
// document.addEventListener('DOMContentLoaded', function() {
//
// })

$(document).ready(function() {
    $('.tabs li').on('click', function() {
        //switch up the tab
        var tab = $(this)
        $('.tab, .tabs li').removeClass('active')
        tab.addClass('active')
        $('#' + tab.data('tab')).addClass('active')

        //load a page fragment
        if ($(this).data('url')) {
            // $('#' + tab.data('tab')).load($(this).data('url'))
            // //or $('#portfolio').load('portfolio.html')

            //long way of doing the above
            $.ajax({
                method: 'GET',
                url: tab.data('url'),
                cache: false,
                success: function(page) {
                    $('#' + tab.data('tab')).html(page)
                    $( "form" ).validate({
                      rules: {
                        phone: {
                        required: true,
                        phoneUS: true
                        }
                      }
                  })
                },
                error: function() {
                    alert('No Page Found!')
                }
            })
        }
    })
    $('.tabs li:first').click()
})
