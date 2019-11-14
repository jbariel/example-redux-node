'use strict';

const createStore = require('redux').createStore;

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })


const o = doLog => console.log(doLog);
o('Starting http server...');
const __server = http.createServer(function (request, response) {
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            response.writeHead(500, {
                'Content-Length': err.length,
                'Content-Type': 'text/plain'
            });
            response.end(err, 'utf-8');
        } else {
            response.writeHead(200, {
                'Content-Length': data.length,
                'Content-Type': 'text/html'
            });
            response.end(data, 'utf-8');
        }
    });
}).on('close', function () {
    o('Server closed...');
}).on('clientError', function (exception, socket) {
    o("Client error : '" + exception + "'");
}).listen(8888);