var nilai = prompt("Inputkan nilai kamu:")
var grade = "";

if(nilai >= 90) grade = "A";
else if(nilai >= 80) grade = "B";
else if(nilai >= 70) grade = "C";
else if(nilai >= 60) grade = "D";
else if(nilai >= 50) grade = "E";

document.write (`Grade kamu : ${grade}`);