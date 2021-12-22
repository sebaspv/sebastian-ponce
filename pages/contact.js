import NotANav from "./components/NotANav"
import { Widget } from '@typeform/embed-react'
import Footer from "./components/Footer"

const contact = () => {
    return (
        <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
                <NotANav />
            </div>
            <div class="w-full overflow-hidden content-center">
                <Widget id="m1cFkEU7" height={600} className="my-form" />
            </div>
        </div>
    )
}

export default contact;