import pino from 'pino';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';

const logsDir = join(process.cwd(), 'logs');
mkdirSync(logsDir, { recursive: true });

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
}, pino.transport({
  targets: [
    { target: 'pino-pretty', options: { translateTime: 'SYS:standard' } },
    { target: 'pino/file', options: { destination: join(logsDir, 'app.log') } },
  ],
}));

export default logger;
