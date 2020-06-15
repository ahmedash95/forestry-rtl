window.addEventListener("load", function(){
  let count = 0;
  let interval = setInterval(() => {
    count++;
    if(document.querySelector('.ProseMirror[contenteditable]') == null) {
      return;
    }

    document.querySelector('.ProseMirror[contenteditable]').style.direction = 'rtl';
    clearInterval(interval);

    if(count > 5) {
      clearInterval(interval);
    }
  }, 1000);
});