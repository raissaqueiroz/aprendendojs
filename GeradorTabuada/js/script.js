function tabuada() {
    var num = document.getElementById("txtn");
    var tab = document.getElementById("seltab");
    if (num.value.length == 0) {
        window.alert("Insira um numero!");
    } else {
        tab.innerHTML = '';
        var n = Number(num.value);
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`;
            tab.appendChild(item);
        }
    }
}

var num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
num.push(0);
num.sort();
console.log(num.indexOf(3));
num.splice(0, 1, 100);
for (var i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}