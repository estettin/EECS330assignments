var result, operator;
var display = document.getElementById("display");
display.value = 0;
var operation = document.getElementById("operation");
var inp = "";
var new_input = true;
var a = 0;
var b = 0;

for (var i = 0; i < 10; i++) {
    var button = document.getElementById("button-" + i);
    if (button != null) {
        button.onclick = function(e) {
            if (display.value == "0" || new_input) {
                display.value = e.target.value;
                new_input = false;
            } else
                display.value += e.target.value;

            inp = display.value;
        }
    }
}

function CLEAR() {
    display.value = 0;
    inp = "";
    operation.value = "";
    a = "";
}

function display(el) {
    display.value = el;
}

function enter_operation(i) {
    if (inp != "" && a != "")
        Evaluate(a, inp);
    operator = i;
    operation.value = i;
    a = parseFloat(display.value);
    new_input = true;
    inp = "";
}

function Evaluate(x, y) {
    var res;

    x = parseFloat(x);
    y = parseFloat(y);

    switch (operator) {
        case "+": // plus
            res = x + y;
            break;
        case "–": // minus
            res = x - y;
            break;
        case "×": // times
            res = x * y;
            break;
        case "÷": // divided by
            res = x / y;
            break;
        default:
            res = inp;
            break;
    }

    operation.value = "";
    new_input = true;
    display.value = res;
    inp = "";

}

function Equals() {
	if (operator != "") {
		if (inp == "")
			Evaluate(display.value, display.value);
		else
			Evaluate(a, inp);
	}
	new_input = true;
	a = "";
	operator = "";
}



function toggleSign() {
    if (display.value == 0)
        display.value = 0;
    else
        display.value = -display.value;
}



function append_decimal() {
    if (!inp.includes(".") && (inp != display) && !new_input) {
        inp = inp + ".";
        if (inp == ".")
            inp = "0.";
        display.value += ".";
    }
    else if (new_input) {
    	inp = "0."
    	display.value = "0.";
    	new_input = false;
    }
}
