function getHistory() {
  return document.getElementById("display1").innerText;
}

function printHistory(num) {
  document.getElementById("display1").innerText = num;
}

function getOutput() {
  return document.getElementById("screen").innerText;
}

function printOutput(num) {
  document.getElementById("screen").innerText = num;
}

var operator = document.getElementsByClassName("op");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = getOutput();
      if (output) {
        output = output.slice(0, -1);
        printOutput(output);
      }
    } else if (this.id === "sq") {
      var output = getOutput();
      if (output) {
        var ans = output * output;
        printOutput(ans);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = " " + history + " " + this.id + " ";
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("num");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = getOutput();
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}

var dot = document.getElementById("dot");
dot.addEventListener("click", () => {
  var output = getOutput();
  var ch = dot.innerText;
  if (output.includes(ch)) return;
  else {
    output = output + ch;
    printOutput(output);
  }
});
