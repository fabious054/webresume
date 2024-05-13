
import photo from '../../assets/img/my-photo.png';

export default function PersonalInfos(langague: string) {
    const json = {
        'pt-br': {
            name: 'Fabio Abreu',
            age: '24 anos',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul - Brasil',
            country: 'Brasil'
        },
        'en': {
            name: 'Fabio Abreu',
            age: '24 Years Old',
            city: 'Caxias do Sul',
            state: 'Rio Grande do Sul - Brazil',
            country: 'Brazil'
        }
    };

        if (langague == 'en') {
            return json['en'];
        }
        return json['pt-br'];
};