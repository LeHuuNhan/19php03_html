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