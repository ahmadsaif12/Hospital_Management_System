document.addEventListener("DOMContentLoaded", () => {
    // Patients
    const patientForm = document.querySelector("#add-patient form");
    const patientTable = document.querySelector("#view-patients table");
    let patientId = 2; // start after example row

    patientForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = patientForm.name.value;
        const age = patientForm.age.value;
        const gender = patientForm.gender.value;
        const contact = patientForm.contact.value;

        const row = patientTable.insertRow();
        row.innerHTML = `
            <td>${patientId++}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${contact}</td>
        `;

        patientForm.reset();
    });

    // Doctors
    const doctorForm = document.querySelector("#add-doctor form");
    const doctorTable = document.querySelector("#view-doctors table");
    let doctorId = 2;

    doctorForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = doctorForm.name.value;
        const specialization = doctorForm.specialization.value;
        const contact = doctorForm.contact.value;

        const row = doctorTable.insertRow();
        row.innerHTML = `
            <td>${doctorId++}</td>
            <td>${name}</td>
            <td>${specialization}</td>
            <td>${contact}</td>
        `;

        doctorForm.reset();
    });

    // Appointments
    const appointmentForm = document.querySelector("#schedule-appointment form");
    const appointmentTable = document.querySelector("#view-appointments table");
    let appointmentId = 2;

    appointmentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const patient = appointmentForm.patient.value;
        const doctor = appointmentForm.doctor.value;
        const date = appointmentForm.date.value;
        const time = appointmentForm.time.value;

        const row = appointmentTable.insertRow();
        row.innerHTML = `
            <td>${appointmentId++}</td>
            <td>${patient}</td>
            <td>${doctor}</td>
            <td>${date}</td>
            <td>${time}</td>
        `;

        appointmentForm.reset();
    });
});

// add new feature
//added form
