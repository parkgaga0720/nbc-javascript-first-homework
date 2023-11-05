function btn_click() {
  const today = new Date();
  let hour = today.getHours();
  if (hour <= 10) {
    console.log("good morning");
  } else if (hour >= 10 && hour <= 18) {
    console.log("good afternoon");
  } else {
    console.log("good evening");
  }
}
