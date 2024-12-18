/** @param {NS} ns */
export async function main(ns) {
    // How much RAM each purchased server will have.
    const ram = ns.args[0];

    const numThreads = Math.floor(ram/ns.getScriptRam("early-hack-template.js"))

    // Iterator we'll use for our loop
    let i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let hostname = ns.purchaseServer(ram + "pserv-" + i, ram);
            ns.scp("early-hack-template.js", hostname);
            ns.exec("early-hack-template.js", hostname, numThreads);
            ns.tprint(`Purchased a server with ${ram} GB RAM and is running ${numThreads} threads.`)
            ++i;
        }
        //Make the script wait for a second before looping again.
        //Removing this line will cause an infinite loop and crash the game.
        await ns.sleep(1000);
    }
}