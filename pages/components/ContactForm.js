import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xoqrqgpz");
    if (state.succeeded) {
        return <p>Thanks! I'll respond to your inquiry as soon as possible.</p>;
    }
    return (
        <div className="flex justify-center mt-10">
            <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-black text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
                        <ValidationError
                            prefix="First Name"
                            field="firstname"
                            errors={state.errors}
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-black text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        <ValidationError
                            prefix="Last Name"
                            field="lastname"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label htmlFor="email" class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password" >
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
                    type="email"
                    name="email" placeholder="example@example.com"/>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" disabled={state.submitting}>
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    );
}
export default ContactForm;