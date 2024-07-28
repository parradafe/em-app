'use server'

const sqlite3 = require('sqlite3').verbose();

export const saveProduct = ({ name, unit }) => {
    const db = new sqlite3.Database(process.env.DB_PATH);

    db.run(`INSERT INTO product (name, unit) VALUES (?, ?)`, [name, unit]);

    db.close();

    console.log('product stored in db')
};

export const readProducts = async () => {
    const db = new sqlite3.Database(process.env.DB_PATH);

    const data = await new Promise((resolve) => {
        db.all(`SELECT * FROM product`, (err, rows) => {
            if (err) {
                console.error('Error al realizar la consulta:', err.message);
                return [];
            }
            resolve(rows);
        });
    });

    db.close();
    return data;
}; 