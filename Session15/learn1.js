function validateRegister() {
	var username , password ;
	// lay gia tri cua input username
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	if (username == '') {
		document.getElementById('errorUsername').innerHTML = 'please input username';
	}else {
		document.getElementById('errorUsername').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errorPassword').innerHTML = 'please input password';
	}else {
		document.getElementById('errorPassword').innerHTML = '';
	}

	if (username != '' && password != '') {
		document.getElementById('success').innerHTML = 'Register success !';
	}
}


function sum() {
	var soA ,soB ;
	soA = parseInt(document.getElementById('soA').value);
	soB = parseInt(document.getElementById('soB').value);


	if (soA == '') {
		document.getElementById('errorSoA').innerHTML = 'please input soA';
	}else {
		document.getElementById('errorSoA').innerHTML = '';
	}
	if (soB == '') {
		document.getElementById('errorSoB').innerHTML = 'please input soB';
	}else {
		document.getElementById('errorSoB').innerHTML = '';
	}

	if (soA != '' && soB != '') {
		document.getElementById('sum').innerHTML = soA + soB;
	}

}

// vi du
// lay gia tri cua input username
	// username = document.getElementById('username').value;
	// password = document.getElementById('password').value;
	// if (username == '') {
	// 	alert('please input username');
	// }
	// if (password == '') {
	// 	alert('please input password');
	// }

	// if (username != '' && password != '') {
	// 	alert('Register success !');
	// }