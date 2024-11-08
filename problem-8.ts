{
    const validateKeys = <T extends Object>(obj: T, keys: (keyof T)[]): boolean => {
        return keys.every(key => key in obj)

    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

}