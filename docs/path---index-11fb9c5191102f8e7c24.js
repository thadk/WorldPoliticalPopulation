webpackJsonp([0x81b8806e4260],{376:function(t,a){t.exports={data:{site:{siteMetadata:{title:"Political Population Atlas (WorldPop+GADM)",description:"A raw and unaffiliated map joining WorldPop gridded population estimates for Asia and Africa with GADM version 3.6 of global political boundaries.    If there is interest, Latin America atlas to come.",url:"https://thadk.net/PoliticalAtlas/",author:"thadk",twitter:"thadk",adsense:""}},remark:{posts:[{post:{html:'<p><strong>Have you ever wanted to…</strong></p>\n<ul>\n<li>know how densely settled a particular area of the world is?</li>\n<li>know why a particular region far from the capital is prominent?</li>\n<li>understand why more projects are happening in one area versus another?</li>\n</ul>\n<div class="text-center">\n<a href="/PoliticalAtlas/africa"><button type="button" class="btn btn-primary">View Africa Atlas</button></a> &nbsp;\n<a href="/PoliticalAtlas/asia"><button type="button" class="btn btn-primary">View Asia Atlas</button></a> <a href="https://github.com/thadk/WorldPoliticalPopulation"><button type="button" class="btn btn-primary">Star this project on Github</button></a> \n</div>\n<p><em>Then, the maps buttons above or the underlying data/code below might help!</em></p>\n<p>Starting with Africa and Asia continent data, <em>Latin America &#x26; Caribbean to come</em>.</p>\n<p>World Atlas combining GADM3.6 with 2020 WorldPop population data at Sub-national Government Level 2  (ADM2, typically, district) level, formatted to be particularly browsable in Carto.</p>\n<h3>Data Produced in this project</h3>\n<ul>\n<li><a href="https://github.com/thadk/PoliticalAtlas/raw/master/data/csv/continents-levels2-AFR_pop_density.csv">CSV data for Administrative Level 2 population for Africa</a> </li>\n<li><a href="https://github.com/thadk/PoliticalAtlas/raw/master/data/csv/continents-levels2-Asia_pop_density.csv">CSV data for Administrative Level 2 population for Asia</a></li>\n<li><a href="https://s3.amazonaws.com/peacecorps-osm/AfricaAtlas.carto">Uploadable Carto file for Africa</a> (Create Carto account, drag/drop into profile and start customizing your own map in 3 clicks)</li>\n<li><a href="https://s3.amazonaws.com/peacecorps-osm/AsiaAtlas.carto">Uploadable Carto file for Asia</a> </li>\n</ul>\n<h3>Data Sources</h3>\n<ul>\n<li><a href="https://gadm.org/">https://gadm.org/</a> (for ADM2 boundaries)</li>\n<li><a href="https://www.worldpop.org.uk/">https://www.worldpop.org.uk/</a> (for Total, Adult, and Rural population) -<a href="https://www.nature.com/articles/sdata20171">more</a></li>\n<li><a href="https://www.naturalearthdata.com/">https://www.naturalearthdata.com/</a> (for Region names and Disputed Areas)</li>\n</ul>\n<p><img src="https://user-images.githubusercontent.com/283343/41951032-f0072980-7996-11e8-8e56-620c4881a40c.gif" alt="popmap4"></p>\n<p><strong>This atlas is not affiliated with any organization and does not attempt to represent any boundaries in an authoritative way.</strong> Each country has its own representation of international boundaries and labels but only one version is offered here.</p>\n<p>WorldPop gridded population models covers most all of Latin America and the Caribbean, Africa and Asia. The models may not be exactly designed for this purpose but results tend to be only a small margin different from other more official census and UN sources (especially around the equator).</p>\n<ul>\n<li>Feel free to ask for help getting it running in the issues.</li>\n</ul>\n<!--more-->\n<h3>Dependencies</h3>\n<ul>\n<li>New York Times’ <a href="https://github.com/mbloch/mapshaper">mapshaper</a> <code class="language-text">npm install\nmapshaper -g</code></li>\n<li><a href="https://www.docker.com/community-edition">Docker</a></li>\n<li>Make</li>\n<li>curl</li>\n</ul>\n<h3>Instructions</h3>\n<p>After installing dependencies, use:</p>\n<ul>\n<li><code class="language-text">make</code> (on my MacBook Pro 2016, this takes about 8min)</li>\n<li>upload <code class="language-text">data/gz/continents-levels2-2_pop_density.zip</code> (containing a\nshapefile) to the\nCarto as a new map.</li>\n</ul>\n<h3>This work would not be possible without</h3>\n<ul>\n<li><a href="https://github.com/kartoza/docker-qgis-desktop">Kartoza’s Dockerized QGIS</a></li>\n<li>New York Times’ team devotion to mapshaper</li>\n<li>the fantastic Carto.com builder automatic aggregations</li>\n<li><a href="http://www.farmradio.org/">Farm Radio International</a> support to explore the toolchain.</li>\n</ul>\n<h3>Makefile resources:</h3>\n<ul>\n<li>Similar Makefile which this format was inspired by: <a href="https://github.com/scities-data/metro-atlas_2014/blob/master/Makefile">https://github.com/scities-data/metro-atlas_2014/blob/master/Makefile</a></li>\n<li>To a lesser extent, this guide <a href="https://github.com/datamade/data-making-guidelines">https://github.com/datamade/data-making-guidelines</a> and</li>\n<li>also Mike Bostock’s article: <a href="https://bost.ocks.org/mike/make/">https://bost.ocks.org/mike/make/</a></li>\n</ul>',frontmatter:{layout:"post",title:"WorldPoliticalPopulation",path:"/hello-world/",categories:["Introduction","GADM","WorldPop"],date:"2018/07/08"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-11fb9c5191102f8e7c24.js.map