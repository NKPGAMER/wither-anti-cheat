window.onload = function() {
  var notification = document.getElementById("notification");
  var close = document.getElementById("close");
  
  close.onclick = function() {
    notification.style.display = "none";
  }
  
  setTimeout(function() {
    notification.style.display = "none";
  }, 5000);
}