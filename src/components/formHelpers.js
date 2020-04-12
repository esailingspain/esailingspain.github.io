// eslint-disable-next-line
import React from "react"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Field, ErrorMessage } from "formik"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from "date-fns/locale/es"
registerLocale("es", es)

export const FormField = ({ name, text, type = "text", subtitle }) => {
  return (
    <div style={{ minHeight: subtitle ? 152 : 110 }}>
      <label htmlFor={name} style={{ display: "block" }}>
        {text}
      </label>
      {subtitle ? <div style={{ marginBottom: 8 }}>{subtitle}</div> : ""}
      <Field
        type={type}
        name={name}
        css={inputStyle}
        className="form-control"
      />
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  )
}
export const FormDate = ({ name, text, subtitle, values, setFieldValue }) => {
  return (
    <div style={{ minHeight: subtitle ? 152 : 110 }}>
      <label htmlFor={name} style={{ display: "block" }}>
        {text}
      </label>
      {subtitle ? <div style={{ marginBottom: 8 }}>{subtitle}</div> : ""}
      <DatePicker
        selected={values[name]}
        dateFormat="dd/MM/yyyy"
        className="form-control"
        css={inputStyle}
        name={name}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        locale="es"
        onChange={date => setFieldValue(name, date)}
      />{" "}
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  )
}
export const FormSelect = ({ name, text, values, subtitle, options }) => {
  return (
    <div style={{ minHeight: subtitle ? 152 : 110 }}>
      <label htmlFor={name} style={{ display: "block" }}>
        {text}
      </label>
      {subtitle ? <div style={{ marginBottom: 8 }}>{subtitle}</div> : ""}
      <Field
        as="select"
        name={name}
        value={values.color}
        className="form-control"
        css={inputStyle}
      >
        {Object.entries(options).map(([k, v]) => (
          <option key={k} value={k} label={v} />
        ))}
      </Field>

      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  )
}

const inputStyle = css`
  display: block;
  height: 2.4em;
  width: 16em;
`
