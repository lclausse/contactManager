



function transformLabel(elemLabelName) {
  var elemLabel = document.getElementById(elemLabelName);
  elemLabel.style.transform = "translate(10px, -5px) scale(0.8)";
  elemLabel.style.color = "rgb(63, 81, 181)";
  elemLabel.style.background = "#fff";
  elemLabel.style.padding = "0 3px 0 3px";
}


function startPointLabel(elemLabelName, elemInputName) {
  var elemLabel = document.getElementById(elemLabelName);
  var inputLabel = document.getElementById(elemInputName);
  if (inputLabel.value == '') {
    elemLabel.style.transform = "translate(14px, 23px) scale(1)";
    elemLabel.style.padding = "0";
  }

  elemLabel.style.color = "rgba(0, 0, 0, 0.54)";


}

function phoneFormat() {
  var phoneId = document.getElementById('phoneId');
  phoneId.addEventListener('keyup', function(){
    var phoneValue = phoneId.value;
    phoneValue = "+" + phoneValue.replace(/[^0-9]/g, '');
    //console.log("phoneValue clean : " + phoneValue);
    var output;

    var part1 = phoneValue.substring(0,3);
    var part2 = phoneValue.substring(3,6);
    var part3 = phoneValue.substring(6,8);
    var part4 = phoneValue.substring(8,10);
    var part5 = phoneValue.substring(10,12);
    /*
    console.log("Part 1 : --" + part1 +"--");
    console.log("Part 2 : --" + part2 +"--");
    console.log("Part 3 : --" + part3 +"--");
    console.log("Part 4 : --" + part4 +"--");
    console.log("Part 5 : --" + part5 +"--");
    */
    if (part1.length < 3) {
      output = "+32 ";
    } else if (part1.length == 3 && part2.length < 3) {
      output = "+32 " + part2 + " ";
    } else if (part1.length == 3 && part2.length == 3 && part3.length < 2) {
      output = "+32 " + part2 + " " + part3;
    } else if (part1.length == 3 && part2.length == 3 && part3.length == 2 && part4.length < 2) {
      output = "+32 " + part2 + " " + part3 + " " + part4;
    } else if (part1.length == 3 && part2.length == 3 && part3.length == 2 && part4.length == 2 && part5.length < 2){
      output = "+32 " + part2 + " " + part3 + " " + part4 + " " + part5;
    } else if (part1.length == 3 && part2.length == 3 && part3.length == 2 && part4.length == 2 && part5.length == 2) {
      output = "+32 " + part2 + " " + part3 + " " + part4 + " " + part5;
    }
    //console.log("OUTPUT : " + output);
    //console.log("");
    phoneId.value = output;
  });
}
