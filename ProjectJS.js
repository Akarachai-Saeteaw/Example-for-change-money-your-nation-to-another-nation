function toCuurency(value) {
  let money_Japan = value * 3.4353;
  let money_Usa = value * 31.05;
  let money_Chinese = value * 4.4726;
  let money_Euro = value * 36.6638;
  let money_Eng = value * 40.542;
  document.getElementById("show_init").innerHTML = value;
  document.getElementById("show_other_1").innerHTML = money_Japan.toFixed(2);
  document.getElementById("show_other_2").innerHTML = money_Usa.toFixed(2);
  document.getElementById("show_other_3").innerHTML = money_Chinese.toFixed(2);
  document.getElementById("show_other_4").innerHTML = money_Euro.toFixed(2);
  document.getElementById("show_other_5").innerHTML = money_Eng.toFixed(2);
}
