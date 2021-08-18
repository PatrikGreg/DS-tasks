window.CANDYRACK_VARIANT_SELECTOR_FUNCTION = (button) => {

	//find form closest to the button the user clicked on
    const closestForm = button.closest('form');
    if (!closestForm) {
        return;
    }

	//find element containing the variant IDs
    const idElement = closestForm.querySelector('[name="custom-id"]');
    if (!idElement) {
        return;
    }

	//get the value of the element associated with the currently selected item
    const selectedElementValue = idElement[idElement.selectedIndex].value;
	if (!selectedElementValue) {
        return;
    }

	//extract the ID located inside the selectedElementValue
    const variantId = selectedElementValue.split("-")[0];

	//parse variantId using Number constructor and check for NaN
    if (!isNaN(Number(variantId))) {
        return Number(variantId); //return variantId
    }
}