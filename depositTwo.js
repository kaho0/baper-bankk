/* 
1.add event listener to the deposit button
*/
document.getElementById('btn-deposit').addEventListener('click',function(){
 const depositField=document.getElementById('deposit-field');
 const newDepositAmountString=depositField.value;
const newDepositAmount=parseFloat(newDepositAmountString);


depositField.value='';

const depositTotalElement=document.getElementById('deposit-total');
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);

const newDepositTotal=previousDepositTotal+newDepositAmount;
depositTotalElement.innerText=newDepositTotal;

const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

const newBalanceTotal=newDepositAmount+previousBalanceTotal;
balanceTotalElement.innerText=newBalanceTotal;
 

})