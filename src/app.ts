import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import { buildProviderModule } from 'inversify-binding-decorators';
import { container } from './inversify.config';

// Importa tus controladores aquí
import './controllers/UserController';
import './controllers/PostController';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Carga los controladores con decoradores @controller
container.load(buildProviderModule());

const inversifyServer = new InversifyExpressServer(container, null, { rootPath: '/api' }, app);
const server = inversifyServer.build();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
