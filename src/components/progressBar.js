import ProgressBar from "@badrap/bar-of-progress";

export function progressBarRun({timer}){
	const progress = new ProgressBar({
		size: 4,
		color: "rgb(56,189,248)",
		className: "z-999",
		delay: 100,
	  });
		progress.start();
		setTimeout(() => {
		  progress.finish();
		}, timer);
}