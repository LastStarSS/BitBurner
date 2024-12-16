/** @param {NS} ns */
export async function main(ns) {
  const target = ns.tprint(ns.args[0])
  connect(target)
  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(target);
    ns.nuke(target);
  }
}