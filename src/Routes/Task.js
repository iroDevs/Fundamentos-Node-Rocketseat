
const routes = [
    {
        method: 'GET',
        path: '/task',
        handler: (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'voce acessou a rota de task!' }));
            return res.end();
        }
    }
]

export default routes;