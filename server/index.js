const jsonServer = require('json-server');
const auth = require('json-server-auth');



const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; 
const rules = auth.rewriter({
    "/users*": "/664/users$1",
    "/products*": "/664/products$1",
    "/recipes*": "/664/recipes$1"
  })
server.db = router.db;
server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);