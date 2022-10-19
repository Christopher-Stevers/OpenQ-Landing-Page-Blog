import { useEffect, useRef, useState } from "react";
import { tw } from "twind";

const OnScroll = ({ children, className, fade, internalMenu }) => {
	const [isIntersecting, setIsIntersecting] = useState();
	const [showFade, setShowFade] = useState();
	const target = useRef();
	useEffect(() => {
		if (!isIntersecting) {
			let observer = new IntersectionObserver((entries) => {

				const entry = entries[0];
				setIsIntersecting(entry.isIntersecting, { rootMargin: "100px" });
			});
			observer.observe(target.current);
		}
	}, []);
	useEffect(() => {
		if (isIntersecting) {
			setShowFade(true);
		}

	}, [isIntersecting]);
	useEffect(() => {
	
		setShowFade(false);
		setIsIntersecting(false);
	}, [internalMenu]);

	return (<div className={tw(` opacity-0 ${className} ${showFade && fade} ${showFade && "opacity-1"}`)} ref={target}>
		{children}
	</div>);
};
export default OnScroll;