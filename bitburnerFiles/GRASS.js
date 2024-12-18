/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];

  ns.scp("early-hack-template.js", target, "home");

  const numThreads = Math.floor(ns.getServerMaxRam(target)
    / ns.getScriptRam("early-hack-template.js"));

  const numPorts = ns.getServerNumPortsRequired(target);

  if (numPorts === 1) {
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(target);
    }
  } else if (numPorts === 2) {
    if (ns.fileExists("BruteSSH.exe")
      && ns.fileExists("FTPCrack.exe", "home")) {
      ns.brutessh(target);
      ns.ftpcrack(target);
    }
  } else if (numPorts === 3) {
    if (ns.fileExists("BruteSSH.exe")
      && ns.fileExists("FTPCrack.exe", "home")
      && ns.fileExists("relaySMTP.exe", "home")) {
      ns.brutessh(target);
      ns.ftpcrack(target);
      ns.relaysmtp(target);
    }
  } else if (numPorts === 4) {
    if (ns.fileExists("BruteSSH.exe")
      && ns.fileExists("FTPCrack.exe", "home")
      && ns.fileExists("relaySMTP.exe", "home")
      && ns.fileExists("HTTPWorm.exe", "home")) {
      ns.brutessh(target);
      ns.ftpcrack(target);
      ns.relaysmtp(target);
      ns.httpworm(target);
    }
  }
  else if (numPorts === 5) {
    if (ns.fileExists("BruteSSH.exe")
      && ns.fileExists("FTPCrack.exe", "home")
      && ns.fileExists("relaySMTP.exe", "home")
      && ns.fileExists("HTTPWorm.exe", "home")
      && ns.fileExists("SQLInject.exe", "home")) {
      ns.brutessh(target);
      ns.ftpcrack(target);
      ns.relaysmtp(target);
      ns.httpworm(target);
      ns.sqlinject(target);
    }
  }
  ns.nuke(target);
  if (numThreads != 0) {
    ns.exec("early-hack-template.js", target, numThreads);
    ns.tprint(`Successfully NUKED ${target}, which is now running ${numThreads} threads.` )
  }
}