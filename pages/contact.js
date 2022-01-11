import NotANav from "../components/NotANav"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const contact = () => {
    return (
        <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
                <NotANav />
            </div>
            <div className="w-full overflow-hidden content-center">
                <ContactForm />
            </div>
            <div className="w-full overflow-hidden content-center">
                <Footer />
            </div>
        </div>
    )
}

export default contact;