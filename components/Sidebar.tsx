import React from "react"

type Props = {
  children: React.ReactNode
}
const Sidebar = (props: Props) => (
  <div className="Sidebar">{props.children}</div>
)

Sidebar.defaultProps = {
  children: null,
} as Props

export default Sidebar
