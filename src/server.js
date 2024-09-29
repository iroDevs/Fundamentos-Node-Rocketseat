import http from 'node:http';
import  taskRoutes  from './Routes/Task.js';
import Database from './Database/Database.js';
import json from './middlewares/json.js';
const database = new Database();

const server = http.createServer(async (req, res) => {
    const { url, method } = req;


    await json(req, res);

    const route = taskRoutes.find(route => {
        const { path, method: routeMethod } = route;

        return path === url && routeMethod === method;
    });

    if (route) {
        return route.handler(req, res, database);
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Rota não encontrada!' }));
    return res.end();



});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
