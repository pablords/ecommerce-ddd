declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        APP_PORT: number;
        APP_HOST: string;
        DB_HOST: string;
        DB_USER: string;
        DB_DATABASE: string;
        DB_PASSWORD: string;
        DB_PORT: number;
        DB_ENGINE:
          | 'mariadb'
          | 'mongodb'
          | 'mssql'
          | 'oracle'
          | 'postgres'
          | 'sqlite';
      }
    }
  }
  
  export {};