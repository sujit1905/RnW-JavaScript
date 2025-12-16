let userDB = JSON.parse(localStorage.getItem("users")) || [];

let studentTable = document.getElementById("stu");
let teacherInfo = document.getElementById("teacher-info");
let teTable = document.getElementById("te");
let addBtn = document.getElementById("addstu");
let studentInput = document.getElementById("studentname");

let isLoading = false;


/* ================= REGISTER ================= */
function Ragister() {
  let username = document.getElementById("reg-username").value;
  let password = document.getElementById("reg-password").value;
  let role = document.getElementById("reg-role").value;

  if (!username || !password) return alert("Please enter data");

  if (userDB.some(u => u.username === username)) {
    return alert("Username already taken");
  }

  userDB.push({ username, password, role });
  localStorage.setItem("users", JSON.stringify(userDB));
  alert("Register successful");

  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
}

/* ================= LOGIN ================= */
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("login-role").value;

  let user = userDB.find(u => u.username === username && u.password === password && u.role === role);

  if (!user) {
    document.getElementById("error-message").style.display = "block";
    return;
  }

  hideAllViews();

  document.getElementById("login-form").style.display = "none";
  document.getElementById("error-message").style.display = "none";
  document.getElementById("log-out").style.display = "inline-block";
  document.getElementById("welcome-msg").style.display = "block";
  document.getElementById("usernametext").innerText = `${user.username} (${user.role})`;

  if (user.role === "teacher") {
    teacherInfo.style.display = "block";
    teTable.style.display = "table";
    loadTeacherTable(user.username);
  } else {
    studentTable.style.display = "table";
  }

  localStorage.setItem("loginuser", JSON.stringify(user));
}

/* ================= LOGOUT ================= */
function logout() {
  let user = JSON.parse(localStorage.getItem("loginuser"));
  if (user?.role === "teacher") {
    localStorage.removeItem("teacherTable_" + user.username);
  }

  localStorage.removeItem("loginuser");
  hideAllViews();

  document.getElementById("login-form").style.display = "block";
  document.getElementById("log-out").style.display = "none";
  document.getElementById("welcome-msg").style.display = "none";
  clearTeacherTable();
}


/* ================= CHECK LOGIN ================= */
function checkLoggedIn() {
  let user = JSON.parse(localStorage.getItem("loginuser"));
  if (!user) return;

  hideAllViews();

  document.getElementById("login-form").style.display = "none";
  document.getElementById("log-out").style.display = "inline-block";
  document.getElementById("welcome-msg").style.display = "block";
  document.getElementById("usernametext").innerText = `${user.username} (${user.role})`;

  if (user.role === "teacher") {
    teacherInfo.style.display = "block";
    teTable.style.display = "table";
    loadTeacherTable(user.username);
  } else {
    studentTable.style.display = "table";
  }
}

/* ================= HELPERS ================= */
function hideAllViews() {
  teacherInfo.style.display = "none";
  studentTable.style.display = "none";
  teTable.style.display = "none";
}

function clearTeacherTable() {
  while (teTable.rows.length > 1) teTable.deleteRow(1);
}

/* ================= TEACHER TABLE ================= */
addBtn.addEventListener("click", () => {
  let name = studentInput.value.trim();
  if (!name) return alert("Enter student name");

  addStudentToTable(name);
  studentInput.value = "";
});

function addStudentToTable(name) {
  teTable.style.display = "table";

  let row = teTable.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerHTML = `
    <button onclick="editStudent(this)">Edit</button>
    <button onclick="removeStudent(this)">Remove</button>
  `;

  if (!isLoading) {
    saveTeacherTable();
  }
}


function editStudent(btn) {
  let row = btn.parentElement.parentElement;
  let newName = prompt("Edit student name:", row.cells[0].innerText);
  if (newName) {
    row.cells[0].innerText = newName;
    saveTeacherTable();
  }
}

function removeStudent(btn) {
  let row = btn.parentElement.parentElement;
  row.parentElement.removeChild(row);
  saveTeacherTable();
}

/* ================= LOCAL STORAGE ================= */
function saveTeacherTable() {
  let username = JSON.parse(localStorage.getItem("loginuser")).username;
  let students = [];
  for (let i = 1; i < teTable.rows.length; i++) {
    students.push(teTable.rows[i].cells[0].innerText);
  }
  localStorage.setItem("teacherTable_" + username, JSON.stringify(students));
}

function loadTeacherTable(username) {
  isLoading = true;
  clearTeacherTable();

  let students = JSON.parse(localStorage.getItem("teacherTable_" + username)) || [];
  students.forEach(name => addStudentToTable(name));

  isLoading = false;
}


checkLoggedIn();
