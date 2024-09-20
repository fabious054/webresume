export default function PersonalInfos(langague: string) {
    const json = {
        'pt-br': {
            name: 'Fabio Abreu',
            age: '24 anos',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul',
            country: 'Brasil',
            startYear: 2021
        },
        'en': {
            name: 'Fabio Abreu',
            age: '24 years old',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul',
            country: 'Brazil',
            startYear: 2021
        }
    };

        if (langague == 'en') {
            return json['en'];
        }
        return json['pt-br'];
};

export function experienceYears() {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}