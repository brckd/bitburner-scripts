import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  const [hostname, target] = ns.args as [string, string?];
  const threads = Math.floor(
    ns.getServerMaxRam(hostname) / ns.getScriptRam("hack.js")
  );

  ns.run("infiltrate.js", {}, hostname);
  ns.scp("hack.js", hostname);
  ns.killall(hostname);
  ns.exec("hack.js", hostname, { threads }, target ?? hostname);
}
