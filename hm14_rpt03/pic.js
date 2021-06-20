// 미리 로딩해둘 이미지 이름 배열

var files = [
    "media2/BraveGirls.png",
    "media2/남유정.png",
    "media2/김민영.png",
    "media2/이유나.png",
    "media2/홍은지.png",
    
  ];
  var imgs = new Array();
  for (var i = 0;i<files.length ; i++) {
    imgs[i] =new Image(); // 메모리에 이미지 객체 생성
    imgs[i].src = files[i]; // 이미지 로딩
  }

  // 다음 이미지 출력
  var next = 1 ;
  function change(img) {
    var nameSplit = files[next].split('/');
    var nameText = document.getElementById("name");
   
    nameText.innerHTML = "이름 : "+nameSplit[1];
     
    img.src = imgs[next].src ; // 이미지 변경
    next++; // 다음 이미지
    next%=imgs.length; // 개수를 넘으면 처음으로
  }
  function init(img) {
    var nameSplit = files[next - 1].split('/');
    var infoText = document.getElementById("info");
    var nameText = document.getElementById("name");
    
    img.src = files[next - 1];
    infoText.innerHTML = "<strong>" + "" + "</strong>";
    nameText.innerHTML = " 이름 : " + nameSplit[1]; // 이벤트 객체의 프로퍼티 출력

  }