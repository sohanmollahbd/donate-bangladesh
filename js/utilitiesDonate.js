// show section 

function showSectionById(id){
   // hide all the section 
   document.getElementById('donate-section').classList.add('hidden');
   document.getElementById('transaction-history').classList.add('hidden');

// show the section with provide id as parameter 
document.getElementById(id).classList.remove('hidden');
}