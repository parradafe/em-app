'use server'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../../em.db');

db.serialize(() => {

    /** PRODUCT */

    db.run(`CREATE TABLE IF NOT EXISTS product (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            unit TEXT NOT NULL
          )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla:', err.message);
        } else {
            console.log('Tabla creada exitosamente.');
        }
    });

    /** CONFIG */

    db.run(`CREATE TABLE IF NOT EXISTS machine_configuration (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            knob_one INTEGER NOT NULL,
            knob_two INTEGER NOT NULL,
            knob_three INTEGER NOT NULL,
            knob_four INTEGER NOT NULL,
            notes TEXT
          )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla machine_configuration:', err.message);
        } else {
            console.log('Tabla creada exitosamente.');
        }
    });

    /** MIX */

    db.run(`CREATE TABLE IF NOT EXISTS mix (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            FOREIGN KEY(product_id) REFERENCES product(id)
          )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla mix:', err.message);
        } else {
            console.log('Tabla creada exitosamente.');
        }
    });

    /** ROOM TEMPERATURE */

    db.run(`CREATE TABLE IF NOT EXISTS room_temperature (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mconfig_id TEXT NOT NULL,
        value INTEGER NOT NULL,
        hour TEXT,
        FOREIGN KEY(mconfig_id) REFERENCES machine_configuration(id)
      )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla room_temperature:', err.message);
        } else {
            console.log('Tabla creada exitosamente.');
        }
    });

    /** SESSION */

    db.run(`CREATE TABLE IF NOT EXISTS session (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mix_id TEXT NOT NULL,
        mconfig_id TEXT NOT NULL,
        date DATE NOT NULL,
        FOREIGN KEY(mix_id) REFERENCES mix(id),
        FOREIGN KEY(mconfig_id) REFERENCES machine_configuration(id)
      )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla session:', err.message);
        } else {
            console.log('Tabla creada exitosamente.');
        }
    });
});

db.close();