const { renderTemplate } = require('./template-provider');
const mailer = require('./mailer');

/**
 * @author Vivek Thumar <vivekthumar1202@gmail.com>
 * @description prepare html content from model and send email via SMTP mailer.
 * @param {string} to
 * @param {string} subject
 * @param {string} templateName
 * @param {object} model
 */
const sendEmail = async (to, subject, templateName, model) => {
  const htmlContent = await renderTemplate(templateName, model);
  await mailer.send(
    to, subject, htmlContent, model.attachments || [],
  ).catch((error) => error);
};

module.exports = {
  sendEmail,
};
