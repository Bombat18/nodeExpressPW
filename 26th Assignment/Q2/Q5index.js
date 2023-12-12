const fs = require('fs');
const path = 'Q2\\nodejs_architecture.txt';
if(fs.existsSync(path)){
    fs.unlink(path,(err)=>{
        if(err){
            console.error('Error deleting file',err);
        }
        else{
            console.log('file delete sucessfully');
        }
    });

}
else{
    console.log('File Does not exist');
}