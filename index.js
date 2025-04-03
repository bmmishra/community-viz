const dscc = require("@google/dscc");
const d3 = require("d3");

function drawViz(data) {
    const container = document.getElementById("viz");
    container.innerHTML = ""; // Clear previous render

    const svg = d3.select(container)
        .append("svg")
        .attr("width", 400)
        .attr("height", 300);

    svg.selectAll("circle")
        .data(data.tables.DEFAULT)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => i * 50 + 50)
        .attr("cy", 150)
        .attr("r", d => d.metric[0].value)
        .attr("fill", "blue");
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
