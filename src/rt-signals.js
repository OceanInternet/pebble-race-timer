(function (signals, settings, UI) {
    
    // Standard start sequence 5-4-1-GO
    var defaults = [
        true,
        true,  false, false, true,  true,
        false, false, false, false, false
    ];
    
    signals.show =  show;
    
    init();
    
    function show() {
        
        var _signals_ = settings.option('signals'),
            options   = [],
            maxTime   = _signals_.length - 1,
            time,
            uiMenu;
        
        for(time=0;time<=maxTime;time++) {
            options.push(
                {title: time + ' Minutes'}
            );
        }
        
        uiMenu = new UI.Menu({
        sections: [{
            title: 'Configure Signals',
            items: options
        }]
    });
        
        uiMenu.show();
    }
    
    function init() {
        var options = settings.option('signals');
        
        if(!options) {
            
            settings.option('signals', defaults);
        }
    }
    
})(
    module.exports,
    require('settings'),
    require('ui')
);