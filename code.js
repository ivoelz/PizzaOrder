$(document).ready(function () {

    $(".nav-link").click(showTab);
    $(".pizza-button").click(pizzaOrder);
    $("#confirmOrder").click(confirmOrder);

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    function pizzaOrder() {
        // get pizza size value
        var pizzaSize = $("#size").val();
        // parse float it
        pizzaSize = parseFloat(pizzaSize);

        // get meats checkbox amount
        var meatAmount = $("input[name=meat]:checked").length;
        // parse int it
        meatAmount = parseInt(meatAmount);

        // get veggies amount
        var vegAmount = $("input[name=veggies]:checked").length;
        // parse int it
        vegAmount = parseInt(vegAmount);

        // do the math
        var pizzaTotal = pizzaSize * meatAmount * vegAmount;
    }

    function confirmOrder() {

    }
});