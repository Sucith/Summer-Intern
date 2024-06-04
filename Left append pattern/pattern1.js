function pattern(){
    let x=5;
    for(i=1;i<=x;i++){
        let str='';
        for(j=1;j<=i;j++){
            str+='*';
        }
        console.log(str);
    }
}

pattern();
