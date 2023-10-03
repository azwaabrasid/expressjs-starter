import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import api from './api';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

import type { MessageResponse } from '@/types';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (_req, res) => {
  res.json({
    message: '✨ ExpressJS Starter ✨',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
