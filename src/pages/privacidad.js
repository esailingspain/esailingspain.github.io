import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Privacidad" />
    <h1>Politica de privacidad</h1>
    <p>EL PROPETARIO DE LA WEB tratará los datos de forma confidencial y exclusivamente con la finalidad de ofrecer los servicios solicitados, con todas las garantías legales y de seguridad que impone el Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), así como el Real Decreto 1720/2007, de 21 de diciembre y la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico. Los datos serán conservados el tiempo que dure el consentimiento, o en su caso, el tiempo legal establecido para cada una de las obligaciones legales que deriven de los tratamientos para los que se ha consentido. Para ello EL PROPIETARIO DE LA WEB adoptará los niveles de seguridad correspondientes requeridos por el Reglamento (UE) 2016/679 y demás normativa aplicable. No obstante, no asume ninguna responsabilidad por los daños y perjuicios derivados de alteraciones que terceros pueden causar en los sistemas informáticos, documentos electrónicos o ficheros del usuario. EL PROPIETARIO DE LA WEB podrá utilizar cookies durante la prestación de servicios del sitio web. Las cookies son ficheros físicos de información personal alojados en el propio terminal del usuario. El usuario tiene la posibilidad de configurar su programa navegador de manera que se impida la creación de archivos cookie o se advierta de la misma. Si opta a abandonar nuestro sitio web a través de enlaces a sitios web no pertenecientes a nuestra entidad, EL PROPIETARIO DE LA WEB no se hará responsable de las políticas de privacidad de dichos sitios web ni de las cookies que éstos puedan almacenar en el ordenador del usuario. Declaro haber sido informado de poder ejercitar mis derechos de acceso a los datos, su rectificación, supresión, oposición, limitación de su tratamiento o portabilidad de los mismos según lo establecido en el RGPD.</p>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
