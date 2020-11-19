import { v4 as uuidv4 } from 'uuid';

export const option_1 = [
        { 
            id: uuidv4(),
            name: 'Oakland'
        },
        { 
            id: uuidv4(),
            name: 'Portland'
        },
        { 
            id: uuidv4(),
            name: 'Pink Hill'
        },
       
    ]

    export const option_2 = [
        { 
            id: uuidv4(),
            className: "dropdown-item", 
            name: 'Past Hour',
            value: "hour"
        },
        { 
            id: uuidv4(),
            className: "dropdown-item", 
            to: '#',
            name: 'Past Day',
            value: "day"
        },
        { 
            id: uuidv4(),
            className: "dropdown-item", 
            to: '#',
            name: 'Past Week',
            value: "week"
        },
        { 
            id: uuidv4(),
            className: "dropdown-item", 
            to: '#',
            name: 'Past Month',
            value: "month"
        }
    ]