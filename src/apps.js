var stylishConsole = {
    success: function(msg) {
        console.log('%c ✅ ' + msg, 'color: green; font-weight: bold;');
    },
    error: function(msg) {
        console.log('%c ❌ ' + msg, 'color: red; font-weight: bold;');
    },
    info: function(msg) {
        console.log('%c ⚠️ '  + msg, 'color: orange; font-weight: bold;');
    }
};


'%c the green hulk got mad!', 'color: green; font-weight: bold;'