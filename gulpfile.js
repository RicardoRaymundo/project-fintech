const { src, dest } = require("gulp");

function copyi18n() {
  return src(["./src/app/languages/*.json", "./src/@modules/**/languages/**/*.json"])
    .pipe(dest("./src/assets/i18n"));
}

exports.copyi18n = copyi18n;
