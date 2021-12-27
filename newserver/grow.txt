/** @param {NS} ns **/
export async function main(ns) {
var target = "omega-net";
ns.print("Target before money: " + ns.getServerMoneyAvailable(target));
while(true){
ns.print("Current time: " + new Date().toLocaleTimeString());
await ns.grow(target);
ns.print("Target after money: " + ns.getServerMoneyAvailable(target));
}

}