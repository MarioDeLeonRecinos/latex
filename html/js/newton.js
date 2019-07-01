/*
const exp1 = m.parse('x+y*z + ln(2xy)');
const exp2 = m.parse('2+x^y*z');
const exp3 = m.parse('e^(2x) + z*y');

//const mVector = [exp1, exp2, exp3];
//const jacob = jacobianMatrix(mVector, ['x', 'y', 'z']);
//console.log(jacob);
*/
var vectorPrime = [];
var vectorPrimeCompiled = [];
var jacobo = [];
var jacobCompiled = [];
document.getElementById('start').addEventListener('click', setVariables);
document.getElementById('exec').addEventListener('click', parseAll);

function setVariables() {
    const nval = document.getElementById('nvalue').value;
    const divlist = document.getElementById('equations');
    console.log('xd');
    for (let x = 0; x < nval; x++) {
        let obj = document.createElement('input');
        obj.type = "text";
        obj.classList.add('form-control', 'form-rounded', 'eqsubmit');
        divlist.appendChild(obj);
    }
}

function parseAll() {
    const eqs = document.getElementsByClassName('eqsubmit');
    console.log(eqs);
    for(let x = 0; x < eqs.length; x++) {
        try {
            const eq = math.parse(eqs[x].value);
            vectorPrime.push(eq);
        } catch (err) {
            console.log(err);
        }
    }

    jacobianMatrix(vectorPrime, {x:1, y:2});
}

function jacobianMatrix(functions, scope) {
    for (let i = 0; i < functions.length; i++) {
        let row = [];
        for (let j = 0; j < functions.length; j++){
            row.push(m.derivative(functions[i], scope[j]));
        }
        jacobo.push(row);
    }
}

function jacobian(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[0].length; j++){
            row.push(matrix[i][j].compile());
        }
        jacobCompiled.push(row);
    }
    return sample;
}

function calcJacob(scope){
    let data = [];
    for (let i = 0; i < jacobCompiled.length; i++) {
        let row = [];
        for (let j = 0; j < jacobCompiled[0].length; j++){
            row.push(jacobCompiled[i][j].evaluate(scope));
        }
        data.push(row);
    }
    return data;
}

function newtonX(vecoctorFun, tol){
    while(tol < 2) {
        console.log(calcJacob({x: 1, y: 2}));
        tol -= 1;
    }
}