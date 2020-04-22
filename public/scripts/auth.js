// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("guides")
      .get()
      .then((snapshot) => {
        setupGuides(snapshot.docs);
        setupUI(user);
      });
  } else {
    setupUI();
    setupGuides([]);
  }
});

// create new guide feedback
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("feedback")
    .add({
      FirstName: createForm.FirstName.value,
      Lastname: createForm.Lastname.value,
      Email: createForm.Email.value,
      FeedBackContent: createForm.FeedBackContent.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// create new guide add book
const createForm2 = document.querySelector("#create-form2");
createForm2.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("books")
    .add({
      ID: createForm2.ID.value,
      BookName: createForm2.BookName.value,
      AuthorsName: createForm2.AuthorsName.value,
      Edition: createForm2.Edition.value,
      Quantity: createForm2.Quantity.value,
      Department: createForm2.Department.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-books");
      M.Modal.getInstance(modal).close();
      createForm2.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// create new guide new student
const createForm1 = document.querySelector("#create-form1");
createForm1.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("newstudent")
    .add({
      firstname: createForm1.firstname.value,
      lastname: createForm1.lastname.value,
      University: createForm1.University.value,
      USN: createForm1.USN.value,
      PhoneNumber: createForm1.PhoneNumber.value,
      Gender: createForm1.Gender.value,
    })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-newstudent");
      M.Modal.getInstance(modal).close();
      createForm1.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user signed out");
  });
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
