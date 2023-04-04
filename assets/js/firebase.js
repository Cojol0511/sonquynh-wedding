const firebaseConfig = {
	apiKey: "AIzaSyDv0bn0PwqpwC-ZaK7mfsTpKOrHP_TXHLQ",
	authDomain: "wedding-4062c.firebaseapp.com",
	databaseURL:
		"https://wedding-4062c-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "wedding-4062c",
	storageBucket: "wedding-4062c.appspot.com",
	messagingSenderId: "182269847951",
	appId: "1:182269847951:web:b4a102d7d168d08aa303fa",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("WEDDING");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();

	var name = getElementVal("name");
	var phone = getElementVal("phone");
	var join = $("input[name=join]:checked", "#contactForm").val();

	saveMessages(name, phone, join);

	//   enable notice
	document.querySelector(".notice").style.display = "block";

	//   remove the notice
	setTimeout(() => {
		document.querySelector(".notice").style.display = "none";
	}, 3000);

	//   reset the form
	document.getElementById("contactForm").reset();
}

const saveMessages = (name, phone, join) => {
	var newContactForm = contactFormDB.push();

	newContactForm.set({
		name: name,
		phone: phone,
		join: join,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};
