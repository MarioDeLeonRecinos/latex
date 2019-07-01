/*
to test use 
3x-cos(yz)-0.5
x^2-81(y+0.1)^2+sin(z)+1.06
e^(-xy)+20z+(10pi-3)/3
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
        obj.placeholder = 'equacion';
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

    jacobianMatrix(vectorPrime, ['x', 'y', 'z']);
    jacobian(jacobo);
    const xd = calcJacob({x:0.1, y:0.1, z:-0.1});
    console.log(xd);
}

function jacobianMatrix(functions, scope) {
    for (let i = 0; i < functions.length; i++) {
        let row = [];
        for (let j = 0; j < functions.length; j++){
            row.push(math.derivative(functions[i], scope[j]));
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