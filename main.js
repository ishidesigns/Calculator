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
  if (num == "") {
    document.getElementById("screen").innerText = num;
  } else {
    document.getElementById("screen").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operator = document.getElementsByClassName("op");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.slice(0, -1);
        printOutput(output);
      }
    } else if (this.id === "sq") {
      var output = reverseNumberFormat(getOutput());
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
        output = output == "" ? output : reverseNumberFormat(output);
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

let haveDot = false;
var number = document.getElementsByClassName("num");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
