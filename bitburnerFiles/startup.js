/** @param {NS} ns */
export async function main(ns) {
  // Array of all servers that don't need any ports opened
  // to gain root access. These have 16 GB of RAM
  const servers0Port = ["sigma-cosmetics",
    "joesguns",
    "nectar-net",
    "hong-fang-tea",
    "harakiri-sushi",
    "n00dles",
    "foodnstuff"];

  // Array of all servers that only need 1 port opened
  // to gain root access. These have 32 GB of RAM
  const servers1Port = ["neo-net",
    "zer0",
    "max-hardware",
    "iron-gym"];

  const servers2Port = ["silver-helix",
    "crush-fitness",
    "avmnite-02h",
    "phantasy",
    "the-hub",
    "omega-net",
    "johnson-ortho"];

  const purchasedServers = ns.getPurchasedServers();

  // Copy our scripts onto each server that requires 0 ports
  // to gain root access. Then use nuke() to gain admin access and
  // run the scripts.
  for (let i = 0; i < servers0Port.length; ++i) {
    const serv = servers0Port[i];
    ns.scp("early-hack-template.js", serv);
    ns.nuke(serv);
    if (ns.getServerMaxRam(serv) > 0) {
      const numThreads = Math.floor(ns.getServerMaxRam(serv)
        / ns.getScriptRam("early-hack-template.js"))
      ns.exec("early-hack-template.js", serv, numThreads);
    }
  }

  // Copy our scripts onto each server that requires 1 port
  // to gain root access. Then use brutessh() and nuke()
  // to gain admin access and run the scripts.
  for (let i = 0; i < servers1Port.length; ++i) {
    const serv = servers1Port[i];
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.scp("early-hack-template.js", serv);
      ns.brutessh(serv);
      ns.nuke(serv);
      if (ns.getServerMaxRam(serv) > 0) {
        const numThreads = Math.floor(ns.getServerMaxRam(serv)
          / ns.getScriptRam("early-hack-template.js"))
        ns.exec("early-hack-template.js", serv, numThreads);
      }
    }

  }

  for (let i = 0; i < servers2Port.length; ++i) {
    const serv = servers2Port[i];
    if (ns.fileExists("BruteSSH.exe", "home")
      && ns.fileExists("FTPCrack.exe", "home")) {
      ns.scp("early-hack-template.js", serv);
      ns.brutessh(serv);
      ns.ftpcrack(serv)
      ns.nuke(serv);
      if (ns.getServerMaxRam(serv) > 0) {
        const numThreads = Math.floor(ns.getServerMaxRam(serv)
          / ns.getScriptRam("early-hack-template.js"))
        ns.exec("early-hack-template.js", serv, numThreads);
      }
    }

  }

  for (const serv of purchasedServers) {
    // Copy the script to the current server
    ns.scp("early-hack-template.js", serv, "home");
    if (ns.getServerMaxRam(serv) > 0) {
      const numThreads = Math.floor(ns.getServerMaxRam(serv)
        / ns.getScriptRam("early-hack-template.js"))
      ns.exec("early-hack-template.js", serv, numThreads);
    }
  }
}