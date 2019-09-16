$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true,
        onCycleTo: function(data) {
            const index = $(data).index();
            let description;
            switch (index)  {
                case 0:
                    description = '<h4>GitHub Repositries</h4><br><p>A list of all of my GitHub Repositries.</p>';
                    $('.panel-description').html(description);
                    break;
                case 1:
                    description = '<h4>Pokemon Guess</h4><br><p>A Pokemon themed Hangman game. Built with HTML, JavaScript, and CSS</p>';
                    $('.panel-description').html(description);
                    break;
                case 2:
                    description = '<h4>Crystals Collector</h4><br><p>Math game where you try to match the number given with 4 random unknown numbers. Built with HTML, JavaScript, and CSS</p>';
                    $('.panel-description').html(description);
                    break;
                case 3:
                    description = '<h4>Train Schedule</h4><br><p>Train scheduling application that takes in user inputs and adds them to a list of trains. Built with HTML, JavaScript, and CSS. </p>';
                    $('.panel-description').html(description);
                    break;
                case 4:
                    description = '<h4>Healthy Restaurant Finder</h4><br><p>Search engine for vegetarian, vegan, gluten-free, and family-friendly restaurants. Built using Google Map API, Unsplash API, HTML, JavaScript, and CSS.</p>';
                    $('.panel-description').html(description);
                    break;
                case 5:
                    description = '<h4>Zodiac Memory Game</h4><br><p>Simple memory game where the player attempts to click each zodiac card once without repeats until all 12 are selected. Created using React, Nodes.js, JavaScript, and CSS</p>';
                    $('.panel-description').html(description);
                    break;
                case 6:
                    description = '<h4>Calorie Counter</h4><br><p>Web-based application that reads an uploaded image of a food item and returns the number of calories, proteins, and fats of the item. Additional features include ability to save search results and display cumulative macronutrient values. Built using Clarifai API, Wolfram API, MongoDB, Express, React, and Node.js</p>';
                    $('.panel-description').html(description);
                    break;

            };
            
         }
    });
});

// move next carousel
$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});
