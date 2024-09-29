import http from 'node:http';
import  taskRoutes  from './Routes/Task.js';

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(url, method);

    const route = taskRoutes.find(route => {
        const { path, method: routeMethod } = route;

        return path === url && routeMethod === method;
    });

    if (route) {
        return route.handler(req, res);
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Rota não encontrada!' }));
    return res.end();



});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
