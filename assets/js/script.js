
function Two(){
    var dt = new Date();
    let dateTime = dt.toLocaleString();
    document.getElementById("datetime").innerHTML = dateTime;
    const bu = document.querySelector("button.dateButton");
    bu.style.opacity = 0;
}
