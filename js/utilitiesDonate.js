// show section 
function showSectionById(id){
   // hide all the section 
   document.getElementById('donate-section').classList.add('hidden');
   document.getElementById('transaction-history').classList.add('hidden');

// show the section with provide id as parameter 
document.getElementById(id).classList.remove('hidden');

}


// get input field value by id 

function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   // console.log(id)
   const inputNumber = parseFloat(inputValue);
   
   return inputNumber;
}

// get text field value by id 

function getTextFieldValueById(id){
   const textValue = document.getElementById(id).innerText;
   const textNumber = parseFloat(textValue);
   return textNumber;
}
