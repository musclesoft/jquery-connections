<!doctype html>
<style>
	html {
		background-image:
			-moz-linear-gradient(0deg, transparent 1px, #fff 1px),
			-moz-linear-gradient(-90deg, #6c6 1px, #fff 1px);
		background-size: 10px 10px;
		background-position: 5px 5px;
		font: 10px sans-serif;
	}
	html, body {
		padding: 5px;
		margin: 5px;
	}
	table {
		border-spacing: 10px;
		margin-top: -10px;
	}
	table.first {
		margin-top: 0;
	}
	td {
		min-width: 30px;
		height: 30px;
		background: #ddd;
		padding: 0;
		vertical-align: top;
	}
	.box {
		width: 30px;
		height: 30px;
		background: #eee;
		position: absolute;
	}
	div.testcase {
		background: red;
		border-radius: 3px;
		width: 0px;
		height: 0px;
		padding: 3px 3px;
		margin: 2px 0 0 2px;
		position: absolute;
	}
	[title]:before {
		content: attr(title);
		z-index: 1;
		line-height: 1em;
		clear: both;
		display: inline-block;
		width: 29px;
		position: absolute;
		margin: 5px 0 0 5px;
		opacity: 0.4;
	}
	connection {
		border: 10px solid #bbb;
		border-radius: 8px;
	}
	connection.fat {
		border: 30px solid #bbb;
	}
	connection.top.ok {
		border-top-color: #bbb;
	}
	connection.right.ok {
		border-right-color: #bbb;
	}
	connection.bottom.ok {
		border-bottom-color: #bbb;
	}
	connection.left.ok {
		border-left-color: #bbb;
	}
	connection.testcase, connection.testcase.fail {
		border-color: red;
	}
</style>
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="../jquery.connections.js"></script>
<script>
	$(document).ready(function() {
		$('.l, .r').connections();
		$('.t, .b').connections();
		$('.behind').connections({css: {zIndex: -1}, 'class': 'testcase'});
		$('.ring-l, .ring-r').connections({to: '.ring-b, .ring-t'});
		$('.small').connections({to: '.large', 'class': 'fat'});
		$('.l.t').connections({to: '.basic .inner', 'class': 'testcase'});
		$('td.contiguous').connections({to: '.contiguous.box', 'class': 'testcase'});
		$('.bidi1').connections({to: '.bidi2'}).connections({from: '.bidi2'});
		$('.full-center').connections({to: '.full'}).connections({from: '.full'});
		$('.s.plumbing-center').connections({to: '.s.plumbing'});
		$('.u.plumbing-center').connections({to: '.u.plumbing'});
		$('.display-none').connections({'class': 'testcase'});
		$('.relative .outer').connections({within: ':root'});
		$('.relative .inner').connections({within: '.relative'});
		$('.absolute .outer').connections({within: ':root'});
		$('.absolute .inner').connections({within: '.absolute'});
		$('.detached').detach().connections('update');
		$('.parent-moved .box').connections().parent().css('left', -40).children().connections('update');
		$('.removed').remove();
		$('.bc.bottom.right').connections({from: '.bc.top.left', 'class': 'testcase', borderClasses: {top: 'fail', right: 'fail', bottom: 'bottom ok', left: 'left ok'}});
		$('.bc.bottom.right').connections({to: '.bc.top.left', 'class': 'testcase', borderClasses: {top: 'top ok', right: 'right ok', bottom: 'fail', left: 'fail'}});
	});

	var benchmark = function() {
		var loops = 0, ms = 0;
		var wiggle = 10;
		var c = $('connection');
		setInterval(function() {
			var t;
			var start = Date.now();
			while ((t = Date.now() - start)  < 1000) {
				wiggle = - wiggle;
				$('table, .testcase, .success').each(function () {
					$(this).offset({left: $(this).offset().left + wiggle});
				});
				for (var i = 0; i < 2; i++) {
					ms -= Date.now();
					c.connections('update');
					ms += Math.max(1, Date.now());
					loops++;
				}
			}
			$('body').append(' ' + Math.round(loops * 1000 / ms) + '/s');
		}, 2500);
	}
</script>
<div class="inner box" style="top: 30px;left: 40px;width: 10px" title="inner"></div>
<div class="inner box" style="top: 40px;left: 30px;height: 10px" title="inner"></div>
<div class="contiguous success box" style="top: 60px;left: 70px;height: 10px"></div>
<div class="contiguous success box" style="top: 100px;left: 70px;height: 10px"></div>
<div class="contiguous success box" style="top: 70px;left: 60px;width: 10px"></div>
<div class="contiguous success box" style="top: 70px;left: 100px;width: 10px"></div>
<div class="success box" style="top: 110px;left: 60px;width: 10px" title="negative z-index"></div>
<div class="success box" style="top: 110px;left: 100px;width: 10px"></div>
<table class="basic first">
	<tr>
		<td class="l t"></td>
		<td/>
		<td class="r" />
		<td class="ring-t" />
		<td/>
		<td class="full" />
		<td/>
		<td class="full" />
		<td colspan="2" class="large" />
		<td/>
		<td class="bidi1" />
		<td/>
		<td class="s u plumbing" />
	<tr>
		<td/>
		<td class="contiguous" title="contiguous" />
		<td class="ring-l" />
		<td/>
		<td class="ring-r" />
		<td/>
		<td class="full-center" />
		<td/>
		<td class="small" />
		<td rowspan="2" class="large" />
		<td class="bidi2" />
		<td/>
		<td>
			<div class="s plumbing-center" style="margin: 15px 0 0 15px;height: 0; width: 0"></div>
		</td>
		<td/>
		<td>
			<div class="u plumbing-center" style="margin: 15px 0 0 15px;height: 0; width: 0"></div>
		</td>
	<tr>
		<td class="b behind" />
		<td/>
		<td class="behind" />
		<td class="ring-b" />
		<td/>
		<td class="full" />
		<td/>
		<td class="full" />
		<td/>
		<td/>
		<td class="s plumbing" />
		<td class="u plumbing" />
	<tr>
		<td class="display-none" style="display: none" />
		<td title="parent display none">
			<div class="box" style="display: none">
				<div class="box display-none"></div>
			</div>
		</td>
		<td title="re&shy;moved">
			<div class="removed box display-none"></div>
		</td>
		<td title="de&shy;tached">
			<div class="detached box display-none"></div>
		</td>
		<td class="display-none" title="dis&shy;play none"/>
		<td>
			<div  style="position: relative" class="parent-moved box"><div class="box"></div></div>
		</td>
		<td>
			<div  style="position: relative" class="parent-moved box"><div class="box"></div></div>
		</td>
		<td/>
		<td/>
</table>
<div class="testcase" style="left:60px;top:40px;width:40px" title="left to right"></div>
<div class="testcase" style="left:40px;top:60px;height:40px" title="top to bot&shy;tom"></div>
<div class="testcase" style="left:350px;top:60px;width:20px" title="small bot&shy;tom to large top"></div>
<div class="testcase" style="left:380px;top:70px;height:20px" title="small left to large right"></div>
<div class="testcase" style="left:480px;top:80px" title="bidi"></div>
<div class="testcase" style="left:440px;top:40px" title="bidi"></div>
<div class="testcase" style="left:260px;top:40px"></div>
<div class="testcase" style="left:300px;top:40px"></div>
<div class="testcase" style="left:240px;top:60px"></div>
<div class="testcase" style="left:280px;top:60px"></div>
<div class="testcase" style="left:320px;top:60px"></div>
<div class="testcase" style="left:260px;top:80px" title="full double set"></div>
<div class="testcase" style="left:300px;top:80px"></div>
<div class="testcase" style="left:240px;top:100px"></div>
<div class="testcase" style="left:280px;top:100px"></div>
<div class="testcase" style="left:320px;top:100px"></div>
<div class="testcase" style="left:260px;top:120px"></div>
<div class="testcase" style="left:300px;top:120px"></div>
<div class="testcase" style="left:520px;top:60px;height:40px" title="s-plum&shy;bing anchor"></div>
<div class="testcase" style="left:600px;top:60px;height:40px" title="u-plum&shy;bing anchor"></div>
<div class="testcase" style="left:120px;top:40px" title="up then right"></div>
<div class="testcase" style="left:200px;top:40px" title="up then left"></div>
<div class="testcase" style="left:120px;top:120px" title="down then right"></div>
<div class="testcase" style="left:200px;top:120px" title="down then left"></div>
<div class="testcase" style="left:180px;top:160px" title="offset parent moved"></div>
<div class="relative" style="position:relative;left:40px;top:0px">
	<table>
		<tr>
			<td class="outer" />
			<td class="outer inner" />
			<td class="inner" />
	</table>
	<div class="testcase" style="left:40px;top:20px" title="within root"></div>
	<div class="testcase" style="left:80px;top:20px" title="within relative"></div>
</div>
<div class="absolute" style="position:absolute;left:180px;top:190px">
	<table>
		<tr>
			<td class="outer" />
			<td class="outer inner" />
			<td class="inner" />
	</table>
	<div class="testcase" style="left:40px;top:10px" title="within root"></div>
	<div class="testcase" style="left:80px;top:10px" title="within absolute"></div>
</div>
<table>
	<tr>
		<td class="bc top left" title="border classes" />
		<td class="bc top right" />
	<tr>
		<td class="bc bottom left" />
		<td class="bc bottom right" />
</table>
<h1>jQuery Connections Test Pattern</h1>
<p>red areas indicate failure</p>
<button onclick="benchmark();$(this).hide();">benchmark</button>