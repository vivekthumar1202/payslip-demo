/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description 
* Get user from data base and send response.
*/

const get = async (req) => {
  try {
    return req.sendResponse(200, user);
  } catch (err) {
    return req.sendResponse(500, err);
  }
};

module.exports = get;
