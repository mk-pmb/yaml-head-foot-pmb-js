// -*- coding: utf-8, tab-width: 2 -*-

const EX = {

  mergeLines() { return this.join('\n') + '\n'; },

  defaultYamlVersion: '1.1',
  // ^- Because lots of web servives (e.g. GitHub actions, GitLab CI)
  //    fail when presented with 1.2, a lot of them with confusing
  //    error messages even.

  header(opt) {
    const { version, tabw } = (opt || false);
    return Object.assign([
      `%YAML ${version || EX.defaultYamlVersion}`,
      `# -*- coding: UTF-8, tab-width: ${tabw || 4} -*-`,
      '---',
      '',
    ], { toString: EX.mergeLines });
  },

  footer() {
    return Object.assign([
      '',
      '...',
    ], { toString: EX.mergeLines });
  },

  wrapBody(body, opt) {
    const w = EX.header(opt).concat(body, EX.footer(opt));
    w.toString = EX.mergeLines;
    if (Array.isArray(body)) { return w; }
    return String(w);
  },

};

export default EX;
