jQuery(document).ready(function() {
    jQuery('.test').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated animateOnce fadeInDown',
        offset: 100
       });
});
