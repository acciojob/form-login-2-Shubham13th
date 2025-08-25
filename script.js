//your JS code here. If required.
 const submitBtn = document.getElementById('submit-btn');
        submitBtn.addEventListener('click', () => {

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const emailId = document.getElementById('emailId').value;

            alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`)

        })