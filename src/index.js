$(document).ready(function() {
    $('#todo-input').keyup(function() {

        var empty = false;
        $('#todo-input').each(function() {
            if ($(this).val().length = 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#todo-btn').attr('disabled', 'disabled');
        } else {
            $('#todo-btn').removeAttr('disabled');
        }
    });
});

function addToList() {
    var newItem = $('#todo-input').val();
    $('#todo-list').append('<li>' + newItem + '</li>');
    $('#todo-input').val('');
};


