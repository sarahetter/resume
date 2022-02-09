import React from "react"

type Props = {
  title: string
  companyDescription: string
  children?: React.ReactNode
}

const Job = (props: Props) => (
  <article className="Job">
    <h3 className="Job__Title">{props.title}</h3>
    {props.companyDescription && (
      <p className="Job__CompanyDescription">{props.companyDescription}</p>
    )}
    <div className="Job__Description">{props.children}</div>
  </article>
)

Job.defaultProps = {
  children: null,
  companyDescription: "",
  title: "",
} as Props

export default Job
