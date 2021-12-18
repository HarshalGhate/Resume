var fs=require('fs');

fs.writeFile('abc.txt','I am fine',function(err){
    if(err) throw err;
    console.log('saved');
});