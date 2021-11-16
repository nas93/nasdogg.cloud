$(document).ready(function(){
    var main=['../images/main-page/1.jpg',
                '../images/main-page/2.jpg',
                '../images/main-page/3.jpg',
                '../images/main-page/4.jpg'];
    
    var randomNumberMain = Math.floor(Math.random() * main);
    var bgImgMain = 'url(' + main[randomNumberMain] + ')';
    
    $('../css/section/main-page').css({'background':bgImgMain, 'background-size':'cover', });
});