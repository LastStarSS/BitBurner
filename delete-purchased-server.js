/** @param {NS} ns */
export async function main(ns) {
  const currentServers = ns.getPurchasedServers();
  // Check if the correct argument ("confirm") is passed
  if (ns.args[0] === "confirm") {
    for (let i = 0; i < ns.args[1]; ++i) {
      const server = currentServers[i];
      ns.scriptKill("early-hack-template.js", server); // Kill scripts on the server
      ns.deleteServer(server); // Delete the server
      ns.tprint(`Deleted server: ${server}`);
    }
  } else {
    for (let i = 0; i < ns.args[0]; ++i) {
      const server = currentServers[i];
      ns.tprint(server);
    }
  }
}