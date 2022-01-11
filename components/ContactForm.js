import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
	const [state, handleSubmit] = useForm('xoqrqgpz');
	return (
		<div className="flex justify-center my-10">
			<form className="w-full max-w-lg" onSubmit={handleSubmit}>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label className="block tracking-wide text-black text-xl font-bold mb-2" htmlFor="grid-first-name">
							First Name
						</label>
						<input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your name" />
						<ValidationError
							prefix="First Name"
							field="firstname"
							errors={state.errors}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label htmlFor="email" className="block tracking-wide text-gray-700 text-xl font-bold mb-2">
							Email
						</label>
						<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
							type="email"
							name="email" placeholder="Your email" />
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="grid-password">
							Message
						</label>
						<textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"
							name="message" placeholder="Your message"
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3">
						<button className="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" disabled={state.submitting}>
							Send
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;