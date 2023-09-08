import { CSSProperties, PropsWithChildren, ReactElement } from 'react'
import { ThemeColorVariables, useColor } from '@dreipol/t3-react-theme'
import classes from './surface.module.css'
import clsx from 'clsx'

export type SurfaceProps = PropsWithChildren<{
  color?: ThemeColorVariables;
  header?: ReactElement
  outlined?: boolean
  centered?: boolean
  square?: boolean
  fillHeight?: boolean
}>
export const Surface = ({children, header, color, fillHeight, square, centered, outlined}: SurfaceProps) => {
  const c = useColor(color)
  return <div className={clsx(classes.root, {
    [classes.outlined]: outlined,
    [classes.centeredContent]: centered,
    [classes.square]: square,
    [classes.fillHeight]: fillHeight
  })}
    style={{'--surface--color': c} as CSSProperties}>
    {header && <div className={classes.header}>
      {header}
    </div>}
    <div className={classes.content}>
      {children}
    </div>
  </div>
}
