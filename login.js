document.getElementById('btn-submit').addEventListener('click',function(){
  const emailField=document.getElementById('email-field');
  const email=emailField.value;
  console.log(email)

  const passwordField=document.getElementById('password-field');
  const pass=passwordField.value;
//   console.log(email,pass)
   if(email==='kahon@gmail.com'&&pass==='secret')
    {
        window.location.href='lala.html';
    }
    else{
        alert('Tui password bhule gesosss!!How could you?!');
    }
});
