import React from "react";
import { tw } from "twind";

const SetTierMock = ({ scrollY }) => {


	return (
		<div className={tw(`flex flex-col items-center pr-6 pb-2`)}><div className={tw(`flex flex-col w-full items-start p-t py-1 text-base pb-4`)}><div className={tw(`flex items-center gap-2`)}>How many Tiers?
		</div><div className={tw(`flex-1 w-full mt-2 ml-4`)}>
				<div className={tw(`flex-1  py-1 px-3 text-sm tracking-wider placeholder:text-muted outline-none border border-border-gray rounded-md bg-menu-bg focus-within:border-blue-400
 w-full h-8`)}>{scrollY > 1840 ? "3" : ""}
				</div>
			</div>
		</div>
			<div className={tw(`flex flex-col gap-2 w-full items-start p-2 py-1 pb-0 text-base`)}><div className={tw(`flex items-center gap-2`)}>Weight per Tier (%)<div className={tw(`group undefined`)}><div className={tw(`cursor-help rounded-full border border-[#c9d1d9] aspect-square leading-4 h-4 text-sm box-content text-center font-bold text-primary`)}>?</div><div className={tw(`justify-center w-full relative hidden z-40 group-hover:block  undefined `)}><div className={tw(`flex flex-col items-center`)}><div className={tw(`flex mt-0.5 md:mt-1 tooltip-triangle absolute`)}></div><div className={tw(`flex tooltip absolute undefined`)}><div className={tw(`undefined`)}>How much % of the total will each winner earn?</div></div></div></div>
			</div></div><div className={tw(`flex text-sm rounded-sm overflow-hidden w-fit  ml-4  text-white `)}>
					<button className={tw(`w-fit min-w-[80px] py-1.5 px-4 rounded-l-md border whitespace-nowrap bg-blue-500 border-blue-500`)}>Visual</button>
					<button className={tw(`w-fit min-w-[80px] py-1.5 px-4 rounded-r-md border whitespace-nowrap bg-dark-mode  border-web-gray`)}>Text</button></div>
				<span className={tw(`text-sm `)}>Sum is 100, now you can mint.</span>
				<div className={tw(` w-full mx-h-60 overflow-y-auto overflow-x-hidden`)}><div>
					<div>1st place winner</div><div className="flex w-11/12 text-sm content-center items-center gap-2 mb-1 undefined"><div className={tw(`w-9 flex none w-full`)}>18%</div><div className={tw(`w-full rounded-full overflow-hidden border border-transparent h-4`)}><div style={{ transform: "scaleX(0.186777)", transformOrigin: " left center 0px", backgroundColor: " rgb(226, 157, 18)" }} data-testid="tierInput" type="textarea" className={tw(`resize-x w-full  h-4`)}><div style={{ transform: "scaleX(5.35399)" }} type="textarea" className={tw(`resize-x w-6 opacity-0  h-4 float-right relative left-3 cursor-ew-resize overflow-visible`)}></div></div></div></div></div><div><div>2nd place winner</div><div className="flex w-11/12 text-sm content-center items-center gap-2 mb-1 undefined">
						<div className={tw(`w-9 flex none w-full`)}>50%</div>
						<div className={tw(`w-full rounded-full overflow-hidden border border-transparent h-4`)}>
							<div style={{ transform: "scaleX(0.50326)", transformOrigin: "left center 0px", backgroundColor: "rgb(224, 21, 112)" }} data-testid="tierInput" type="textarea" className={tw(`resize-x w-full  h-4`)}>
								<div style={{ transform: "scaleX(1.98704)" }} type="textarea" className={tw(`resize-x w-6 opacity-0  h-4 float-right relative left-3 cursor-ew-resize overflow-visible`)}></div></div></div></div></div><div>
						<div>3rd place winner</div><div className="flex w-11/12 text-sm content-center items-center gap-2 mb-1 undefined"><div className={tw(`w-9 flex none w-full`)}>32%</div>
							<div className={tw(`w-full rounded-full overflow-hidden border border-transparent h-4`)}>
								<div style={{ transform: "scaleX(0.32304)", transformOrigin: " left center 0px", backgroundColor: " rgb(113, 22, 233)" }} data-testid="tierInput" type="textarea" className={tw(`resize-x w-full  h-4`)}>
									<div style={{ transform: "scaleX(3.09559)" }} type="textarea" className={tw(`resize-x w-6 opacity-0  h-4 float-right relative left-3 cursor-ew-resize overflow-visible`)}>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>Total<div className="flex w-11/12 text-sm  w-full items-center gap-2 mb-1"><div className={tw(`w-9 flex-none`)}>100%</div>
					<div className={tw(`flex border-transparent border-2 flex-none rounded-full overflow-hidden relative border-primary`)}>

						<div style={{ backgroundColor: "rgb(226, 157, 18)", width: "50px" }} type="textarea" className={tw(`resize-x h-4 w-full inline z-15 left-0 top-0`)}></div>
						<div style={{ backgroundColor: "rgb(224, 21, 112)", width: "50px" }} type="textarea" className={tw(`resize-x h-4 w-full inline z-15 left-0 top-0`)}></div><div style={{ backgroundColor: "rgb(113, 22, 233)", width: "80px" }} type="textarea" className={tw(`resize-x h-4 w-full inline z-15 left-0 top-0`)}>
						</div></div></div> </div></div>

	);
};
export default SetTierMock;