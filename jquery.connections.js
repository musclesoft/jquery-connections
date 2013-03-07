(function($) {
	$.fn.connections = function(options) {
		if (options === 'update') {
			return updateConnections(this);
		} else {
			options = $.extend({
				'class': 'connection',
				css: {},
				from: this,
				tag: 'connection',
				to: this,
				within: ':root'
			}, options);
			connect(options);
			return this;
		}
	};

	var connect = function(options) {
		var tag = options.tag;
		var end1 = $(options.from);
		var end2 = $(options.to);
		var within = $(options.within);
		delete options.tag;
		delete options.from;
		delete options.to;
		delete options.within;
		within.each(function() {
			var container = this;
			var done = new Array();
			end1.each(function() {
				var node = this;
				done.push(this);
				end2.not(done).each(function() {
					createConnection(container, node, this, tag, options);
				});
			});
		});
	};

	var createConnection = function(container, node1, node2, tag, options) {
		var css = $.extend({ position: 'absolute' }, options.css);
		var connection = $('<' + tag + '/>', options).css(css);
		connection.appendTo(container);

		var border_w = (connection.outerWidth() - connection.innerWidth()) / 2;
		var border_h = (connection.outerHeight() - connection.innerHeight()) / 2;

		if (border_w <= 0 && border_h <= 0) {
			border_w = border_h = 1;
		}

		var data = {
			nodes: $(node1).add(node2),
			border_w: border_w,
			border_h: border_h,
			css: css
		}

		if ('none' == connection.css('border-top-style')) {
			data.css.borderStyle = 'solid';
		}
		$.data(connection.get(0), 'connection', data);
		$.data(connection.get(0), 'connections', [connection.get(0)]);
		$.data(node1, 'connections', connection.add($.data(node1, 'connections')).get());
		$.data(node2, 'connections', connection.add($.data(node2, 'connections')).get());
		update(connection.get(0));
	};

	var update = function(connection) {
		var data = $.data(connection, 'connection');
		var c = [data.nodes.get(0), data.nodes.get(1)];
		var cachesum = [
			c[0].offsetTop,
			c[0].offsetLeft,
			c[0].clientWidth,
			c[0].clientHeight,
			c[1].offsetTop,
			c[1].offsetLeft,
			c[1].clientWidth,
			c[1].clientHeight
		].toString();
		if (data.cachesum === cachesum) {
			return;
		}
		data.cachesum = cachesum;
		var is_hidden = (0 === (c[0].clientWidth | c[0].clientHeight)) || (0 === (c[1].clientWidth | c[1].clientHeight));
		var border_w = data.border_w;
		var border_h = data.border_h;
		var from_node = data.nodes.first();
		var to_node = data.nodes.last();
		var from = from_node.offset();
		var to = to_node.offset();
		from.bottom = from.top + from_node.outerHeight();
		to.bottom = to.top + to_node.outerHeight();
		from.right = from.left + from_node.outerWidth();
		to.right = to.left + to_node.outerWidth();
		var b = (from.bottom + from.top) / 2;
		var t = (to.bottom + to.top) / 2;
		var l = (from.left + from.right) / 2;
		var r = (to.left + to.right) / 2;

		var h = ['right', 'left'];
		if (l > r) {
			h = h.reverse();
			var x = Math.max(r - border_w / 2, Math.min(from.right, to.right));
			r = l + border_w / 2;
			l = x;
		} else {
			l -= border_w / 2;
			r = Math.min(r + border_w / 2, Math.max(from.left, to.left));
		}
		var v = ['bottom', 'top'];
		if (t > b) {
			v = v.reverse();
			var x = Math.max(b - border_h / 2, Math.min(from.bottom, to.bottom));
			b = t + border_h / 2;
			t = x;
		} else {
			b = Math.min(b, Math.max(from.top, to.top));
			t -= border_h / 2;
		}
		var width = r - l;
		var height = b - t;
		if (width < border_w) {
			t = Math.max(t, Math.min(from.bottom, to.bottom));
			b = Math.min(b, Math.max(from.top, to.top));
			l = Math.max(from.left, to.left);
			r = Math.min(from.right, to.right);
			r = l = (l + r - border_w) / 2;
		}
		if (height < border_h) {
			l = Math.max(l, Math.min(from.right, to.right));
			r = Math.min(r, Math.max(from.left, to.left));
			t = Math.max(from.top, to.top);
			b = Math.min(from.bottom, to.bottom);
			b = t = (t + b - border_h) / 2;
		}
		width = r - l;
		height = b - t;
		if (width <= 0) {
			border_h = 0;
		}
		if (height <= 0) {
			border_w = 0;
		}
		var style =
				'border-' + v[0] + '-' + h[0] + '-radius: 0;' +
				'border-' + v[0] + '-' + h[1] + '-radius: 0;' +
				'border-' + v[1] + '-' + h[0] + '-radius: 0;';
		if (border_h <= 0 || border_w <= 0) {
			style += 'border-' + v[1] + '-' + h[1] + '-radius: 0;';
		}
		is_hidden && (style += 'display: none;');
		var css = { left: l, top: t };
		css['border-' + v[0] + '-width'] = 0;
		css['border-' + h[0] + '-width'] = 0;
		css['border-' + v[1] + '-width'] = border_h;
		css['border-' + h[1] + '-width'] = border_w;
		$(connection).
				removeClass('connection-border-' + v[0] + ' connection-border-' + h[0]).
				addClass('connection-border-' + v[1] + ' connection-border-' + h[1]).
				attr('style', style).
				css(data.css).
				css(css).
				width(width - border_w).
				height(height - border_h);
	}

	var updateConnections = function(elements) {
		return elements.each(function() {
			var connections = $.data(this, 'connections');
			if (connections instanceof Array) {
				for (var i = 0, len = connections.length; i < len; i++) {
					update(connections[i]);
				}
			}
		});
	};
})(jQuery);