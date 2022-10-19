import { useState } from 'react';
import { tw } from 'twind';

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState();
	const [error, setError] = useState();

	const subscribe = async () => {
		try {
			const formData = new FormData();
			formData.append("api_key", "JlUKxDNJAmbFF44byOHTNQ");
			formData.append("email", email);
			const response = await fetch('https://api.convertkit.com/v3/forms/3697685/subscribe', {
				method: "POST",
				body: formData
			});
			const subscribeJson = await response.json();
			if (subscribeJson) {
				setSubscribed(true);

			}
		}
		catch (err) {
			setError(err);

		}
	};
	return (<div>
		<div className={tw(`text-gray-900 font-bold pb-2 sm:w-60`)}>
			Sign up for our newsletter.</div>
		{

			error ? <div className={tw(`gap-4 md:h-12 bg-red-100 md:w-128 max-w-full px-2 border-red-500 border flex justify-center rounded-md py-2.5  justify-items-center text-red-500`)}>
				<span>Couldn{"'"}t process your subscription, please reload and try again.</span>

			</div> :

				subscribed ?
					<div className={tw(`gap-4 md:h-12 bg-green-100 md:w-128 max-w-full px-2 border-emerald-500 border flex justify-center rounded-md py-2.5  justify-items-center text-emerald-500`)}>
						<span>Success! Now  check your email to confirm your subscription.</span>

					</div>

					: <div className={tw(`flex flex-wrap text-white gap-4 md:w-128 `)}>
						<input value={email} onChange={(e) => setEmail(e.target.value)} className={tw(`rounded-md border-gray-400  w-full sm:w-auto border h-12 px-2 text-black`)} />
						<button onClick={subscribe} className={tw(`bg-purple-800 px-6 rounded-md py-3`)}>Subscribe</button>
					</div>}
	</div>
	);
};
export default Subscribe;