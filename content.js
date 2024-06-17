window.onload = () => {
    const button = document.createElement('button');
    button.id = "generate";
    button.textContent = "DO IT DARK";

    elPlace = document.querySelector('.title.bigTitle')
    if (!elPlace) {
        console.log("don't show");
        return;
    }

    elPlace.prepend(button);

    button.addEventListener('click', function(event) {
        event.preventDefault();
        fillOnGrids()
    })


}

function fillOnGrids() {
    console.log('=================================')
    document.querySelector('input[name="data[title]"]').value = "AutoFill";
    document.querySelector('input[name="data[lots][0][title]"]').value = "AutoFill";
    document.querySelector('input[name="data[lots][0][value][amount]"]').value = "1000";
    document.querySelector('input[name="data[lots][0][minimalStep][amount]"]').value = "10";

    document.querySelector('input[name="data[items][0][quantity]"]').value = "5";

    const selectElementCountry = document.querySelector('select[name="data[items][0][country_id]"]');
    const selectElementCity = document.querySelector('select[name="data[items][0][region_id]"]');

    document.querySelector('input[name="data[items][0][deliveryDate][endDate]"]').value = "31/10/2024";
    document.querySelector('input[name="data[milestones][{index}][percentage]"]').value = '100';
    document.querySelector('input[name="data[milestones][{index}][duration][days]"]').value = '3';


    const today = new Date();

    // Get day with leading zero if necessary
    const day = String(today.getDate()).padStart(2, '0');

    // Get month with leading zero if necessary
    const month = String(today.getMonth() + 1).padStart(2, '0');

    // Formatted date in "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${today.getFullYear()}`;


    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 3);

    // Отримати день з ведучим нулем, якщо це необхідно
    const day2 = String(futureDate.getDate()).padStart(2, '0');

    // Отримати місяць з ведучим нулем, якщо це необхідно
    const month2 = String(futureDate.getMonth() + 1).padStart(2, '0');

    // Сформована дата в форматі "dd/mm/yyyy"
    const formattedDate2 = `${day2}/${month2}/${futureDate.getFullYear()}`;


    document.querySelector('input[name="data[enquiryPeriod][endDate]"]').value = formattedDate;
    document.querySelector('input[name="data[tenderPeriod][endDate]"]').value = formattedDate2;



    // Check if the select element is found
    if (selectElementCountry) {
        // Find the option with value '461'
        const optionToSelect = selectElementCountry.querySelector('option[value="461"]');

        // Check if the option is found
        if (optionToSelect) {
            // Set the selected attribute of the option
            optionToSelect.selected = true;

            // Optionally, dispatch a change event if needed
            const event = new Event('change');
            selectElementCountry.dispatchEvent(event);
        } else {
            console.error('Option with value "461" not found');
        }
    }

    if (selectElementCity) {
        // Find the option with value '461'
        const optionToSelect = selectElementCity.querySelector('option[value="2035"]');
        // Check if the option is found
        if (optionToSelect) {
            // Set the selected attribute of the option
            optionToSelect.selected = true;

            // Optionally, dispatch a change event if needed
            const event = new Event('change');
            selectElementCity.dispatchEvent(event);
        } else {
            console.error('Option with value "461" not found');
        }
    }
}