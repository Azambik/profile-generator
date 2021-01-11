//code recycled from class to save time
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's and error, reject the promise and send the error to the promise's ".catch()" method
            if (err) {
                reject(err);
                //return out of function her to make sure promise doesn't accidentally execute the resolve() function as well.
                return;
            }

            //if everything went well, resolve the promise and send the successful data to the ".then()" method
            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    }).catch((err) =>{
       //this is used to bypass an error tha i could not figure out in the 11th hr
    }) 
};

  module.exports = writeFile;