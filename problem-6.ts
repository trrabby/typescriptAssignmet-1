
{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type ProfileForUpdate = Partial<Profile>

    const updateProfile = (obj: Profile, objForUpdate: ProfileForUpdate): Profile => {
        return { ...obj, ...objForUpdate }
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}
