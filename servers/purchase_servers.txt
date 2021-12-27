/** @param {NS} ns **/
export async function main(ns) {

// How much RAM each purchased server will have.
var ram = ns.args[0];

// Iterator we'll use for our loop
var i = ns.getPurchasedServers().length;

// Continuously try to purchase servers until we've reached the maximum
// amount of servers
while (i < ns.getPurchasedServerLimit())
{
await ns.sleep(1000);
// Check if we have enough money to purchase a server
if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
// If we have enough money, then:
// 1. Purchase the server
// 2. Copy our hacking script onto the newly-purchased server
// 3. Run our hacking script on the newly-purchased server with 3 threads
// 4. Increment our iterator to indicate that we've bought a new server
var hostname = ns.purchaseServer("pserv-" + i, ram);
await ns.scp("pwnd.js", "home", hostname);
ns.exec("executor.js", hostname, 1, "pwnd.js");
ns.tprint("Spawned new server with name: " + hostname);
++i;
}
}

}