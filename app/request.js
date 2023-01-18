async function getResponse(requestUrl, controller, method = 'GET') {
  let response = await fetch(requestUrl, {
    method: method,
  });

  if (response.status == 401) {
    controller.transitionToRoute('login');
  }
  return response;
}

export default { getResponse };
