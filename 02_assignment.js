function matchwithRegex(pattern, str) {

    const regex = new RegExp(pattern);
    
    return regex.test(str);
    
    }
    
    console.log(matchwithRegex(/\d+/, "Hello 123")); console.log(matchwithRegex(/[a-z]+/, "HELLO"));
    
    
    console.log(matchwithRegex(/[A-Z]+/, "HELLO"));
    
    
    console.log(matchwithRegex(/\w+/, "123_hello")); console.log(matchwithRegex(/\s/, "Hello World"));
    
    console.log(matchwithRegex(/\d{3}-\d{2}-\d{4}/, "123-45-6789"));
    
    console.log(matchwithRegex(/\bcat\b/, "I have a cat."));