
export default function PersonalSkills(langague: string) {
    const json = {
        'pt-br': {
            componentLabel: 'Habilidades',
            skills:[
                {name: 'HTML',stars: 5},
                {name: 'CSS SCSS Bootstrap',stars: 5},
                {name: 'JavaScript Jquery',stars: 4},
                {name: 'React.js',stars: 4},
                {name: 'React-Native',stars: 4},
                {name: 'Python',stars: 3},
                {name: 'PHP',stars: 4},
                {name: 'MySql',stars: 3},
                {name: 'C C++',stars: 3},
                {name: 'Node',stars: 3},
                {name: 'MongoDB',stars: 3},
            ]

        },
        'en': {
            componentLabel: 'Skills',
            skills:[
                {name: 'HTML',stars: 5},
                {name: 'CSS SCSS Bootstrap',stars: 5},
                {name: 'JavaScript Jquery',stars: 4},
                {name: 'React.js',stars: 4},
                {name: 'React-Native',stars: 4},
                {name: 'Python',stars: 3},
                {name: 'PHP',stars: 4},
                {name: 'MySql',stars: 3},
                {name: 'C C++',stars: 3},
                {name: 'Node',stars: 3},
                {name: 'MongoDB',stars: 3},
            ] 
        }
    };

        if (langague == 'en') {
            json['en'].skills.sort((a,b) => b.stars - a.stars);
            return json['en'];
        }
        json['pt-br'].skills.sort((a,b) => b.stars - a.stars);
        return json['pt-br'];
};