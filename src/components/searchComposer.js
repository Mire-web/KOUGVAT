import { progressBarRun } from "./progressBar";

export function searchCompose({
  queryString, router
}) {
  router.push("/search" + "?" + queryString);
  progressBarRun(({timer: 2000}));
}
