var jawab = prompt("Kamu beruntung! Silahkan pilih hadiahmu sesuai angka 1-5:")
var hadiah = "";

switch(jawab){
      case "1":
      hadiah = "Tisu";
      break;
      case "2":
      hadiah = "Kipas Angin";
      break;
      case "3":
      hadiah = "Keyboard";
      break;
      case "4":
      hadiah = "Komputer";
      break;
      case "5":
      hadiah = "Keyboard";
      break;

      default:
            document.write("Maaf anda salah pilih nomor")
}

if(hadiah === ""){
      document.write("Kamu gagal mendapat hadiah")
}else{
      document.write("Selamat kamu mendapatkan Hadiah "+ hadiah)
}