var expression = "";

      function add(character) {
        expression = expression + character;

        document.getElementById("display").value = expression;
      }

      function del() {
        expression = expression.substring(0, expression.length - 1);
        document.getElementById("display").value = expression;
      }

      function compute() {
        var expression_num = parseFloat(eval(expression));
        if (isInteger(expression_num) == true) {
          expression = expression_num;
        } else {
          expression = expression_num.toFixed(2);
        }
        document.getElementById("display").value = expression;
      }

      function hexColour() {
        var expression_num = parseInt(eval(expression));
        if (isInteger(expression_num) < 256) {
          expression = expression_num.toString(16);
        }
        document.getElementById("display").value = expression;
      }

      function clearDisplay() {
        expression = "";
        document.getElementById("display").value = "0";
      }

      function isInteger(x) {
        return Math.floor(x) === x;
      }