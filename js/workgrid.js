
$(function() {
 var workgrid = [
   {
       title: "Logos",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/logos.png"
   },
   {
       title: "Posters",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/posters.png"
   },
   {
       title: "Product Reviews",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/prodreview.png"
   },
   {
       title: "Castlerock UX/UI",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/castlerock.png"
   },
   {
       title: "PointLight UX/UI",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/pointlight.png"
   },
   {
       title: "MedGrocer Android App UX/UI",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/medgrocer.jpg"
   },
   {
       title: "The Ride Map",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/theride.png"
   },
   {
       title: "NAIAirport UX Redesign",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/naia.png"
   },
   {
       title: "Innovation through Design Thinking",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/dt.png"
   },
   {
       title: "Coconut Oil and Fatty Acids",
       link: "http://google.com",
       class: "grid-item data",
       img:  "assets/work/coconut.png"
   },
   {
       title: "Gender Wage Gaps and GDP",
       link: "http://google.com",
       class: "grid-item data",
       img:  "assets/work/gdp.jpg"
   },
   {
       title: "Playing the Race Card",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/racecard.png"
   },
   {
       title: "The Association Bet. Parent-Child Reln and Grades",
       link: "http://google.com",
       class: "grid-item data",
       img:  "assets/work/educ.png"
   },
   {
       title: "A Brief History of Philippine Immigration",
       link: "http://google.com",
       class: "grid-item data",
       img:  "assets/work/diaspora.png"
   },
   {
       title: "Comparative Analysis of DENV and CHIKV",
       link: "http://google.com",
       class: "grid-item design",
       img:  "assets/work/chikv.png"
   },
 ];


for (i = 0; i < workgrid.length; i++)
{
var content = workgrid[i];
document.getElementById("grid").innerHTML +=
    '<a href ="' + content.link + '"> \
        <div class = "' + content.class + '"> \
            <h2>' + content.title + '</h2> \
            <img src = "' + content.img + '"> \
        </div> \
    </a>'
};
 //
 // for (i = 0; i < workgrid.length; i++)
 //    {
 //
 //    document.getElementById("grid").innerHTML =
 //      '<img class = "helloimg" src = "' + grid.img + '">' +
 //      '<div><h4>' + grid.text + '</h4>' +
 //      '<h5> The ' + grid.title + '.</h5></div>';
 //    };
});
