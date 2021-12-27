/** @param {NS} ns **/
export async function main(ns) {
const servers = ns.getPurchasedServers();
const ramThreshold = ns.args[0];
for(let server of servers){
var serverRam = ns.getServerMaxRam(server);
if(serverRam <= ramThreshold){
ns.killall(server);
ns.deleteServer(server);
ns.tprint("Deleted server: " + server);
}
}
}