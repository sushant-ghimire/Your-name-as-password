function generatePassword() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  if (!name) {
    document.getElementById("output").textContent = "Please enter a name!";
    return;
  }

  const substitutions = {
    a: "4",
    r: "1",
    e: "3",
    s: "5",
    t: "7",
    o: "0",
    // Add more like 'e':'3', 'o':'0', 's':'5', 't':'7' if needed
  };

  let password = "";
  for (let char of name) {
    password += substitutions[char] || char.toUpperCase();
  }

  document.getElementById("output").textContent = password;
  document.getElementById("asciiList").style.display = "none";
}

let asciiVisible = false;
function showASCIIToggle() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    document.getElementById("output").textContent = "Please enter a name!";
    return;
  }

  const asciiList = document.getElementById("output");

    let list = "";
    for (let i = 0; i < name.length; i++) {
      const ascii = name.charCodeAt(i);
      list += `${ascii}`;
    }
    output.innerHTML = list;
    output.style.display = "block";

  asciiVisible = !asciiVisible;
}

function clearOutput() {
  document.getElementById("output").textContent = "";
  document.getElementById("asciiList").style.display = "none";
  document.getElementById("nameInput").value = "";
  asciiVisible = false;
}
