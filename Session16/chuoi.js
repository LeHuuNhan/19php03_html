var x = 5;
var y = "van hau van hau";
 document.write(y.length);
 // tim vi tri chu 'h' xuat hien dau tien trong chuoi
 document.write('<br>' + y.indexOf('h'));  // neu tim khong thay ki tu trong string thi tra ve gia tri -1

 // tim vi tri chu 'h' xuat hien cuoi cung trong chuoi
 document.write('<br>' + y.lastIndexOf('h'));

 // cat chuoi ky tu trong String
 // cach 1: cat tu vi tri -> vi tri
 document.write('<br>' + y.substring(0, 7));
 //cach 2 : cat tu vi tri , voi chieu dai cho truoc
 document.write('<br>' + y.substr(3,4));
  

// BT 1 : dem xem chuoi tren co bao nhieu chu 'a'

function dem() {
	var dem = 0;
	var moi = '';
	
	while (y.indexOf('a') != -1) {
		dem++;
		moi = y.substring(y.indexOf('a')+1, y.length);
		y = moi;
	}
	document.write('<br> so ki tu a co trong chuoi la '+ dem);
				
}
dem();

// BT 2 : viet ham truyen vao 1 chuoi va 1 ky tu , kiem tra co bao nhieu ky tu do trong chuoi

function demKiTu( charSeach , myStr) {
	var dem = 0;
	var moi = '';
	
	while (myStr.indexOf(charSeach) != -1) {
		dem++;
		moi = myStr.substring(myStr.indexOf(charSeach)+1, myStr.length);
		myStr = moi;
	}
	return dem;
				
}
document.write('<br> ');
document.write(demKiTu('a', 'van hau'));

// BT 3: dung promt de nhap ho va ten vao theo mau : Le Van Tuan
// dem xem ho va ten day du co bao nhieu ky tu? (khong tinh khoang trong)
// dem xem ho co bao nhieu ky tu

function nhapTen() {
	var myName = prompt('Please input your name','');
	var doDai = myName.length;
	var tinh = 0;

	var cout = 0; // dem khoang trong
	// var tam = myName;
	var newName = '';

	for (var i =0 ; i < myName.length ; i++) {
		while (myName.indexOf(' ') != -1) {
			cout++;
			tinh = doDai - cout;
			newName = myName.substring(myName.indexOf(' ')+1, myName.length);
			myName = newName;
		}
	}
	document.write('<br> so ki tu trong trong chuoi nhap vao la '+ tinh);

	// dem ho
	
}
nhapTen();

// BT 4 : cung nhu BT2 nhung ky tu tim kiem khong phan biet la 1 ki tu hay nhieu ki tu.
// vidu : countCharInString('am', 'i am chad'); giai: thay so +1 == charseach.length 

function bt4( charSeach , myStr) {
	var dem = 0;
	var moi = '';
	
	while (myStr.indexOf(charSeach) != -1) {
		dem++;
		moi = myStr.substring(myStr.indexOf(charSeach)+charSeach.length, myStr.length);
		myStr = moi;
	}
	return dem;
				
}
document.write('<br> ');
document.write('chuỗi kí tự cần tìm xuất hiện :');
document.write(bt4('au', 'van hau van hau van hau van hau'));

//BT 5 : tiep tuc bai 4 nhung neu tim duoc ky tu/chuoi ky tu tring string thi in ra string voi
// ky tu/chuoi ky tu do mau vang
// giai : stype 1 the span co mau vang roi thay vao ki tu can tim

function bt5( charSeach , myStr) {
	var dem = 0;
	var moi ;
	
	for(var i =0; i <= myStr.length ; i++) {
		if (myStr[i] == charSeach) {
			moi = myStr.replace(charSeach, myStr);
		}
	}
	document.write(moi);

}
document.write('<br> ');
document.write('chuỗi kí tự cần tìm xuất hiện :');
document.write(bt5('au', 'van hau van hau'));

// BT 6 : nhap vao 1 chuoi bang prompt .
// dem xem trong chuoi do ky tu nao nhieu nhat ?
// ky tu nao it xuat hien nhat
// neu bang nhau thi hien thi 1 cai nhat la duoc

function demChuoi() {
	var chuoi = "van vau";
	var dem = 1;
	var max = 0;
	for ( var i =0 ; i < chuoi.length ; i++) {
		if (chuoi[i] == chuoi[i+1]) {
			dem++;
			if (dem>max) {
				max = dem;
			}
		}else{
			dem =1;
		}
	}
	document.write('<br>'+dem);
}
demChuoi();

// BT 7: cung nhu bt6 nhung phan biet chu Hoa va chu thuong
// nghien cuu toUpperCase() vs toLowerCase()
// replace() de thay the mot thu gi do
// dung ham eval() de tinh toan tao may tinh.