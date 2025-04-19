import * as dotenv from 'dotenv';
import KoaAdapter from './src/application/koa';
import Domain from './src/domain';
import SQLiteAdapter from './src/infrastructure/sqlite';

dotenv.config({
    path: process.cwd() + '/.env',
});

function main() {
    const sqliteAdapter = new SQLiteAdapter();
    const domain = new Domain(sqliteAdapter);
    const koaAdapter = new KoaAdapter(domain);
    // Listening...
    const port = process.env.API_PORT || 3000;
    koaAdapter.listen(port, () => {
        console.debug('API started on port: ' + port);
    });
}

main();