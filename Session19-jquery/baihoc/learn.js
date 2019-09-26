$('.change_content').click(function () {
	$('#demo1').html('demo 1 change content');
});

$('#change_attribute').click(function () {
	$('.demo2').attr('src', 'iconfb.png');
	$('.demo2').attr('alt', 'icon'); 
});


// Bai toan

$('#cong').click(function() {
	var name1 = $('#name1').val(); //lấy giá trị của name1
	var name2 = $('#name2').val();
	name1 = Number(name1);
	name2 = Number(name2);
	var tong = name1 + name2;
	
	$('#ketqua').html(tong);
	
});

$('#tru').click(function () {
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();

	name1 = Number(name1);
	name2 = Number(name2);
	var tru = name1 - name2;

	$('#ketqua').html(tru);	
});
	
$('#nhan').click(function () {
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();

	name1 = Number(name1);
	name2 = Number(name2);
	var nhan = name1 * name2;

	$('#ketqua').html(nhan);	
});

$('#chia').click(function () {
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();

	name1 = Number(name1);
	name2 = Number(name2);
	var chia = name1 / name2;

	$('#ketqua').html(chia);
});
	