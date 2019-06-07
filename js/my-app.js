// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/medicinageneral/',
    	url: 'medicinageneral.html',
    	name: 'medicinageneral',
  		},
		{
		path: '/info.mariolopez/',
    	url: 'info.mariolopez.html',
    	name: 'info.mariolopez',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;





 

