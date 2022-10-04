const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

const info = 'Este es un bot para whatsapp yo estoy ahorita ocupado o algo a si que no moleste gracias pdt: si respondo algo consonante no sere yo sera el bot Gracias y tambien cuidese y vallase por la sombrita :3';

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('conexion exitosa');
});

client.on('message', message => {
    console.log(message.body)
	if(message.body === 'Hola mundo') {
		client.sendMessage(message.from, 'hi iam bot, xd ando con goku,');
	} else if( message.body === 'hola'||'holas'||'ola'||'Hola'||'Holas'||'Olas'){
        client.sendMessage(message.from, 'hola como estas soy bot creado para el cumplimiento de mi amo todavia estoy en prueba a si que ten paciencia gracias');
    }
    //  if( message.body === 'bien'||'Bien'){
    //     client.sendMessage(message.from,'oh me alegro mucho');
    // }
    //  if(client.sendMessage(message.body === 'punto'||'.')){
    //     client.sendMessage(message.from, info)
    // }
});


client.initialize();
 