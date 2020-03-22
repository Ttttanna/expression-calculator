function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if (expr.replace(/\s/g, '').includes('/0')) {
        throw new Error('TypeError: Division by zero.');
    }

    if (!(expr.split("(").length == expr.split(")").length) ) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
}

module.exports = {
    expressionCalculator
}