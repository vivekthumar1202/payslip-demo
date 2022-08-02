/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description 
* Calculate salary, Generate payslip, then send email to user.
* it's a seperate Execution so it will not affects on main application process/thread.  
*/

const payslip = async (req) => {
  try {
    // Step 1: Check leave count and calculate salary based on the working day of the user and also calculate additional amount if applied.

    // Step 2: Generate pdf payslip using pdf libs like pdfjs/pdfmake etc.

    // Step 3: Generate email content with payslip attachment.

    // Step 4: Send email to the user. We can use smtp or any third party email service like sendgrid/mailchimp.
    
  } catch (err) {
    throw err;
  }
};

module.exports = payslip;
