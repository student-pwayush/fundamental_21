
function outerFunction(parameter) {

   let localvar = 'I am a Ayush variable';

    function innerFunction() { 

        console.log('Parameter of outerFunction:', parameter); 
        console.log('Local variable of outerFunction:', localvar);
    }

   return innerFunction;
}

const innerFunc = outerFunction('Ayush');

innerFunc();