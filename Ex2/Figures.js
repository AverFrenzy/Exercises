const color = ['red', 'pink', 'yellow','orange', 'blue', 'green', 'grey', 'brown', 'purple', 'black', 'white'];

function getRandomColor() {
    const colorNumber = Math.floor(Math.random() * color.length);

return color[colorNumber]
}

//triangle
function calculateSidesABC(sideA, sideB, sideC, type) {
    if (type === 'triangle') {
        return sideA + sideB + sideC;
    }
    return null;
}

const drawTriangle = (sideA, sideB, sideC, drawFigure) => {
    const sizeOfTriangle = calculateSidesABC(sideA, sideB, sideC, 'triangle');
    const color = getRandomColor();

    drawFigure(sizeOfTriangle,color, 'triangle');
}

const drawTriangleOnConsole = (sizeOfTriangle, color, type) => {
    if(type === 'triangle') {
            console.log(`its a triangle with ${color} color and perimeter - ${sizeOfTriangle}`);
    }
};


//circle
function calculateRadius(Radius, type) {
    if (type === 'circle') {
        return Radius;
    }
    return null;
}

const drawCircle = (Radius, drawFigure) => {
    const sizeOfCircle = calculateRadius(Radius, 'circle');
    const color = getRandomColor();

    drawFigure(sizeOfCircle, color, 'circle');
}

const drawCircleOnConsole = (sizeOfCircle, color, type) => {
    if(type === 'circle') {
            console.log(`its a circle with ${color} color and radius - ${sizeOfCircle}`);
    }
};


//rectangle
function calculateSize(width, hight, type) {
    if (type === 'rectangle') {
        return (width + hight) * 2;
    }
    return null;
}

const drawRectangle = (width, hight, drawFigure) => {
    const sizeOfRectangle = calculateSize(width, hight, 'rectangle');
    const color = getRandomColor();

    drawFigure(sizeOfRectangle,color, 'rectangle');
}

const drawRectangleOnConsole = (sizeOfRectangle, color, type) => {
    if(type === 'rectangle') {
            console.log(`its a rectangle with ${color} color and perimeter - ${sizeOfRectangle}`);
    }
};

drawCircle(5, drawCircleOnConsole);
drawCircle(10, drawCircleOnConsole);

drawTriangle(5, 6, 7, drawTriangleOnConsole);
drawTriangle(5, 7, 5, drawTriangleOnConsole);

drawRectangle(7, 14, drawRectangleOnConsole);
drawRectangle(5, 10, drawRectangleOnConsole);