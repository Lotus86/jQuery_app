var $todoInput       = $('.todo-input');
var $todoList        = $('.todo-list');
var $todoBtn         = $('.todo-btn');
var $todoItem        = $('.todo-item');
var $todoItemDelete  = $('.todo-item-delete');

function addToList() {
    var newItem = $todoInput.val().trim();
    $todoList.append('<li class="todo-item">' + newItem + '<button class="todo-item-delete"><i class="fas fa-trash-alt"></i></button>' + '</li>');
    $todoInput.val('').trigger('input');
};

$todoBtn.on('click', addToList);

$(document).ready(function(){
    $todoBtn.attr('disabled',true);
    $todoInput.on('input', function() {
        if ($(this).val().trim().length !== 0) {
            $todoBtn.attr('disabled', false);
        } else {
            $todoBtn.attr('disabled', true);
        }
    })
});

$('.todo-list').on('click', '.todo-item-delete', function() {
    $(this).parent().remove();
} );
