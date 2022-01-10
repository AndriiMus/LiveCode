export function createLogger() {
  const records = [];

  function warn(text) {
    records.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(text) {
    records.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(text) {
    records.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(type) {
    res = [];
    if (type) {
      res = records.filter(el => el.type === type);
    } else {
      res = records;
    }
    return res.sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
