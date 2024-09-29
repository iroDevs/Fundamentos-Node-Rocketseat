
const routes = [
    {
        method: 'GET',
        path: '/task',
        handler: (req, res, database) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'voce acessou a rota de task!' }));
            return res.end();
        }
    },
    {
        method: 'POST',
        path: '/task',
        handler: (req, res, database) => {
           console.log(req.body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'voce acessou a rota de task!' }));
            return res.end();

        }
    },
]

export default routes;