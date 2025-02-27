const path = require('path');

console.log("Directory path : ",path.dirname(__filename));

console.log('File name : ',path.basename(__filename));

console.log('File extension : ',path.extname(__filename));

const joinPath = path.join('/user','documents','node','prijects')
console.log('Joined Path : ',joinPath)

const resolvePath = path.resolve('user','documents','node','projects');
console.log('Resolve Path : ',resolvePath);

const normalizePath =  path.normalize('/user/documents/../node/projects')
console.log('normalize path : ',normalizePath);
