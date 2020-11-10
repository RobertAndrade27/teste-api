const db = require ('../db');

module.exports = {
    getAll: () =>{
        return new Promise ((resolve, reject) =>{
            
            db.query('SELECT * FROM notes', (error, results) =>{
                if(error) { reject (error); return;}
                resolve(results);
            });

        });
    },
    findById: (id) => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM notes WHERE id = ?', [id], (error, results)=>{
                if(error) { reject (error); return;}
                if(results.lenght > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }

            });
        });
    },
    add: (title, body) => {
        return new Promise ((resolve, reject)=>{

            db.query('INSERT INTO notes (title, body) VALUES (?, ?)',
            [title, body],
            (error, results)=> {
                if(error) { reject(error); return; }
                resolve(results.insertId);
            }
            );
        });
    }
};