function clickedBigger() {
    document.getElementById("freeform").style.fontSize = "24pt";
  }

  function clickedFancy() {
    document.getElementById("freeform").style.fontWeight = "bold";
    document.getElementById("freeform").style.color = "blue";
    document.getElementById("freeform").style.textDecoration = "underline";
  }

  function clickedBoring() {
    document.getElementById("freeform").style.fontWeight = "normal";
    document.getElementById("freeform").style.color = "black";
    document.getElementById("freeform").style.textDecoration = "none";
  }

  function moo() {
    var userText = document.getElementById("freeform")
    userText = userText.value.toUpperCase();
    var split = userText.split(".");
    userText = split.join("-Moo");
    document.getElementById("freeform").value = userText;
  }
    