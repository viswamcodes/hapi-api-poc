import serverInstance from './server';
import 'colors';
import { get } from 'node-emoji';

//initialize app
serverInstance.init().then(async () => {
    //start the server
    await serverInstance.start().then(() => {
        console.log(get('rocket'), `Server started at ${serverInstance.app?.info.uri}`.green, get('rocket'));
    })
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});