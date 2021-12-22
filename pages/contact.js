import NotANav from "./components/NotANav"
import { Widget } from '@typeform/embed-react'
import ContactForm from "./components/ContactForm"

const contact = () => {
    return (
        <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
                <NotANav />
            </div>
            <div class="w-full overflow-hidden content-center">
                <ContactForm />
            </div>
        </div>
    )
}

export default contact;