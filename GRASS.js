/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0]
  ns.scp("early-hack-template.js", target, "home")
  if (ns.getServerNumPortsRequired(target) === 0) {
    ns.exec("NUKE.exe", target);
  } else if (ns.getServerNumPortsRequired(target) === 1) {
    if (ns.fileExists("BruteSSH.exe", "home")) {
      ns.brutessh(target);
      ns.nuke(target);
    }
  } else if (ns.getServerNumPortsRequired(target) === 2) {
    if (ns.fileExists("BruteSSH.exe") 
    && ns.fileExists("FTPCrack.exe", "home")) {
      ns.brutessh(target);
      ns.ftpcrack(target);
      ns.nuke(target);
    }
  }
}