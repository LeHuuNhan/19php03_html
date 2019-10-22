// đổi dấu
var doi_dau = false;
// số phép tính ưu tiên tìm thấy
var uu_tien =0;

// vừa bấm phép tính
var doi_phep_tinh = false;

// phepo tinh
var pheptinh = "+";

function clickButton(ojb){
	//chuỗi hiện tại của kết quả 
	var ketqua = document.getElementById('result');
	var ketquastr = ketqua.innerHTML;
	
	if (ketquastr === "0") {
		ketquastr = "";
	}
	// html của phím được bấm
	var type = ojb.innerHTML;
	var dautinh = ['+', '-', 'x', ':'];

	if( type== '+' ||
		type== '-' ||
		type== 'x' ||
		type== ':' ) {

		pheptinh = type;
		if (!dautinh.includes(ketquastr[ketquastr.length - 1])) {
			ketquastr += type;
		} else {
			ketquastr = ketquastr.substring(0, ketquastr.length - 1);
			ketquastr += type;
		}

	} else if (type === '=') {
		var sodau = 0;
		var soduoi = 0;

		var temp = ketquastr.replace(/[+x:-]/g, " "); 
		temp = temp.split(" ");
		sodau = temp[0];
		soduoi = temp[1];

		ketquastr = caculator(+sodau, +soduoi, pheptinh);
	} else {
		ketquastr += type;
	}

	ketqua.innerHTML = ketquastr;
}

function caculator(sodau, soduoi, dau) {
	var ketqua = document.getElementById('result');
	switch(dau) {
		case 'x':
			return sodau * soduoi;
		case ':':
			return sodau / soduoi;
		case '+':
			return sodau + soduoi;
		case '-':
			return sodau - soduoi;
	}
}