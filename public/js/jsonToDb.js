function importJson() {
  console.log('ok');

  var mydata = JSON.parse(tel);
  alert(mydata[0].name);
  alert(mydata[0].age);
  alert(mydata[1].name);
  alert(mydata[1].age);
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}