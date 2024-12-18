/** @param {NS} ns */
export async function main(ns) {
  ns.tprint("The server's max money (M) is: " + ns.getServerMaxMoney(ns.args[0])/1000000)
}