import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import fs from 'fs';
import prettyHrtime from 'pretty-hrtime';
import logSymbols from 'log-symbols';

//Parallel Processing
import cluster from 'cluster';
import os from 'os';

//Custom Functions 
import { questions,b1,algorithm } from './functions/main.js';

const numCPUs = os.cpus().length;
const log = console.log;

if ( cluster.isPrimary ) {
  clear();
  log(
      chalk.yellow(
        figlet.textSync('Hash Me', { horizontalLayout: 'full' })
      )
  );

  (async () => {
      const input = await inquirer.prompt(questions);
      const file_data = fs.readFileSync(input.file_path).toString().split('\n');

      log("\n"+"  Found "+chalk.greenBright(file_data.length)+ " lines of text\n");

      const answer = await inquirer.prompt([{
        type: 'confirm',
        name: 'confirm',
        choices: [ 'Yes', 'No' ],
        message: `Are you sure want to hash all the text using ${chalk.yellow(input.algorithm)} hashing algorithm ?`
      }]);

      if ( answer.confirm == true ) {
        for ( let i = 0; i < numCPUs ; i++){
          cluster.fork({
            file_path: input.file_path,
            algorithm: input.algorithm
          });  
        };
        log();
      }
      else {
        log(chalk.blueBright("\n>")+" "+chalk.blackBright("Abort."));
      }
  })();
} 
else {
    try {
        const file_path = process.env.file_path;
        const filepath_array = file_path.split("/"); //Split File Path into an Array

        
          
        const file_data = fs.readFileSync(file_path).toString().split('\n'); 
       
        //Divide Work Load
        const clusterFiles = file_data.filter((_, index)=> index % numCPUs === cluster.worker.id - 1);

        const Hash = () =>{
          const holder =[];
          if ( cluster.worker.id === 1 ) 
          {
            // initialize the progress bar 
            b1.start(file_data.length,0);
            var time_start = process.hrtime();
          }  
          
          // do stuff  
          clusterFiles.map(( key )=> {
            holder.push(`${algorithm(process.env.algorithm , key)}\n`);
            cluster.worker.id === 1 ? b1.increment(4) : null;
          }); 

          if ( cluster.worker.id === 1 ) 
          {
            const end = process.hrtime(time_start);
            // stop the bar
            b1.stop();

            log(`\n${chalk.black.bgGreen(" DONE ")+ chalk.dim(file_path)}`);
            log("  "+logSymbols.success, 'Finished without crashing');
            log("  "+logSymbols.success, `Saved correctly ${chalk.yellow(`parallelHashed_${filepath_array[filepath_array.length-1]}\n`)}`);
            log(`${chalk.whiteBright("Times:")} ${chalk.yellow(prettyHrtime(end))}`);
          }
         
          return holder.join("");
        };   
               
        fs.appendFileSync(`parallelHashed_${filepath_array[filepath_array.length-1]}`, Hash());
        process.exit(0);
        
    } 
    catch (err) {
      console.log(err);
      process.exit(0);
    }
};
  
  
 



