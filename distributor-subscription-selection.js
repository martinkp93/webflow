// Get references to the dropdowns
const distributorDropdown = document.getElementById("distributor");
const subscriptionDropdown = document.getElementById("subscription-type");

// Define the options for each distributor with both optionText and optionValue
const distributorOptions = {
    "Agrassure": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
    ],
    "Agravis": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
    ],
    "Baltic Agro Estonia": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Baltic Agro Estonia Machinery": [
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
    ],
    "Baltic Agro Latvia": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Baltic Agro Latvia Machinery": [
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
    ],
    "Baltic Agro Lithuania": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Baltic Agro Lithuania Machinery": [
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
    ],
    "Ceravis": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Danish Agro": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Danish Agro Machinery": [
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
    ],
    "FieldSense": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Fram Farmers": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Hankkija": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Mole Valley Farmers": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Norwegian Agro Machinery": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Polish Agro": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Raiffeisen Münster Land": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm Digital - Regular Annual Subscription (1 year)", optionValue: "1500" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Soames Engineering": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Swedish Agro": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
        { optionText: "Cropline - Regular Annual Subscription (1 year)", optionValue: "1800" },
        { optionText: "Cropline - Demo Subscription (3, 6, or 12 months)", optionValue: "1900" },
    ],
    "Swedish Agro Machinery": [
        { optionText: "Cordulus Farm - Machinery Subscription (3 years)", optionValue: "1200-M" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
    "Swedish Agro Östra Sönnerslöv": [
        { optionText: "Cordulus Farm - Regular Annual Subscription (1 year)", optionValue: "1200" },
        { optionText: "Cordulus Farm - Test Annual Subscription (1 year)", optionValue: "1200TEST" },
    ],
};

// Add an event listener to the distributor dropdown
distributorDropdown.addEventListener("change", function () {
    // Get the selected value
    const selectedDistributor = distributorDropdown.value;

    // Clear existing options in the subscription dropdown
    subscriptionDropdown.innerHTML = '';

    // Add options based on the selected distributor
    const options = distributorOptions[selectedDistributor] || [];
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.optionValue;
        option.textContent = optionData.optionText;
        subscriptionDropdown.appendChild(option);
    });
});
