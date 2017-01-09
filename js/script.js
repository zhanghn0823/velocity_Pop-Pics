$(function() {
	var container = $('.container'),
		box = $(".box"),
		avatar = $('.avatar'),
		pop = $('.pop'),
		open = $('.btn'),
		close = $('.close'),
		imgs = pop.find('img');
	//自定义动画
	$.Velocity.RegisterUI('zhn.slideUpIn', {
		defaultDuration: 500,
		calls: [
			[{
				opacity: [1, 0],
				translateY: [0, 100]
			}]
		]
	});

	$.Velocity.RegisterUI('zhn.slideDownOut', {
		defaultDuration: 300,
		calls: [
			[{
				opacity: [0, 1],
				translateY: [100, 0]
			}]
		]
	});
	$.Velocity.RegisterUI('zhn.scaleIn', {
		defaultDuration: 300,
		calls: [
			[{
				opacity: [1, 0], //结束 是1  开始是0
				scale: [1, 0.3]
			}]
		]
	});
	$.Velocity.RegisterUI('zhn.scaleOut', {
		defaultDuration: 300,
		calls: [
			[{
				opacity: [0, 1], //开始 是1  结束是0
				scale: [.3, 1]
			}]
		]
	});
	
	//动画序列

	var seqInit = [{
			elements: container,
			properties: 'zhn.slideUpIn',
			options: {
				delay: 300
			}
		}, {
			elements: box,
			properties: 'zhn.slideUpIn',
			options: {

			}
		}, {
			elements: avatar,
			properties: 'zhn.slideUpIn',
			options: {
				sequenceQueue: false,
				delay: 60
			}
		}

	];
	

	var seqClick = [{
			elements: container,
			properties: 'zhn.slideDownOut'
		}, {
			elements: box,
			properties: 'zhn.slideDownOut',
			options: {
				sequenceQueue: false
			}
		}, {
			elements: container,
			properties: 'zhn.slideUpIn'
		}, {
			elements: pop,
			properties: 'zhn.slideUpIn',
			options: {
				sequenceQueue: false
			}
		}, {
			elements: imgs,
			properties: 'zhn.scaleIn',

		}

	];
	var seqClose = [{
			elements: imgs,
			properties: 'zhn.scaleOut',

		}, {
			elements: container,
			properties: 'zhn.slideDownOut'
		}, {
			elements: pop,
			properties: 'zhn.slideDownOut',
			options: {
				sequenceQueue: false
			}
		}, {
			elements: container,
			properties: 'zhn.slideUpIn'
		}, {
			elements: box,
			properties: 'zhn.slideUpIn',
			options: {
				sequenceQueue: false
			}
		}

	];
	
	
	$.Velocity.RunSequence(seqInit);
	
	open.on('click', function() {
		$.Velocity.RunSequence(seqClick);
	});
	
	close.on('click', function() {
		$.Velocity.RunSequence(seqClose);
	})
})








var bgmBtn=document.getElementById('bgmBtn');
var bgm=document.getElementById("bgm");
 bgmBtn.addEventListener('click',function(){
   	if(bgm.paused==true){
   		bgm.play();
   	}else{
   		bgm.pause();
   	}
 })
