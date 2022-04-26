import { PORT } from './configuration';

import { logger } from './utilities';
import db from './database';
import server from './server';

(async function launcher() {
  try {
    await db.connect();
    await db.Instance.authenticate();

    return server.listen(PORT, () => logger(`[INFO]: Server listning on port ${PORT}`));
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
})();
