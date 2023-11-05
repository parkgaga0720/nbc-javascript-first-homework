function btn_click() {
  let input = prompt("아무거나 입력하세요");

  if (input == null || input == "") {
    alert("아무것도 입력하지 않았습니다");
  } else {
    alert(input);
  }
}
