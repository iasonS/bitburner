import * as servers_helper from "singular_server_list.js";

/** @param {NS} ns **/
export async function main(ns) {
const servers = await servers_helper.getServers(ns);

for (let server_object of servers) {
var server_name = server_object.name;

if(ns.getServerMoneyAvailable(server_name) < 999999999){
continue;
}
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
}
