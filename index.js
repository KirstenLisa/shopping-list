/* Adding new items to list */
function addNewItem() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();

/* 1.step: finding user input => newitem */
        let newItem = $(this).find('input[name="shopping-list-entry"]').val();

/* 2.step: creating new HTML-element, adding all classes needed */
        let newEl = $(`<li><span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls"><button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button></div></li>`);

/* 3. step: appending new element */
          $(".shopping-list").append(newEl);
    });
}


/* check and uncheck items on the list by clicking */

 function checkItem() {
     $(".shopping-list").on("click", "shopping-item-toggle", function(event) {
         let targetItem = $(this).find(name="shopping-list-item");
         targetItem.toggleClass(".shopping-item shopping-item__checked");
     });
 }

/* permanently remove items from the list */

function delItem() {
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        this.closest("li").remove();
      });
      
}

$(addNewItem);
$(checkItem);
$(delItem);


/* .submit() , preventDefault(), toggleClass(), and closest(). */
/* Using this and event delegation (USING ON) */