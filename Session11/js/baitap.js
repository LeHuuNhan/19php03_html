// VD :
// cho 1 dãy số từ 1-100
// kiểm tra số đó chia hết cho 3, 5 ,15 thì in ra số n chia hết cho 3, 5, 15
// ngược lại thì in ra n không chia hết cho 3,5,15

for(var i = 1; i <=100; i++) {
	if (i % 3 !=0 && i % 5 !=0 && i % 15 !=0) {
		document.write(i);
		document.write("\n không chia hết cho 3, 5 ,15 <br>");
	}else if (i % 3==0 && i % 5 ==0 && i % 15 ==0) {
		document.write(i);
		document.write("\n chia hết cho 3, 5, 15 <br>");
	}else {
		if (i % 3 ==0 && i % 5 !=0 && i % 15 !=0) {
			document.write(i);
			document.write("\n chia hết cho 3,<br>");
		}
		if (i % 3 ==0 && i % 5 ==0 && i % 15 !=0) {
			document.write(i);
			document.write("\n chia hết cho 3, 5<br>");
		}
		if (i % 3 !=0 && i % 5 ==0 && i % 15 !=0) {
			document.write(i);
			document.write("\n chia hết cho 5<br>");
		}
	}
}

document.write('--------------------------------<br>');
// VD :
// cho bạn 2000 vnd di mua keo :
// biết 1 viên kẹo giá 200
// cứ 2 vỏ kẹo đổi được 1 viên kẹo
// hỏi bạn mua được bao nhiêu viên kẹo ?
var soTien = 2000;
var giaKeo = 200;
function muaKeo(){
	var soKeoMuaDuoc = Math.floor(soTien/giaKeo);
	var soVo = soKeoMuaDuoc;
	var soKeoDoiDuoc = 0; // số kẹo lấy vỏ đổi được

	// dùng for 
	// for (var soVo = soKeoMuaDuoc; soVo > 1 ;) {
	// 	soKeoDoiDuoc = Math.floor(soVo/2);
	// 	soVo = soKeoDoiDuoc + (soVo - soKeoDoiDuoc * 2);
	// 	soKeoMuaDuoc += soKeoDoiDuoc;
	// }

	// dùng while
	// while(soVo >= 2) {
	// 	soKeoDoiDuoc = Math.floor(soVo/2); // số kẹo đổi được + số kẹo hiện có
	// 	soVo = soKeoDoiDuoc + (soVo - soKeoDoiDuoc * 2); // tính lại số vỏ đang có
	// 	soKeoMuaDuoc += soKeoDoiDuoc; // số kẹo đổi được công với số kẹo mua được
	// }

	// dùng do {} while()
	do{
		soKeoDoiDuoc = Math.floor(soVo/2);
		soVo = soKeoDoiDuoc + (soVo - soKeoDoiDuoc * 2);
		soKeoMuaDuoc += soKeoDoiDuoc;
	}while(soVo >1);

	document.write("số kẹo mua được là : \n");
	document.write(soKeoMuaDuoc);
}
 muaKeo();
document.write("<br>------------------<br>");

 // BT1: Bình có 27 quyển sách, Bình có số sách gấp 3 lần số sách của Minh. 
 // Hỏi Bình phải chuyển cho Minh bao nhiêu quyển sách để số sách của Bình gấp đôi số sách của Minh?

function chiaSach() {
	var a = 27 ; // so sach cua Binh
	var b = a / 3; // so sach cua Minh ban đầu

	for (var i = b; i < a/2; i++) {
		i += 1 ;
		a -= 1;
		// b = a /3;
		var t = i - b;
	}
	document.write("số sách Binh cần chuyển cho Minh là : \n");
	document.write(t);
}
chiaSach();
document.write("<br>----------------------------<br>");

// BT3. Cần có tổng 1.000.000 đồng từ 3 loại tiền 10.000 đồng, 20.000 đồng, 50.000 đồng.
// Lập chương trình để tìm ra tất cả các phương án có thể

// gọi x,y,z là số loại các tờ tiền cần tìm
// ta có hệ 10x + 20y + 50z = 1000
// 			
function chiaTien() {
	var x, y, z, cach =0;
	var tong = 1000000;

	for(x =0; x <= tong/10000; ++x) {
		for(y =0 ; y <= tong/20000 ; ++y) {
			for(z =0; z<= tong/50000; ++z) {
				if(10000*x + 20000*y + 50000*z == 1000000){
					cach++;
				}
			}
		}
	}
	document.write("số cách chia tiền là :\n");
	document.write(cach);
}
chiaTien();
document.write("<br>----------------------------<br>");

// BT4. Bạn A gửi ngân hàng 20 triệu đồng, lãi suất 0.6%/tháng. 
// Hỏi sau 3 năm, bạn A nhận được cả gốc lẫn lãi là bao nhiêu?

function tinhLaiDon() {
	var a =  20000000; //là số tiền bạn A gửi vào ngân hàng
	var b = 0.6/100; // là số được tính hàng tháng
	var c = 3*12; // số tháng bạn a gửi tiền vào ngân hàng
	var tong = 0; // tổng tiền bạn A nhận được sau khi gửi C tháng

		tong = Math.floor(a*(1 + c*b));

	document.write("bạn A nhận được cả gốc lẫn lãi là :\n");
	document.write(tong);
}
tinhLaiDon();
document.write("<br>----------------------------<br>");


function tinhLaiKep() {
	var a =  20000000; //là số tiền bạn A gửi vào ngân hàng
	var b = 0.6/100; // là số được tính hàng tháng
	var c = 3*12; // số tháng bạn a gửi tiền vào ngân hàng
	var tong = 0; // tổng tiền bạn A nhận được sau khi gửi C tháng

		for (var i = 0; i <= c; i++) {
			tong = Math.floor(a*(1 + b));
			a = tong;
		}

	document.write("bạn A nhận được cả gốc lẫn lãi là :\n");
	document.write(tong);
}
tinhLaiKep();
document.write("<br>----------------------------<br>");


// BT5. Bạn B gửi ngân hàng 150 triệu đồng. Lãi suất 0.7%/tháng
// Cứ 3 tháng bạn B rút 3 triệu đồng, 3 tháng sau rút hơn 3 tháng trước 1 triệu đồng
// Hỏi sau 3 năm, bạn B còn lại cả gốc lẫn lãi la bao nhiêu?

function tinhTien(){
	var a = 150000000; // số tiền bạn B gửi ngân hàng
	var b = 0.7/100; // số lãi xuất
	var c = 3*12; // thời gian B gửi
	var tienRut = 3000000; // số tiền B rút sau 3 tháng
	var tongTien = 0;

	for(var i =0 ; i < c; i += 3) { // cứ 3 tháng B rút tiền 1 lần
		for(var j =0; j < 3; j++) { 
			tongTien = Math.floor(a*(1 + b)); // tổng tiền B nhận được hàng tháng
			a = tongTien; 
		}
		a -= tienRut;
		tienRut += 1000000;
	}
	document.write("sau 3 năm, bạn B còn lại cả gốc lẫn lãi là :\n");
	document.write(tongTien);
}
tinhTien();