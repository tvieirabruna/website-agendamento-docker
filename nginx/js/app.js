// Define selected elements
let selectedStudent;
const selectedCheckboxes = {};

// Load students name into select
function load_students_name() {
    fetch(`http://localhost:3000/`)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            console.log('ERRO!');
        }
    })

    .then(data => {
        if (data.length === 0) {
            console.log('Erro!');
        } else {
            const selectElement = document.getElementById('name-filter');
            // Clear previous options
            selectElement.innerHTML = '<option value=""></option>';
            data.forEach(student => {
                const name = student.name;
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                selectElement.appendChild(option);
            });
        }
    })
}

// Handle change event in select
function handleSelectChange(selectedValue) {
    selectedStudent = selectedValue;
  }

// Handle change event in checkbox
function handleCheckboxChange(checkbox) {
    if (checkbox.checked) {
        // Store the checkbox in the selectedCheckboxes object
        selectedCheckboxes[checkbox.id] = true;
    } else {
        // If checkbox is unchecked, remove it from selectedCheckboxes object
        delete selectedCheckboxes[checkbox.id];
    }
}

// Show registered students
function showStudents() {
    const classHours = ['monday_9_30', 'monday_19_00', 'tuesday_9_30', 'wednesday_9_30', 'wednesday_19_00', 
    'friday_9_30', 'friday_17_30', 'friday_19_00', 'saturday_9_30', 'saturday_11_00'];

    for (let i = 0; i < classHours.length; i++) {
        const element = classHours[i];

        fetch(`http://localhost:3000/${element}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('ERRO!');
                return []
            }
        })

        .then(data => {
            if (data.length === 0) {
                console.log('Sem alunos marcados!');
            } else {
                const classDiv = document.querySelector(`.class_${element}`);

                // Loop through the studentNames array and create a paragraph element for each name
                data.forEach(student => {
                    // Extract student names from the data array
                    const studentNames = data.map(student => student.student_name);

                    // Join student names with "-" separator
                    const namesString = studentNames.join(' - ');

                    // Set the text content of the div to the joined names string
                    classDiv.innerHTML = namesString;
                });
            }
        })
    }
}

// Confirm classes
function confirmClasses() {
    // Construct the data payload
    const data = {
        student: selectedStudent,
        classes: selectedCheckboxes
    };

    // Send data to backend
    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent successfully.');
            location.reload();
        } else {
            console.error('Failed to send data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Feed students name into the page after it loads
window.onload = () => {
    load_students_name()
    showStudents()
}