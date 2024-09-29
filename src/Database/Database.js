import fs from 'fs';


export default class Database {

    constructor(){
        //cria o arquivo database.json se ele não existir
        if (!fs.existsSync('database.json')) {
            this.writeDataBase({});
        }
    }

    writeDataBase(data){
        fs.writeFileSync('database.json', JSON.stringify(data));
    }

    //método para ler o arquivo database.json
    getDataByTableName(table) {
        const data = fs.readFileSync('database.json');
        const dataJson = JSON.parse(data);
        return dataJson[table];
    }

    //método para escrever no arquivo database.json
    addDataByTableName(table,data) {
        const dataJson = JSON.parse(fs.readFileSync('database.json'));
        dataJson[table].push(data);
        arrayJson.push(data);
        this.writeDataBase(dataJson);
    }

    //método para atualizar um registro no arquivo database.json
    updateDataById(table,id,data) {
        const dataJson = JSON.parse(fs.readFileSync('database.json'));
        const index = dataJson[table].findIndex(item => item.id === id);
        dataJson[table][index] = data;
        this.writeDataBase(dataJson);
    }

    //método para deletar um registro no arquivo database.json
    deleteDataById(table,id) {
        const dataJson = JSON.parse(fs.readFileSync('database.json'));
        const index = dataJson[table].findIndex(item => item.id === id);
        dataJson[table].splice(index, 1);
        this.writeDataBase(dataJson);
    }
}




  /*
    Json file structure:
    {
        "table1": [
            {
                "id": 1,
                "name": "name1",
                "description": "description1"
            },
            {
                "id": 2,
                "name": "name2",
                "description": "description2"
            }
        ],
        "table2": [
            {
                "id": 1,
                "name": "name1",
                "description": "description1"
            },
            {
                "id": 2,
                "name": "name2",
                "description": "description2"
            }
        ]
    }
    */