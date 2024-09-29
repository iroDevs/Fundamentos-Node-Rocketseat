import http from 'node:http';
import  taskRoutes  from './Routes/Task.js';
import Database from './Database/Database.js';
import json from './middlewares/json.js';
import csv from './middlewares/csv.js';

const database = new Database();

const server = http.createServer(async (req, res) => {
    const { url, method } = req;

    try {

        if (req.headers['content-type'] === 'application/json') {
            await json(req, res);
        } else if (req.headers['content-type'] === 'multipart/form-data') {
            await csv(req, res);
        }

    const route = taskRoutes.find(route => {
        const { path, method: routeMethod } = route;

        return path.test(url) && routeMethod === method;
    });

    if (route) {
        const routeParams = req.url.match(route.path);

        req.params = { ...routeParams.groups };

        console.log(req.params);


        return route.handler(req, res, database);
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Rota não encontrada!' }));
    return res.end();

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Erro interno no servidor!' }));
        console.log(error);

        return res.end();
    }




});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
