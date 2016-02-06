(function (menu, menuDefaults, timer, startSignals, notifications, credits, UI) {
        
    var options = [
            {
                title: 'Timer',
                subtitle: 'Start Race Timer',
                icon: 'images/clock.png'
            },
            {
                title: 'Start Signals',
                subtitle: 'Configure start signal times',
                icon: 'images/flag.png'
            },
            {
                title: 'Notifications',
                subtitle: 'Configure countdown notifications',
                icon: 'images/bell.png'
            },
            {
                title: 'Credits'
            }
        ],
        uiMenu  = new UI.Menu(JSON.parse(JSON.stringify(menuDefaults.defaults)));
    
    menu.show = show;

    init();
    
    function init() {
        uiMenu
            .section(0, { title: 'Race Timer' })
            .items(0, options)
            .on('select', select);
    }
    
    function select(event) {
            
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
                case 'Credits':
                    credits.show();
                    break;
            }
        }
    
    function show() {
        
        uiMenu.show();
    }
    
})(
    module.exports,
    require('rt-menuDefaults'),
    require('rt-timer'),
    require('rt-startSignals'),
    require('rt-notifications'),
    require('rt-credits'),
    require('ui')
);