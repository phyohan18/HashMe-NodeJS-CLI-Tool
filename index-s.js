import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import fs from 'fs';
import prettyHrtime from 'pretty-hrtime';
import logSymbols from 'log-symbols';

//Custom Functions 
import { questions,b1,algorithm } from './functions/main.js';

  clear();
  const log = console.log; 
  log(
    chalk.yellow(
      figlet.textSync('Hash Me', { horizontalLayout: 'full' })
    )
  );

  (async () => {
    try {
      const input = await inquirer.prompt(questions);
      const file_data = fs.readFileSync(input.file_path).toString().split('\n');
      
   
      log('\n  Found '+chalk.greenBright(file_data.length)+' lines of text\n');
      
      const answer = await inquirer.prompt([{
        type: 'confirm',
        name: 'confirm',
        choices: [ 'Yes', 'No' ],
        message: `Are you sure want to hash all the text using ${chalk.yellow(input.algorithm)} hashing algorithm ?`
      }]);

      if ( answer.confirm == true ) {
        
        log();
        const filepath_array = input.file_path.split("/"); //Split File Path into an Array
        
        const Hash = () =>{
          const holder =[];
          // initialize the progress bar 
          b1.start(file_data.length,0);
          let time_start = process.hrtime();

          // do stuff             
          file_data.map((key,index)=>{ 
            const value = algorithm(input.algorithm , key);
            holder.push(index + 1 === file_data.length ? value :`${value}\n`)
            b1.increment(1);
          });

          let time_end = process.hrtime(time_start);
          // stop the bar
          b1.stop();
           
          log('\n'+chalk.black.bgGreen(' DONE ')+' '+chalk.dim(input.file_path));
          log('  '+logSymbols.success+' Finished without crashing');
          log('  '+logSymbols.success+' Saved correctly '+chalk.yellow(`serialHashed_${filepath_array[filepath_array.length-1]}`));
          log('\n'+chalk.whiteBright('Times: ')+chalk.yellow(prettyHrtime(time_end))+'\n');
          
          return holder.join("");
        };
        
        fs.appendFileSync(`serialHashed_${filepath_array[filepath_array.length-1]}`, Hash());

      } else {
        console.log(chalk.blueBright('\n>')+chalk.blackBright(' Abort.'));
      }
    } 
    catch (err) {
      console.log(err);
    }
  })();

