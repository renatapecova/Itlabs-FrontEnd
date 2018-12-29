var rIndex, x;
var table = document.getElementById("table1");
var counter = 0;

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        name = document.getElementById("name").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value;
        pin = document.getElementById("pin").value;
        country = document.getElementById("country").value;

    if (name === "") {
        alert("Name cannot be empty");
        isEmpty = true;
    } else if (address === "") {
        alert("Address cannot be empty");
        isEmpty = true;
    } else if (city === "") {
        alert("City cannot be empty");
        isEmpty = true;
    } else if (pin === "") {
        alert("Pin cannot be empty");
        isEmpty = true;
    } else if (country === "") {
        alert("Country cannot be empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addTableRow() {
    if (!checkEmptyInput()) {
        var newRow = table.insertRow();
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);

        name = document.getElementById("name").value,
        address = document.getElementById("address").value,
        city = document.getElementById("city").value;
        pin = document.getElementById("pin").value;
        country = document.getElementById("country").value;

        cell2.innerHTML = name;
        cell3.innerHTML = address;
        cell4.innerHTML = city;
        cell5.innerHTML = pin;
        cell6.innerHTML = country;
        counter++;
        cell7.innerHTML = '<i id="read" class="fas fa-eye"  value="read" onClick="readAlert(this)"></i><i id="edit" class="fas fa-edit"  value="ClickHere" onClick="editRow(this)"></i><i id="save" class="fas fa-save"  value="save" onClick="saveRow(this)"></i><i value="Delete" class="fas fa-trash" onclick="deleteRow(this)"></i>';

        document.getElementById("edit").id = "edit" + counter;
        document.getElementById("save").id = "save" + counter;
        document.getElementById("save" + counter).style.display = "none";

        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("city").value = "";
        document.getElementById("pin").value = "";
        document.getElementById("country").value = "";
    }
}

//edit the selected row
function editRow(button) {
    var index = button.parentElement.parentElement.rowIndex;
    document.getElementById("name").value = table.rows[index].cells[1].innerHTML;
    document.getElementById("address").value = table.rows[index].cells[2].innerHTML;
    document.getElementById("city").value = table.rows[index].cells[3].innerHTML;
    document.getElementById("pin").value = table.rows[index].cells[4].innerHTML;
    document.getElementById("country").value = table.rows[index].cells[5].innerHTML;

    button.style.display = "none"; // edit button
    button.nextSibling.style.display = "inline-block"; // save button
    button.nextSibling.nextSibling.style.display = "none"; // delete button
    button.previousSibling.style.display = "none"; // read button

}
// save button
function saveRow(button) {
    var index = button.parentElement.parentElement.rowIndex;
    table.rows[index].cells[1].innerHTML = document.getElementById("name").value;
    table.rows[index].cells[2].innerHTML = document.getElementById("address").value;
    table.rows[index].cells[3].innerHTML = document.getElementById("city").value;
    table.rows[index].cells[4].innerHTML = document.getElementById("pin").value;
    table.rows[index].cells[5].innerHTML = document.getElementById("country").value;

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("country").value = "";

    button.style.display = "none"; // delete button
    button.previousSibling.style.display = "inline-block"; // edit button
    button.nextSibling.style.display = "inline-block"; // delete button
    button.previousSibling.previousSibling.style.display = "inline-block"; // read button
}
//delete button
function deleteRow(button) {
    var index = button.parentElement.parentElement.rowIndex;
    table.deleteRow(index);
    // clear input text
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("country").value = "";
}
//alert box
function readAlert(button) {
    var index = button.parentElement.parentElement.rowIndex;
    alert_string = '';
    alert_string = alert_string + table.rows[index].cells[1].innerHTML;
    alert_string = alert_string + ' \n';
    alert_string = alert_string + table.rows[index].cells[2].innerHTML;
    alert_string = alert_string + ' \n';
    alert_string = alert_string + table.rows[index].cells[3].innerHTML;
    alert_string = alert_string + ' \n';
    alert_string = alert_string + table.rows[index].cells[4].innerHTML;
    alert_string = alert_string + ' \n';
    alert_string = alert_string + table.rows[index].cells[5].innerHTML;

    alert(alert_string);
}