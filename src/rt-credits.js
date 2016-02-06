(function (credits, UI) {
    
    var uiCard = new UI.Card({
        fullscreen: true,
        scrollable: true,
        style:      'small',
        title:      'Credits',
        subtitle:   'Font Awesome Icons',
        body:       'Icons made by Dave Gandy are licensed under CC BY 3.0.\n\n' +
                    'http://fontawesome.io\n' +
                    'http://creativecommons.org/licenses/by/3.0'
    });
    
    credits.show = show;
    
    function show() {
        
        uiCard.show();
    }
    
})(
    module.exports,
    require('ui')
);