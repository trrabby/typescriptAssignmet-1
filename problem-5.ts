{
    const getProperty = <T, K extends keyof T>(obj: T, objKey: K) => {
        return obj[objKey]
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "age"));
}