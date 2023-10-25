import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  const [target] = ns.args as [string];
  const threads = Math.floor(
    ns.getServerMaxRam(target) / ns.getScriptRam("hack.js")
  );

  ns.run("infiltrate.js", {}, target);
  ns.scp("hack.js", target);
  ns.killall(target);
  ns.exec("hack.js", target, { threads }, target);
}
