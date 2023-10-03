import express from 'express';

import emojis from './emojis';

import type { MessageResponse } from '@/types';

const router = express.Router();

router.get<{}, MessageResponse>('/', (_req, res) => {
  res.json({
    message: 'Sample API route success!',
  });
});

router.use('/emojis', emojis);

export default router;
