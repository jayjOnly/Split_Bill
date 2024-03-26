export class User {
    constructor(userID, name, age, gender, email, username, password) {
        this.userID = userID;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
    
export class SplitBill {
    constructor(splitID, userID, scannerID) {
        this.splitID = splitID;
        this.userID = userID;
        this.scannerID = scannerID;
    }
}
    
export class BillScanner {
    constructor(scannerID, billImage, itemName, itemPrice, itemAmount, tax, discount, totalPrice) {
        this.scannerID = scannerID;
        this.billImage = billImage;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemAmount = itemAmount;
        this.tax = tax;
        this.discount = discount;
        this.totalPrice = totalPrice;
    }
}