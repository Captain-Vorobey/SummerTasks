const updateState = (state, action) => {
    if(action.type == 'inc') {
        return state.value + action.amount;
    }

    if(action.type == 'dec') {
        return state.value - action.amount;
    }
    return state;
}

class STO {
    constructor(updateState, state) {
        this.state = {...state};
        this.updateState = updateState;
        this.callBacks = [];
    }

    subscribe(callBack) {
        this.callBacks.push(callBack);
        return () => {
            this.callBacks = this.callBacks.filter(cb => cb != callBack);
        }
    }

    update = (action) => {
        this.state = this.updateState(this.state, action);
        this.callBacks.forEach(c => c());
    }
}

const kikAllOfThem = (state, action) => {
    if(action.type === 'Add') {
        let prevState = {...state};
        prevState.people.push(action.people);
        return prevState;
    }

    if(action.type === 'Rem') {
        let prevState = {...state};
        prevState.people = prevState.people.filter(person => person != action.people);
        return prevState;
    }
}

let incAction = {type: 'inc', amount: 10};
let decAction = {type: 'dec', amount: 5};

let sto1 = new STO(kikAllOfThem, {people: ['vorobey']});
const unsubs = sto1.subscribe(() => console.log(sto1.state));
sto1.update({type: 'Add', people: 'valik'});
unsubs();
sto1.update({type: 'Add', people: 'valik'});

let sto = new STO(updateState, {value: 0});
sto.update(incAction);
console.log(sto.state);

//state = updateState(state, decAction);
//console.log(state);

//console.log([6, -2, 2, 10, 11, 14 -7].sort((a, b) => b - a));