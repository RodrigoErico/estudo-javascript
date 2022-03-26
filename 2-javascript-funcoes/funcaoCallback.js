function func1() {
  setTimeout(function () {  // funcao callback
    console.log("Função 1");
  }, 500);
}

function func2() {
  setTimeout(function () {
    console.log("Função 2");
  }, 400);
}
function func3() {
  setTimeout(function () {
    console.log("Função 3");
  }, 300);
}

func1();
func2();
func3();
