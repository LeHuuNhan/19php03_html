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
 var a = '1';
 switch(a) {
 	case '1':
 	document.write("hôm nay là thứ 2 <br>");
 	break;

 	case '2':
 	document.write('hôm nay là thứ 3 <br>');
 	break;

 	case '3':
 	document.write('hôm nay là thứ 4 <br>');
 	break;

 	case '4':
 	document.write('hôm nay là thứ 5 <br>');
 	break;

 	case '5':
 	document.write('hôm nay là thứ 6 <br>');
 	break;

 	case '6':
 	document.write('hôm nay là thứ 7 <br>');
 	break;

 	case '7':
 	document.write('hôm nay là chủ nhật <br>');
 	break;

 	default:
 	document.write('vui lòng nhập lại theo thứ tự');
 	break
 }