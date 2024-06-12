document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        // Handle invalid input (e.g., show an error message to the user)
        alert("Please enter a valid amount to withdraw.");
        return;
    }

   const withdrawTotalElement=document.getElementById('withdraw-total');
   const previousWithdrawTotalString=withdrawTotalElement.innerText;
   const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

   
  
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString=balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);
   if (newWithdrawAmount > previousBalanceTotal) {
    // Handle insufficient balance (e.g., show an error message to the user)
    alert("Insufficient balance to withdraw the requested amount.");
    return;
}
const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
   withdrawTotalElement.innerText=currentWithdrawTotal;  
   
   const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
   balanceTotalElement.innerText=newBalanceTotal
   withdrawField.value='';
});