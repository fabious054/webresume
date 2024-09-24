

export default function Certificates(langague: string) {
    const json = {
        'pt-br': {
            title: 'Certificados',
            certificates: [
                {
                    id: 1,
                    title: 'C: Avançando na linguagem',
                    description: 'Desenvolva suas habilidades de programação em C++ enquanto cria um jogo de forca completo! Neste desafio, você explorará conceitos essenciais, desde funções e manipulação de arrays até ponteiros e endereços de memória. Aprenda a manipular entrada e saída de dados, além de escrever em arquivos para salvar o progresso do jogo. Ao longo do caminho, descubra boas práticas de programação que ajudarão a tornar seu código mais legível, eficiente e fácil de manter. Prepare-se para mergulhar em uma experiência prática e divertida, onde você aplicará seus conhecimentos para construir um jogo clássico e desafiador.',
                    image: 'https://i.ibb.co/h8gdqcL/curso-c-avan-ando-na-linguagem-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C','C++']
                },
                {
                    id: 2,
                    title: 'C: Conhecendo a linguagem das linguagens',
                    description: 'Inicie sua jornada na programação em C aprendendo a criar seu primeiro programa. Entenda o conceito de variáveis e como elas armazenam dados. Explore como seu programa pode variar seu comportamento com base em diferentes condições e entradas. Aprofunde-se em realizar operações matemáticas para manipular dados de forma eficaz. Aprenda a usar condicionais e laços para controlar o fluxo do seu programa. Adquira insights sobre como os compiladores funcionam para traduzir seu código em instruções legíveis pela máquina. Por fim, coloque suas novas habilidades à prova criando um jogo de adivinhação completo, onde os jogadores tentam adivinhar um número secreto.',
                    image: 'https://i.ibb.co/frGbNRj/curso-c-conhecendo-a-linguagem-das-linguagens-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C','C++']
                },
                {
                    id: 3,
                    title: 'C: Recursos avançados da linguagem',
                    description: 'Aprimore suas habilidades em C++ escrevendo funções recursivas e manipulando matrizes para criar um jogo completo de Pac-Man. Explore a definição de tipos e estruturas para organizar seus dados de maneira eficiente. Entenda as diretivas de compilação para otimizar o processo de compilação e tornar seu código mais flexível. Aprenda a dividir seu código em múltiplos arquivos para facilitar a manutenção e organização do projeto. Prepare-se para uma jornada emocionante enquanto você constrói um clássico dos videogames, desafiando-se a implementar todos os aspectos do Pac-Man, desde a movimentação dos personagens até a lógica dos fantasmas e a coleta de pontos.',
                    image: 'https://i.ibb.co/X5GszsW/curso-c-recursos-avan-ados-da-linguagem.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C','C++']
                },
                {
                    id: 4,
                    title: 'Flask: Avançando no desenvolvimento web com python',
                    description: `Desenvolva um aplicativo completo de CRUD utilizando MySQL e SQLAlchemy para gerenciamento de banco de dados. Implemente a funcionalidade de upload de arquivos para enriquecer as interações do usuário. Garanta a validação de formulários utilizando Flask WTF para manter a integridade dos dados. Aprimore a segurança do projeto integrando o Flask Bcrypt para criptografia e proteção contra acessos não autorizados. Essa combinação de tecnologias permite a criação de um aplicativo web robusto, com gerenciamento de dados eficiente, melhor experiência do usuário e medidas de segurança reforçadas.`,
                    image: 'https://i.ibb.co/LZXgLs9/curso-flask-avan-ando-no-desenvolvimento-web-com-python.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK', 'MYSQL', 'SQLALCHEMY','BOOTSTRAP','HTML','CSS']
                },
                {
                    id: 5,
                    title: 'Flask: Crie uma webapp com python',
                    description: 'Aprenda a criar uma aplicação web com Flask, um microframework em Python que oferece facilidade e flexibilidade no desenvolvimento. Combinando HTML e Bootstrap, você pode criar websites elegantes e responsivos. Além disso, é possível proteger sua aplicação implementando um sistema de login e autorização personalizado. Ao definir rotas, redirecionamentos e templates, você organiza o conteúdo de forma eficiente. Com URLs dinâmicas, é possível proporcionar uma experiência personalizada aos usuários.',
                    image: 'https://i.ibb.co/y0DHKp1/curso-flask-crie-uma-webapp-com-python.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK', 'HTML', 'BOOTSTRAP']
                },
                {
                    id: 6,
                    title: 'Git e Github: Compartilhando e colaborando em projetos',
                    description: 'Crie seu portfólio de projetos no GitHub para compartilhar seu trabalho com o mundo. Aprenda a compartilhar o código dos seus projetos, entender como colaborar em equipes e fazer o versionamento usando o Git. Lidar com conflitos em códigos e analisar o histórico de commits são habilidades essenciais para qualquer desenvolvedor.',
                    image: 'https://i.ibb.co/SwJzkyD/curso-git-github.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['GIT', 'GITHUB']
                },
                {
                    id: 7,
                    title: 'Linux onboarding: usando a CLI de uma forma rápida e prática',
                    description: 'Comece a usar o Linux de forma rápida e prática, dominando habilidades essenciais. Manipule arquivos e diretórios através da linha de comando (CLI), gerencie serviços, e explore o sistema, acessando logs, processos e dispositivos. Aprenda também a administrar usuários e grupos do sistema.',
                    image: 'https://i.ibb.co/wKzDnTJ/curso-linux-onboarding-usando-a-cli.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LINUX']
                },
                {
                    id: 8,
                    title: 'Lógica de programação: Explore funções e listas',
                    description: 'Aprenda sobre funções e como usar JavaScript para manipular elementos na tela. Refine sua lógica de programação com projetos reais. Saiba como publicar seus projetos usando Github e Vercel. Descubra o uso de listas, uma estrutura de dados essencial na programação. Crie manipulações dinâmicas de palavras e números com JavaScript.',
                    image: 'https://i.ibb.co/Wnk1ft7/curso-logica-de-programacao.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 9,
                    title: 'Lógica de programação: Mergulhe em programação com javaScript',
                    description: 'Exiba mensagens de forma interativa na tela. Utilize variáveis no desenvolvimento de software e siga boas práticas de programação ao ingressar no mundo do desenvolvimento. Desenvolva uma aplicação completa, inspirada em situações reais, do início ao fim. Aprenda a adaptar soluções fornecidas pela linguagem em seus programas de software.',
                    image: 'https://i.ibb.co/DrzcQdD/curso-logica-de-programacao-mergulhe-Java-Script.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 10,
                    title: 'Python: Aplicando a orientação a objetos',
                    description: 'Entenda a importância da Orientação a Objetos com Python e descubra como classes e atributos são essenciais em projetos reais. Utilize métodos estáticos e encapsulamento para melhorar sua prática de programação. Compreenda como propriedades podem conter lógica adicional além de simples acesso e atribuição de valores. Aprenda como as classes em Python podem organizar e estruturar seu código de forma eficiente, utilizando o construtor para inicializar objetos e definir seus estados iniciais.',
                    image: 'https://i.ibb.co/zFPQzXx/curso-python-aplicando-a-orientacao-a-objetos.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 11,
                    title: 'Python: Avançando na orientação a objetos',
                    description: 'Entenda o conceito de Duck Typing e sua utilidade na flexibilidade de tipos em Python. Crie classes abstratas e explore herança múltipla para reutilização de código. Aprenda sobre o modelo de dados do Python e como ele influencia a manipulação de objetos. Conheça os Mixins e a extensão de classes para modularidade e reutilização de comportamentos. Saiba a diferença entre os métodos especiais __str__ e __repr__ na representação de objetos.',
                    image: 'https://i.ibb.co/GV6DfZx/curso-python-avancando-na-orientacao-a-objetos.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 12,
                    title: 'Python: Avance na orientação a objetos e consuma API',
                    description: 'Implemente herança e classes abstratas para promover a reutilização de código e a modularidade em seus projetos Python. Domine o conceito de polimorfismo para escrever código flexível e adaptável. Aprenda a integrar seus projetos com aplicações externas para expandir suas funcionalidades. Entenda como criar arquivos JSON de forma prática para armazenar e compartilhar dados estruturados. Crie e ative ambientes virtuais em Python para manter suas dependências de projeto isoladas e gerenciar versões de pacotes com facilidade.',
                    image: 'https://i.ibb.co/HG4r0ds/curso-python-avance-na-orientacao-a-objetos-e-consuma-API.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON','HTTP','API']
                },
                {
                    id: 13,
                    title: 'Python e TDD: Explorando testes unitários',
                    description: 'Aprenda a criar seus primeiros testes unitários com Python e conheça o principal framework de testes, o Pytest. Entenda o conceito de Desenvolvimento Orientado a Testes (Test-Driven Development - TDD) e como aplicá-lo. Saiba criar testes que lidem com exceções e utilize marcadores para organizar e aprimorar a execução dos seus testes. Aprenda sobre cobertura de testes e como verificá-la.',
                    image: 'https://i.ibb.co/1Z71Jk2/curso-python-e-TDD.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD', 'PYTEST']
                },
                {
                    id: 14,
                    title: 'Python: Crie a sua primeira aplicação',
                    description: 'Crie um projeto em Python utilizando o VSCode e explore o fluxo de uma aplicação com o uso de condicionais e laços de repetição. Aprenda a utilizar blocos de controle de execução try-except para lidar com exceções. Desenvolva funções para exibir o menu principal e registrar restaurantes em listas e dicionários.',
                    image: 'https://i.ibb.co/R9tVjC2/curso-python-primeira-aplicacao.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD','HTML','CSS','BOOTSTRAP']
                },
                {
                    id: 15,
                    title: 'React: Conhecendo a biblioteca React-Router',
                    description: 'Saiba como refatorar um projeto utilizando o ESLint e desenvolva um código escalável, priorizando a clareza e a facilidade de compreensão. Utilize o pacote react-router-dom de maneira simples e prática, aprendendo todos os principais conceitos da biblioteca. Descubra como a biblioteca se integra com o navegador e utiliza recursos nativos para manipular rotas e compartilhar estados. Crie telas navegando entre elas de várias formas diferentes e reutilize componentes entre elas. Entenda sobre rotas aninhadas (nested routes) e como criá-las para reutilizar código e resolver problemas.',
                    image: 'https://i.ibb.co/x8WJjXb/curso-React-conhecendo-a-biblioteca-React-Router.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'REACT-ROUTER', 'ESLINT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 16,
                    title: 'React: Escrevendo com TypeScript',
                    description: `Crie um projeto React com Typescript do zero usando o Create React App. Entenda conceitos fundamentais do React, como Componentização, Props e State. Evite sobreposições de CSS com CSS Modules. Aprenda sobre os hooks useState e useEffect e compreenda como eles eram utilizados em class components. Mantenha seu código limpo e documentado seguindo as práticas mais atuais de escrita em React. Desenvolva seu código com conceitos de boas práticas, como DRY (Don't repeat yourself) e SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/qDP0Hjc/curso-React-escrevendo-com-Typescript.png',
                    hours: 12,
                    hoursTxt: '12 Horas',
                    tags: ['REACT', 'TYPESCRIPT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 17,
                    title: 'React-Native: criando menu e navegando entre telas',
                    description: 'Instale a biblioteca React Navigation para gerenciar a navegação em seu aplicativo. Crie um fluxo de navegação utilizando Stack, Tab e Drawer Navigation para proporcionar uma experiência de usuário fluida e intuitiva. Compreenda as diferenças entre os diferentes tipos de navegação e suas respectivas utilizações. Una diferentes tipos de navegação em uma única aplicação para atender às necessidades de sua aplicação de forma abrangente. Envie e receba parâmetros entre rotas para permitir a comunicação eficaz entre os diferentes componentes de seu aplicativo.',
                    image: 'https://i.ibb.co/br1mFj7/curso-React-Native-criando-menu-e-navegando-entre-telas.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 18,
                    title: 'React-Native: criando testes para sua aplicação',
                    description: 'Conheça os principais tipos de teste e sua importância em projetos. Instale e configure as bibliotecas jest, @testing-library/react-native e @testing-library/react-hooks. Faça testes de unidade com jest. Simule métodos utilizando mocks. Teste hooks com eficiência e praticidade. Carregue componentes em memória e teste seus comportamentos. Reduza bugs e ganhe mais confiabilidade e segurança em seus aplicativos.',
                    image: 'https://i.ibb.co/DGVw7sK/curso-React-Native-criando-testes-para-sua-aplicacao.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 19,
                    title: 'React-Native: guardando informações localmente',
                    description: 'Aplique a funcionalidade de mostrar, salvar, editar e excluir notas em um aplicativo real. Descubra a importância do armazenamento local para salvar dados e aprenda a utilizar ferramentas como AsyncStorage e SQLite. Compreenda o objetivo, diferenças, vantagens e desvantagens do AsyncStorage e do SQLite. Utilize consultas SELECT, INSERT, UPDATE e DELETE com SQLite. Implemente opções de armazenamento local com AsyncStorage e SQLite e coloque os aprendizados em prática com desafios.',
                    image: 'https://i.ibb.co/PN1mN7z/curso-React-Native-guardando-informacoes-localmente.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','ASYNCSTORAGE','SQLITE','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 20,
                    title: 'React-Native: Personalize apps com animações',
                    description: 'Identifique o que são e para que servem animações. Aprenda o que é e como utilizar o Shimmer Effect. Compreenda o propósito da biblioteca React Native Reanimated. Learn to animate notification buttons. Understand what Lottie is and how to use it. Create screens for animated Splash Screens.',
                    image: 'https://i.ibb.co/wg3DzWf/curso-React-Native-personalize-apps-com-animacoes.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 21,
                    title: 'React-Native: Utilizando e criando hooks',
                    description: 'Crie aplicações React Native com ambiente nativo. Utilize o emulador do Android. Crie listas otimizadas. Aprenda mais sobre estilos para Android e iOS. Armazene informações voláteis com hooks de estados. Controle efeitos colaterais com hooks de efeito. Crie seu próprio hook.',
                    image: 'https://i.ibb.co/t3jsBVD/curso-React-Native-utilizando-e-criando-Hooks.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 22,
                    title: 'HTTP: Entendendo a web por baixo dos panos',
                    description: 'Compreender a arquitetura e os conceitos fundamentais do protocolo HTTP. Implementar o HTTPS para proteger os dados de uma aplicação durante a comunicação na web. Explorar os principais avanços trazidos pelo HTTP/2 e HTTP/3 para otimizar a performance. Desvendar os componentes das mensagens HTTP, como requisições, respostas e cabeçalhos. Entender o que são URLs e domínios na web.',
                    image: 'https://i.ibb.co/nMRbN2Y/curso-http-entendendo-a-web-por-baixo-dos-panos.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['HTTP','API']
                },
                {
                    id: 23,
                    title: 'React: estilize componentes com Styled-Components e manipule arquivos estáticos',
                    description: 'Este curso prático explora as diferenças entre Vite e CRA, destacando as vantagens do Styled Components. Você aprenderá a criar uma NavBar e estilizar banners, projetar componentes React para imagens e legendas, estilizar galerias de fotos e adicionar uma barra lateral de imagens populares com footer.',
                    image: 'https://i.ibb.co/FVGLZBm/curso-react-estilize-componentes-com-Styled-Components-e-manipule-arquivos-estaticos-1.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'STYLED-COMPONENTS','REACT-HOOKS ','CSS', 'HTML']
                },
                {
                    id: 24,
                    title: 'Node.js: criando uma API Rest com Express e MongoDB',
                    description: 'Aprenda a criar uma API do zero, seguindo o estilo arquitetural REST. Entenda como as requisições HTTP funcionam. Conheça o framework Express, utilizado para desenvolver aplicações robustas e escaláveis. Conecte sua API com um banco de dados MongoDB. Crie buscas por campos específicos na API.',
                    image: 'https://i.ibb.co/R9PGnqL/curso-nodejs-criando-uma-API-Rest-com-Express-e-Mongo-DB-1.png"',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['NODE', 'EXPRESS', 'MONGODB','API']
                },
                {
                    id: 25,
                    title: 'Lógica de programação: praticando com desafios',
                    description: 'Melhore suas habilidades em programação com desafios práticos de lógica. Utilize seus conhecimentos para implementar soluções eficazes e reforçar sua compreensão. Desenvolva projetos que enriquecem seu portfólio e destacam suas capacidades técnicas. Comece agora e eleve seu nível em programação!',
                    image: 'https://i.ibb.co/xMyX6d7/curso-L-gica-de-programa-o-praticando-com-desafios.jpg',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 26,
                    title: 'React Native: utilizando o Context API nas suas aplicações',
                    description: 'Conheça a importância do Context API e como utilizá-lo para organizar suas aplicações. Aprenda a construir grandes aplicações de forma organizada com estados globais. Implemente a mudança de tema em um app e crie um sistema simples de autenticação. Desenvolva telas de carrinho e últimos produtos vistos em um app de e-commerce. Aplique a persistência de dados através de uma Web API para uma experiência completa.',
                    image: 'https://i.ibb.co/bHfrLfV/curso-React-Native-utilizando-o-Context-API-nas-suas-aplica-es.jpg',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 27,
                    title: 'React Native: utilizando Web API',
                    description: 'Compreenda o que são Web API e fake API e qual sua utilidade no desenvolvimento mobile. Utilize uma Web API para receber, exibir, salvar, editar e apagar informações de um app. Aprenda a conectar um aplicativo ao armazenamento online com o React Native. Descubra as principais opções para fazer requisições. Instale e utilize a biblioteca Axios para fazer requisições. Teste requisições com o software Insomnia. Implemente as requisições GET, POST, PUT e DELETE em um projeto real.',
                    image: 'https://i.ibb.co/y4MVDZT/curso-React-Native-utilizando-Web-API.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS','API']
                },
                {
                    id: 28,
                    title: 'Redes Neurais: Deep Learning com PyTorch',
                    description: 'Entenda os elementos que compõem uma Rede Neural tradicional. Experimente o framework PyTorch para Deep Learning. Implemente operações com a estrutura de dados Tensor. Aprenda o funcionamento e as limitações de um Perceptron. Implemente uma arquitetura de Rede Neural com múltiplas camadas de Perceptron.',
                    image: 'https://i.ibb.co/Z131p7H/curso-Redes-Neurais-Deep-Learning-com-Py-Torch.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTORCH','PYTHON','DEEP-LEARNING']
                },
                {
                    id: 29,
                    title: 'Treinando uma Rede Neural: Deep Learning com PyTorch',
                    description: 'Experimente o framework PyTorch para Deep Learning e implemente o fluxo de treinamento e validação de uma Rede Neural. Entenda o papel dos hiperparâmetros no treinamento de uma Rede Neural e aprenda a carregar datasets customizados com PyTorch, bem como a carregar datasets do pacote Torchvision. Além disso, conheça os otimizadores mais usados no treinamento de Redes Neurais.',
                    image: 'https://i.ibb.co/8btGMR0/curso-Treinando-uma-Rede-Neural-Deep-Learning-com-Py-Torch.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTORCH','PYTHON','DEEP-LEARNING']
                },
                {
                    id: 30,
                    title: 'Node.js: lidando com buscas, filtros, paginação e erros em uma API',
                    description: 'Aprender a tratar erros de uma API de forma elegante é essencial para melhorar a experiência do usuário e facilitar a manutenção. Usar validações do Mongoose assegura dados consistentes no MongoDB. Avançar em buscas e filtros com operadores do MongoDB permite consultas complexas e precisas. Implementar paginação e reutilizá-la em diferentes rotas melhora o desempenho e a usabilidade da API. Compreender middlewares do Express ajuda a criar uma API modular e organizada, facilitando tarefas como autenticação e tratamento de erros. Essas práticas são cruciais para desenvolver APIs robustas e eficientes.',
                    image: 'https://i.ibb.co/Br41MCL/curso-node-js-lidando-com-buscas-filtros-pagina-o-e-erros-em-uma-API.png" alt="curso-node-js-lidando-com-buscas-filtros-pagina-o-e-erros-em-uma-API',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['NODE', 'EXPRESS', 'MONGODB','API']
                },
                {
                    id: 31,
                    title: 'REACT: DESENVOLVENDO COM JAVASCRIPT',
                    description: `Crie um projeto React do zero usando o Create React App. Entenda conceitos fundamentais do React, como Componentização, Props e State. Evite sobreposições de CSS com CSS Modules. Aprenda sobre os hooks useState e useEffect e compreenda como eles eram utilizados em class components. Mantenha seu código limpo e documentado seguindo as práticas mais atuais de escrita em React. Desenvolva seu código com conceitos de boas práticas, como DRY (Don't repeat yourself) e SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/C5dGZfk/react-ptbr-1.png',
                    hours: 14,
                    hoursTxt: '14 Horas',
                    tags: ['REACT', 'TYPESCRIPT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 32,
                    title: 'REACT: COMO OS COMPONENTES FUNCIONAM',
                    description: `Crie um projeto React do zero usando o Create React App. Entenda conceitos fundamentais do React, como Componentização, Props e State. Evite sobreposições de CSS com CSS Modules. Aprenda sobre os hooks useState e useEffect e compreenda como eles eram utilizados em class components. Mantenha seu código limpo e documentado seguindo as práticas mais atuais de escrita em React. Desenvolva seu código com conceitos de boas práticas, como DRY (Don't repeat yourself) e SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/xgrgSxh/Fabio-Henrique-De-Abreu-Curso-React-como-os-componentes-funcionam-Alura-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 33,
                    title: 'REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT',
                    description: `Domine o react-router-dom e aprenda a criar Single Page Applications (SPA) eficientes. Descubra como utilizar rotas aninhadas e dinâmicas para resolver problemas comuns de navegação. Explore os principais hooks, como useLocation e useParams, para aprimorar suas aplicações React.`,
                    image: 'https://i.ibb.co/hLTwjTd/router-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
            ]
        },
        'en': {
            title: 'Certificates',
            certificates: [
                {
                    id: 1,
                    title: 'C: Advancing in the language',
                    description: `Develop your programming skills in C++ while creating a complete hangman game! In this challenge, you will explore essential concepts, from functions and array manipulation to pointers and memory addresses. Learn to handle input and output, as well as writing to files to save game progress. Along the way, discover best programming practices that will help make your code more readable, efficient, and easy to maintain. Get ready to dive into a hands-on and enjoyable experience where you'll apply your knowledge to build a classic and challenging game.`,
                    image: 'https://i.ibb.co/bQvVFSh/curso-c-avan-ando-na-linguagem-eng-1.png',
                    hours: 8,
                    hoursTxt: '8 Hours',
                    tags: ['C','C++']
                },
                {
                    id: 2,
                    title: 'C: Knowing the language of languages',
                    description: `Embark on your journey into C programming by learning how to create your first program. Understand the concept of variables and how they store data. Explore how your program can vary its behavior based on different conditions and inputs. Dive into performing mathematical operations to manipulate data effectively. Learn the use of conditionals and loops to control the flow of your program. Gain insights into how compilers work to translate your code into machine-readable instructions. Finally, put your newfound skills to the test by creating a complete guessing game, where players try to guess a secret number.`,
                    image: 'https://i.ibb.co/vBTP5bT/curso-c-conhecendo-a-linguagem-das-linguagens-eng-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C','C++']
                },
                {
                    id: 3,
                    title: 'C: Advanced language features',
                    description: 'Enhance your C++ skills by writing recursive functions and manipulating arrays to create a complete Pac-Man game. Explore defining types and structures to efficiently organize your data. Understand compilation directives to optimize the compilation process and make your code more flexible. Learn to split your code into multiple files to facilitate maintenance and organization of the project. Get ready for an exciting journey as you build a video game classic, challenging yourself to implement all aspects of Pac-Man, from character movement to ghost logic and point collection.',
                    image: 'https://i.ibb.co/DrJvMCs/curso-c-recursos-avan-ados-da-linguagem-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['C', 'C++']
                },
                {
                    id: 4,
                    title: 'Flask: Advancing web development with python',
                    description: `Build a comprehensive CRUD application utilizing MySQL and SQLAlchemy for database management. Implement file upload functionality to enrich user interactions. Ensure form validation using Flask WTF to maintain data integrity. Enhance project security by integrating Flask Bcrypt for encryption and protection against unauthorized access. This combination of technologies empowers you to develop a robust web application with seamless data management, enhanced user experience, and strengthened security measures.`,
                    image: 'https://i.ibb.co/YLb8Dqz/curso-flask-avan-ando-no-desenvolvimento-web-com-python-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK', 'MYSQL', 'SQLALCHEMY', 'BOOTSTRAP', 'HTML', 'CSS']
                },
                {
                    id: 5,
                    title: 'Flask: Create a webapp with python',
                    description: `Learn to create a web application with Flask, a Python microframework that offers ease and flexibility in development. By combining HTML and Bootstrap, you can create stylish and responsive websites. Additionally, you can protect your application by implementing a custom login and authorization system. Defining routes, redirections, and templates helps you organize content efficiently. With dynamic URLs, you can provide a personalized experience for users.`,
                    image: 'https://i.ibb.co/9pk0sh0/curso-flask-crie-uma-webapp-com-python-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON', 'FLASK', 'HTML', 'BOOTSTRAP']
                },
                {
                    id: 6,
                    title: 'Git e Github: Sharing and collaborating on projects',
                    description: `Create your project portfolio on GitHub to showcase your work to the world. Learn to share your project code, understand collaboration in teams, and version software projects using Git. Handling code conflicts and analyzing commit history are essential skills for any developer.`,
                    image: 'https://i.ibb.co/tpWSzqN/curso-git-github-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['GIT', 'GITHUB']
                },
                {
                    id: 7,
                    title: 'Linux onboarding: using the CLI quickly and easily',
                    description: 'Quickly and efficiently start using Linux by mastering essential skills. Manipulate files and directories through the command line interface (CLI), manage services, and delve into the system by accessing logs, processes, and devices. Learn to administer system users and groups as well.',
                    image: 'https://i.ibb.co/WFrP22C/curso-linux-onboarding-usando-a-cli-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LINUX']
                },
                {
                    id: 8,
                    title: 'Programming logic: Explore functions and lists',
                    description: 'Learn about functions and how to use JavaScript to manipulate elements on the screen. Hone your programming logic with real-world projects. Understand how to publish your projects using Github and Vercel. Discover the use of lists, a fundamental data structure in programming. Create dynamic manipulations of words and numbers with JavaScript.',
                    image: 'https://i.ibb.co/kXyPyLY/curso-logica-de-programacao-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 9,
                    title: 'Programming logic: Dive into programming with javaScript',
                    description: `Display messages interactively on the screen. Use variables in software development and follow best programming practices when entering the world of development. Develop a complete application, inspired by real-world scenarios, from start to finish. Learn to adapt solutions provided by the language in your software programs.`,
                    image: 'https://i.ibb.co/ZgTCZ91/curso-logica-de-programacao-mergulhe-Java-Script-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 10,
                    title: 'Python: Applying object orientation',
                    description: 'Understand the importance of Object-Oriented Programming with Python and discover how classes and attributes are crucial in real-world projects. Use static methods and encapsulation to enhance your programming practice. Understand how properties can contain additional logic beyond simple value access and assignment. Learn how classes in Python can efficiently organize and structure your code, using the constructor to initialize objects and define their initial states.',
                    image: 'https://i.ibb.co/XLBfdRF/curso-python-aplicando-a-orientacao-a-objetos-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 11,
                    title: 'Python: Advancing object-oriented',
                    description: `Understand the concept of Duck Typing and its usefulness in Python's type flexibility. Create abstract classes and explore multiple inheritance for code reuse. Learn about Python's data model and how it influences object manipulation. Get to know Mixins and class extension for modularity and behavior reuse. Understand the difference between the special methods __str__ and __repr__ in object representation.`,
                    image: 'https://i.ibb.co/1MXm0jD/curso-python-avancando-na-orientacao-a-objetos-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['PYTHON']
                },
                {
                    id: 12,
                    title: 'Python: Advance in object orientation and consuming API',
                    description: `Implement inheritance and abstract classes to promote code reuse and modularity in your Python projects. Master the concept of polymorphism to write flexible and adaptable code. Learn how to integrate your projects with external applications to expand their functionalities. Understand how to create JSON files practically to store and share structured data. Create and activate virtual environments in Python to keep your project dependencies isolated and manage package versions with ease.`,
                    image: 'https://i.ibb.co/1RVfP01/curso-python-avance-na-orientacao-a-objetos-e-consuma-API-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'HTTP', 'API']
                },
                {
                    id: 13,
                    title: 'Python e TDD: Exploring unit tests',
                    description: `Learn how to create your first unit tests with Python and get to know the main testing framework, Pytest. Understand the concept of Test-Driven Development (TDD) and how to apply it. Know how to create tests that handle exceptions and use markers to organize and enhance the execution of your tests. Learn about test coverage and how to verify it.`,
                    image: 'https://i.ibb.co/WcH2Rg8/curso-python-e-TDD-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD', 'PYTEST']
                },
                {
                    id: 14,
                    title: 'Python: Creating your first application',
                    description: `Create a Python project using VSCode and explore the flow of an application using conditionals and loops. Learn to use try-except control blocks to handle exceptions. Develop functions to display the main menu and register restaurants in lists and dictionaries.`,
                    image: 'https://i.ibb.co/ZWPQJs2/curso-python-primeira-aplicacao-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTHON', 'TDD','HTML','CSS','BOOTSTRAP']
                },
                {
                    id: 15,
                    title: 'React: Getting to know the React-Router library',
                    description: `Learn how to refactor a project using ESLint and develop scalable code, prioritizing cleanliness and ease of understanding. Utilize the react-router-dom package in a simple and practical way, learning all the main concepts of the library. Discover how the library integrates with the browser and leverages native features to manipulate routes and share states. Create screens navigating between them in various different ways and reuse components across them. Understand nested routes and how to create them to reuse code and solve problems.`,
                    image: 'https://i.ibb.co/v352D2J/curso-React-conhecendo-a-biblioteca-React-Router-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'REACT-ROUTER', 'ESLINT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 16,
                    title: 'React: Writing with TypeScript',
                    description: `Create a React project with Typescript from scratch using Create React App. Understand fundamental React concepts such as Componentization, Props, and State. Avoid CSS overlaps with CSS Modules. Learn about the useState and useEffect hooks and understand how they were used in class components. Keep your code clean and documented following the most current React writing practices. Develop your code with good practice concepts such as DRY (Don't repeat yourself) and SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/3Sw2TQ6/curso-React-escrevendo-com-Typescript-eng.png',
                    hours: 12,
                    hoursTxt: '12 Horas',
                    tags: ['REACT', 'TYPESCRIPT', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 17,
                    title: 'React-Native: creating menu and navigating between screens',
                    description: 'Install the React Navigation library to manage navigation in your app. Create a navigation flow using Stack, Tab, and Drawer Navigation to provide a smooth and intuitive user experience. Understand the differences between the different types of navigation and their respective use cases. Combine different types of navigation in a single application to meet the comprehensive needs of your app. Send and receive parameters between routes to enable effective communication between different components of your app.',
                    image: 'https://i.ibb.co/72B6MQg/curso-React-Native-criando-menu-e-navegando-entre-telas-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 18,
                    title: 'React-Native: creating tests for your application',
                    description: 'Learn about the main types of tests and their importance in projects. Install and configure the jest, @testing-library/react-native, and @testing-library/react-hooks libraries. Perform unit tests with jest. Simulate methods using mocks. Test hooks efficiently and conveniently. Load components into memory and test their behaviors. Reduce bugs and gain more reliability and security in your applications.',
                    image: 'https://i.ibb.co/LN7BRNz/curso-React-Native-criando-testes-para-sua-aplicacao-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 19,
                    title: 'React-Native: storing information locally',
                    description: 'Implement the functionality to display, save, edit, and delete notes in a real-world application. Discover the importance of local storage for saving data and learn how to use tools like AsyncStorage and SQLite. Understand the purpose, differences, advantages, and disadvantages of AsyncStorage and SQLite. Utilize SELECT, INSERT, UPDATE, and DELETE queries with SQLite. Implement local storage options with AsyncStorage and SQLite and put your learnings into practice with challenges.',
                    image: 'https://i.ibb.co/t3FxkZc/curso-React-Native-guardando-informacoes-localmente-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS', 'ASYNCSTORAGE', 'SQLITE','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 20,
                    title: 'React-Native: Customize apps with animations',
                    description: 'Identify what animations are and their purpose. Learn about and how to use the Shimmer Effect. Understand the React Native Reanimated library. Learn to animate notification buttons. Understand what Lottie is and how to use it. Create screens for animated Splash Screens.',
                    image: 'https://i.ibb.co/9qHPDVB/curso-React-Native-personalize-apps-com-animacoes-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 21,
                    title: 'React-Native: Using and creating hooks',
                    description: 'Create React Native applications with native environment. Use the Android emulator. Create optimized lists. Learn more about styles for Android and iOS. Store volatile information with state hooks. Control side effects with effect hooks. Create your own hook.',
                    image: 'https://i.ibb.co/Rv4WfPh/curso-React-Native-utilizando-e-criando-Hooks-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT-NATIVE', 'REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 22,
                    title: 'HTTP: Understanding the Web Under the Hood',
                    description: 'Understanding the architecture and fundamental concepts of the HTTP protocol. Implementing HTTPS to protect application data during web communication. Exploring the major advancements brought by HTTP/2 and HTTP/3 to optimize performance. Unraveling the components of HTTP messages, such as requests, responses, and headers. Understanding what URLs and domains are on the web.',
                    image: 'https://i.ibb.co/5L3x8h3/curso-http-entendendo-a-web-por-baixo-dos-panos-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['HTTP','API']
                },
                {
                    id: 23,
                    title: 'React: Style components using Styled-Components and manipulate static files.',
                    description: `This hands-on course explores the differences between Vite and CRA, highlighting the advantages of Styled Components. You'll learn to create a NavBar and style banners, design React components for images and captions, style photo galleries, and add a popular image sidebar with a footer.`,
                    image: 'https://i.ibb.co/tMv1YsZ/curso-react-estilize-componentes-com-Styled-Components-e-manipule-arquivos-estaticos-eng-1.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['REACT', 'STYLED-COMPONENTS','REACT-HOOKS ','CSS', 'HTML']
                },
                {
                    id: 24,
                    title: 'Creating a RESTful API with Express and MongoDB in Node.js.',
                    description: 'Learn to create an API from scratch, following the REST architectural style. Understand how HTTP requests work. Get to know the Express framework, used to develop robust and scalable applications. Connect your API with a MongoDB database. Create searches for specific fields in the API.',
                    image: 'https://i.ibb.co/Bq9ZLBh/curso-nodejs-criando-uma-API-Rest-com-Express-e-Mongo-DB-eng-1.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['NODE', 'EXPRESS', 'MONGODB']
                },
                {
                    id: 25,
                    title: 'Programming Logic: Practicing with Challenges',
                    description: 'Improve your programming skills with practical logic challenges. Use your knowledge to implement effective solutions and reinforce your understanding. Develop projects that enrich your portfolio and showcase your technical abilities. Start now and take your programming to the next level!',
                    image: 'https://i.ibb.co/znPnrCL/curso-L-gica-de-programa-o-praticando-com-desafios-eng.jpg',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['LOGICA', 'JAVASCRIPT']
                },
                {
                    id: 26,
                    title: 'React Native: Using the Context API in Your Applications',
                    description: 'Discover the importance of Context API and how to use it to organize your applications. Learn to build large applications in an organized manner with global states. Implement theme switching in an app and create a simple authentication system. Develop cart and recently viewed products screens in an e-commerce app. Apply data persistence through a Web API for a complete experience',
                    image: 'https://i.ibb.co/7yHTBGB/curso-React-Native-utilizando-o-Context-API-nas-suas-aplica-es-eng.jpg',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 27,
                    title: 'React Native: Using Web API',
                    description: 'Understand what Web APIs and fake APIs are and their utility in mobile development. Use a Web API to receive, display, save, edit, and delete information from an app. Learn to connect an application to online storage with React Native. Discover the main options for making requests. Install and use the Axios library to make requests. Test requests with the Insomnia software. Implement GET, POST, PUT, and DELETE requests in a real project.',
                    image: 'https://i.ibb.co/z6KDnKT/curso-React-Native-utilizando-Web-API-eng.jpg',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT-NATIVE','REACT-HOOKS','CSS', 'HTML','STYLED-COMPONENTS','API']
                },
                {
                    id: 28,
                    title: 'Neural Networks: Deep Learning with PyTorch',
                    description: 'Understand the elements that make up a traditional Neural Network. Experience the PyTorch framework for Deep Learning. Implement operations with the Tensor data structure. Learn the workings and limitations of a Perceptron. Implement a Neural Network architecture with multiple layers of Perceptrons.',
                    image: 'https://i.ibb.co/GVYRc7w/curso-Redes-Neurais-Deep-Learning-com-Py-Torch-eng.png',
                    hours: 6,
                    hoursTxt: '6 Horas',
                    tags: ['PYTORCH','PYTHON','DEEP-LEARNING']
                },
                {
                    id: 29,
                    title: 'DEPLOYING ON AMAZON EC2: HIGH AVAILABILITY AND SCALABILITY OF AN APPLICATION',
                    description: 'Experience the PyTorch framework for Deep Learning and implement the training and validation flow of a Neural Network. Understand the role of hyperparameters in Neural Network training and learn how to load custom datasets with PyTorch, as well as datasets from the Torchvision package. Additionally, get to know the most commonly used optimizers in Neural Network training.',
                    image: 'https://i.ibb.co/60kcszL/curso-Treinando-uma-Rede-Neural-Deep-Learning-com-Py-Torch-eng.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['PYTORCH','PYTHON','DEEP-LEARNING']
                },
                {
                    id: 30,
                    title: 'Node.js: Handling queries, filters, pagination and errors in an API',
                    description: `Learning to handle API errors elegantly is essential for enhancing user experience and easing maintenance. Using Mongoose validations ensures consistent data in MongoDB. Advancing searches and filters with MongoDB operators allows for complex and precise queries. Implementing pagination and reusing it across different routes improves the API's performance and usability. Understanding Express middlewares helps create a modular and organized API, facilitating tasks such as authentication and error handling. These practices are crucial for developing robust and efficient APIs.`,
                    image: 'https://i.ibb.co/4RKxPpJ/curso-node-js-lidando-com-buscas-filtros-pagina-o-e-erros-em-uma-API-eng.png',
                    hours: 10,
                    hoursTxt: '10 Horas',
                    tags: ['NODE', 'EXPRESS', 'MONGODB','API']
                },
                {
                    id: 31,
                    title: 'REACT: DEVELOPING WITH JAVASCRIPT',
                    description: `Create a React project from scratch using Create React App. Understand fundamental React concepts such as Componentization, Props, and State. Avoid CSS class name collisions by using CSS Modules. Learn about the useState and useEffect hooks and understand how they were used in class components. Keep your code clean and documented by following the most up-to-date React coding practices. Develop your code using best practices like DRY (Don't Repeat Yourself) and SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/myXX5Zq/react-ing-1.png' ,
                    hours: 14,
                    hoursTxt: '14 Horas',
                    tags: ['REACT', 'TYPESCRIPT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 32,
                    title: 'REACT: HOW COMPONENTS WORK',
                    description: `Create a React project from scratch using Create React App. Understand fundamental React concepts such as Componentization, Props, and State. Avoid CSS class name collisions by using CSS Modules. Learn about the useState and useEffect hooks and understand how they were used in class components. Keep your code clean and documented by following the most up-to-date React coding practices. Develop your code using best practices like DRY (Don't Repeat Yourself) and SRP (Single Responsibility Principle).`,
                    image: 'https://i.ibb.co/qBwD83C/Fabio-Henrique-De-Abreu-Curso-React-como-os-componentes-funcionam-Alura-ing-1.png' ,
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
                {
                    id: 33,
                    title: 'REACT: DEVELOPING IN REACT ROUTER WITH JAVASCRIPT',
                    description: `Master react-router-dom and learn to build efficient Single Page Applications (SPA). Discover how to use nested and dynamic routes to solve common navigation challenges. Explore key hooks like useLocation and useParams to enhance your React applications.`,
                    image: 'https://i.ibb.co/kJfc3Sm/router-ing-1.png',
                    hours: 8,
                    hoursTxt: '8 Horas',
                    tags: ['REACT', 'REACT-HOOKS', 'CSS', 'HTML','STYLED-COMPONENTS']
                },
            ]
        }
    };

        if (langague == 'en') {
            //ordenar por ordem alfabética do title
            json['en'].certificates.sort((a, b) => a.title.localeCompare(b.title));
            return json['en'];
        }

        json['pt-br'].certificates.sort((a, b) => a.title.localeCompare(b.title));
        return json['pt-br'];
};

export function TotalHours(langague: string){
    let total = 0;
    const json = Certificates(langague);
    json.certificates.forEach(cert => {
        total += cert.hours;
    });
    return total;
    
}
