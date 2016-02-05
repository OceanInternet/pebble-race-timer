(function (notifications) {
    
    console.log('Load notifications...');
    
    notifications.show = show;
    
    function show()  {
        
        console.log('Show notifications');
    }
    
})(
    module.exports
);