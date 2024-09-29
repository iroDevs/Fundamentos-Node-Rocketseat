export default async function csv(req, res) {
    const buffers = [];


    for await (const chunk of req) {
        buffers.push(chunk);
    }


    const formData = Buffer.concat(buffers).toString();

    // Filtrar a parte que contém o conteúdo real do arquivo CSV
    const boundary = formData.split('\r\n')[0];
    const csvData = formData
        .split(boundary)
        .find(part => part.includes('Content-Type: text/csv'))
        .split('\r\n\r\n')[1]
        .split('\r\n--')[0];

    // Quebrar o CSV por linhas
    const lines = csvData.trim().split('\n');

    // Pegar o cabeçalho (primeira linha) e quebrar por vírgulas para obter as colunas
    const headers = lines[0].split(',');

    // Iterar sobre o restante das linhas para criar os objetos
    const tasks = lines.slice(1).map(line => {
        const values = line.split(',');

        // Criar um objeto com base nos cabeçalhos e valores
        const task = {};
        headers.forEach((header, index) => {
            task[header.trim()] = values[index].trim();
        });

        // Adicionar os campos extras
        task.completed_at = null;
        task.updated_at = null;

        return task;
    });


    req.body = tasks;
}
