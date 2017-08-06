(function() {

    var styles = [
        'background: linear-gradient(#3C3B3F, #605C3C)',
        'border: 1px solid #3E0E02',
        'display: block',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
        'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
        'line-height: 40px',
        'text-align: center',
        'font-weight: bold',
        'font-size: 16px',
        'padding-left: 5px',
        'padding-right: 15px',
        'padding-top: 5px',
        'padding-bottom: 5px'
    ].join(';');

    window.stylishConsole = {
        success: function(msg) {
            console.log('%c ✅ ' + msg, 'color: lawngreen;' + styles);
        },
        error: function(msg) {
            console.log('%c ❌ ' + msg, 'color: red;' + styles);
        },
        info: function(msg) {
            console.log('%c ⚠️ '  + msg, 'color: orange;' + styles);
        },
        log: function(msg, style) {
            var result = ' ';

            for (var property in style) {
                if (style.hasOwnProperty(property)) {
                    result += property + ':' + style[property] + ';';
                }
            }
            console.log('%c' +  msg, result);
        }
    };
})();


$( ".btn-success" ).click(function() {
    window.stylishConsole.success('Success');
});

$( ".btn-danger" ).click(function() {
    window.stylishConsole.error('Error');
});

$( ".btn-warning" ).click(function() {
    window.stylishConsole.info('Information');
});
