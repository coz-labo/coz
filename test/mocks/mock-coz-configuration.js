module.exports = {
    engines: {
        myCustomEngine: {
            compile: function (tmpl, callback) {
                setTimeout(function () {
                    callback(null, function () {
                        return 'renderByMyCustom'
                    });
                }, 10);
            }
        }
    },
    tmpls: {
        baz: function () {

        }
    }
};