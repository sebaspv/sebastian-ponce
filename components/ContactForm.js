import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

function ContactForm() {
	const [state, handleSubmit] = useForm('xoqrqgpz');
	return (
		<div className="flex justify-center my-10">
			<section className="flex flex-row flex-wrap justify-center m-8 sm:m-32">
				<article className="max-w-lg mt-2 mb-2 mr-4">
					<h1 className="text-6xl mt-8 mb-16 font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Contact</span> me</h1>
					<p className="text-gray-600 text-xl">
						Hey! Do you have a project in mind? Do you want to work together? Reach
						me through the form and I&apos;ll get back to you as soon as possible.
					</p>
					<a
						className="mt-8 mb-8 flex flex-row items-center"
						href="mailto:sebastian@sebastianponce.co"
					>
						<span className="text-xl text-gray-600 font-bold">
							sebastian@sebastianponce.co
						</span>
					</a>
				</article>
			</section>
			<form
				autoComplete="on"
				className="max-w-xl w-full flex flex-col mb-10 mt-16"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col mt-2 mb-2">
					<label className="text-xl font-bold mb-2">Name</label>
					<input
						className="w-5/6 p-4 text-xl bg-gray-200 rounded-md"
						name="name"
						placeholder="Your name"
						required
						type="text"
					/>
					<ValidationError
						prefix="First Name"
						field="firstname"
						errors={state.errors}
					/>
				</div>
				<div className="flex flex-col mt-2 mb-2">
					<label className="text-xl font-bold mb-2">Email</label>
					<input
						className="w-5/6 p-4 text-xl bg-gray-200 rounded-md"
						name="email"
						placeholder="Your contact email"
						required
						type="email"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</div>
				<div className="flex flex-col mt-2 mb-2">
					<label className="text-xl font-bold mb-2">Message</label>
					<textarea
						className="w-5/6 p-4 text-xl mb-4 bg-gray-200 rounded-md"
						name="message"
						placeholder="Your message"
						required
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
				<div className="md:w-1/3">
					<button className="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2" 
					type="submit" 
					disabled={state.submitting}
					onClick={() => {
						toast("Okay! Your message has been submitted.")
					}}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;