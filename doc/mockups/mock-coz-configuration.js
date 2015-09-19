module.exports = {
    engines: {
        myCustomEngine: {
            compile: function (source, callback) {
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