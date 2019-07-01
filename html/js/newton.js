const m = require('mathjs');

const exp1 = m.parse('x+y*z + ln(2xy)');
const exp2 = m.parse('2+x^y*z');
const exp3 = m.parse('e^(2x) + z*y');

function jacobianMatrix(functions, scope) {
    let jacobian = [];
    for (let i = 0; i < functions.length; i++) {
        let row = [];
        for (let j = 0; j < functions.length; j++){
            row.push(m.derivative(functions[i], scope[j]).toString());
        }
        jacobian.push(row);
    }
    return jacobian;
}

const mVector = [exp1, exp2, exp3];
const jacob = jacobianMatrix(mVector, ['x', 'y', 'z']);
console.log(jacob);

function setVariables(){
    var divlist = document.getElementById('eqpicker');
    for(let x = 0; x < 4 ; x++){
        divlist.appendChild(document.createc)
    }
}