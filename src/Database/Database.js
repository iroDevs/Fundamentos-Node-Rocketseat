import fs from 'fs';


export default class Database {

    constructor(){


        //cria o arquivo database.json se ele não existir
        if (!fs.existsSync('database.json')) {
            this.writeDataBase({tasks: []});
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

    //método para buscar um registro no arquivo database.json
    getDataById(table,id) {
        const data = fs.readFileSync('database.json');
        const dataJson = JSON.parse(data);
        return dataJson[table].find(item => item.id === id);
    }

    //método para escrever no arquivo database.json
    addDataByTableName(table,data) {
        const dataJson = JSON.parse(fs.readFileSync('database.json'));
        dataJson[table].push(data);
        this.writeDataBase(dataJson);
    }

    //método para marcar uma tarefa como concluída no arquivo database.json
    markTaskAsCompleted(table,id) {
        const dataJson = JSON.parse(fs.readFileSync('database.json'));
        const index = dataJson[table].findIndex(item => item.id === id);
        console.log(dataJson[table][index]);

        dataJson[table][index].completed_at = new Date().toISOString();
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
