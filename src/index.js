function addToList() {
    var newItem = $('.todo-input').val().trim();
    $('.todo-list').append('<li class="todo-item">' + newItem + '</li>');
    $('.todo-input').val('').trigger('input');
};

$ ('.todo-btn').on('click', addToList);

$(document).ready(function(){
    $('.todo-btn').attr('disabled',true);
    $('.todo-input').on('input', function() {
        if ($(this).val().trim().length !== 0) {
            $('.todo-btn').attr('disabled', false);
        } else {
            $('.todo-btn').attr('disabled', true);
        }
    })
});
