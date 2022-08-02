const Agenda = require('agenda');
const agenda = new Agenda({ db: { address: process.env.MONGO_URL } });


/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description 
* We have 1000+ Users so do not fetch all Users at one time. 
* Fetch Users data into Chunk based on counts/some groups like (account/developers)/teams.
* Otherwise the system is too busy to operate all users at one time.
* Also we need to create a micro service or server less function so during this execution the main thread/process is not blocked.
*/
agenda.define('Payslip Cron', async () => {
  // Step 1 : Fetch users in to chunks

  // Step 2: Send data to external service(serverless function/microservice) using transporter like TCP/HTTP, queque mechanism like rabbitMQ/activeMQ
  
});

/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description 
* Initialize payslip send cron for every month
* We have many options like node-cron, Agenda or system cron job.
*/
const payslip = async () => {
  await agenda.start();
  await agenda.every(process.env.PAYSLIP_CRON, 'Payslip Cron');
};

module.exports = payslip;
