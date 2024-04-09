document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('submitBtn').addEventListener('click', function() {
        submitForm();
    });
});

function submitForm() {
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var food = [];
    var checkboxes = document.getElementsByName('food[]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            food.push(checkbox.value);
        }
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Check if at least 2 food options are selected
    if (food.length < 2) {
        alert('Please select at least 2 food options.');
        return; // Stop further execution
    }

   
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    var cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];
    cells.forEach(function(cellData) {
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(cellData);
        newCell.appendChild(newText);
    });

   
    document.getElementById('detailsForm').reset();


    document.getElementById('dataTable').style.display = 'table';
}