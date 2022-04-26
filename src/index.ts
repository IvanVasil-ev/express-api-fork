(async function setup() {
  const { env: { ENV = '' } = {} } = process;
  if (ENV && ENV === 'heroku') {
    return import('./launcher');
  }

  return import('dotenv')
    .then(({ default: dotenv }): Promise<any> => {
      dotenv.config();
      return import('./launcher');
    })
    .catch((error: Error): Error => {
      throw new Error(error.message);
    });
})();
