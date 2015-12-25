mui.init({
	swipeBack: true //启用右滑关闭功能
});
mui('.mui-scroll-wrapper').scroll();
mui("#slider").slider({
	interval: 1000
});
mui("#scrollToTop").on("tap", ".scroll_to_top", function() {
	mui('#mui_scroll_wrapper').scroll().scrollTo(0, 0);
});
mui("#scrollToBottom").on("tap", ".scroll_to_bottom", function() {
	mui('#mui_scroll_wrapper').scroll().scrollToBottom();
});