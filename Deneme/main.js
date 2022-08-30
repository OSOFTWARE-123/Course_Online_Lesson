var h1 = document.getElementById("error");

function accepted() {
    h1.innerHTML = "ERROR!!! Your IP Address Has Been Copied!!!";
    document.getElementById("acc").disabled = true;
    document.getElementById("dec").disabled = true;
}

function declined() {
    h1.innerHTML = "ERROR!!! Your IP Address Has Been Not Copied!!!";
    document.getElementById("acc").disabled = true;
    document.getElementById("dec").disabled = true;
}