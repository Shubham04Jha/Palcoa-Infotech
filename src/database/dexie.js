import Dexie from 'dexie';

export const db = new Dexie('myDatabase');

db.version(1).stores({
    products: '++id, productName, price, description, category, stock, public_key, failed'
});