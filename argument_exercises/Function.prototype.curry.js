Function.prototype.curry = function(numArgs) {
    let numbers = [];
    let that = this;

    function _curriedSum(arg) {
        numbers.push(arg);
        if (numbers.length === numArgs) {
            return that(...arg)
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;
}