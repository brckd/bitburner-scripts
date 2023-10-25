import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  const [target] = ns.args as [string];

  ns.brutessh(target);
  ns.nuke(target);
}
