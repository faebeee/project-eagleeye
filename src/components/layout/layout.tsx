import { PropsWithChildren, ReactElement } from 'react'
import classes from './layout.module.css'

export type LayoutProps = PropsWithChildren<{
  header?: ReactElement
}>
export const Layout = ({children, header}: LayoutProps) => {
  return <div className={classes.root}>
    <div className={classes.header}>
      {header}
    </div>
    <div className={classes.content}>
      {children}
    </div>
  </div>
}
