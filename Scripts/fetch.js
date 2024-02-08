const http = require("http");
const https = require("https");

function fetch(url, options = { }) {
    return new Promise((resolve, reject) => {
        if (!url) reject("No URL provided with fetch!");
        const protocol = url.split("://")[0] || "https"; // Get protocol from URL, default to HTTPS
        let domain = url.split("://")[1].split("/")[0]; // Get domain & port from URL
        let path = url.split("://")[1].split("/");
        path.shift();
        path = path.join("/").startsWith("/") ? path.join("/") : `/${path.join("/")}`;
        const port = Number(domain.split(":")[1] || (protocol == "https" ? 443 : 80)) || (protocol == "https" ? 443 : 80); // Get port from domain
        domain = domain.split(":")[0]; // Update domain without port

        if (!options.host) options.host = domain;
        if (!options.port) protocol == "https" ? (port == 443 ? undefined : port) : (port == 80 ? undefined : port);
        if (!options.path) options.path = path;
        if (!options.method) options.method = options.body ? "POST" : "GET";
        if (!options.headers) options.headers = { };

        if (typeof options.body == "object") {
            options.body = JSON.stringify(options.body);
            if (!options.headers["Content-Type"]) options.headers["Content-Type"] = "application/json";
        }

        const req = (protocol == "https" ? https : http).request(options, res => {
            let data;
            res.on("data", i => data ? data = Buffer.concat([ data, i ]) : data = Buffer.from(i));
            res.on("error", err => reject(`Fetch request failed with URL ${url}! Error: ${err}`));
            res.on("end", () => {
                let string = data.toString();
                let json;
                try {
                    json = JSON.parse(string);
                } catch (err) { };

                resolve({
                    method: res.req.method,
                    headers: res.headers,
                    status: res.statusCode,
                    statusMsg: res.statusMessage,
                    data: {
                        hasData: data ? true : false,
                        buffer: data,
                        string,
                        json
                    }
                });
            });
        });

        if (options.body) req.end(options.body); else req.end();
    });
}

module.exports = fetch;
