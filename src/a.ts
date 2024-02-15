// interface Person {
//     name: string;
//     age: number;
// }

// interface Developer {
//     name: string;
//     age: string;
// }

// interface Admin {
//     name: string;
//     age: boolean;
// }

interface Anyone<T> {
    name: string;
    age: T
}

const josh: Anyone<string> = {
    name: 'josh',
    age: 100
}