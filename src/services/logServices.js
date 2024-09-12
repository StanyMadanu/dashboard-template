function init() {}
function log(error) {
  console.error("Error:", error);
}
const logService = {
  init,
  log,
};

export default logService;
