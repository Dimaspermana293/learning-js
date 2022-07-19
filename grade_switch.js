var nilai = prompt("Input Nilai:" ,0);


switch(true){
      case nilai <90:
            grade = "A";
            break;
      case nilai <80:
            grade = "B";
            break;
      case nilai <70:
            grade = "C";
            break;
      default:
            document.write("Kamu salah input nilai")
}
