(function (menu, timer, startSignals, notifications, UI) {
        
    var options = [
            {
                title: 'Timer',
                subtitle: 'Start Race Timer'
            },
            {
                title: 'Start Signals',
                subtitle: 'Configure start signal times'
            },
            {
                title: 'Notifications',
                subtitle: 'Configure countdown notifications'
            }
        ],
        uiMenu = new UI.Menu({ fullscreen: true });
    
    menu.show = show;

    init();    
    
    function init() {
    uiMenu
        .section(0, { title: 'Race Timer' })
        .items(0, options)
        .on('select', function(event) {
            
            switch(options[event.itemIndex].title) {
                    
                case 'Timer':
                    timer.show();
                    break;
                case 'Start Signals':
                    startSignals.show();
                    break;
                case 'Notifications':
                    notifications.show();
                    break;
            }
        });
    }
    
    function show() {
        
        uiMenu.show();
    }
    
})(
    module.exports,
    require('rt-timer'),
    require('rt-startSignals'),
    require('rt-notifications'),
    require('ui')
);