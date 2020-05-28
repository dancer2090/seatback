export const parseURL = (url) => {
  var parser = document.createElement("a"),
    searchObject = {},
    queries,
    split,
    i;
    parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, "").split("&");
  for (i = 0; i < queries.length; i++) {
    split = queries[i].split("=");
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash,
  };
}

export const linkReplace = (link, frontityUrl, adminUrl) => {
  let newLink = '';
  if (link.startsWith(frontityUrl)) {
    newLink = link.replace(frontityUrl, '');
  } else if (link.startsWith(adminUrl)) {
    newLink = link.replace(adminUrl, '');
  }
  return newLink;
}