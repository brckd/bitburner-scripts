import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  const [ram, target] = ns.args as [number, string];
  const serverLimit = ns.getPurchasedServerLimit();
  const serverCost = ns.getPurchasedServerCost(ram);

  for (let i = 0; i < serverLimit; i++) {
    if (ns.getServerMoneyAvailable("home") < serverCost) break;

    const hostname = ns.purchaseServer(`server-0`, ram);
    ns.tprint(`purchased ${hostname} with ${ram}GB ram`);
    ns.run("setup.js", {}, hostname, target);
  }
}
