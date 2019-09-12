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


	}else {
		document.write('<br> vui long nhap du thong tin')
	}
}