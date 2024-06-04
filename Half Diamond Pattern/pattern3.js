function thirdpattern(rows){
    let n=rows;

    for(i=0;i<=n;i++){
        let str=' '.repeat(n-i);
        if(i===0){
            str+='*';
        }else{
            str+='*'.repeat(2 * i + 1);
        }
        console.log(str);
    }
}

thirdpattern(8);