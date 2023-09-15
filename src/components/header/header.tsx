import { GridColumn, GridRow } from '@dreipol/t3-react-grid'
import { Typography } from '@dreipol/t3-ui'
import { PropsWithChildren } from 'react'
import classes from './header.module.css'

export type HeaderProps = PropsWithChildren<{ }>;

export const Header = ({children}: HeaderProps) => {
  return <GridRow className={classes.root}>
    <GridColumn colSpan={12}>
      <div className={classes.content}>
        <Typography variant={'heading1'} className={classes.title}>Eagle Eye</Typography>
        {children}
      </div>
    </GridColumn>
  </GridRow>
}
