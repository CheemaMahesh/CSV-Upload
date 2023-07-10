document.addEventListener("DOMContentLoaded", function() {
//adding eventListner whenever the search button is clicked
document.getElementById("search").addEventListener("click", searchTable);
function searchTable() {
  // Get the input value
  const input = document.getElementById("input").value.toLowerCase();
  console.log(input);
  
  //itrate through the table rows
  const tr = document.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    //Get the text content  of every row and convering it into lowercase
    const trText = tr[i].textContent.toLowerCase();
    
    // If the input value is found ,
    if (trText.includes(input)) {
        //adding a class attribute with name Match to it.
      tr[i].classList.add("Match");
      console.log('Match is found');
    } 
    else {
        //Removing a class attribute 
      tr[i].classList.remove("Match");
      console.log('Match is not found');
    }

  }
}

});
