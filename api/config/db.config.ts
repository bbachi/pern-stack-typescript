import { Sequelize } from 'sequelize-typescript'
import { Tasks } from '../model/task.model';
import * as pg from 'pg';

export const connect = () => {

    /* const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect: any = process.env.DIALECT;

    console.log('dialect  ', dialect)

    const operatorsAliases: any = false;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });*/

    console.log('process.env.PG_CONNECTION_STR ', process.env.PG_CONNECTION_STR)

    const sequelize = new Sequelize(process.env.PG_CONNECTION_STR, {
        dialectModule: pg
    });

    sequelize.addModels([Tasks]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}