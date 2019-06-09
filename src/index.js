var
    $todoInput       = $('.todo-input'),
    $todoList        = $('.todo-list'),
    $todoBtn         = $('.todo-btn'),
    $todoItem        = $('.todo-item'),
    $todoItemDelete  = $('.todo-item-delete');

function addToList() {
    var newItem = $todoInput.val().trim();
    $todoList.append(
        '<li class="todo-list">' +
        '<input class="todo-item" type="checkbox">' +
        '<span class="item-text">' + newItem + '</span>' +
        '<button class="todo-item-delete"><i class="fas fa-trash-alt"></i></button>' + '</input>' +
        '</li>'
    );
    $todoInput.val('').trigger('input');
};

$todoInput.keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
        addToList();
    }
});

$todoBtn.on('click', addToList);

//Disable the Add button
$(document).ready(function(){
    $todoBtn.prop('disabled',true);
    $todoInput.on('input', function() {
        if ($(this).val().trim().length !== 0) {
            $todoBtn.prop('disabled', false);
        } else {
            $todoBtn.prop('disabled', true);
        }
    })
});

//Remove items from the Todolist
$('.todo-list').on('click', '.todo-item-delete', function() {
    $(this).parent().remove();
});
