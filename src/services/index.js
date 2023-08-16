

export const fetchData = (pages) => {
    return fetch('https://spe-academy.spesolution.net/api/recruitment', {
        headers: new Headers({
            'Authorization': 'Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y', 
            'Content-Type': 'application/json'
        }), 
        }).then((res) => res.json())
        .then((data) => {
            return data;
        }).catch((err) => console.log(err.message));

}