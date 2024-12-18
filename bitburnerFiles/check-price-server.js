/** @param {NS} ns */
export async function main(ns) {
  ns.tprint(ns.getPurchasedServerCost(ns.args[0]))
}