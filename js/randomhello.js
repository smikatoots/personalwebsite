$(function() {
 var randomhello = [
   {
       title: "listener",
       img: "assets/test.png",
       text:  "I travelled to over 20 countries and worked in 3 continents before turning 21. Because of my global exposure, I have developed a deep sense of empathy. I like to ask questions and listen more than speak."
   },
   {
       title: "entrepreneur",
       img: "assets/test.png",
       text:  "I have helped grow 5 startups and organizations in their early days since my freshman year of college. I'm a big self-starter, and it's only the beginning.",
   },
   {
       title: "lifelong learner",
       img: "assets/test.png",
       text:  "I self-learned design, business and coding via 3 online courses, 4 side projects, teaching a college-credited class of my own and through the challenges I face as a leader every day. Learning does not stop in the classroom.",

   },
   {
       title: "hustler",
       img: "assets/test.png",
       text:  "I shamelessly cold emailed and connected with over 80+ professionals in the tech and consulting industry to learn more about their lives within just 3 months. If there is a goal, I will find a way.",

   },
   {
       title: "multipotentialite",
       img: "assets/test.png",
       text:  "I double major and minor in a top liberal arts program, and work with smart & diverse teams every day. I believe in the power of varied perspectives in problem solving.",
   }
 ];
 var hello = randomhello[Math.floor(Math.random() * randomhello.length)];
 document.getElementById("hellocontent").innerHTML =
   '<img class = "helloimg" src = "' + hello.img + '">' +
   '<div><h4>' + hello.text + '</h4>' +
   '<h5> The ' + hello.title + '.</h5></div>';
});
