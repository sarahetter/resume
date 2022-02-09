import React from "react"

type Props = {
  title: string
  children: React.ReactNode
}

const MainSection = (props: Props) => (
  <section className="MainSection">
    {props.title && <h2 className="MainSection_Title">{props.title}</h2>}
    {props.children}
  </section>
)

MainSection.defaultProps = {
  children: null,
  title: "",
} as Props

export default MainSection
