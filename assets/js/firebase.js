const firebaseConfig = {
	apiKey: "AIzaSyA0Qxo2OwIp0Cf5PG64SHiIsBQXBpImb3Q",
	authDomain: "sonquynhwed.firebaseapp.com",
	databaseURL:
		"https://sonquynhwed-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "sonquynhwed",
	storageBucket: "sonquynhwed.appspot.com",
	messagingSenderId: "818832039726",
	appId: "1:818832039726:web:fe6bf16a65cd72e47764bf",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("SonQuynhWed");

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
