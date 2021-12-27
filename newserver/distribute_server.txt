
/newserver/distribute_newserver.js

/** @param {NS} ns **/
export async function main(ns) {
const scanRes = ns.scan("home");

for(let server of scanRes){
if(server.includes("pserv")){
await ns.scp("/newserver/weaken.js", "home", server);
await ns.scp("/newserver/grow.js", "home", server);
await ns.scp("/newserver/hack.js", "home", server);
await ns.scp("/newserver/OP.ns", "home", server);
ns.tprint("Copied newserver to: " + server);
}
}
}