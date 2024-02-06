function extractWithRegex(pattern, str) {
    
    const regex = new RegExp(pattern);

    
    const match = regex.exec(str);

    
    if (match) {
        
        const extractedParts = match.slice(1);

    
        return extractedParts;
    } else {
        
        return null;
    }
}


const dateStr = "Today's date is 26-11-2023.";
const dayMonthYearPattern = /(\d{1,2})-(\d{1,2})-(\d{4})/;
const [day, month, year] = extractWithRegex(dayMonthYearPattern, dateStr);

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);
