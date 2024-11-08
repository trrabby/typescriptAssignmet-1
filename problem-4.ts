
{
    type Circle = {
        shape: 'circle';
        radius: number
    }

    type Rectangular = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    const calculateShapeArea = (obj: Circle | Rectangular): number => {
        if (obj.shape === 'circle') {
            const areaOfCircle = parseFloat((Math.PI * obj.radius ** 2).toFixed(2));
            return areaOfCircle
        }
        else if (obj.shape === 'rectangle') {
            const areaOfRectangle = obj.height * obj.width
            return areaOfRectangle
        }
        return 0
    }

    console.log(calculateShapeArea({ shape: "circle", radius: 5 }))

}
