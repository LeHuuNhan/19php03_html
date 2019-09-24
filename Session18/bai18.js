// BT: Tạo form đăng ký gồm:

// - Họ và tên (text)

// - Giới tính (radio)

// - Ngày sinh (date)

// - Tỉnh thành (select option)

// 1. Validate tất cả các trường không được để trống

// 2. Nếu tuổi lớn hơn 18 tuổi thì in ra thông tin cá nhân màu xanh (blue), nếu tuổi >21 thì in

// ra thông tin cá nhân màu vàng (yellow), ngược lại in ra thông tin cá nhân màu xanh (green)

// Họ và tên: Nguyên Văn A

// Tuổi: 19 tuổi

// Giới tính: Nam

// Quê quán: Đà Nẵng

// 3. Nếu giới tính là Nam thì in Họ và tên font 30px, ngược lại font 20px

// 4. Nếu tỉnh thành là Quảng Nam, Đà Nẵng, Huế thì ten tỉnh thành đậm (bold), ngược lại thì tin nghiêng

	var ten = document.getElementById('ten').value;
	var gioiTinhs = document.getElementsByName('gioitinh'); // vì radio trùng name nên nó sẽ trả về 1 mảng
	var ngaySinh = document.getElementById('ngaySinh').value;
	var gioiTinh = '';
	var tinhThanh = document.getElementById('tinhThanh');
	var optTinhThanh = '';

// duyệt mảng gioi tinh
function ktGioiTinh(gioiTinhs) {
	for(var i =0; i < gioiTinhs.length; i ++) {
		if (gioiTinhs[i].checked === true) {
			gioiTinh = gioiTinhs[i].value;
			break;
			}
	}
	return gioiTinh;
}

function ktTinhThanh(tinhThanh) {
	var optTinhThanh = tinhThanh.options[tinhThanh.selectedIndex];
	document.write(optTinhThanh);
	for (var j =0 ; j < tinhThanh.options.length ; j++) {
		optTinhThanh = tinhThanh.options[j];
		if (optTinhThanh.selected === true) {
			break;
			}
	}
	return optTinhThanh;
}

function dangKy() {
	
	// ktGioiTinh(gioiTinhs);
	// ktTinhThanh(tinhThanh);	

	if (ten != '' && gioiTinh != '' && ngaySinh != '' && optTinhThanh != '') {
		document.write('Ten :'+ten);
		document.write('<br>Gioi tinh :'+gioiTinh);
		document.write('<br>Ngay sinh :'+ngaySinh);
		document.write('<br>Tinh thanh :'+tinhThanh);
		

	}else {
		if (ten == "") {
			document.getElementById('errorTen').innerHTML = 'vui long nhap ten';
		}else {
			document.getElementById('errorTen').innerHTML = '';
		}

		if (gioiTinh == "") {
			document.getElementById('errorGioiTinh').innerHTML = 'vui long nhap gioi tinh';
		}else {
			document.getElementById('errorGioiTinh').innerHTML = '';
		}

		if (ngaySinh == "") {
			document.getElementById('errorNgaySinh').innerHTML = 'vui long nhap ngay sinh';
		}else {
			document.getElementById('errorNgaySinh').innerHTML = '';
		}

		if (optTinhThanh == "") {
			document.getElementById('errorTinhThanh').innerHTML = 'vui long nhap tinh thanh';
		}else {
			document.getElementById('errorTinhThanh').innerHTML = '';
		}
	}

}