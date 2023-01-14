(function() {
    var exLog = console.log;
    var div = document.createElement('div');
    div.id = "custom_err_div"
    div.style.backgroundColor = "rgba(128, 235, 203, 0.327)";
    div.style.position = "absolute";
    div.style.bottom = `40px`;
    div.style.right = "50px";
    div.style.padding = "15px 30px";
    div.style.width = "400px";
    div.style.fontSize = "16px";
    
    console.log = function(msg) {
        exLog.apply(this, arguments);
        extendedFunctionality(msg,div)
    }
})()

var ERR_MSG;
window.onerror = function(e){
    ERR_MSG = e.toString();
    let errorDiv = document.createElement('span');
    errorDiv.style.color = "red"
    errorDiv.innerHTML = ERR_MSG;
    document.getElementById('custom_err_div').appendChild(errorDiv)
}

function extendedFunctionality(MSG,div){
    let temp = div.innerHTML
    div.innerHTML = temp + MSG + "<br/><br/>";
    document.body.appendChild(div)
}
