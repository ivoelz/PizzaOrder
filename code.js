$(document).ready(function () {

    // event handlers
    $("#tabs a").click(showTab);

    // other functions
    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
        $("form").submit(pizzaOrder);
    }

    function pizzaOrder(event) {
        event.preventDefault();

        // make a name variable and get its input
        var name = $("#name").val();

        // make an address variable and get its input
        var address = $("#address").val();

        // make a phone variable and get its input
        var phone = $("#phone").val();

        // get the string value of the pizza size they picked
        var pizzaSize = $("input[name=size]:checked").val();

        //get the value for the pizza size and convert to a number
        var selectedSize = parseFloat($("input[name=size]:checked").data("price"));

        // get the value for the selected pizza crust
        var selectedCrust = $("input[name=crust]:checked").val();

        // get the different kinds of meats selected
        var meats = $("input[name=meat]:checked").val();

        // get meats checkbox amount & parse int it
        var meatAmount = parseInt($("input[name=meat]:checked").length);
        meatAmount *= 1.50;

        // get the different kinds of veggies they selected
        var veggies = $("input[name=veggies]:checked").val();

        // get veggies amount & parse int it
        var vegAmount = parseInt($("input[name=veggies]:checked").length);
        vegAmount *= 1.00;

        // do the math for the subtotal
        var subTotal = selectedSize + meatAmount + vegAmount;

        // do the math for the calculated tax
        var tax = subTotal * 0.051;

        // calculate the final total
        var total = subTotal + tax + 2.0;

        // Output the name for the order
        $("#nameOutput").text(name);
        // Output the address for the order
        $("#addressOutput").text(address);
        // Output the phone number for the order
        $("#phoneOutput").text(phone);
        // output the selected size of pizza
        $("#sizeOutput").text(`Pizza Size: ${pizzaSize} $${selectedSize}`);
        // Output the selected crust type of the pizza
        $("#crustOutput").text(`Crust Type: ${selectedCrust}`);
        // Output the selected meats
        $("#meatOutput").text(`Meats: ${meats}, etc. $${meatAmount}`);
        // output the selected veggies
        $("#veggieOutput").text(`Veggies: ${veggies}, etc. $${vegAmount}`);
        // output the subtotal
        $("#subtotalOutput").text(`Subtotal: $${parseFloat(subTotal).toFixed(2)}`);
        // output the tax total
        $("#taxOutput").text(`Sales Tax: $${parseFloat(tax).toFixed(2)}`);
        // output the delivery fee
        $("#deliveryFeeOutput").text(`Delivery Fee: $2.00`);
        // Output the total
        $("#totalOutput").text(`Your total is $${parseFloat(total).toFixed(2)}`);
        // Output a thank you message
        $("#thanksMessage").text(`Thank you for your order! Your pizza is on the way!`);
    }

});