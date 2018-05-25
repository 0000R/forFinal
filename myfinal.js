function idCard() {
    let firstName = document.getElementById('firstnameImput').value;
    let lastName = document.getElementById('lastNameImput').value;
    document.getElementById('postFullName').innerHTML = firstName + ' ' + lastName;
}