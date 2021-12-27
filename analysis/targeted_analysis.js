/** @param {NS} ns **/
export async function main(ns) {
const server_name = ns.args[0];

ns.tprint("=====================");

ns.tprint("Server: " + server_name + ", ROOT ACCESS: " + ns.hasRootAccess(server_name));
if(ns.hasRootAccess(server_name) == false){
ns.tprint("Level req: " + ns.getServerRequiredHackingLevel(server_name));
}
ns.tprint("CURRENT MONEY: " + numberWithCommas(ns.getServerMoneyAvailable(server_name))
+ ", CURRENT SECURITY: " + ns.getServerSecurityLevel(server_name)
+ ", CURRENT GROWTH: " + ns.getServerGrowth(server_name));

ns.tprint("MAX MONEY: " + numberWithCommas(ns.getServerMaxMoney(server_name))
+ ", MIN SECURITY: " + ns.getServerMinSecurityLevel(server_name)
+ ", MAX RAM: " + ns.getServerMaxRam(server_name));

ns.tprint("=====================");

}

function numberWithCommas(x) {
var parts = x.toString().split(".");
return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}