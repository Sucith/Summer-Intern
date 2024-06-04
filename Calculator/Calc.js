function Calc(){
    const Num1=parseFloat(prompt("Enter the First Number:"));
    const Num2=parseFloat(prompt("Enter the Second Number:"));
    const Operation=prompt("Enter the Operation(Add,Sub.Multiply,Divide):");

    function performoperation(Num1,Num2,Operation){
        if(isNaN(Num1)|| isNaN(Num2)){
            console.log("Please Enter Valid Numbers");
        }

        let result;
        switch(Operation.toLowerCase()){
            case'add':
                result = Num1+Num2;
                break;

            case'sub':
                result = Num1-Num2;
                break;

            case'multiply':
                result = Num1*Num2;
                break;
            
            case'divide':
                result = Num1/Num2;
                break;

            default:
                result="Invalid";
                break;
        }

        return result;
    }

    const result=performoperation(Num1,Num2,Operation);

    console.log(result);

}

Calc();