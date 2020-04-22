// DOM elements
const guideList = document.querySelector(".guides");

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    // account info
    const html = `
    <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;

    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};


// setup guides
const setupGuides = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
      <li>
        <div class="collapsible-header grey "> ${guide.title} </div>
        <div class="collapsible-body grey"> ${guide.content} </div>
      </li>
    `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML =
      '<h6 class="center-align">Login to view the Return Policy</h6>';
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});