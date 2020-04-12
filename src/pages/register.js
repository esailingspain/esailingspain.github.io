// eslint-disable-next-line
import React from "react"
import { useState } from "react"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainMenu from "../components/Menu/MainMenu"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { FormField, FormDate, FormSelect } from "../components/formHelpers"

const ccaa = {
  "*": "Selecciona una opción",
  andalucia: "Andalucía",
  aragon: "Aragón",
  asturias: "Principado de Asturias",
  baleares: "Islas Baleares",
  canarias: "Canarias",
  cantabria: "Cantabria",
  castillaLeon: "Castilla y León",
  castillaLaMancha: "Castilla-La Mancha",
  catalunya: "Cataluña",
  valencia: "Comunidad Valenciana",
  extremadura: "Extremadura",
  galicia: "Galicia",
  madrid: "Comunidad de Madrid",
  murcia: "Región de Murcia",
  navarra: "Comunidad Foral de Navarra",
  euskadi: "País Vasco",
  rioja: "La Rioja",
  ceuta: "Ciudad Autónoma de Ceuta",
  melilla: "Ciudad Autónoma de Melilla",
}

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    lastName: "",
    birthDate: "",
    dni: "",
    email: "",
    mobilePhone: "",
    inshoreUser: "",
    ccaa: "",
    nvela: "",
    federationNumber: "",
  }
  const [isSubmitted, setSubmitted] = useState(false)
  const [formValues, setFormValues] = useState(initialValues)
  const submitHandler = (values, { setSubmitting }) => {
    saveInGoogleSpreadSheets(values)
      .then(response => {
        setFormValues(values)
        setSubmitting(false)
        setSubmitted(true)
      })
      .catch(error => console.error("Error!", error.message))
  }

  return (
    <Layout>
      <SEO title="Register" />
      <div className="body_wrapper" style={{ marginTop: 100 }}>
        <MainMenu Logo="esailing_logo.svg" scrollTrigger={0} />
        <div id="form-container" style={{ margin: "0 20px 10px 20px" }}>
          {!isSubmitted ? (
            <RegistrationContainer
              values={formValues}
              submitHandler={submitHandler}
            />
          ) : (
            <PaymentContainer values={formValues} />
          )}
        </div>
        <div style={{ margin: 20, marginBottom: 50 }}>
          <Link to="/">Volver a la Portada</Link>
        </div>
      </div>
    </Layout>
  )
}

export default RegistrationForm

/**********************/
/*  Child Components  */
/*                    */
/**********************/

const RegistrationContainer = ({ values, submitHandler }) => {
  return (
    <>
      <h1 style={{ marginBottom: 20 }}>
        COPA DE ESPAÑA DE eSAILING - TROFEO SAILING SUR
      </h1>
      <h2 style={{ marginBottom: 20 }}>25 de Abril al 9 de Mayo 2020</h2>
      <h3 style={{ marginBottom: 20 }}>FORMULARIO DE INSCRIPCIÓN </h3>
      <p>
        Inscripción oficial para la Copa de España de eSailing - Trofeo Sailing
        Sur.
        <br />
        Organizado por la RFEV, la Secretaria de eSailing y la Comunidad
        Española de eSailing de la aplicación Discord.
      </p>
      <br />
      <p>
        Descarga el{" "}
        <a href="https://rfev.es/uploaded_files/AR-CtodeEspa%C3%B1aRFEV.pdf_7310_es.pdf">
          Anuncio de Regata
        </a>
      </p>
      <br></br>
      <Formik
        initialValues={values}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          surname: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          // lastName: Yup.string()
          //   .max(20, "Must be 20 characters or less")
          //   .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
          // jobType: Yup.string()
          //   .oneOf(
          //     ["designer", "development", "product", "other"],
          //     "Invalid Job Type"
          //   )
          //   .required("Required"),
        })}
        onSubmit={submitHandler}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <FormField name="name" text="Nombre" />
            <FormField name="surname" text="Primer Apellido" />
            <FormField name="lastName" text="Segundo Apellido" />
            <FormDate
              name="birthDate"
              text="Fecha de nacimiento (dd/mm/aaaa)"
              values={values}
              setFieldValue={setFieldValue}
            />
            <FormField name="dni" text="DNI" />
            <FormField type="email" name="email" text="Email" />
            <FormField name="mobilePhone" text="Móvil" />
            <hr />
            <FormField
              name="inshoreUser"
              text="Usuario de Virtual Regatta Inshore"
              subtitle={
                <a href="https://www.sailranks.com/v/players">
                  Consulta tu número
                </a>
              }
            />
            <FormField name="nvela" text="Numero de vela SailRanks" />
            <FormField name="federationNumber" text="Licencia Federativa" />
            <FormSelect
              name="ccaa"
              text="Comunidad autónoma"
              values={values}
              options={ccaa}
            />
            <button type="submit" disabled={isSubmitting}>
              {/* <button type="submit" disabled={false}> */}
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

const PaymentContainer = ({ values }) => {
  return (
    <>
      <div>Inscripción enviada con éxito</div>
      <h1>Pago</h1>
      <p>
        Al pulsar el siguiente botón serás transferido a la pasarela de pago.
        <br />
        También puedes proceder al pago realizando una transferencia a la
        cuenta:
        <br />
        ES62 0128 0381 58 0500005726
        <br />
        Concepto: Copa eSaling “NUMERO SAILRANKS”
      </p>
      <div>
        <a href={pay(values)} css={buttonStyle}>
          Pagar
        </a>
      </div>
    </>
  )
}

const buttonStyle = css`
  display: table-cell;
  /* display: block; */
  width: 115px;
  height: 48px;
  background: #4e9caf;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  &:hover {
    color: #cccccc;
  }
`

/**********************/
/*  Helper Functions  */
/*                    */
/**********************/

const serialize = function(obj) {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
    }
  return str.join("&")
}

const saveInGoogleSpreadSheets = async values => {
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  })
  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
    values.birthDate
  )
  const newBirthDate = values.birthDate ? `${da}/${mo}/${ye}` : ""
  const newValues = {
    ...values,
    birthDate: newBirthDate,
  }
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyv3s6j72cO-825phKIKZ53L20C4LLe_vxXh31RvQqSA8eYh0df/exec"
  const url = `${scriptURL}?${serialize(newValues)}`
  return fetch(url)
}

const pay = values => {
  let url = `https://www.rfev.es/default/pay/pay`
  const keys = [
    { key: "dni", value: values.dni },
    { key: "nombre", value: values.name },
    { key: "apellido1", value: values.surname },
    { key: "apellido2", value: values.lastName },
    { key: "email", value: values.email },
    { key: "direccion", value: " " },
    { key: "poblacion", value: " " },
    { key: "cp", value: " " },
    { key: "ref", value: "Copa España" },
    { key: "concept", value: "Copa España" },
    { key: "price", value: "5" },
  ]
  for (const p of keys) {
    // console.log("p", p)
    url += `/${p.key}/` + encodeURIComponent(p.value ?? " ")
  }
  // console.log("url", url)
  return url
}
