/** @param {NS} ns */
export async function main(ns) {
  const visited = new Set(); // Keeps track of visited servers
  const scriptName = "early-hack-template.js";
  
  // Recursive function to scan and kill the script on servers
  function killScriptOnServer(server) {
    if (visited.has(server)) return; // Skip already visited servers
    visited.add(server);

    // Kill the script if it's running
    if (ns.scriptRunning(scriptName, server)) {
      ns.scriptKill(scriptName, server);
    }

    // Recursively scan connected servers
    const connectedServers = ns.scan(server);
    for (const connected of connectedServers) {
      killScriptOnServer(connected);
    }
  }

  // Start scanning from 'home'
  killScriptOnServer("home");
}
