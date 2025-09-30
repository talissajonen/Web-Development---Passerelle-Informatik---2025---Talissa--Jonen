const http = require('http'); 
const fs = require('node:fs');
const path = require('path');

const myHost = 'localhost';
const myPort = 3000;

// Função para enviar arquivos
function serveFile(filePath, contentType, rep) {
    try {
        console.log(filePath);
        const content = fs.readFileSync(filePath);
        rep.setHeader('Content-Type', contentType);
        rep.write(content);
        rep.end();
    } catch (e) {
        rep.statusCode = 404;
        rep.write("<h1>404 - Page not found! </h1>");
        rep.end();
    }
}

const server = http.createServer((req, rep) => {
    if (req.url === '/' || req.url === '/index') {
        serveFile(path.join(__dirname, 'templates', 'index.html'), 'text/html', rep);

    } else if (req.url === '/page2.html') {
        serveFile(path.join(__dirname, 'templates', 'page2.html'), 'text/html', rep);

    } else if (req.url === '/adicionar' && req.method === 'POST') {
        let body = '';

        // Recebe os dados do POST
        req.on('data', chunk => {
            body += chunk.toString('utf8'); // força UTF-8
        });

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const nome = params.get('nome') ? decodeURIComponent(params.get('nome')) : '';
            const mensagem = params.get('mensagem') ? decodeURIComponent(params.get('mensagem')) : '';

            console.log(`Nome: ${nome}, Mensagem: ${mensagem}`);

            // Le o template
            const templatePath = path.join(__dirname, 'templates', 'resposta.html');
            let html = fs.readFileSync(templatePath, 'utf8');

            // Substitui os placeholders {{NOME}} e {{MENSAGEM}}
            html = html.replace('{{NOME}}', nome).replace('{{MENSAGEM}}', mensagem);

            // Retorna a página final
            rep.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            rep.end(html);
        });

    } else if (req.url.match(/\.(jpg|jpeg|png|gif)$/)) {
        const imgPath = path.join(__dirname, req.url);
        serveFile(imgPath, 'image/jpeg', rep);

    } else if (req.url.endsWith('.css')) {
        const cssPath = path.join(__dirname, req.url);
        serveFile(cssPath, 'text/css', rep);

    } else if (req.url.endsWith('.js')) {
        const jsPath = path.join(__dirname, req.url);
        serveFile(jsPath, 'application/javascript', rep);

    } else {
        rep.statusCode = 404;
        rep.write("<h1>404 - Página não encontrada</h1>");
        rep.end();
    }
});

server.listen(myPort, myHost, () => {
    console.log(`Servidor rodando em http://${myHost}:${myPort}`);
});