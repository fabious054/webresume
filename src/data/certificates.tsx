

export default function Certificates(langague: string) {
    const json = {
        'pt-br': {
            title: 'Certificados',
            certificates: [
                {
                    id: 1,
                    title: 'C: Avançando na linguagem',
                    description: '',
                    image: 'https://i.ibb.co/h8gdqcL/curso-c-avan-ando-na-linguagem-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C']
                },
                {
                    id: 2,
                    title: 'C: Conhecendo a linguagem das linguagens',
                    description: '',
                    image: 'https://i.ibb.co/frGbNRj/curso-c-conhecendo-a-linguagem-das-linguagens-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C']
                },
                {
                    id: 3,
                    title: 'C: Recursos avançados da linguagem',
                    description: '',
                    image: 'https://i.ibb.co/X5GszsW/curso-c-recursos-avan-ados-da-linguagem.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C']
                },
                {
                    id: 4,
                    title: 'Flask: Avançando no desenvolvimento web com python',
                    description: '',
                    image: 'https://i.ibb.co/LZXgLs9/curso-flask-avan-ando-no-desenvolvimento-web-com-python.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK']
                },
                {
                    id: 5,
                    title: 'Flask: Crie uma webapp com python',
                    description: '',
                    image: 'https://i.ibb.co/y0DHKp1/curso-flask-crie-uma-webapp-com-python.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK']
                },
                {
                    id: 6,
                    title: 'Git e Github: Compartilhando e colaborando em projetos',
                    description: '',
                    image: 'https://i.ibb.co/SwJzkyD/curso-git-github.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['GIT', 'GITHUB']
                },
                {
                    id: 7,
                    title: 'Linux onboarding: usando a CLI de uma forma rápida e prática',
                    description: '',
                    image: 'https://i.ibb.co/wKzDnTJ/curso-linux-onboarding-usando-a-cli.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LINUX']
                },
                {
                    id: 8,
                    title: 'Lógica de programação: Explore funções e listas',
                    description: '',
                    image: 'https://i.ibb.co/Wnk1ft7/curso-logica-de-programacao.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 9,
                    title: 'Lógica de programação: Mergulhe em programação com javaScript',
                    description: '',
                    image: 'https://i.ibb.co/DrzcQdD/curso-logica-de-programacao-mergulhe-Java-Script.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 10,
                    title: 'Python: Aplicando a orientação a objetos',
                    description: '',
                    image: 'https://i.ibb.co/zFPQzXx/curso-python-aplicando-a-orientacao-a-objetos.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 11,
                    title: 'Python: Avançando na orientação a objetos',
                    description: '',
                    image: 'https://i.ibb.co/GV6DfZx/curso-python-avancando-na-orientacao-a-objetos.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 12,
                    title: 'Python: Avance na orientação a objetos e consuma API',
                    description: '',
                    image: 'https://i.ibb.co/HG4r0ds/curso-python-avance-na-orientacao-a-objetos-e-consuma-API.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 13,
                    title: 'Python e TDD: Explorando testes unitários',
                    description: '',
                    image: 'https://i.ibb.co/1Z71Jk2/curso-python-e-TDD.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD']
                },
                {
                    id: 14,
                    title: 'Python: Crie a sua primeira aplicação',
                    description: '',
                    image: 'https://i.ibb.co/R9tVjC2/curso-python-primeira-aplicacao.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD']
                },
                {
                    id: 15,
                    title: 'React: Conhecendo a biblioteca React-Router',
                    description: '',
                    image: 'https://i.ibb.co/x8WJjXb/curso-React-conhecendo-a-biblioteca-React-Router.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'REACT-ROUTER']
                },
                {
                    id: 16,
                    title: 'React: Escrevendo com TypeScript',
                    description: '',
                    image: 'https://i.ibb.co/qDP0Hjc/curso-React-escrevendo-com-Typescript.png',
                    hours: 12,
                    hoursTxt: '12 Horas',
                    tags: ['REACT', 'TYPESCRIPT']
                },
                {
                    id: 17,
                    title: 'React-Native: criando menu e navegando entre telas',
                    description: '',
                    image: 'https://i.ibb.co/br1mFj7/curso-React-Native-criando-menu-e-navegando-entre-telas.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 18,
                    title: 'React-Native: criando testes para sua aplicação',
                    description: '',
                    image: 'https://i.ibb.co/DGVw7sK/curso-React-Native-criando-testes-para-sua-aplicacao.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 19,
                    title: 'React-Native: guardando informações localmente',
                    description: '',
                    image: 'https://i.ibb.co/PN1mN7z/curso-React-Native-guardando-informacoes-localmente.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 20,
                    title: 'React-Native: Personalize apps com animações',
                    description: '',
                    image: 'https://i.ibb.co/wg3DzWf/curso-React-Native-personalize-apps-com-animacoes.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 21,
                    title: 'React-Native: Utilizando e criando hooks',
                    description: '',
                    image: 'https://i.ibb.co/t3jsBVD/curso-React-Native-utilizando-e-criando-Hooks.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE']
                },
            ]
        },
        'en': {
            title: 'Certificates',
            certificates: [
                {
                    id: 1,
                    title: 'C: Advancing in the language',
                    description: '',
                    image: 'https://i.ibb.co/bQvVFSh/curso-c-avan-ando-na-linguagem-eng-1.png',
                    hours: 8,
                    hoursTxt: '8 Hours',
                    tags: ['C']
                },
                {
                    id: 2,
                    title: 'C: Knowing the language of languages',
                    description: '',
                    image: 'https://i.ibb.co/vBTP5bT/curso-c-conhecendo-a-linguagem-das-linguagens-eng-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C']
                },
                {
                    id: 3,
                    title: 'C: Advanced language features',
                    description: '',
                    image: 'https://i.ibb.co/DrJvMCs/curso-c-recursos-avan-ados-da-linguagem-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C']
                },
                {
                    id: 4,
                    title: 'Flask: Advancing web development with python',
                    description: '',
                    image: 'https://i.ibb.co/YLb8Dqz/curso-flask-avan-ando-no-desenvolvimento-web-com-python-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK']
                },
                {
                    id: 5,
                    title: 'Flask: Create a webapp with python',
                    description: '',
                    image: 'https://i.ibb.co/9pk0sh0/curso-flask-crie-uma-webapp-com-python-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK']
                },
                {
                    id: 6,
                    title: 'Git e Github: Sharing and collaborating on projects',
                    description: '',
                    image: 'https://i.ibb.co/tpWSzqN/curso-git-github-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['GIT', 'GITHUB']
                },
                {
                    id: 7,
                    title: 'Linux onboarding: using the CLI quickly and easily',
                    description: '',
                    image: 'https://i.ibb.co/WFrP22C/curso-linux-onboarding-usando-a-cli-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LINUX']
                },
                {
                    id: 8,
                    title: 'Programming logic: Explore functions and lists',
                    description: '',
                    image: 'https://i.ibb.co/kXyPyLY/curso-logica-de-programacao-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 9,
                    title: 'Programming logic: Dive into programming with javaScript',
                    description: '',
                    image: 'https://i.ibb.co/ZgTCZ91/curso-logica-de-programacao-mergulhe-Java-Script-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 10,
                    title: 'Python: Applying object orientation',
                    description: '',
                    image: 'https://i.ibb.co/XLBfdRF/curso-python-aplicando-a-orientacao-a-objetos-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 11,
                    title: 'Python: Advancing object-oriented',
                    description: '',
                    image: 'https://i.ibb.co/1MXm0jD/curso-python-avancando-na-orientacao-a-objetos-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 12,
                    title: 'Python: Advance in object orientation and consuming API',
                    description: '',
                    image: 'https://i.ibb.co/1RVfP01/curso-python-avance-na-orientacao-a-objetos-e-consuma-API-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 13,
                    title: 'Python e TDD: Exploring unit tests',
                    description: '',
                    image: 'https://i.ibb.co/WcH2Rg8/curso-python-e-TDD-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD']
                },
                {
                    id: 14,
                    title: 'Python: Creating your first application',
                    description: '',
                    image: 'https://i.ibb.co/ZWPQJs2/curso-python-primeira-aplicacao-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD']
                },
                {
                    id: 15,
                    title: 'React: Getting to know the React-Router library',
                    description: '',
                    image: 'https://i.ibb.co/v352D2J/curso-React-conhecendo-a-biblioteca-React-Router-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'REACT-ROUTER']
                },
                {
                    id: 16,
                    title: 'React: Writing with TypeScript',
                    description: '',
                    image: 'https://i.ibb.co/3Sw2TQ6/curso-React-escrevendo-com-Typescript-eng.png',
                    hours: 12,
                    hoursTxt: '12 Horas',
                    tags: ['REACT', 'TYPESCRIPT']
                },
                {
                    id: 17,
                    title: 'React-Native: creating menu and navigating between screens',
                    description: '',
                    image: 'https://i.ibb.co/72B6MQg/curso-React-Native-criando-menu-e-navegando-entre-telas-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 18,
                    title: 'React-Native: creating tests for your application',
                    description: '',
                    image: 'https://i.ibb.co/LN7BRNz/curso-React-Native-criando-testes-para-sua-aplicacao-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 19,
                    title: 'React-Native: storing information locally',
                    description: '',
                    image: 'https://i.ibb.co/t3FxkZc/curso-React-Native-guardando-informacoes-localmente-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 20,
                    title: 'React-Native: Customize apps with animations',
                    description: '',
                    image: 'https://i.ibb.co/9qHPDVB/curso-React-Native-personalize-apps-com-animacoes-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE']
                },
                {
                    id: 21,
                    title: 'React-Native: Using and creating hooks',
                    description: '',
                    image: 'https://i.ibb.co/Rv4WfPh/curso-React-Native-utilizando-e-criando-Hooks-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE']
                },
            ]
        }
    };

        if (langague == 'en') {
            return json['en'];
        }
        return json['pt-br'];
};
