import { readdir } from 'fs/promises';
import { Sequelize, DataTypes } from 'sequelize';

import { ENV } from '../configuration';
import { logger } from '../utilities';
import config from './config';

const { database, password, username, host, port, logging, dialect } = config[ENV];

class Database {
  Instance: Sequelize;

  constructor() {
    this.Instance = null;
  }

  async connect() {
    if (!this.Instance) {
      this.Instance = new Sequelize(database, username, password, {
        logging,
        dialect,
        port,
        host,
      });
    }

    const modelPath = `${process.cwd()}/src/database/models`;
    const models = await readdir(modelPath);

    if (!models.length) {
      return logger('[DATABASE]: Not models exist.');
    }

    const promises = models.map(
      (model) => new Promise<void>((resolve) => {
        import(`${modelPath}/${model}`).then(({ connectModel, tableName }) => {
          const entity = connectModel(this.Instance, DataTypes);
          return entity.sync().then((syncResult) => {
            this[tableName] = syncResult;
            return resolve();
          });
        });
      }),
    );
    await Promise.all(promises);

    return logger('database connected');
  }
}

export default new Database();
