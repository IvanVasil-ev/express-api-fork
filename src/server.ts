import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

export default server;
