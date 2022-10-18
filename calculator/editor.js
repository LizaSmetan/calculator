const replace = require('replace-in-file');

const newData = []
let newJson = ''
const options = {
    files: [
        'public/locales/en/common.json'
    ],
    from: '[paste]',
    to: () => {
        const data = newData.reduce((acc, label) => {
            const exempt = Math.floor(Math.random() * 10) % 2 === 0
            const value = Math.floor(Math.random() * 100000)
            let generatePrice = () => {
                const value = Number((Math.random().toString()
                    .slice(0, Math.random() * 10) * 1000)
                    .toFixed(2))
                if (value > 0) return value;
                return generatePrice()
            }
            const price = generatePrice()
            const data = {
                value: value.toString(), price, exempt
            }
            newJson = newJson + JSON.stringify(data) + ','

            return {
                ...acc,
                [value]: label
            }
        }, {});

        const dataJSon = JSON.stringify(data)
            .replace('{', '')
            .replace('}', '');

        return dataJSon
    }
};

replace(options)
    .then(() => {
        replace({
            files: [
                'src/data.json'
            ],
            from: '[paste]',
            to: () => {
                return newJson;
            }
        })
    })
    .catch(error => {
        console.error('Error:', error);
    });