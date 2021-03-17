function myFunction(x) {
    if   (x.classList.toggle("change"))
    {
        mobile.style.display= "grid";
    }
    else {
        mobile.style.display= "none";
    }
}
      // Get the modal
      var popup = document.getElementById("mypopup");
      var popup2 = document.getElementById("mypopup2");
      
      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");
      var btn2 = document.getElementById("myBtn2");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      var span2 = document.getElementsByClassName("close")[1];
      
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        popup.style.display = "block";
      }
      btn2.onclick = function() {
        popup2.style.display = "block";
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        popup.style.display = "none";
      }
      span2.onclick = function() {
        popup2.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
        if (event.target == popup2) {
            popup2.style.display = "none";
        }
      }
      
      