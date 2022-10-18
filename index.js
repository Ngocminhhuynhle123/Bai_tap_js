var formatvnd = Intl.NumberFormat("VN-vn");
// bài 1


// đầu vào : số ngày lương
// xử lí : dom thẻ "btn_1" dùng để onclick khi thực hiện click 
// hệ thống sẽ cập nhập được số vừa nhập đặt là biến "tien_Luong"
// tạo thêm biến kết quả để nhận kết phải phép tính biến "so_Tien"
// để lưu kết quả và chữ dom vào biến "so_Tien" dùng lệnh innerHTML để in ra mình hình

document.getElementById('btn_1').onclick = function () {
  var tien_Luong = document.getElementById("tien_Luong").value;
  ketQua = tien_Luong * 100000;
  so_Tien = "Tiền Lương Của Bạn Là:" + formatvnd.format(ketQua) +"vnd"
  document.getElementById("so_Tien").innerHTML = so_Tien;
};


// bài 2 
//  đầu vào: 5 số cần tính

// xử lí:ll90-8
// dom tới thẻ btn_2 dùng on click
// dom tới 5 thẻ iput đặt 5 số đặt var cho nó
// thực hiện tính tổng
// thực hiện /5 


// đầu ra: in ra màn hình kết quả tính được 

document.getElementById('btn_2').onclick = function () {
  var number2_1 = document.getElementById("number2_1").value;
  var number2_2 = document.getElementById("number2_2").value;
  var number2_3 = document.getElementById("number2_3").value;
  var number2_4 = document.getElementById("number2_4").value;
  var number2_5 = document.getElementById("number2_5").value;
  number2_1 = parseInt(number2_1);
  number2_2 = parseInt(number2_2);
  number2_3 = parseInt(number2_3);
  number2_4 = parseInt(number2_4);
  number2_5 = parseInt(number2_5);
  var tongSo2 = number2_1 + number2_2 + number2_3 + number2_4 + number2_5;
  var trungBinh2 = tongSo2 / 5;
  trungBinh2 = "Kết quả là:" + trungBinh2;
  document.getElementById("ketQua2").innerHTML = trungBinh2;
};


// bài 3
document.getElementById("btn_3").onclick = function () {
  var soTien3 = document.getElementById("soTien3").value * 1;
  var tienDoi = soTien3 * 23500;
  tienDoi = "Số tiền: " + formatvnd.format(tienDoi) +"vnd";
  document.getElementById("ketQua3").innerHTML = tienDoi;

};




// bài 4




document.getElementById("btn_4").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  var ketQua_4 = "";
  ketQua_4 += "<p>Chu Vi: " + chuVi + "<br>Dien Tich: " + dienTich +"</p>";
  document.getElementById("Dap_an4").innerHTML = ketQua_4;

};







// bài 5
document.getElementById("btn_5").onclick = function () {
  var kySo_5 = document.getElementById("kySo_5").value * 1;
  var hangChuc_5 = Math.floor(kySo_5/10)
  var hangDv_5 = Math.floor(kySo_5%10);
  var Dap_an5= hangChuc_5+hangDv_5;
  Dap_an5 =" <p>Tổng 2 kí là "+Dap_an5+"</p>";
  document.getElementById("Dap_an5").innerHTML = Dap_an5;
};



















