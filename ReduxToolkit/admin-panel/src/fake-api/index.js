import Chance from 'chance'

const chance = Chance()

export const fakeUserData = ()=>{
    const person =  chance.name({ middle: true});
    const email = ". ( Email : " + chance.email({domain: 'example.com'}) + ")";
    return person + email;
}

