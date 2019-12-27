document.addEventListener('DOMContentLoaded', function() {
    const expandables = document.querySelectorAll(".ab-exapndable-button");
    for(var i=0; i<expandables.length;i++){
         expandables[i].addEventListener("click", function(evt) {
         var btn = evt.target;
         var content = btn.nextSibling;
           if(btn.getAttribute("aria-expanded") == "true"){
               btn.setAttribute("aria-expanded",false);
               content.style.display = "none";
           }
           else{
               btn.setAttribute("aria-expanded",true);
               content.style.display = "block"; 
           }
        })
    }
 })