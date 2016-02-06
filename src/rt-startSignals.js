(function (startSignals, menuDefaults, settings, UI) {
    
    // Standard start sequence 5-4-1-GO
    var defaults = [
            true,
            true,  false, false, true,  true,
            false, false, false, false, false
        ],
        uiMenu = new UI.Menu(JSON.parse(JSON.stringify(menuDefaults.defaults))),
        _startSignals_;
    
    startSignals.show =  show;
    
    init();
    
    function init() {
        
        var option = settings.option('startSignals');
        
        if(!option) {
            
            option = defaults.slice();
            
            settings.option('startSignals', option);
        }
        
        _startSignals_  = option;
        
        uiMenu
            .section(0, { title: 'Start Signals' })
            .on('select', toggleItem);
    }
    
    function setItems() {
        
        var maxTime = _startSignals_.length - 1,
            time;
        
        for(time=0;time<=maxTime;time++) {
            
            setItem(time);
        }
    }
    
    function toggleItem(event) {
        
        var index = event.itemIndex;
        
        _startSignals_[index] = !_startSignals_[index];
        
        settings.option('startSignals', _startSignals_);
        
        setItem(index);
    }
    
    function setItem(index) {
        
        var title = ' ', icon = (_startSignals_[index]) ? 'images/check.png' : 'images/square.png';
            
        switch(index) {
            case 0:
                title += 'Start';
                break;
            case 1:
                title += index + ' Minute';
                break;
            default:
                title += index + ' Minutes';
        }
        
        uiMenu.item(0, index, {
            title : title,
            icon:   icon
        });
    }
    
    function show() {
        
        setItems();
        uiMenu.show();
    }
    

    
})(
    module.exports,
    require('rt-menuDefaults'),
    require('settings'),
    require('ui')
);