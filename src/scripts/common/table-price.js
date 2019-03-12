const $ = require('jquery');

if($('#price').length){

  var accordion = document.getElementById("price"),
      items = accordion.getElementsByClassName("price__item"),
      contents = accordion.getElementsByClassName("price__content"),
      i;

  accordion.addEventListener("click", function(e) {
    if (e.target.classList.contains("price__trigger")) {
      var trigger = e.target;
      var content = trigger.nextElementSibling;
      var item = trigger.parentNode;

      if (!item.classList.contains("active")) { // не активный
        // удаляем active для всех li
        for (i = 0; i < items.length; i++) {
          items[i].classList.remove("active");
        }
        // добавляем active для текущего li
        item.classList.add("active");

        // закрываем все блоки с контентом
        for (i = 0; i < contents.length; i++) {
          contents[i].style.height = null;
        }
        // открываем текущий блок с контентом
        content.style.height = content.scrollHeight + "px";
        
      } else { // активный
        // удаляем класс active для текущего li
        item.classList.remove("active");
        
        // закрываем текущий блок с контентом
        content.style.height = null;
      }
    }
  });
}