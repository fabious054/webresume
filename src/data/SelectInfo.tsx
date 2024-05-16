
export default function SelectInfo() {
    const json = [
        { id: 1,value: 'C', title: 'C' },
        { id: 2,value: 'PYTHON', title: 'PYTHON' },
        { id: 3,value: 'FLASK', title: 'FLASK' },
        { id: 4,value: 'GIT', title: 'GIT | GITHUB' },
        { id: 5,value: 'LINUX', title: 'LINUX' },
        { id: 6,value: 'JAVASCRIPT', title: 'JAVASCRIPT' },
        { id: 7,value: 'REACT', title: 'REACT' },
        { id: 8,value: 'TYPESCRIPT', title: 'TYPESCRIPT' },
        { id: 9,value: 'REACT-NATIVE', title: 'REACT-NATIVE' },
        { id: 10,value: 'MYSQL', title: 'MYSQL' },
        { id: 11,value: 'SQLALCHEMY', title: 'SQLALCHEMY' },
        { id: 12,value: 'PYTEST', title: 'PYTEST' },
        { id: 13,value: 'ESLINT', title: 'ESLINT' },
        { id: 14,value: 'REACT-HOOKS', title: 'REACT-HOOKS' },
        { id: 15,value: 'ASYNCSTORAGE', title: 'ASYNCSTORAGE' },
        { id: 16,value: 'SQLITE', title: 'SQLITE' },
        { id: 17,value: 'HTTP', title: 'HTTP' },
        { id: 18,value: 'CSS', title: 'CSS' },
    ];

    //order by title
    json.sort((a, b) => {
        return a.title.localeCompare(b.title);
    }
    );

        return json;
};