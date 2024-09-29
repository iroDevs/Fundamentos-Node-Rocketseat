import Buffer from 'node:buffer';

export default async function json(req, res){
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    const data = Buffer.concat(buffers).toString();

    try {
        req.body = JSON.parse(data);
    } catch (error) {
        req.body = null;
    }
}