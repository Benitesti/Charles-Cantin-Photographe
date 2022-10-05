import content from "../content/galerie.md"

import Layout from "../components/Layout/Layout"
import Gallery from "../components/Galerie/Gallery"

const { attributes: { titre, photos, corps }} = content

const GalerieView = props => (
  <Layout>
    <Gallery photos={photos} titre={titre} corps={corps}/>
  </Layout>)

export default GalerieView