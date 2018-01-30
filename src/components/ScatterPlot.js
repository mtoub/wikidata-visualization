import React, { Component } from 'react'
import DataCircles from './DataCircles'
import Labels from './Labels'
import XYAxis from './XYAxis'
import { getXYScales, getRadius, getColors } from '../utils/scales'
import { getTooltipHTML } from '../utils/convertData'
import SVGPanZoom from './SVGPanZoom'
import * as d3 from 'd3'
import chroma from 'chroma-js'

class ScatterPlot extends Component {
  render() {
    const [scales, xLabel, yLabel] = getXYScales(this.props)
    const radii = getRadius(this.props)
    const colors = getColors(this.props)
    const tooltipHTMLs = getTooltipHTML(this.props)

    d3.selectAll('.d3ToolTip').remove()
    var tooltip = d3.select('body').append('div').attr('class', 'd3ToolTip')

    let selectedData = this.props.data.filter((item, i) => this.props.rowSelections.includes(i))
      .map((item,i) => ({ id: i, ...item})) // add ids
      .filter((item) => (item[xLabel] != null) && (item[yLabel] != null)) // remove undefined values

    const d3node = (
      <svg width={this.props.width} height={this.props.height}>
        { this.props.canvasSettings.border &&
          <rect
            x={0}
            y={0}
            width={this.props.width}
            height={this.props.height}
            fill='none'
            stroke='#ddd'
            strokeWidth = '2'
          />
        }
        <DataCircles
          xLabel={xLabel}
          yLabel={yLabel}
          radii={radii}
          colors={colors}
          {...this.props}
          {...scales} />
        <Labels xLabel={xLabel} yLabel={yLabel} {...this.props} {...scales} />
        <XYAxis {...this.props} {...scales} />
      </svg>
    )

    // add tooltips
    d3.selectAll('.circle')
      .data(selectedData)
      .on('mouseover', function(d) {
        d3.select('#circle'+d.id)
          .attr('fill', chroma(colors[d.id]).brighten(0.6))
        d3.select('#text'+d.id)
          .attr('font-weight', 'bold')
      })
      .on('mousemove', function(d) {
        tooltip
          .style('left', d3.event.pageX + 10 + 'px')
          .style('top', d3.event.pageY + 10 + 'px')
          .style('display', 'inline-block')
          .html(tooltipHTMLs[d.id])
      })
      .on('mouseout', function(d) {
        tooltip.style('display', 'none')
        d3.select('#circle'+d.id)
          .attr('fill', colors[d.id])
        d3.select('#text'+d.id)
          .attr('font-weight', 'normal')
      })

    d3.selectAll('.circleLabel')
      .data(selectedData)
      .on('mouseover', function(d) {
        d3.select('#circle'+d.id)
          .attr('fill', chroma(colors[d.id]).brighten(0.6))
        d3.select('#text'+d.id)
          .attr('font-weight', 'bold')
      })
      .on('mousemove', function(d) {
        tooltip
          .style('left', d3.event.pageX + 10 + 'px')
          .style('top', d3.event.pageY + 10 + 'px')
          .style('display', 'inline-block')
          .html(tooltipHTMLs[d.id])
      })
      .on('mouseout', function(d) {
        tooltip.style('display', 'none')
        d3.select('#circle'+d.id)
          .attr('fill', colors[d.id])
        d3.select('#text'+d.id)
          .attr('font-weight', 'normal')
      })

    return (
      <SVGPanZoom d3node={d3node} width={this.props.width} height={this.props.height} /> 
    )
  }
}

export default ScatterPlot
