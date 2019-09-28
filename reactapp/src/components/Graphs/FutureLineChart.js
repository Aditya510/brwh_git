import React, { Component } from 'react'
import * as d3 from 'd3';

class FutureLineChart extends Component {

    //Pass in data as a list of list of x and y values of the underlying distribution,
    // and peopleData a list of people you want to display.
    constructor(props){
	super(props)
	this.createLineChart = this.createLineChart.bind(this)
    }

    componentDidMount() {
	this.createLineChart()
    }
    componentDidUpdate() {
	//this.createLineChart()
    }

    createLineChart() {
	const _self = this;
	const node = this.node
	var width = 250,
	    height = 300,
	    margin = 10,
	    x = d3.scaleLinear()
	    .domain([0, 10])
	    .range([margin, width - margin]),
	    y = d3.scaleLinear()
	    .domain([0, 10])
	    .range([height - margin, margin]);

	var line = d3.line()
	    .x(function(d){return x(d.x);})
	    .y(function(d){return y(d.y);})
	    .curve(d3.curveBasis);

	var svg = d3.select(node)

	svg.attr("height", height)
		    .attr("width", width);

	var path = svg.selectAll("path")
	var linecolor = "#09385B"
	var second_linecolor = "steelblue"

	var g = path
	    .data(_self.props.data)
	    .enter()
	var solid_line = g.append("path")
	    .attr("class", "line")
	    .style("stroke", linecolor)
	    .style("fill", "none")
	    .style("stroke-width", 2)
	    .attr("d", function(d){return line(d);})
	var total_solid_length = solid_line.node().getTotalLength()
	const first_delay = 300
	const first_duration = 2000
	solid_line.attr("stroke-dashoffset", total_solid_length)
	    .attr("stroke-dasharray", total_solid_length + " " + total_solid_length)
	    .transition().delay(first_delay)
	    //.attrTween("stroke-dashoffset", function(){ d3.interpolate(total_solid_length, 0)})
	    .attr("stroke-dashoffset", 0)
	    .duration(first_duration)

    	var g_dot = path
	    .data(_self.props.futureData)
	    .enter()
	var second_line = g_dot.append("path")
	    .attr("class", "line")
	    .attr("d", function(d){return line(d);})
	    .style("stroke", second_linecolor)
	    .style("fill", "none")
	    .style("stroke-width", 2)
	var total_second_length = second_line.node().getTotalLength()
	second_line.attr("stroke-dashoffset", total_solid_length)
	    .attr("stroke-dasharray", total_solid_length + " " + total_solid_length)
	    .transition().delay(first_delay + first_duration)
	    //.attrTween("stroke-dashoffset", function(){ d3.interpolate(total_solid_length, 0)})
	    .attr("stroke-dashoffset", 0)
	    .duration(2000)
	var xLoc = margin + _self.props.futureData[0][0].x / 10 * quadrantWidth() - 2
	var yLoc = 100
	svg.append("line")
	    .style("stroke", "#dbdbdb")
	    .style("stroke-width", 3)
	    .attr("x1", xLoc)
	    .attr("y1", yLoc)
	    .attr("x2", xLoc)
	    .attr("y2", height - margin)
	svg.append("text")
	    .text("Predicted")
	    .attr("x", xLoc + 10)
	    .attr("y", yLoc + 20)
	    .style("fill", "#444444")

	svg.append("text")
	    .text("Measured")
	    .attr("text-anchor", "end")
	    .attr("x", xLoc -10)
	    .attr("y", yLoc + 20)
	    .style("fill", "#444444")

	renderAxes(svg);

	function renderAxes(svg){
	    var xAxis = d3.axisBottom()
		.scale(x.range([0, quadrantWidth()]))
		.scale(x)

	    var yAxis = d3.axisLeft()
		.scale(y.range([quadrantHeight(), 0]))
		.scale(y)
	}

	function xStart(){ return margin;}
	function yStart(){ return height - margin;}
	function xEnd(){ return width - margin;}
	function yEnd(){ return margin;}
	function quadrantWidth(){ return width - 2 * margin;}
	function quadrantHeight(){ return height - 2 * margin;}
    }

    render() {
	return <svg ref={node => this.node = node}>
	</svg>
    }
}

export default FutureLineChart
