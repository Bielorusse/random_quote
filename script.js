
function display_random_quote(){
    `
    Open quotes database json file, read it, and display a random quote.
    `

    // load the database file
    var xhttp_request = new XMLHttpRequest();
    xhttp_request.open("GET", "database.json", true);
    xhttp_request.send();

    xhttp_request.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            // store the json database in an array of javascript objects
            quotes_array = JSON.parse(this.responseText).quotes;

            // pick a random quote
            id = Math.floor(Math.random() * quotes_array.length);
            quote = quotes_array[id]

            // initiate the string to display
            display_string = "";

            // add author
            if (quote.author !== null && quote.author !== ""){
                display_string = display_string.concat(quote.author)
                display_string = display_string.concat("<br>")
            }

            // add book
            if (quote.book !== null && quote.book !== ""){
                display_string = display_string.concat(quote.book)
                display_string = display_string.concat("<br>")
            }

            // add edition and page only if both are available
            if (quote.edition !== null && quote.edition !== "" && quote.page !== null && quote.page !== ""){
                display_string = display_string.concat("Edition ")
                display_string = display_string.concat(quote.edition)
                display_string = display_string.concat("<br>")
                display_string = display_string.concat("Page ")
                display_string = display_string.concat(quote.page)
                display_string = display_string.concat("<br>")
            }

            // add text
            if (quote.text !== null && quote.text !== ""){
                display_string = display_string.concat("<br>")
                display_string = display_string.concat(quote.text)
                display_string = display_string.concat("<br>")
            }

            // add display string to html
            document.getElementById("quote_div").innerHTML = display_string;
        }

    };
}
