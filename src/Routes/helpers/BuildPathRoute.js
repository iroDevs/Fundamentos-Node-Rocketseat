export function buildPathRoute(url) {
    const routeParametersRegex = /:([a-zA-Z0-9]+)/g;

    const pathWithParameters = url.replace(routeParametersRegex, (_, paramName) => `(?<${paramName}>[a-z0-9\-]+)`);

    const pathRegex = new RegExp(`^${pathWithParameters}$`);

    return pathRegex;
}
