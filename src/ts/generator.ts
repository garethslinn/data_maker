import { 
    name_first, 
    name_last, 
    number,
    street_type,
    town_city,
    postcode
} from './';

export const gen = (qty: number) => {
    const arr = [];
    const get = function(key: any, amount: number) {
           return [key][number(amount)]
    }

    for ( let i = qty; i <= qty; i++ ) {
        arr.push({
            id: i,
            firstName: get(name_first, name_first.length),
            lastName: get(name_last, name_last.length),
            street: `${number(300)},${get(name_last, name_last.length)}' '${get(street_type, street_type.length)}'`,
            townCity:  get(town_city, town_city.length),
            postcode:  get(postcode, postcode.length),
            telephone: `0${number(9)}`,
            email: `${get(name_first, name_first.length)}'@'${get(name_last, name_last.length)}'.com`
        })
    }
    return arr;
}
