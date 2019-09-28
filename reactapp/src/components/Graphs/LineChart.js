import React, { Component } from 'react'
import * as d3 from 'd3';

class LineChart extends Component {

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
	this.createLineChart()
    }

    createLineChart() {
	const _self = this;
	const node = this.node
	var width = 300,
	    height = 300,
	    margin = 20,
	    x = d3.scaleLinear()
	    .domain([0, 10])
	    .range([margin, width - margin]),
	    y = d3.scaleLinear()
	    .domain([0, 10])
	    .range([height - margin, margin]);

	d3.range(10).map(function(i){
	    return {x: i, y: Math.sin(i) + 5};
	})

	var area = d3.area()
	    .x(function(d) {return x(d.x);})
	    .y0(y(0))
	    .y1(function(d) {return y(d.y);})
	    .curve(d3.curveBasis);

	var line = d3.line()
	    .x(function(d){return x(d.x);})
	    .y(function(d){return y(d.y);});

	var svg = d3.select(node)

	svg.attr("height", height)
	    .attr("width", width);
	renderPeople(svg)

	var g = svg.selectAll("path")
	    .data(_self.props.data)
	    .enter()
	g.append("path")
	    .attr("class", "line")
	    .attr("d", function(d){return line(d);});
	g.append("path")
	    .attr("class", "area")
	    .attr("d", function(d){return area(d);});
	renderAxes(svg);
	//renderPeople(svg);

	function renderAxes(svg){
	    var xAxis = d3.axisBottom()
		.scale(x.range([0, quadrantWidth()]))
		.scale(x)
	    //.attr("stroke-opacity", 0.0);

	    var yAxis = d3.axisLeft()
		.scale(y.range([quadrantHeight(), 0]))
		.scale(y)
	    //.attr("stroke-opacity", 0.0);

	    //svg.append("g")
	    //.attr("class", "axis")
	    //.attr("transform", function(){
	    //return "translate(" + xStart()
	    //+ "," + yStart() + ")";
	    //})
	    //.call(xAxis);

	    //svg.append("g")
	    //.attr("class", "axis")
	    //.attr("transform", function(){
	    //return "translate(" + xStart()
	    //+ "," + yEnd() + ")";
	    //})
	    //.call(yAxis);
	}

	function renderPeople(svg){
	    const peopleData = _self.props.peopleData
	    const size = 40
	    svg.append('clipPath')
		.attr('id','clipObj')
		.append('circle')
		.attr('cx',size/2)
		.attr('cy',size/2)
		.attr('r',size/2);
	    var circles = svg.append("svg:circles")
	    var gradient = svg.append("defs")
		.append("linearGradient")
		.attr("id", "gradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");
	    gradient.append("stop")
		.attr("offset", "0%")
		.attr("stop-color", "@fffffff")
		.attr("stop-opacity", 1);
	    gradient.append("stop")
		.attr("offset", "100%")
		.attr("stop-color", "#0000")
		.attr("stop-opacity", 1);
	    peopleData.forEach(function(point, i){
		var xLoc = (point.score / 100) * quadrantWidth()
		var yLoc = 100
		console.log(xLoc, yLoc)
		var url = "https://avatars.githubusercontent.com/" + point.userId
		svg.append("line")
		    .style("stroke", "#dbdbdb")
		    .attr("x1", xLoc + size / 2)
		    .attr("y1", yLoc + size /2)
		    .attr("x2", xLoc + size / 2)
		    .attr("y2", height - yLoc/2)
		svg.append('image')
		    .attr('xlink:href',url)
		    .attr('width',size)
		    .attr('height',size)
		    .attr('transform','translate('+parseInt(xLoc)+','+parseInt(yLoc)+')')
		    .attr('clip-path','url(#clipObj)')
		    .append("svg:title")
		    .text(point.userId);
	    })
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

export default LineChart
