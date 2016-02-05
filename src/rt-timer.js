(function (timer) {
    
    console.log('Load timer...');
    
    timer.show = show;
    
    function show()  {
        
        console.log('Show timer');
    }
    
})(
    module.exports
);