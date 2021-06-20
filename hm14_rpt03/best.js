function load() {
    var select = document.getElementById("site");
    window.location = select.options[select.selectedIndex].value;
  }

function change() {
    var span = document.getElementsByTagName("span");
    for(var i=0; i<span.length; i++)		//span 찾으면서 if문 실행
    {
        var show = span[i];
    if (show.style.visibility == "hidden")	// hidden이면 visible로 바꾸기
        show.style.visibility = "visible";
    else
        show.style.visibility = "hidden"
      }
  }