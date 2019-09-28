import React, { Component } from 'react'
import * as d3 from 'd3';

class BCGraphChart extends Component {
	// should be used with data in the form of a list of lists containing the userId, the before value
	// of the productivity, and the after value of the productivity. Also there should be personalData
	// passed in as well, which should just contain the userId of the logged in user.
	constructor(props){
		super(props)
		this.createGraphChart = this.createGraphChart.bind(this)
	}

	componentDidMount() {
		this.createGraphChart()
	}
	componentDidUpdate() {
		this.createGraphChart()
	}

	createGraphChart() {
		const _self = this;
		const _node = this.node
		var width = 500,
			height = 500,
			margin = 50,
			x = d3.scaleLinear()
			.domain([0, 10])
			.range([margin, width - margin]),
			y = d3.scaleLinear()
			.domain([0, 10])
			.range([height - margin, margin]);

		var data = _self.props.data

		var links = calculateLinks(data)
		var svg = d3.select(_node)

		console.log(links)

		var link = svg
			.selectAll("line")
			.data(links)
			.enter()
			.append("line")
			.attr("stroke-width", 1.5)
			.attr("stroke", "Grey");

		var nodes_locs = svg
			.selectAll("circle")
			.data(data)
			.enter()

		const center_radius = 10
		const scale = 30

		var node = nodes_locs.append("circle")
			.attr("r", function(d){ return d.r * scale })
			.attr("fill", "#4DB1F5")
			//.call(d3.drag()
				//.on("start", dragstarted)
				//.on("drag", dragged)
		//.on("end", dragended));


		var label = nodes_locs
			.append('text')
			.text(function(data) { console.log(data.name); return data.name; })
			.attr("text-anchor", "middle")
			.attr("fill", "Black")
			.attr("font-size", "12px")
			.attr("font-family", "Avenir Next")

		var simulation = d3.forceSimulation()
			.force("link", d3.forceLink())
			.force("charge", d3.forceManyBody())
			.force("center", d3.forceCenter(250, 250));

		_self.nodes = nodes_locs

		simulation
			.nodes(data)
			.on("tick", ticked);

		function ticked() {
			link
				.attr("x1", function(d) {return data[d.source].x; })
				.attr("y1", function(d) { return data[d.source].y; })
				.attr("x2", function(d) { return data[d.target].x; })
				.attr("y2", function(d) { return data[d.target].y; });
			node
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });
			//nodes_outlines
				//.attr("cx", function(d) { return d.x; })
				//.attr("cy", function(d) { return d.y; });
			label
				.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y; });
		}

		//nodes_outlines.transition().delay(2200)
			      //.attr("stroke-width", function(d) {if (d.after){return 2}; return 0})
			//.attrTween("r", function(d) {if(d.before){return d3.interpolate(d.before, d.after)}; return d3.interpolate(0, 0)})
			//.duration(800)

		svg.attr("height", height)
			.attr("width", width);

		var g = svg.selectAll("path")
			.data(_self.props.data)
			.enter()

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
			//const peopleData = _self.props.peopleData
			//const size = 40
			//svg.append('clipPath')
				//.attr('id','clipObj')
				//.append('circle')
				//.attr('cx',size/2)
				//.attr('cy',size/2)
				//.attr('r',size/2);
			//var circles = svg.append("svg:circles")
			//var gradient = svg.append("defs")
				//.append("linearGradient")
				//.attr("id", "gradient")
				//.attr("x1", "0%")
				//.attr("y1", "0%")
				//.attr("x2", "100%")
				//.attr("y2", "100%")
				//.attr("spreadMethod", "pad");
			//gradient.append("stop")
				//.attr("offset", "0%")
				//.attr("stop-color", "@fffffff")
				//.attr("stop-opacity", 1);
			//gradient.append("stop")
				//.attr("offset", "100%")
				//.attr("stop-color", "#0000")
				//.attr("stop-opacity", 1);
			//peopleData.forEach(function(point, i){
				//var xLoc = (point.score / 100) * quadrantWidth()
				//var yLoc = 150
				//console.log(xLoc, yLoc)
				//var url = "https://avatars.githubusercontent.com/" + point.userId
				//svg.append("line")
					//.style("stroke", "#dbdbdb")
					//.attr("x1", xLoc + size / 2)
					//.attr("y1", yLoc + size /2)
					//.attr("x2", xLoc + size / 2)
					//.attr("y2", height - yLoc/2)
				//svg.append('image')
					//.attr('xlink:href',url)
					//.attr('width',size)
					//.attr('height',size)
					//.attr('transform','translate('+parseInt(xLoc)+','+parseInt(yLoc)+')')
					//.attr('clip-path','url(#clipObj)');
			//})
		}

		function calculateLinks(data){
			var links = []
			data.forEach(function(point, i){
				links.push({source: 0, target: i})
			})
			return links
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

export default BCGraphChart
