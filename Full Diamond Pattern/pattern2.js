function secondpattern(rows){
    let n=Math.floor(rows/2);

    //upperpattern
    for(let i=0;i<=n;i++){
        let str=' '.repeat(n-i);
        if(i===0){
            str+='*';
        }
        else{
            str+='*'.repeat(2 * i + 1)
        }
        console.log(str);
    }


    //lowerpattern
    for(let i=n-1;i>=0;i--){
        let str=' '.repeat(n-i);
        if(i===0){
            str+="*";
        }else{
            str+='*'.repeat(2 * i +1)
        }
        console.log(str);
    }
}


//calling function
secondpattern(6)