function pipeDelimiter(list, cat) {
  return list === '' ? cat : list + '|' + cat;
}

module.exports = pipeDelimiter;
