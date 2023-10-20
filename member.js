function skillsMember() {
    let member = {
        name: 'Sam',
        age: 25,
        skills: ['JavaScript', 'React', 'Redux', 'HTML', 'CSS'],
        salary: 2000
    };
    for (let key in member) {
        if (key == 'skills') {
            console.log(member[key]);
            console.log(member[key].length);
        }
    }
}