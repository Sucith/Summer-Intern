function arrayrev(){
    var inp=prompt("Enter the sequence of numbers seprated by commas:");

    var array=inp.split(",");

    console.log(array);

    var revarray="";

    for(let i=array.length -1;i>=0;i--){
        revarray+=array[i];
        if(i!==0){
            revarray+=",";
        }
    }

    var revarray=revarray.split(", ");

    console.log(revarray);
}

arrayrev();