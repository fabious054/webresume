export default function PersonalInfos(langague: string) {
    const json = {
        'pt-br': {
            name: 'Fabio Abreu',
            age: '24 anos',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul - Brasil',
            country: 'Brasil',
            startYear: 2022
        },
        'en': {
            name: 'Fabio Abreu',
            age: '24 years old',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul - Brazil',
            country: 'Brazil',
            startYear: 2022
        }
    };

        if (langague == 'en') {
            return json['en'];
        }
        return json['pt-br'];
};

export function experienceYears() {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}