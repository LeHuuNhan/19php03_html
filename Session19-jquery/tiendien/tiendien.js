$('#xuat').click(function () {
	var ten = $('#ten').val();
	var soDienDauKi = $('#soDienDauKi').val();
	var soDienCuoiKi = $('#soDienCuoiKi').val();
	var ngayDauKi = $('#ngayDauKi').val();
	var ngayCuoiKi = $('#ngayCuoiKi').val();

	var soDien = 0;
	var tienDien = 0;

	if (ten == "") {
		$('#errorTen').html('Vui long nhap ten').css('color', 'red');
	}else {
		$('#errorTen').html('');
	}

	if (soDienDauKi == "") {
		$('#errorSoDienDauKi').html('Vui long nhap so dien dau ki').css('color', 'red');
	}else {
		$('#errorSoDienDauKi').html('');
	}

	if (soDienCuoiKi == "") {
		$('#errorSoDienCuoiKi').html('Vui long nhap so dien cuoi ki').css('color', 'red');
	}else {
		$('#errorSoDienCuoiKi').html('');
	}

	if (ngayDauKi == "") {
		$('#errorNgayDauKi').html('Vui long nhap vao so ngay dau ki').css('color', 'red');
	}else {
		$('#errorNgayDauKi').html('');
	}

	if (ngayCuoiKi == "") {
		$('#errorNgayCuoiKi').html('Vui long nhap vao ngay cuoi ki').css('color', 'red');
	}else {
		$('#errorNgayCuoiKi').html('');
	}

	if (ten != "" && soDienDauKi != "" && soDienCuoiKi != "" && ngayDauKi != "" && ngayCuoiKi != "") {
		if (soDienDauKi > soDienCuoiKi) {
			$('#errorSoDienDauKi').html('Vui long nhap so dien dau ki nho hon so dien cuoi ki').css('color', 'red');
		}else {
			$('#errorSoDienDauKi').html('');
			soDien = soDienCuoiKi - soDienDauKi;
			$('#kqDien').html(soDien);
			if (soDien <= 100) {
				tienDien = soDien * 1500;
			}else if (soDien > 100 && soDien <= 200) {
				tienDien = (soDien - 100) * 2000 + 100 *1500;
			}else {
				tienDien = (100 * 1500) + (100 * 2000) + (soDien - 200)*3000;
			}
		}

		$('#kqTienDien').html(tienDien);
	}

	if (ngayDauKi > ngayCuoiKi) {
		$('#errorNgayDauKi').html('Vui long nhap ngay dau ki nho hon ngay cuoi ki').css('color', 'red');
	}else {
		$('#kqNgayDauKi').html(ngayDauKi);
		$('#kqNgayCuoiKi').html(ngayCuoiKi);
	}

	$('#kqTen').html(ten);
	
});