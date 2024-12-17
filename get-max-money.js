/** @param {NS} ns */
export async function main(ns) {
  ns.tprint(ns.getServerMaxMoney(ns.args[0])/1000000)
}