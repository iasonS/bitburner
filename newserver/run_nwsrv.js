import * as servers_helper from "singular_server_list.js";

/** @param {NS} ns **/
export async function main(ns) {
const scanRes = ns.scan("home");

var targetServerList = await getServers(ns);

var count = 1;
for (let server of scanRes) {
if (server.includes("pserv")) {
await ns.sleep(5000);
ns.exec("/newserver/OP.ns", server, 1, targetServerList[count%targetServerList.length].name);
ns.tprint("Executing newserver on: " + server + ", for target: " + targetServerList[count%targetServerList.length].name);
count++;
}
}
}

async function getServers(ns) {

const servers = await servers_helper.getServers(ns);

var serverList = [];
for (let server_object of servers) {
var server_name = server_object.name;
var serverMaxMoney = ns.getServerMaxMoney(server_name);
if (ns.hasRootAccess(server_name) == true
&& ns.getHackingLevel() > ns.getServerRequiredHackingLevel(server_name)
&& (!server_name.includes("pserv") && !server_name.includes("home")
&& serverMaxMoney > 1000000000)) {
var server_name = server_object.name;
const servObject = {
name: server_name,
maxMoney: serverMaxMoney
};

serverList.push(servObject);
}

}

serverList.sort((a, b) => b.maxMoney - a.maxMoney);
return serverList;
}