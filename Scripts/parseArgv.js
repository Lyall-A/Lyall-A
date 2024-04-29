module.exports = (argv = process.argv) => {
    const parsed = { };
    let lastArg;

    argv.forEach(arg => {
        if (arg.startsWith("-")) {
            parsed[arg.substring(1)] = null;
            lastArg = arg;
        } else if (lastArg) {
            try {
                parsed[lastArg.substring(1)] = JSON.parse(arg);
            } catch (err) {
                parsed[lastArg.substring(1)] = arg;
            }
            
            lastArg = null;
        }
    });

    return parsed;
}