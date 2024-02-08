const fs = require("fs");
module.exports = (html, options, safe) => {
    let result = html;
    const vars = result.match(/<\[v ([^\]]*) \]>/gm);
    const includes = result.match(/<\[i ([^\]]*) \]>/gm);
    const scripts = result.match(/<\[s ([^\]]*) \]>/gm);
    try {
        if (vars) vars.forEach(i => result = result.replace(regex(i), options[i.substring(4, i.length - 3)]));
    } catch (err) { if (safe) throw new Error(`Failed to read variable ${i.substring(4, i.length - 3)}, Error: ${err.message}`) }
    try {
        if (includes) includes.forEach(i => result = result.replace(regex(i), fs.readFileSync(i.substring(4, i.length - 3), "utf-8")));
    } catch (err) { if (safe) throw new Error(`Failed to read file for include, Error: ${err.message}`) }
    try {
        if (scripts) scripts.forEach(i => result = result.replace(regex(i), eval(`() => { ${i.substring(4, i.length - 3)} }`)));
    } catch (err) { throw new Error(`Failed to run server-side script, Error: ${err.message}`) }
    return result;
}

function regex(string) {
    return new RegExp(string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'));
}
