function palindrome(){
    const word=prompt("Enter the String:");
    let word1="";
    const leng=(word.length);
    for(i=leng-1;i>=0;i--){
        word1+=word[i];
    }
    console.log(word1);

    if(word===word1){
        console.log("True");
    }else{
        console.log("False");
    }
}
palindrome();