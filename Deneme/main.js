var h1 = document.getElementById("error");
var h1_2 = document.getElementById("error2");

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

function accepted2() {
    h1_2.innerHTML = "ERROR!!! Your IP Address Has Been Copied!!!";
    document.getElementById("acc2").disabled = true;
    document.getElementById("dec2").disabled = true;
}

function declined2() {
    h1_2.innerHTML = "ERROR!!! Your IP Address Has Been Not Copied!!!";
    document.getElementById("acc2").disabled = true;
    document.getElementById("dec2").disabled = true;
}