// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed");
  }
}

// SIGNUP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  alert("Signup successful");
}

// LOAD JOBS
async function loadJobs() {
  const res = await fetch("http://localhost:5000/jobs");
  const jobs = await res.json();

  const container = document.getElementById("jobs");
  container.innerHTML = "";

  jobs.forEach(job => {
    container.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p>${job.city}</p>
      </div>
    `;
  });
}

window.onload = loadJobs;