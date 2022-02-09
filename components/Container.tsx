import React from "react"

type Props = {
  children: React.ReactNode
}

const Container = (props: Props) => (
  <div className="OuterContainer">
    <div className="ColumnContainer">{props.children}</div>
  </div>
)

Container.defaultProps = {
  children: null,
} as Props

export default Container
