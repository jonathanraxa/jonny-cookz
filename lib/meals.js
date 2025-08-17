import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // uncomment if we want to test error state
    // throw new Error('Loading meals failed')

    // all - used when fetching data
    // run - used when inserting data
    // get - used for a single row
    return db.prepare('SELECT * FROM meals').all();

}
