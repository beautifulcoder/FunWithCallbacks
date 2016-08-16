function commaDelimiter(list, cat) {
  return list === '' ? cat : list + ',' + cat;
}

module.exports = commaDelimiter;
