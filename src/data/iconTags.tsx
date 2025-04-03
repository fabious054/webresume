
export default function Icons(tagName:string) {
    const data = {
        FLASK : 'https://i.ibb.co/3Y06rdD/flask.png',
        PYTHON : 'https://i.ibb.co/3cD6R47/python.png',
        C : 'https://i.ibb.co/hR5kkBN/cprogm.png',
        GIT : 'https://i.ibb.co/7vw0HWt/git.png',
        LINUX : 'https://i.ibb.co/z2WYCP4/linux.png',
        JAVASCRIPT : 'https://i.ibb.co/Qfp9qbT/javascript.png',
        REACT : 'https://i.ibb.co/cNTxDg6/react.png',
        REACT_NATIVE : 'https://i.ibb.co/cNTxDg6/react.png',
        TYPESCRIPT : 'https://i.ibb.co/jhRqChR/tsx.png',
        MYSQL : 'https://i.ibb.co/Gnn28Kv/mysql.png',
        SQLALCHEMY : 'https://i.ibb.co/9yR938k/SQLALCHEMY.png',
        Cpp : 'https://i.ibb.co/sPyT7yt/cplus.png',
        PYTEST : 'https://i.ibb.co/0BGmkPr/pytest.png',
        ESLINT : 'https://i.ibb.co/PmSMc71/ESLINT.png',
        REACT_HOOKS : 'https://i.ibb.co/cTnj4Ks/hooks.png',
        ASYNCSTORAGE : 'https://i.ibb.co/27WWp4f/ASYNCSTORAGE.png',
        SQLITE : 'https://i.ibb.co/K76sWqn/SQLITE.png',
        HTTP : 'https://i.ibb.co/FhJ6vzV/HTTP.png',
        CSS : 'https://i.ibb.co/QHrpYJD/css.png',
        SCSS : 'https://i.ibb.co/SJ2cKL5/scss.png',
        LOGICA : 'https://i.ibb.co/Cmqs008/LOGICA.png',
        BOOTSTRAP : 'https://i.ibb.co/Tvgy6Rf/BOOTSTRAP.png',
        HTML : 'https://i.ibb.co/8Yw4y8n/html.png',
        TDD : 'https://i.ibb.co/NCtHDCZ/tdd.png',
        STYLED_COMPONENTS : 'https://i.ibb.co/QHrpYJD/css.png',
        REACT_ROUTER : 'https://i.ibb.co/RhjfZNx/ROUTER.jpg',
        GITHUB : 'https://i.ibb.co/1M8tssc/GITHUB.png',
        API : 'https://i.ibb.co/3Twt1j6/API.png',
        NODE : 'https://i.ibb.co/5LNnyZ8/node.png',
        EXPRESS : 'https://i.ibb.co/JcFBpp7/express.png',
        MONGODB : 'https://i.ibb.co/M2jr79K/mongo.png',
        DEEP_LEARNING : 'https://i.ibb.co/qYNb0rF/DEEP-LEARNING.png',
        PYTORCH : 'https://i.ibb.co/Prm4CrS/pytorch.png',
        AWS : 'https://i.ibb.co/QM5NQ3h/amazon-web-services.png',
        DEVOPS: 'https://i.ibb.co/ncSCGYg/logo-devops.png',
        ANGULAR: 'https://i.ibb.co/1sHrBGx/angular.png',
        SERVERLESS: 'https://i.ibb.co/rGLJ5SjF/60d841cfd24a7264a80c75fc-Serverless-logo.png',
    };

    
    tagName = tagName.replace(' ','');

    if (tagName === 'REACT-NATIVE') {
        tagName = 'REACT_NATIVE';
    }
    if (tagName === 'REACT-HOOKS') {
        tagName = 'REACT_HOOKS';
    }
    if (tagName === 'REACT-ROUTER') {
        tagName = 'REACT_ROUTER';
    }
    if (tagName === 'STYLED-COMPONENTS') {
        tagName = 'STYLED_COMPONENTS';
    }
    if (tagName === 'STYLED-COMPONENTS') {
        tagName = 'STYLED_COMPONENTS';
    }
    if (tagName === 'DEEP-LEARNING') {
        tagName = 'DEEP_LEARNING';
    }



    if(tagName === 'C++') {
        tagName = 'Cpp';
    }

    if (tagName in data) {
        return data[tagName as keyof typeof data];
    }


    return data;
};