{
    class Car {

        constructor(public make: string, public model: string, public year: number) { }

        getCarAge() {
            const carMade: number = this.year
            const carAge: number = 2024 - carMade
            console.log(carAge)
        }
    }
    const car = new Car("Honda", "Civic", 2000);
    car.getCarAge();
}