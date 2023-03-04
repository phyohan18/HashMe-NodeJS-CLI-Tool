import path from 'path';
import fs from 'fs';
import cliProgress from 'cli-progress';
import chalk from 'chalk';
import CryptoJS from 'crypto-js';


const questions =  [
    {
      name: 'file_path',
      type: 'input',
      message: 'Enter your (.txt) file path :',
      validate: function( file_path ) {
        try {
            if ( path.extname( file_path ) === '.txt' ) {
                if ( fs.existsSync( file_path ) ) {
                    return true;
                } else {
                    return 'This file does not exist';
                }
            } else {
                return 'The file must be a .txt extension';
            }
        } catch (err) {
            console.log(err);
        }
      }
    },
    {
      type: 'list',
      name: 'algorithm',
      message: 'Select a Hashing algorithm:',
      choices: ['SHA-1' , 'SHA-2' , 'SHA-3','MD5'],
      default: 'SHA-2'
    }
];

//CLI Progress Bar
const b1 = new cliProgress.SingleBar({
    format: 'CLI Progress |' + chalk.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks ',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

const algorithm = ( option,key ) => {
    if( option === 'SHA-1') {
        return CryptoJS.SHA1( key );
    } 
    else if ( option === 'SHA-2') {
        return CryptoJS.SHA512( key );
    } 
    else if ( option === 'SHA-3') {
        return CryptoJS.SHA3( key );
    } 
    else {
        return CryptoJS.MD5( key) ;
    } 
};

export { questions,b1,algorithm };