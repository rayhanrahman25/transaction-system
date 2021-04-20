// =========== Woriking With Login Btn ===============
document.getElementById('login-btn').addEventListener('click', function(){
    document.getElementById('login').style.display = "none";
    document.getElementById('welcom').style.display = "block";
})
   
//================ Working With Deposit Button ================
document.getElementById('deposit-btn').addEventListener('click',function rayahn(){
var depositform = document.getElementById('depositform').value;
var totaldeposit = document.getElementById('deposit').innerText = Number(depositform);
var  totalbalance = document.getElementById('totalbalance').innerHTML = totaldeposit;


})
//================= Working With Withdraw Button ==========================
document.getElementById('withdraw-btn').addEventListener('click', function rahman(){
var withdrawform = document.getElementById('withdrawform').value;
var totalwithdraw = document.getElementById('withdraw').innerText = Number(withdrawform); 
var depositform = document.getElementById('depositform').value;
var totaldeposit = document.getElementById('deposit').innerText = Number(depositform);
var  totalbalance = document.getElementById('totalbalance').innerHTML = totaldeposit - totalwithdraw;
})

