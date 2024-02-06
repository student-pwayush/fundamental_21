function calculateDeliveryTime(packageType) {
    let deliveryTime;

    
    switch (packageType.toLowerCase()) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'next day';
            break;
        default:
            deliveryTime = 'not available';
            break;
    }

    return deliveryTime;
}


console.log("Estimated delivery time for standard package:", calculateDeliveryTime("standard"));
console.log("Estimated delivery time for express package:", calculateDeliveryTime("express"));
console.log("Estimated delivery time for overnight package:", calculateDeliveryTime("overnight"));
console.log("Estimated delivery time for priority package:", calculateDeliveryTime("priority"));
