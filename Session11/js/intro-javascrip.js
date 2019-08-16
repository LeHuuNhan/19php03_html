var fullName;
var numberPhone;
var Email;
var Age;

var x = 7, y = 10;
function total() {
	var total = x + y;
	document.write(total);
	document.write('</br>');
}

document.write("tong la ");
total();

function sum() {
	var a = 7;
	return a;
}
 document.write(sum());
 document.write('<br>');

 // câu lệnh điều kiện
// 1
	var a =4;
  if (a==5) {
  	document.write("a là 5");
  	document.write('<br>');
 } else {
 	document.write("a không phải là 5");
 	document.write('<br>');
 }

// 2

 var b =5;
 if (b==5) {
 	document.write("số b là 5");
 	document.write('<br>');
 } else if (b==6) {
 	document.write("số b là 6");
 	document.write('<br>');
 } else {
 	document.write("số b không phải 5 và 6");
 	document.write('<br>');
 }

 // 3

 // switch (ten_bien) {
 	// case '1':
 		// thuc hien cac cau lệnh ở đây nếu giá trị biến bằng 1
 	// break;

 	// case '2':
 		// thuc hien cac cau lệnh ở đây nếu giá trị biến bằng 2
 	// break;

 	// default:
 		// thực hiện các câu lệnh ở đây nếu giá trị biến khác các trường hợp phía trên
 	// break;
 // }

 // VD : 
 // cho 1 số có giá trị củ tháng trong năm 1-12
 // nếu số đó khác 1-12 thì in ra số này không phải tháng của năm
 // nếu số đó là tháng của năm thì in ra số ngày của tháng đó.
 // cho thêm 1 số cho trước là số năm
 // kiểm tra nam đó nhuần hay không để in ra số ngày của tháng 2
 var myMonth = 2;
 var myYear = 2020;
 // tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
 // tháng 4, 6, 9, 11 có 30 ngày 
 // tháng 2 có 28 ngày , nếu năm nhuần thì tháng 2 có 29 ngày
 // năm nhuần là năm chia hết cho 4 nhưng không chia hết cho 100

 switch(myMonth) {
 	case 1:
	 	document.write("tháng 1 có 31 ngày <br>");
	 	break;

 	case 2:
 		if (myYear % 4 == 0 && myYear % 100 != 0) {
 			document.write('đây là năm nhuần <br>');
 			document.write('tháng 2 có 29 ngày <br>');
 		}else {
 			document.write('tháng 2 có 28 ngày  <br>');
 		}
	 	break;

 	case 3:
	 	document.write('tháng 3 có 31 ngày <br>');
	 	break;

 	case 4:
	 	document.write('tháng 4 có 30 ngày <br>');
	 	break;

 	case 5:
	 	document.write('tháng 5 có 31 ngày <br>');
	 	break;

 	case 6:
	 	document.write('tháng 6 có 30 ngày <br>');
	 	break;

 	case 7:
	 	document.write('tháng 7 có 31 ngày <br>');
	 	break;

	 case 8:
	 	document.write("tháng 8 có 31 ngày <br>");
	 	break;

 	case 9:
	 	document.write('tháng 9 có 30 ngày <br>');
	 	break;

 	case 10:
	 	document.write('tháng 10 có 31 ngày <br>');
	 	break;

 	case 11:
	 	document.write('tháng 11 có 30 ngày <br>');
	 	break;

 	case 12:
	 	document.write('tháng 12 có 31 ngày <br>');
	 	break;

 	default:
	 	document.write('vui lòng nhập số tháng của năm');
	 	break
}


// 4. vòng lặp
for (var i = 10; i >=0; i--) {
	document.write(i);
	document.write('<br>');
}
document.write('----------<br>');


var n = 5;
while (n < 10) {
	document.write(n);
	document.write('<br');
	n++ ;
}  

