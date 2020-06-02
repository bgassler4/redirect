//this is the code for the lambda function
console.log("Loading function");

exports.handler = async (event, context) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  //TODO: Persist Data
  const redirectUrl = `https://usefyi.com/blog/`;

  return redirectUrl;
};
