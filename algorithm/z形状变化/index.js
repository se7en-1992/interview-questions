var convert = function(s, numRows) {
    if (numRows === 1) return s;

    const len = Math.min(s.length, numRows)
    const rows = new Array(len).fill('');
    let index = 0;
    let down = false;

    for (var i = 0; i < s.length; i++) {
        rows[index] += s[i];
        if (index === 0 || index === numRows - 1) {
            down = !down
        }
        index += down ? 1 : -1
    }

    return rows.join('')
};
console.log(convert("PAYPALISHIRING", 3))