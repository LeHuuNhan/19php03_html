// cho 2 mảng :
// $arr1 = (1, 3, 4, 5, 8, 9);
// $arr2 = (2,6,7,8,10);

// Gio lam sao để e kiem tra dc số 8 trong arr2 có tồn tại trong arr1?

function timGiaTri(){
	var mang_A = new Array(1, 3, 4, 5, 8, 9);
	var mang_B = new Array(2,6,7,8,10);
	var dem = 0;

	for(var i =0 ; i < mang_A.length; i++){
		for (var j = 0; j < mang_B.length; j++) {
			if (mang_B[j] == 8 && mang_A[i] == mang_B[j]) {
				dem++;
			}
		}
	}
	if (dem != 0) {
		document.write("số 8 CÓ tồn tại trong mảng A và B");
	}else {
		document.write("số 8 KHÔNG tồn tại trong mảng A và B");
	}
}
timGiaTri();