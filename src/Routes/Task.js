import { buildPathRoute } from "./helpers/BuildPathRoute.js";
import { randomUUID } from "node:crypto";
const routes = [
    {
        method: 'GET',
        path: buildPathRoute('/tasks'),
        handler: (req, res, database) => {
            const tasks = database.getDataByTableName('tasks');

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(tasks));
            return res.end();
        }
    },
    {
        method: 'GET',
        path: buildPathRoute('/tasks/:id'),
        handler: (req, res, database) => {
            const { id } = req.params;
            const task = database.getDataById('tasks', id);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(task));

            return res.end();
        }
    },
    {
        method: 'DELETE',
        path: buildPathRoute('/tasks/:id'),
        handler: (req, res, database) => {
            const { id } = req.params;


            database.deleteDataById('tasks', id);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'Tarefa deletada com sucesso!' }));

            return res.end();
        }
    },
    {
        method: 'PATCH',
        path: buildPathRoute('/tasks/:id/completed'),
        handler: (req, res, database) => {
            const { id } = req.params;
            console.log(id);

            database.markTaskAsCompleted('tasks', id);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: 'Tarefa marcada como concluída!' }));

            return res.end();
        }
    },
    {
        method: 'POST',
        path: buildPathRoute('/tasks'),
        handler: (req, res, database) => {
           console.log(req.body);
            const { title, description } = req.body;
            const newTask = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                updated_at: null,
            };
            database.addDataByTableName('tasks', newTask);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Task criada com sucesso!' }));

        }
    },
    {
        method: 'POST',
        path: buildPathRoute('/tasks/import'),
        handler: (req, res, database) => {

            const arrayNewTasks = req.body;



            arrayNewTasks.forEach(task => {
                console.log(task);
                const newTask = {
                    id: randomUUID(),
                    title: task['title'],
                    description: task['description'],
                    completed_at: null,
                    updated_at: null,
                };
                database.addDataByTableName('tasks', newTask);
            });

            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Importação realizada com sucesso!' }));

        }
    },
    {
        method: 'PUT',
        path: buildPathRoute('/tasks/:id'),
        handler: (req, res, database) => {
            const { title, description } = req.body;
            const { id } = req.params;
            const task = database.getDataById('tasks', id);
            const taskUpdated = {
                ...task,
                title,
                description,
                updated_at: new Date().toISOString(),
            };
            database.updateDataById('tasks', id, taskUpdated);

            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Task Editada com sucesso!' }));

        }
    },
]

export default routes;