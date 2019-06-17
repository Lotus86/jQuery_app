var
    $todoInput       = $('.todo-input'),
    $todoList        = $('.todo-list'),
    $todoBtn         = $('.todo-btn');

//Add items list
function addToList() {
    var $newItem = $todoInput.val().trim();
    if(!$newItem)
        return $todoInput.val('');

    $newItem =  $('<li class="todo-list">' +
        '<input class="todo-item" type="checkbox">' +
        '<span class="item-text">' + $newItem + '</span>' +
        '<button class="todo-item-delete"><i class="fas fa-times"></i></button>' + '</input>' +
        '</li>');

    $todoList.append($newItem);
    $todoInput.val('').trigger('input');

    //Checked|unchecked list items
    $newItem.on('click', '.todo-item', function() {
        if ($(this).prop('checked')) {
            $('.item-text').addClass('item-text-decoration');
        } else {
            $('.item-text').removeClass('item-text-decoration');
        }
    });
}

//Add items by Enter button
$todoInput.keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
        addToList();
    }
});

$todoBtn.on('click', addToList);

//Remove items from the Todolist
$('.todo-list').on('click', '.todo-item-delete', function() {
    $(this).parent().remove();
});
