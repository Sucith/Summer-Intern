function passwordgen(){
  const len=parseFloat(prompt("Enter the length of the password:"));


  const Upcase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const Lowcase='abcdefghijklmnopqrstuvwxyz';
  const Number='1234567890';
  const Splchars='!@#$%^&**()';

  const allchar= Upcase+Lowcase+Number+Splchars;

  let password='';

  for(let i=1;i<len;i++){
    let index=Math.floor(Math.random()*allchar.length);
    password+=allchar[index];
  }

  console.log(password);
}

passwordgen();