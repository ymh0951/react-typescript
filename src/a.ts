interface Anyone<T> {
    name: string;
    age: T
}

const josh: Anyone<string> = {
    name: 'josh',
    age: 100
}