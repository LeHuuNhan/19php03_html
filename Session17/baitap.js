function tinhToan() {
	var ten = document.getElementById('ten').value;
	var soDienDauKi = document.getElementById('sodiendauki').value;
	soDienDauKi = parseInt(soDienDauKi);
	var soDienCuoiKi = document.getElementById('sodiencuoiki').value;
	soDienCuoiKi = parseInt(soDienCuoiKi);
	var ngayDauKi = document.getElementById('ngaydauki').value;
	var ngayCuoiKi = document.getElementById('ngaycuoiki').value;
	var soDien = 0;
	var soNgay = 0;
	var tienDien = 0;

	if ((ten != '') && (soDienDauKi != '') && (soDienCuoiKi != '') && (ngayDauKi != '') && (ngayCuoiKi != '')) {

		  document.write(ten);

		if ((soDienDauKi <= soDienCuoiKi) && (ngayDauKi <= ngayCuoiKi)) {
			soDien = soDienCuoiKi - soDienDauKi;
				 document.write('<br> so dien su dung la : ' + soDien);
				document.write('<br> từ ngày :' + ngayDauKi + 'đến ngày :' +ngayCuoiKi);
			if (soDien <= 100) {
				tienDien = soDien * 1500;
			} else if (soDien <= 300) {
				tienDien = soDien * 2000;
			} else {
				tienDien = soDien * 3000;
			}
			document.write('<br> tien dien la :' + tienDien);
		} else {
			document.write('<br> vui long nhap dung yeu cau');
		}


	}
	 if(ten == "") {
		document.getElementById('errorTen').innerHTML = '<br> vui long nhap ten';
	}
	else {
		document.getElementById('errorTen').innerHTML = '';
	} 

	if(soDienDauKi == "") {
		document.getElementById('errorDienDauKi').innerHTML = '<br> vui long nhap so dien dau ki';
	}
	else {
		document.getElementById('errorDienDauKi').innerHTML = '';
	} 

	if(soDienCuoiKi == "") {
		document.getElementById('errorDienCuoiKi').innerHTML = '<br> vui long nhap so dien cuoi ki';
	}
	else {
		document.getElementById('errorDienCuoiKi').innerHTML = '';
	} 

	if(soDienCuoiKi < soDienDauKi) {
		document.getElementById('errorDien').innerHTML = '<br> vui long nhap so dien dau ki nho hon so dien cuoi ki';
	}
	else {
		document.getElementById('errorDienDauKi').innerHTML = '';
	}

	if(ngayDauKi == "") {
		document.getElementById('errorNgayDauKi').innerHTML = '<br> vui long nhap ngay dau ki';
	}
	else {
		document.getElementById('errorNgayDauKi').innerHTML = '';
	} 

	if(ngayCuoiKi == "") {
		document.getElementById('errorNgayCuoiKi').innerHTML = '<br> vui long nhap ngay cuoi ki';
	}
	else {
		document.getElementById('errorNgayCuoiKi').innerHTML = '';
	} 
	
	if(ngayCuoiKi < ngayDauKi) {
		document.getElementById('errorNgayDauKi').innerHTML = '<br> vui long nhap ngay dau ki nho hon ngay cuoi ki';
	}else {
		document.getElementById('errorNgayDauKi').innerHTML = '';
	} 
}