document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);

    const depositTotalElement=document.getElementById('deposit-total');
    const prevDepositTotalString=depositTotalElement.innerText;
    const prevDepositTotal=parseFloat(prevDepositTotalString);
    
    const currentDepositTotal=prevDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;
    
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;

    depositField.value='';
    
})