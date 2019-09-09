$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
});
const description = 'something will show here';
let id;
$('.active img').click(function(){
    id = $('.active').attr('id');
    console.log('click: ',id)
});
console.log(id);
// switch (panelID)  {
//     case 0:
//         description = "panel1";
//         break;
//     case 1:
//         description = "panel2";
//         break;
//     case 2:
//         description = "panel3";
//         break;
//     case 3:
//         description = "panel4";
// };
$('.panel-description').append(description);

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

$('.carosel').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
});