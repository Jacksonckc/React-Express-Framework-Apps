import React from 'react'
import { Cell, colors, Grid, Radio, RadioGroup, useAtSize, Separator } from '@fs/zion-ui'
import { css } from '@emotion/core'
import WagonWheel from './WagonWheel'

export const WheelSpeedOptions = {
  stop: {
    label: 'Stopped',
    animationDuration: '0s',
  },
  slow: {
    label: 'Slow',
    animationDuration: '20s',
  },
  medium: {
    label: 'Medium',
    animationDuration: '7s',
  },
  fast: {
    label: 'Fast',
    animationDuration: '1s',
  },
}

const fallbackWidthValue = '740px' // This is an arbitray value found to be the best width to fall back to in this case.
const widthDivisor = 2

const colorCellCss = css`
  height: calc(var(--cell-width, ${fallbackWidthValue}) / ${widthDivisor});
  cursor: pointer;
`

const WagonWheelControl = ({ animationDuration, color, handleColorChange, handleAnimationDurationChange }) => {
  const atSize = useAtSize()

  return (
    <Grid>
      <Cell columns={atSize({ sm: 6 })}>
        <WagonWheel maxHeight={150} color={color} animationDuration={animationDuration} />
        <Separator />
      </Cell>
      <Cell columns={atSize({ sm: 6 })}>
        <RadioGroup label="Wheel Speed">
          {Object.keys(WheelSpeedOptions).map((k) => {
            return (
              <Radio
                checked={animationDuration === WheelSpeedOptions[k].animationDuration}
                name="wheelSpeed"
                label={WheelSpeedOptions[k].label}
                value={`${WheelSpeedOptions[k].animationDuration}`}
                onChange={(e) => handleAnimationDurationChange(e.target.value)}
                key={`${WheelSpeedOptions[k].animationDuration}`}
              />
            )
          })}
        </RadioGroup>
      </Cell>
      <Cell noGrowY alignY="middle">
        <Grid>
          {[
            colors.gray100,
            colors.danger40,
            colors.yellow20,
            colors.yellow60,
            colors.transparent.yellow02,
            colors.blue50,
            colors.blue05,
            colors.blue40,
            colors.gray40,
            colors.green30,
            colors.red40,
            colors.yellow40,
          ].map((c) => {
            return (
              <Cell key={c} columns={atSize({ default: 2, sm: 2, lg: 2, xl: 1 })}>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyPress={() => handleColorChange(c)}
                  onClick={() => handleColorChange(c)}
                  css={colorCellCss}
                  style={{ backgroundColor: c }}
                />
              </Cell>
            )
          })}
        </Grid>
      </Cell>
    </Grid>
  )
}

export default React.memo(WagonWheelControl)
