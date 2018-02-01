

			var elementPositionSet=false, footerChanged=false;
			if(screen.width<768){
				$(".screen-3 > .basic-block-two").after($(".s3-list"));
				$(".s3-list").after($(".s3-create-acc-btn"));
				elementPositionSet=true;
			}
			if (screen.width > 768) {
				document.getElementById("viewport").setAttribute("content", "width=1440");
				if(footerChanged){
					var strDiv1Cont = $("#logo-footer").html();
					var strDiv2Cont = $("#copyright-block").html();

					$("#logo-footer").html(strDiv2Cont);
					$("#copyright-block").html(strDiv1Cont);
					footerChanged=false;
				}
			}
			else if (screen.width < 525){
				if(!footerChanged){
					var strDiv1Cont = $("#logo-footer").html();
					var strDiv2Cont = $("#copyright-block").html();

					$("#logo-footer").html(strDiv2Cont);
					$("#copyright-block").html(strDiv1Cont);
					footerChanged=true;
				}

				document.getElementById("viewport").setAttribute("content", "width=425");
			}
			else{
				document.getElementById("viewport").setAttribute("content", "width=device-width");
				if(footerChanged){
					var strDiv1Cont = $("#logo-footer").html();
					var strDiv2Cont = $("#copyright-block").html();

					$("#logo-footer").html(strDiv2Cont);
					$("#copyright-block").html(strDiv1Cont);
					footerChanged=false;
				}
			}
			
			$( window ).resize(function() {

				if(screen.width<768 && !elementPositionSet){
					$(".screen-3 > .basic-block-two").after($(".s3-list"));
					$(".s3-list").after($(".s3-create-acc-btn"));
					elementPositionSet=true;
				}
				if(screen.width>768 && elementPositionSet){
					$(".screen-3 >.basic-block-one> .header-text").after($(".s3-list"));
					$(".s3-list").after($(".s3-create-acc-btn"));
					elementPositionSet=false;
				}

				if (screen.width > 768) {
					document.getElementById("viewport").setAttribute("content", "width=1440");
					if(footerChanged){
						var strDiv1Cont = $("#logo-footer").html();
						var strDiv2Cont = $("#copyright-block").html();

						$("#logo-footer").html(strDiv2Cont);
						$("#copyright-block").html(strDiv1Cont);
						footerChanged=false;
					}
				}
				else if (screen.width < 525){
				
					document.getElementById("viewport").setAttribute("content", "width=425");
					if(!footerChanged){
						var strDiv1Cont = $("#logo-footer").html();
						var strDiv2Cont = $("#copyright-block").html();

						$("#logo-footer").html(strDiv2Cont);
						$("#copyright-block").html(strDiv1Cont);
						footerChanged=true;
					}
				}
				else{
					document.getElementById("viewport").setAttribute("content", "width=device-width");
					if(footerChanged){
						var strDiv1Cont = $("#logo-footer").html();
						var strDiv2Cont = $("#copyright-block").html();

						$("#logo-footer").html(strDiv2Cont);
						$("#copyright-block").html(strDiv1Cont);
						footerChanged=false;
					}
				}
			});
					

			

			$(".under-menu").hide();
			$(".user-block").hide();

			var ActiveSubMenu="";


			$(".triangle").on("click",function() {

				$(".under-menu").css("top", $(".menu").height());

				if(ActiveSubMenu == ""){

					$("."+$(this).parent().attr('id')+" > ul").css("margin-left", $("#"+$(this).parent().attr('id')).offset().left-15);

					$("#"+$(this).parent().attr('id')).addClass("active");

					$("#"+$(this).parent().attr('id')+">.triangle").addClass("reversed");

					$("."+$(this).parent().attr('id')).slideDown(500);

					ActiveSubMenu=$(this).parent().attr('id');

				}

				else if(ActiveSubMenu !=$(this).parent().attr('id')){
					$("."+$(this).parent().attr('id')+" > ul").css("margin-left", $("#"+$(this).parent().attr('id')).offset().left-15);

					$("#"+ActiveSubMenu+">.triangle").removeClass("reversed");

					$("#"+ActiveSubMenu).removeClass("active");

					$("."+ActiveSubMenu).slideUp(500);





					$("#"+$(this).parent().attr('id')+">.triangle").removeClass("reversed");

					$("#"+$(this).parent().attr('id')).addClass("active");

					$("#"+$(this).parent().attr('id')+">.triangle").addClass("reversed");

					$("."+$(this).parent().attr('id')).delay(500).slideDown(500);

					ActiveSubMenu=$(this).parent().attr('id');

				}

				else if(ActiveSubMenu == $(this).parent().attr('id')){

					$("#"+ActiveSubMenu+">.triangle").removeClass("reversed");

					$("#"+ActiveSubMenu).removeClass("active");

					$("."+ActiveSubMenu).slideUp(500);

					ActiveSubMenu="";

				}

			});

			$(".close").on("click",function() {

				$("#"+$(this).parent().attr('class').split(" ")[1]+">.triangle").removeClass("reversed");

				$("#"+$(this).parent().attr('class').split(" ")[1]).removeClass("active");

				$("."+$(this).parent().attr('class').split(" ")[1]).slideUp(500);

				ActiveSubMenu="";

			});

			let flag=0;
			$(".humburger").click(function(){
			   if (flag==0){
			 	$(".menu-mob-open").fadeIn();
			 	$(this).addClass("for-close");
			 	$("body").css("overflow-y", "hidden");
			    flag=1;
			}
			else {
					$(".menu-mob-open").fadeOut();
					$(this).removeClass("for-close");
					$("body").css("overflow-y", "visible");
					flag=0;
				}
			});

			function myHandler() {
			    $("#bgvid").animate({opacity:0},1000).animate({opacity:1},1000);
			}

			var runAtTime = function(handler, time) {
			     var wrapped = function() {
			         if(this.currentTime >= time) {
			             $(this).off('timeupdate', wrapped);
			             return handler.apply(this, arguments);
			        }
			     }
			    return wrapped;
			};

			$('#bgvid').on('timeupdate', runAtTime(myHandler, 14)); 
/*
			$(document).ready(function(){
				$('#bgvid').on('ended',function(){
			    	$('#bgvid').animate({opacity:0},500).animate({opacity: 1},500)
			    });
			});*/