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
                    description = '<h4>Pokemon Guess</h4><br><p>A Pokemon themed Hangman game. Built with HTML, CSS, and JavaScript</p>';
                    $('.panel-description').html(description);
                    break;
                case 2:
                    description = '<h4>Crystals Collector</h4><br><p>A math game where you try to match the number given with 4 random unknown numbers. Built with HTML, CSS, and JavaScript</p>';
                    $('.panel-description').html(description);
                    break;
                case 3:
                    description = '<h4>Train Schedule</h4><br><p>A train scheduling application that takes in user inputs and adds them to a list of trains. Built with HTML, CSS, and JavaScript. </p>';
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
