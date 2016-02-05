(function (menu, timer, signals, notifications, UI) {
        
    menu.show = show;
    
    var options = [
        {
            title: 'Timer',
            subtitle: 'Start Race Timer'
        },
        {
            title: 'Signals',
            subtitle: 'Configure start signal times'
        },
        {
            title: 'Notifications',
            subtitle: 'Configure countdown notifications'
        }
    ];
    var uiMenu = new UI.Menu({
        sections: [{
            title: 'Race Timer',
            items: options
        }]
    });
    
    uiMenu.on('select', function(event) {
        
        switch(options[event.itemIndex].title) {
                
            case 'Timer':
                timer.show();
                break;
            case 'Signals':
                signals.show();
                break;
            case 'Notifications':
                notifications.show();
                break;
        }
        
        console.log();
    });
    
    function show() {
        
        uiMenu.show();
    }
    
})(
    module.exports,
    require('rt-timer'),
    require('rt-signals'),
    require('rt-notifications'),
    require('ui')
);