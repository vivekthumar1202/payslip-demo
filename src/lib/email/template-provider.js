const EmailTemplate = require('email-templates');
const path = require('path');

/**
 * @author Vivek Thumar <vivekthumar1202@gmail.com>
 * @description prepare html content for email using handlebars. 
 * @param {String} templateName
 * @param {Object} model
 */
async function renderTemplate(templateName, model) {
  const newsletter = new EmailTemplate({
    views: {
      root: path.join(__dirname, 'templates'),
      options: {
        extension: 'handlebars',
      },
    },
  });
  const templateString = await newsletter.render(templateName, model);
  return templateString;
}

module.exports = {
  renderTemplate,
};
