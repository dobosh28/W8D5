Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;

    function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that(...arg)
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;
}