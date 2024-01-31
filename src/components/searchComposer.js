import { progressBarRun } from "./progressBar";

export function searchCompose({
  queryString, router, path
}) {
  router.push(path + "?" + queryString);
  progressBarRun(({timer: 2000}));
}
