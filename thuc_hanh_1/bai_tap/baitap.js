// Bài 1: GIỎI CẢ HAI MÔN
// Lớp 4A có 42 học sinh. Trong đó có 25 HS giỏi toán, 23 HS giỏi Tiếng Việt và hai HS không giỏi môn nào.
// Hỏi có bao nhiêu HS giỏi cả hai môn?

$('#tinh').click(function () {
	var tongHS = parseInt($('#tongHS').val());
	var gioiToan = parseInt($('#gioiToan').val());
	var gioiVan = parseInt($('#gioiVan').val());
	var khongGioi = parseInt($('#khongGioi').val());

	var gioiCaHai = gioiVan - ((tongHS - khongGioi) - gioiToan);

	$('#gioiCaHai').html(gioiCaHai);
});


// Bài 2: LẤY ÍT NHẤT BAO NHIÊU?
// Trong hộp có 45 quả bóng gồm 20 màu đỏ, 15 quả màu xanh và 10 quả màu vàng.

// Hỏi phải lấy ra bao nhiêu quả bóng để chắc chắn có ba quả bóng:

// a. Màu đỏ.

$('#tinhSoBong').click(function () {
	var bongDo = parseInt($('#bongDo').val());
	var bongXanh = parseInt($('#bongXanh').val());
	var bongVang = parseInt($('#bongVang').val());

	var a =( bongVang + bongXanh + 3);
	$('#a').html(a);
});

// b. Cùng màu.
$('#tinhSoBong').click(function () {
	var bongDo = parseInt($('#bongDo').val());
	var bongXanh = parseInt($('#bongXanh').val());
	var bongVang = parseInt($('#bongVang').val());

	var b = 2 + 2 + 2 + 1;
	$('#b').html(b);
});

// c. Khác màu
$('#tinhSoBong').click(function () {
	var bongDo = parseInt($('#bongDo').val());
	var bongXanh = parseInt($('#bongXanh').val());
	var bongVang = parseInt($('#bongVang').val());

	var c = bongVang + bongXanh + 1;
	$('#c').html(c);
});
// giải: 

// a) Để chắc chắn lấy ra được ba bóng màu đỏ chúng ra cần xem xét khả năng xấu nhất chưa lấy ra được ba bóng màu đỏ: 
// Toàn bộ bóng xanh và bóng vàng được lấy ra, do đó bắt buộc phải thêm 3 bóng đỏ nữa, 
// và câu trả lời là cần lấy ra 28 bóng (28 = 15 + 10 + 3) thì chắc chắn có 3 bóng đỏ.

// b) Để chắc chắn có 3 bóng cùng màu, chúng ra xem xét trường hợp xấu nhất: số bóng mỗi màu luôn được “chia đều nhất” có thể, 
// là 6 bóng lấy ra đầu tiên có đúng 2 bóng mỗi màu, khi đó lấy thêm một bóng bất kì thì bóng này phải trùng màu với 
// hai bóng nào đó có sẵn, câu trả lời là cần lấy ra 7 bóng thì chắc chắn có 3 bóng cùng màu.

// c) Hai loại bóng có số lượng nhiều hơn là bóng đỏ và bóng xanh, 
// nếu tất cả hai loại này đã được lấy ra thì ta cần thêm 1 bóng vàng nữa để trong các bóng lấy ra chắc chắn có ba màu.
// Chú ý rằng, trong các bóng lấy ra chắc chắn phải có đủ ba màu nên trường hợp xấu nhất mà ta cần xét tới là hai loại bóng có số 
// lượng nhiều hơn đã được lấy hết trước. 
// Câu trả lời là cần lấy ra 26 bóng thì chắc chắn có ba bóng khác màu.

