import content from "../content/contact.md"

import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact/Contact"

const { attributes: { titre, corps, form }} = content

const ContactView = props => <Layout><Contact titre={titre} corps={corps} form={form}/></Layout>

export default ContactView