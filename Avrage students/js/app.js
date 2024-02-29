let n = Number(prompt("چند تا درس میخای وارد کنی؟"));
let s = 0;
let j = 0;
for (i = 1; i <= n; ++i) {
  let numbers = Number(prompt("درس" + i));
  if (numbers >= 0 && numbers <= 20) {
    s += numbers;
    j += 1;
  } else {
    alert("this number is out of rang");
  }
}

alert("معدل =" + s / j);
if (s / j >= 17) {
  alert("good job your معدل is high");
} else if (s / j <= 10) {
  alert("your معدل is very low please try harder");
} else {
  alert("your معدل is normal");
}