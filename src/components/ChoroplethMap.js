import React, { Component } from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps'
import { getColors } from '../utils/scales'
import { map2Settings } from '../utils/maps2'
import { getTooltipHTML } from '../utils/convertData'
import { drawLegend } from '../utils/draw'
import chroma from 'chroma-js'
import * as d3 from 'd3'
import Info from './Info'
import { existRegionItems } from '../utils/maps2'

const wrapperStyles = {
  width: '100%',
  margin: '0 auto'
}

class ChoroplethMap extends Component {
  state = {
    center: [0, 20],
    zoom: 1,
    colors: [],
    colorScale: null,
    tooltipHTMLs: []
  }

  componentWillMount() {
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ center: map2Settings[nextProps.moreSettings.map2].center })
    this.setState({ center: [100, 90] })
    this.setState({ center: map2Settings[nextProps.moreSettings.map2].center })
    this.setState({
      zoom: Math.min(nextProps.width / 980, nextProps.height / 551)
    })
    const [colors, colorScale] = getColors(nextProps, true)
    const tooltipHTMLs = getTooltipHTML(nextProps)
    this.setState({ colors, colorScale, tooltipHTMLs })
  }

  componentDidUpdate() {
    var svg = d3.select('.rsm-svg')

    // show legend
    if (this.state.colorScale != null) {
      d3.selectAll('.legendCells').remove()
      drawLegend(svg, this.state.colorScale, this.props)
    }

    // zoom
    const zoom = d3.zoom().on('zoom', () => {
      this.setState({ zoom: d3.event.transform.k })
    })
    svg.call(zoom).on('mousedown.zoom', null)
  }

  handleZoomIn() {
    this.setState({ zoom: this.state.zoom * 2 })
  }

  handleZoomOut() {
    this.setState({ zoom: this.state.zoom / 2 })
  }

  render() {
    if (!this.props.dataTypes.includes('coordinate'))
      return <Info info="no-coordinate" />
    if (!existRegionItems(this.props))
      return (
        <Info
          info="no-region"
          text={this.props.moreSettings.map2}
          showSettings={true}
        />
      )

    d3.selectAll('.d3ToolTip').remove()
    var tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'd3ToolTip')

    const settings = map2Settings[this.props.moreSettings.map2]
    const items = this.props.data.map(
      item => item[this.props.header[this.props.settings.region]]
    )

    const json_filename =
      process.env.NODE_ENV === 'development'
        ? `/maps/json/${settings.filename}`
        : `/wikidata-visualization/maps/json/${settings.filename}`

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="mercator"
          projectionConfig={{
            scale: settings.scale0,
            rotation: settings.rotation
          }}
          width={this.props.width}
          height={this.props.height}
          style={{
            width: this.props.width,
            height: this.props.height
          }}
        >
          <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
            <Geographies geography={json_filename} disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  let color = this.state.colors[
                    items.indexOf(
                      settings.names[geography.properties[settings.namekey]]
                    )
                  ]
                  color = color != null ? color : '#ddd'
                  const tooltipHTML = this.state.tooltipHTMLs[
                    items.indexOf(
                      settings.names[geography.properties[settings.namekey]]
                    )
                  ]
                  return (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: color,
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        },
                        hover: {
                          fill: chroma(color).darken(0.5),
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        },
                        pressed: {
                          fill: chroma(color).brighten(0.5),
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none'
                        }
                      }}
                      onMouseMove={(feature, e) => {
                        if (tooltipHTML != null) {
                          tooltip
                            .style('left', e.pageX - 10 + 'px')
                            .style('top', e.pageY - 10 + 'px')
                            .style('display', 'inline-block')
                            .html(tooltipHTML)
                        }
                      }}
                      onMouseLeave={() => {
                        tooltip.style('display', 'none')
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        {/*
        <ButtonGroup className="zoom-button">
          <Button onClick={this.handleZoomOut}>
            <FaMinus size={12} />
          </Button>
          <Button onClick={this.handleZoomIn}>
            <FaPlus size={12} />
          </Button>
        </ButtonGroup>
        */}
      </div>
    )
  }
}

export default ChoroplethMap
