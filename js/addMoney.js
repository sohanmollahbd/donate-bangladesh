// Donate Noakhali 

document.getElementById('btn-donate-noakhali').addEventListener('click',function(event){
   event.preventDefault();

   const addMoney = getInputFieldValueById('input-add-money-noakhali');
   const balance = getTextFieldValueById('account-balance');
  if(isNaN(addMoney)){
    alert('failed to add money');
    return;
   }
  else{
    if(addMoney > 0 && balance > 0 && addMoney <= balance){
      
      const newBalance = balance - addMoney;
      document.getElementById('account-balance').innerText = newBalance;
      const accountBalanceNoakhali = document.getElementById('account-balance-noakhali').innerText;
      const accountBalanceNoakhaliNumber = parseFloat(accountBalanceNoakhali);
      const newBalanceNoakhali = accountBalanceNoakhaliNumber + addMoney;

      document.getElementById('account-balance-noakhali').innerText = newBalanceNoakhali;

      // add to transaction history
      const p = document.createElement('p');
      p.style.border = '1px solid black';
      p.style.padding = '40px';
      p.style.borderRadius = '10px'
      p.innerText = ` ${addMoney} Taka is Donated for Flood-2024 at Noakhali, Bangladesh`;

      document.getElementById('transactions-container').appendChild(p);

     
    }
    else{
      alert('Failed to donate money!')
    }
  }

});



// Feni donation 

document.getElementById('btn-donate-feni').addEventListener('click',function(event){
  event.preventDefault();

  const addMoney = getInputFieldValueById('input-add-money-feni');
  const balance = getTextFieldValueById('account-balance');
 if(isNaN(addMoney)){
   alert('failed to add money');
   return;
  }
 else{
   if(addMoney > 0 && balance > 0 && addMoney <= balance){
     
     const newBalance = balance - addMoney;
     document.getElementById('account-balance').innerText = newBalance;
     const accountBalanceFeni = document.getElementById('account-balance-feni').innerText;
     const accountBalanceFeniNumber = parseFloat(accountBalanceFeni);
     const newBalanceFeni = accountBalanceFeniNumber + addMoney;

     document.getElementById('account-balance-feni').innerText = newBalanceFeni;

     // add to transaction history
     const p = document.createElement('p');
     p.style.border = '1px solid black';
     p.style.padding = '40px';
     p.style.borderRadius = '10px'
     p.innerText = ` ${addMoney} Taka is Donated for Flood Relief-2024 at Feni, Bangladesh`;

     document.getElementById('transactions-container').appendChild(p);

    
   }
   else{
     alert('Failed to donate money!')
   }
 }

});



// Donate Quota Protest 

document.getElementById('btn-donate-quota').addEventListener('click',function(event){
  event.preventDefault();

  const addMoney = getInputFieldValueById('input-add-money-quota');
  const balance = getTextFieldValueById('account-balance');
 if(isNaN(addMoney)){
   alert('failed to add money');
   return;
  }
 else{
   if(addMoney > 0 && balance > 0 && addMoney <= balance){
     
     const newBalance = balance - addMoney;
     document.getElementById('account-balance').innerText = newBalance;
     const accountBalanceQuota = document.getElementById('account-balance-Quota').innerText;
     const accountBalanceQuotaNumber = parseFloat(accountBalanceQuota);
     const newBalanceQuota = accountBalanceQuotaNumber + addMoney;

     document.getElementById('account-balance-Quota').innerText = newBalanceQuota;

     // add to transaction history
     const p = document.createElement('p');
     p.style.border = '1px solid black';
     p.style.padding = '40px';
     p.style.borderRadius = '10px'
     p.innerText = `${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;

     document.getElementById('transactions-container').appendChild(p);

    
   }
   else{
     alert('Failed to donate money!')
   }
 }

})