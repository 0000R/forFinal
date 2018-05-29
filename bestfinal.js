function idCard() {
    let firstName = document.getElementById("firstNameImput").value;
    let lastName = document.getElementById("lastNameImput").value;
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;

    let postAge = document.getElementById("ageImput").value;
    document.getElementById("postAge").innerHTML = "Age: " + postAge;

    let postPhoneNumber = document.getElementById("phoneNumberImput").value;
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + postPhoneNumber;

    let postAddress = document.getElementById("addressImput").value;
    document.getElementById("postAddress").innerHTML = "Address: " + postAddress;
}
let numberArray = [age, phoneNumber]
        numberArray.push(age);
        numberArray.push(phoneNumber);
    for (let i = 0;i < numberArray.length; i++){
        if (numberArray[i] <=100)
            document.getElementById("postAge").innerHTML = "Age: "+age;
        if (numberArray[i] >100)
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: "+phoneNumber;
}

