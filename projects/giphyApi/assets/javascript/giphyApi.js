/* Code for Giphi Api
   Date: April 06,2019
   Author: German Garcia
*/

// Initial array 
var musicBand= [
    "Rolling Stones", "The Beatles", "AC/DC", 
    "Metallica", "Motley Crue", "Guns & Roses", "INXS",
     "Bon Jovi", "Skid Row", "Pantera"
];

// var buttonClass = "btn-group d-flex btn-primary btn-lg btn-block"; 
var buttonClass = "btn btn-primary btn-lg"; 
var buttonType = "submit"; 
var buttonId = "buttonId"; // same ID for all the buttons as all buttons will do the same.


// Components will load when script is included in html form
$(document).ready(function() {
    
    //Create one button per array element 
    function createButtons(categoryArray){
        $("#buttons").empty();

        for (var i = 0; i < categoryArray.length; i++){
            var b = $("<button>");
            b.addClass(buttonClass);
            b.attr("data-type", categoryArray[i]);
            b.attr("id", buttonId);
            b.attr("type", buttonType);
            b.text(categoryArray[i]);
            $("#buttons").append(b); 
        }
    }

    // trigger code when clicking any of the buttons
    // $("#buttonId").on("click", function(event){ 
    $(document).on("click", ".btn", function() {
        
        //Clear the contents of the display area, otherwise information will be appended
        // at the end of the first display

        $("#bands").empty();
        $(".btn").removeClass("active");
        $(this).addClass("active");


        // str = str.replace(/\s+/g, '');       
        var type = $(this).attr("data-type");
        var type = type.replace(/\s+/g, '');
        // console.log ("type: " + type);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=zc1su8skveTaaUmANPKEm79LM23yTA4I";

        // console.log("queryURL: " + queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              var results = response.data;
      
              for (var i = 0; i < results.length; i++) {
                var bandDiv = $("<div class=\"band-item\">");
      
                var rating = results[i].rating;
      
                var p = $("<p>").text("Rating: " + rating);
      
                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
      
                var bandImage = $("<img>");
                bandImage.attr("src", still);
                bandImage.attr("data-still", still);
                bandImage.attr("data-animate", animated);
                bandImage.attr("data-state", "still");
                bandImage.addClass("bandImage");
      
                bandDiv.append(p);
                bandDiv.append(bandImage);
      
                $("#bands").append(bandDiv);
              }
            });      
    });

    // Add function to animate the image in case it is clicked:
    $(document).on("click", ".bandImage", function() {

        var state = $(this).attr("data-state");
    
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    
      // Add element to the array and add a button
      $("#add-band").on("click", function(event) {
        event.preventDefault();
        var newBand = $("input").eq(0).val();
    
        if (newBand.length > 2) {
          musicBand.push(newBand);
        }
    
        createButtons(musicBand);
      });
    createButtons(musicBand); 
});


