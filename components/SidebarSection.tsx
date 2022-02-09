import React from "react"

type Props = {
  title: string
  children: React.ReactNode
}
const SidebarSection = (props: Props) => (
  <section className="SidebarSection">
    {props.title && <h2 className="SidebarSection__Title">{props.title}</h2>}
    {props.children}
  </section>
)

SidebarSection.defaultProps = {
  children: null,
  title: "",
} as Props

export default SidebarSection
