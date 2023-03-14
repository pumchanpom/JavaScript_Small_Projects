// Solving Quadratic Equations by Factoring (ax^2+bx+c=0)
const quadraticEquationSolver = (a, b, c) => {
    let answer1 = (-b + Math.pow((b*b - 4*a*c), 0.5))/(2*a);
    let answer2 = (-b - Math.pow((b*b - 4*a*c), 0.5))/(2*a);
    
    if ((b*b - 4*a*c) < 0) {
        return 'No answer';
    } else if ((b*b - 4*a*c) === 0) {
        return `The answer of is ${answer1}.`;
    } else if ((b*b - 4*a*c) > 0) {
        return `The answers are ${answer1} and ${answer2}.`;
    }
}

// Test function
console.log(quadraticEquationSolver(1, 3, -10));
console.log(quadraticEquationSolver(10, -7, -12));
console.log(quadraticEquationSolver(1, 3, 3));
console.log(quadraticEquationSolver(1, 10, 25));