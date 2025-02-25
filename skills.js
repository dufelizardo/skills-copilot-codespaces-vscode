function calculateNumber(var1, var2) {
    const num1 = parseFloat(var1);
    const num2 = parseFloat(var2);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid input';
    }

    return num1 + num2;
}