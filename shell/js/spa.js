/*
*spa.js
*root namespace module
 */
var spa = (function(){
	var initModule = function( $container ){
		$container.html( '<h1 style="display:inline-block; margin:25px;">' + 'hello world' +'</h1>')
	}
	return { initModule : initModule } //返回spa名字空间中的对象，导出公开方法；此处导出了 initModule
}())