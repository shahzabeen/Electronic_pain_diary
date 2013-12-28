//Page 2 : No Pain - Front

var pain_p2 = new Object();
pain_p2.bool = 0; 

//Page 3 : No Pain - Back

var pain_p3 = new Object();
pain_p3.bool = 0;


//Page 16 : No Pain - Front

var pain_p16 = new Object();
pain_p16.bool = 0; 

//Page 17 : No Pain - Back

var pain_p17 = new Object();
pain_p17.bool = 0;

//Page 26 : No Pain - Front

var pain_p26 = new Object();
pain_p26.bool = 0; 

//Page 27 : No Pain - Back

var pain_p27 = new Object();
pain_p27.bool = 0;





// Image

////Daily Exercise - Body location Front 

////// Body location - Head Front

var head1 = new Image();
head1.bool = "normal"; 

var head2 = new Image();
head2.bool = "normal"; 


//head 1

//normal 
function headFrontDaily_1(){

	 document.getElementById("head_d_red").style.visibility="visible";
	 document.getElementById("head_d_blue").style.visibility="visible";
	 head1.bool = "red"; 
	 head2.bool = "blue";
}

//red 
function headFrontDaily_2(){

	 document.getElementById("head_d_red").style.visibility="hidden";
	 head1.bool = "normal"; 
 }

//head 2

//normal
function headFrontDaily_3(){

		document.getElementById("head_d_blue").style.visibility="visible";
		head2.bool = "blue";
		
}
 
//blue
function headFrontDaily_4(){

	if(head1.bool == "red")
	{
	    return head2.bool; 
	}
	 
	else
	{	 
		document.getElementById("head_d_blue").style.visibility="hidden";
		head2.bool = "normal";
	}
			
 }


//// Body location - Neck

//// Body location - Right shoulder


var rightShd1 = new Image();
rightShd1.bool = "normal"; 

var rightShd2 = new Image();
rightShd2.bool = "normal";
 

//Right shoulder 1

//normal 
function rShdFrontDaily_1(){

	 document.getElementById("rightshoulder_d_red").style.visibility="visible";
	 document.getElementById("rightshoulder_d_blue").style.visibility="visible";
	 rightShd1.bool = "red"; 
	 rightShd2.bool = "blue";
}

//red 
function rShdFrontDaily_2(){

	 document.getElementById("rightshoulder_d_red").style.visibility="hidden";
	 rightShd1.bool = "normal"; 
 }


//Right shoulder 2

//normal
function rShdFrontDaily_3(){

		document.getElementById("rightshoulder_d_blue").style.visibility="visible";
		rightShd2.bool = "blue";
		
}
 
//blue
function rShdFrontDaily_4(){

	if(rightShd1.bool == "red")
	{
	    return rightShd2.bool; 
	}
	 
	else
	{	 
		document.getElementById("rightshoulder_d_blue").style.visibility="hidden";
		rightShd2.bool = "normal";
	}
			
 }
 
 
//// Body location - Left shoulder


var leftShd1 = new Image();
leftShd1.bool = "normal"; 

var leftShd2 = new Image();
leftShd2.bool = "normal";
 

//left shoulder 1

//normal 
function lShdFrontDaily_1(){

	 document.getElementById("leftshoulder_d_red").style.visibility="visible";
	 document.getElementById("leftshoulder_d_blue").style.visibility="visible";
	 leftShd1.bool = "red"; 
	 leftShd2.bool = "blue";
}

//red 
function lShdFrontDaily_2(){

	 document.getElementById("leftshoulder_d_red").style.visibility="hidden";
	 leftShd1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lShdFrontDaily_3(){

		document.getElementById("leftshoulder_d_blue").style.visibility="visible";
		leftShd2.bool = "blue";
		
}
 
//blue
function lShdFrontDaily_4(){

	if(leftShd1.bool == "red")
	{
	    return leftShd2.bool; 
	}
	 
	else
	{	 
		document.getElementById("leftshoulder_d_blue").style.visibility="hidden";
		leftShd2.bool = "normal";
	}
			
 }
 
//// Body location - Chest

var chest1 = new Image();
chest1.bool = "normal"; 

var check2 = new Image();
check2.bool = "normal";
 

//chest 1

//normal 
function chestFrontDaily_1(){

	 document.getElementById("chest_d_red").style.visibility="visible";
	 document.getElementById("chest_d_blue").style.visibility="visible";
	 chest1.bool = "red"; 
	 check2.bool = "blue";
}

//red 
function chestFrontDaily_2(){

	 document.getElementById("chest_d_red").style.visibility="hidden";
	 chest1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function chestFrontDaily_3(){

		document.getElementById("chest_d_blue").style.visibility="visible";
		check2.bool = "blue";
		
}
 
//blue
function chestFrontDaily_4(){

	if(chest1.bool == "red")
	{
	    return check2.bool; 
	}
	 
	else
	{	 
		document.getElementById("chest_d_blue").style.visibility="hidden";
		check2.bool = "normal";
	}
			
 }
 
 //// Body location - Abdomen

var abdomen1 = new Image();
abdomen1.bool = "normal"; 

var abdomen2 = new Image();
abdomen2.bool = "normal";
 

//chest 1

//normal 
function abdomenFrontDaily_1(){

	 document.getElementById("abdomen_d_red").style.visibility="visible";
	 document.getElementById("abdomen_d_blue").style.visibility="visible";
	 abdomen1.bool = "red"; 
	 abdomen2.bool = "blue";
}

//red 
function abdomenFrontDaily_2(){

	 document.getElementById("abdomen_d_red").style.visibility="hidden";
	 abdomen1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function abdomenFrontDaily_3(){

		document.getElementById("abdomen_d_blue").style.visibility="visible";
		abdomen2.bool = "blue";
		
}
 
//blue
function abdomenFrontDaily_4(){

	if(abdomen1.bool == "red")
	{
	    return abdomen2.bool; 
	}
	 
	else
	{	 
		document.getElementById("abdomen_d_blue").style.visibility="hidden";
		abdomen2.bool = "normal";
	}
			
 }
 

  //// Body location - Left Elbow

var lelbow1 = new Image();
lelbow1.bool = "normal"; 

var lelbow2 = new Image();
lelbow2.bool = "normal";
 

//chest 1

//normal 
function lElbowFrontDaily_1(){

	 document.getElementById("lelbow_d_red").style.visibility="visible";
	 document.getElementById("lelbow_d_blue").style.visibility="visible";
	 lelbow1.bool = "red"; 
	 lelbow2.bool = "blue";
}

//red 
function lElbowFrontDaily_2(){

	 document.getElementById("lelbow_d_red").style.visibility="hidden";
	 lelbow1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lElbowFrontDaily_3(){

		document.getElementById("lelbow_d_blue").style.visibility="visible";
		lelbow2.bool = "blue";
		
}
 
//blue
function lElbowFrontDaily_4(){

	if(lelbow1.bool == "red")
	{
	    return lelbow2.bool; 
	}
	 
	else
	{	 
		document.getElementById("lelbow_d_blue").style.visibility="hidden";
		lelbow2.bool = "normal";
	}
			
 }
 
 
 
  //// Body location - Right Elbow

var relbow1 = new Image();
relbow1.bool = "normal"; 

var relbow2 = new Image();
relbow2.bool = "normal";
 

//chest 1

//normal 
function rElbowFrontDaily_1(){

	 document.getElementById("relbow_d_red").style.visibility="visible";
	 document.getElementById("relbow_d_blue").style.visibility="visible";
	 relbow1.bool = "red"; 
	 relbow2.bool = "blue";
}

//red 
function rElbowFrontDaily_2(){

	 document.getElementById("relbow_d_red").style.visibility="hidden";
	 relbow1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rElbowFrontDaily_3(){

		document.getElementById("relbow_d_blue").style.visibility="visible";
		relbow2.bool = "blue";
		
}
 
//blue
function rElbowFrontDaily_4(){

	if(relbow1.bool == "red")
	{
	    return relbow2.bool; 
	}
	 
	else
	{	 
		document.getElementById("relbow_d_blue").style.visibility="hidden";
		relbow2.bool = "normal";
	}
			
 }
 
 
  //// Body location - Left Hand

var lhand1 = new Image();
lhand1.bool = "normal"; 

var lhand2 = new Image();
lhand2.bool = "normal";
 

//chest 1

//normal 
function lHandFrontDaily_1(){

	 document.getElementById("lhand_d_red").style.visibility="visible";
	 document.getElementById("lhand_d_blue").style.visibility="visible";
	 lhand1.bool = "red"; 
	 lhand2.bool = "blue";
}

//red 
function lHandFrontDaily_2(){

	 document.getElementById("lhand_d_red").style.visibility="hidden";
	 lhand1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lHandFrontDaily_3(){

		document.getElementById("lhand_d_blue").style.visibility="visible";
		lhand2.bool = "blue";
		
}
 
//blue
function lHandFrontDaily_4(){

	if(lhand1.bool == "red")
	{
	    return lhand2.bool; 
	}
	 
	else
	{	 
		document.getElementById("lhand_d_blue").style.visibility="hidden";
		lhand2.bool = "normal";
	}
			
 }
 
 

  //// Body location - Right Hand

var rhand1 = new Image();
rhand1.bool = "normal"; 

var rhand2 = new Image();
rhand2.bool = "normal";
 

//chest 1

//normal 
function rHandFrontDaily_1(){

	 document.getElementById("rhand_d_red").style.visibility="visible";
	 document.getElementById("rhand_d_blue").style.visibility="visible";
	 rhand1.bool = "red"; 
	 rhand2.bool = "blue";
}

//red 
function rHandFrontDaily_2(){

	 document.getElementById("rhand_d_red").style.visibility="hidden";
	 rhand1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rHandFrontDaily_3(){

		document.getElementById("rhand_d_blue").style.visibility="visible";
		rhand2.bool = "blue";
		
}
 
//blue
function rHandFrontDaily_4(){

	if(rhand1.bool == "red")
	{
	    return rhand2.bool; 
	}
	 
	else
	{	 
		document.getElementById("rhand_d_blue").style.visibility="hidden";
		rhand2.bool = "normal";
	}
			
 }

  //// Body location - Right Hip

var rhip1 = new Image();
rhip1.bool = "normal"; 

var rhip2 = new Image();
rhip2.bool = "normal";
 

//chest 1

//normal 
function rHipFrontDaily_1(){

	 document.getElementById("rhip_d_red").style.visibility="visible";
	 document.getElementById("rhip_d_blue").style.visibility="visible";
	 rhip1.bool = "red"; 
	 rhip2.bool = "blue";
}

//red 
function rHipFrontDaily_2(){

	 document.getElementById("rhip_d_red").style.visibility="hidden";
	 rhip1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rHipFrontDaily_3(){

		document.getElementById("rhip_d_blue").style.visibility="visible";
		rhip2.bool = "blue";
		
}
 
//blue
function rHipFrontDaily_4(){

	if(rhip1.bool == "red")
	{
	    return rhip2.bool; 
	}
	 
	else
	{	 
		document.getElementById("rhip_d_blue").style.visibility="hidden";
		rhip2.bool = "normal";
	}
			
 }
 

  //// Body location - Groin

var groin1 = new Image();
groin1.bool = "normal"; 

var groin2 = new Image();
groin2.bool = "normal";
 

//chest 1

//normal 
function groinFrontDaily_1(){

	 document.getElementById("groin_d_red").style.visibility="visible";
	 document.getElementById("groin_d_blue").style.visibility="visible";
	 groin1.bool = "red"; 
	 groin2.bool = "blue";
}

//red 
function groinFrontDaily_2(){

	 document.getElementById("groin_d_red").style.visibility="hidden";
	 groin1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function groinFrontDaily_3(){

		document.getElementById("groin_d_blue").style.visibility="visible";
		groin2.bool = "blue";
		
}
 
//blue
function groinFrontDaily_4(){

	if(groin1.bool == "red")
	{
	    return groin2.bool; 
	}
	 
	else
	{	 
		document.getElementById("groin_d_blue").style.visibility="hidden";
		groin2.bool = "normal";
	}
			
 } 
 
 
 
  //// Body location - Left Hip

var lhip1 = new Image();
lhip1.bool = "normal"; 

var lhip2 = new Image();
lhip2.bool = "normal";
 

//chest 1

//normal 
function lHipFrontDaily_1(){

	 document.getElementById("lhip_d_red").style.visibility="visible";
	 document.getElementById("lhip_d_blue").style.visibility="visible";
	 lhip1.bool = "red"; 
	 lhip2.bool = "blue";
}

//red 
function lHipFrontDaily_2(){

	 document.getElementById("lhip_d_red").style.visibility="hidden";
	 lhip1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lHipFrontDaily_3(){

		document.getElementById("lhip_d_blue").style.visibility="visible";
		lhip2.bool = "blue";
		
}
 
//blue
function lHipFrontDaily_4(){

	if(lhip1.bool == "red")
	{
	    return lhip2.bool; 
	}
	 
	else
	{	 
		document.getElementById("lhip_d_blue").style.visibility="hidden";
		lhip2.bool = "normal";
	}
			
 }

  //// Body location - Right Leg

var rleg1 = new Image();
rleg1.bool = "normal"; 

var rleg2 = new Image();
rleg2.bool = "normal";
 

//chest 1

//normal 
function rLegFrontDaily_1(){

	 document.getElementById("rleg_d_red").style.visibility="visible";
	 document.getElementById("rleg_d_blue").style.visibility="visible";
	 rleg1.bool = "red"; 
	 rleg2.bool = "blue";
}

//red 
function rLegFrontDaily_2(){

	 document.getElementById("rleg_d_red").style.visibility="hidden";
	 rleg1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rLegFrontDaily_3(){

		document.getElementById("rleg_d_blue").style.visibility="visible";
		rleg2.bool = "blue";
		
}
 
//blue
function rLegFrontDaily_4(){

	if(rleg1.bool == "red")
	{
	    return rleg2.bool; 
	}
	 
	else
	{	 
		document.getElementById("rleg_d_blue").style.visibility="hidden";
		rleg2.bool = "normal";
	}
			
 }
 
  //// Body location - Left Leg

var lleg1 = new Image();
lleg1.bool = "normal"; 

var lleg2 = new Image();
lleg2.bool = "normal";
 

//chest 1

//normal 
function lLegFrontDaily_1(){

	 document.getElementById("lleg_d_red").style.visibility="visible";
	 document.getElementById("lleg_d_blue").style.visibility="visible";
	 lleg1.bool = "red"; 
	 lleg2.bool = "blue";
}

//red 
function lLegFrontDaily_2(){

	 document.getElementById("lleg_d_red").style.visibility="hidden";
	 lleg1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lLegFrontDaily_3(){

		document.getElementById("lleg_d_blue").style.visibility="visible";
		lleg2.bool = "blue";
		
}
 
//blue
function lLegFrontDaily_4(){

	if(lleg1.bool == "red")
	{
	    return lleg2.bool; 
	}
	 
	else
	{	 
		document.getElementById("lleg_d_blue").style.visibility="hidden";
		lleg2.bool = "normal";
	}
			
 } 
 
 
//// Body location - Left Foot

var lfoot1 = new Image();
lfoot1.bool = "normal"; 

var lfoot2 = new Image();
lfoot2.bool = "normal";
 

//chest 1

//normal 
function lFootFrontDaily_1(){

	 document.getElementById("lfoot_d_red").style.visibility="visible";
	 document.getElementById("lfoot_d_blue").style.visibility="visible";
	 lfoot1.bool = "red"; 
	 lfoot2.bool = "blue";
}

//red 
function lFootFrontDaily_2(){

	 document.getElementById("lfoot_d_red").style.visibility="hidden";
	 lfoot1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lFootFrontDaily_3(){

		document.getElementById("lfoot_d_blue").style.visibility="visible";
		lfoot2.bool = "blue";
		
}
 
//blue
function lFootFrontDaily_4(){

	if(lfoot1.bool == "red")
	{
	    return lfoot2.bool; 
	}
	 
	else
	{	 
		document.getElementById("lfoot_d_blue").style.visibility="hidden";
		lfoot2.bool = "normal";
	}
			
 } 

 
//// Body location - Right Foot

var rfoot1 = new Image();
rfoot1.bool = "normal"; 

var rfoot2 = new Image();
rfoot2.bool = "normal";
 

//chest 1

//normal 
function rFootFrontDaily_1(){

	 document.getElementById("rfoot_d_red").style.visibility="visible";
	 document.getElementById("rfoot_d_blue").style.visibility="visible";
	 rfoot1.bool = "red"; 
	 rfoot2.bool = "blue";
}

//red 
function rFootFrontDaily_2(){

	 document.getElementById("rfoot_d_red").style.visibility="hidden";
	 rfoot1.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rFootFrontDaily_3(){

		document.getElementById("rfoot_d_blue").style.visibility="visible";
		rfoot2.bool = "blue";
		
}
 
//blue
function rFootFrontDaily_4(){

	if(rfoot1.bool == "red")
	{
	    return rfoot2.bool; 
	}
	 
	else
	{	 
		document.getElementById("rfoot_d_blue").style.visibility="hidden";
		rfoot2.bool = "normal";
	}
			
 }
 
 
//Back


// Image

////Daily Exercise - Body location Back

////// Body location - Head Back

var head1_back = new Image();
head1_back.bool = "normal"; 

var head2_back = new Image();
head2_back.bool = "normal"; 


//head 1

//normal 
function headBackDaily_1(){

	 document.getElementById("head_d_red_back").style.visibility="visible";
	 document.getElementById("head_d_blue_back").style.visibility="visible";
	 head1_back.bool = "red"; 
	 head2_back.bool = "blue";
}

//red 
function headBackDaily_2(){

	 document.getElementById("head_d_red_back").style.visibility="hidden";
	 head1_back.bool = "normal"; 
 }

//head 2

//normal
function headBackDaily_3(){

		document.getElementById("head_d_blue_back").style.visibility="visible";
		head2_back.bool = "blue";
		
}
 
//blue
function headBackDaily_4(){

	if(head1_back.bool == "red")
	{
	    return head2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("head_d_blue_back").style.visibility="hidden";
		head2_back.bool = "normal";
	}
			
 }


//// Body location - Neck

//// Body location - Right shoulder


var rightShd1_back = new Image();
rightShd1_back.bool = "normal"; 

var rightShd2_back = new Image();
rightShd2_back.bool = "normal";
 

//Right shoulder 1

//normal 
function rShdBackDaily_1(){

	 document.getElementById("rightshoulder_d_red_back").style.visibility="visible";
	 document.getElementById("rightshoulder_d_blue_back").style.visibility="visible";
	 rightShd1_back.bool = "red"; 
	 rightShd2_back.bool = "blue";
}

//red 
function rShdBackDaily_2(){

	 document.getElementById("rightshoulder_d_red_back").style.visibility="hidden";
	 rightShd1_back.bool = "normal"; 
 }


//Right shoulder 2

//normal
function rShdBackDaily_3(){

		document.getElementById("rightshoulder_d_blue_back").style.visibility="visible";
		rightShd2_back.bool = "blue";
		
}
 
//blue
function rShdBackDaily_4(){

	if(rightShd1_back.bool == "red")
	{
	    return rightShd2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("rightshoulder_d_blue_back").style.visibility="hidden";
		rightShd2_back.bool = "normal";
	}
			
 }
 
 
//// Body location - Left shoulder


var leftShd1_back = new Image();
leftShd1_back.bool = "normal"; 

var leftShd2_back = new Image();
leftShd2_back.bool = "normal";
 

//left shoulder 1

//normal 
function lShdBackDaily_1(){

	 document.getElementById("leftshoulder_d_red_back").style.visibility="visible";
	 document.getElementById("leftshoulder_d_blue_back").style.visibility="visible";
	 leftShd1_back.bool = "red"; 
	 leftShd2_back.bool = "blue";
}

//red 
function lShdBackDaily_2(){

	 document.getElementById("leftshoulder_d_red_back").style.visibility="hidden";
	 leftShd1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lShdBackDaily_3(){

		document.getElementById("leftshoulder_d_blue_back").style.visibility="visible";
		leftShd2_back.bool = "blue";
		
}
 
//blue
function lShdBackDaily_4(){

	if(leftShd1_back.bool == "red")
	{
	    return leftShd2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("leftshoulder_d_blue_back").style.visibility="hidden";
		leftShd2_back.bool = "normal";
	}
			
 }
 
//// Body location - Chest

var chest1_back = new Image();
chest1_back.bool = "normal"; 

var check2_back = new Image();
check2_back.bool = "normal";
 

//chest 1

//normal 
function chestBackDaily_1(){

	 document.getElementById("chest_d_red_back").style.visibility="visible";
	 document.getElementById("chest_d_blue_back").style.visibility="visible";
	 chest1_back.bool = "red"; 
	 check2_back.bool = "blue";
}

//red 
function chestBackDaily_2(){

	 document.getElementById("chest_d_red_back").style.visibility="hidden";
	 chest1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function chestBackDaily_3(){

		document.getElementById("chest_d_blue_back").style.visibility="visible";
		check2_back.bool = "blue";
		
}
 
//blue
function chestBackDaily_4(){

	if(chest1_back.bool == "red")
	{
	    return check2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("chest_d_blue_back").style.visibility="hidden";
		check2_back.bool = "normal";
	}
			
 }
 
 //// Body location - Abdomen

var abdomen1_back = new Image();
abdomen1_back.bool = "normal"; 

var abdomen2_back = new Image();
abdomen2_back.bool = "normal";
 

//chest 1

//normal 
function abdomenBackDaily_1(){

	 document.getElementById("abdomen_d_red_back").style.visibility="visible";
	 document.getElementById("abdomen_d_blue_back").style.visibility="visible";
	 abdomen1_back.bool = "red"; 
	 abdomen2_back.bool = "blue";
}

//red 
function abdomenBackDaily_2(){

	 document.getElementById("abdomen_d_red_back").style.visibility="hidden";
	 abdomen1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function abdomenBackDaily_3(){

		document.getElementById("abdomen_d_blue_back").style.visibility="visible";
		abdomen2_back.bool = "blue";
		
}
 
//blue
function abdomenBackDaily_4(){

	if(abdomen1_back.bool == "red")
	{
	    return abdomen2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("abdomen_d_blue_back").style.visibility="hidden";
		abdomen2_back.bool = "normal";
	}
			
 }
 

  //// Body location - Left Elbow

var lelbow1_back = new Image();
lelbow1_back.bool = "normal"; 

var lelbow2_back = new Image();
lelbow2_back.bool = "normal";
 

//chest 1

//normal 
function lElbowBackDaily_1(){

	 document.getElementById("lelbow_d_red_back").style.visibility="visible";
	 document.getElementById("lelbow_d_blue_back").style.visibility="visible";
	 lelbow1_back.bool = "red"; 
	 lelbow2_back.bool = "blue";
}

//red 
function lElbowBackDaily_2(){

	 document.getElementById("lelbow_d_red_back").style.visibility="hidden";
	 lelbow1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lElbowBackDaily_3(){

		document.getElementById("lelbow_d_blue_back").style.visibility="visible";
		lelbow2_back.bool = "blue";
		
}
 
//blue
function lElbowBackDaily_4(){

	if(lelbow1_back.bool == "red")
	{
	    return lelbow2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("lelbow_d_blue_back").style.visibility="hidden";
		lelbow2_back.bool = "normal";
	}
			
 }
 
 
 
  //// Body location - Right Elbow

var relbow1_back = new Image();
relbow1_back.bool = "normal"; 

var relbow2_back = new Image();
relbow2_back.bool = "normal";
 

//chest 1

//normal 
function rElbowBackDaily_1(){

	 document.getElementById("relbow_d_red_back").style.visibility="visible";
	 document.getElementById("relbow_d_blue_back").style.visibility="visible";
	 relbow1_back.bool = "red"; 
	 relbow2_back.bool = "blue";
}

//red 
function rElbowBackDaily_2(){

	 document.getElementById("relbow_d_red_back").style.visibility="hidden";
	 relbow1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rElbowBackDaily_3(){

		document.getElementById("relbow_d_blue_back").style.visibility="visible";
		relbow2_back.bool = "blue";
		
}
 
//blue
function rElbowBackDaily_4(){

	if(relbow1_back.bool == "red")
	{
	    return relbow2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("relbow_d_blue_back").style.visibility="hidden";
		relbow2_back.bool = "normal";
	}
			
 }
 
 
  //// Body location - Left Hand

var lhand1_back = new Image();
lhand1_back.bool = "normal"; 

var lhand2_back = new Image();
lhand2_back.bool = "normal";
 

//chest 1

//normal 
function lHandBackDaily_1(){

	 document.getElementById("lhand_d_red_back").style.visibility="visible";
	 document.getElementById("lhand_d_blue_back").style.visibility="visible";
	 lhand1_back.bool = "red"; 
	 lhand2_back.bool = "blue";
}

//red 
function lHandBackDaily_2(){

	 document.getElementById("lhand_d_red_back").style.visibility="hidden";
	 lhand1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lHandBackDaily_3(){

		document.getElementById("lhand_d_blue_back").style.visibility="visible";
		lhand2_back.bool = "blue";
		
}
 
//blue
function lHandBackDaily_4(){

	if(lhand1_back.bool == "red")
	{
	    return lhand2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("lhand_d_blue_back").style.visibility="hidden";
		lhand2_back.bool = "normal";
	}
			
 }
 
 

  //// Body location - Right Hand

var rhand1_back = new Image();
rhand1_back.bool = "normal"; 

var rhand2_back = new Image();
rhand2_back.bool = "normal";
 

//chest 1

//normal 
function rHandBackDaily_1(){

	 document.getElementById("rhand_d_red_back").style.visibility="visible";
	 document.getElementById("rhand_d_blue_back").style.visibility="visible";
	 rhand1_back.bool = "red"; 
	 rhand2_back.bool = "blue";
}

//red 
function rHandBackDaily_2(){

	 document.getElementById("rhand_d_red_back").style.visibility="hidden";
	 rhand1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rHandBackDaily_3(){

		document.getElementById("rhand_d_blue_back").style.visibility="visible";
		rhand2_back.bool = "blue";
		
}
 
//blue
function rHandBackDaily_4(){

	if(rhand1_back.bool == "red")
	{
	    return rhand2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("rhand_d_blue_back").style.visibility="hidden";
		rhand2_back.bool = "normal";
	}
			
 }

  //// Body location - Right Hip

var rhip1_back = new Image();
rhip1_back.bool = "normal"; 

var rhip2_back = new Image();
rhip2_back.bool = "normal";
 

//chest 1

//normal 
function rHipBackDaily_1(){

	 document.getElementById("rhip_d_red_back").style.visibility="visible";
	 document.getElementById("rhip_d_blue_back").style.visibility="visible";
	 rhip1_back.bool = "red"; 
	 rhip2_back.bool = "blue";
}

//red 
function rHipBackDaily_2(){

	 document.getElementById("rhip_d_red_back").style.visibility="hidden";
	 rhip1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rHipBackDaily_3(){

		document.getElementById("rhip_d_blue_back").style.visibility="visible";
		rhip2_back.bool = "blue";
		
}
 
//blue
function rHipBackDaily_4(){

	if(rhip1_back.bool == "red")
	{
	    return rhip2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("rhip_d_blue_back").style.visibility="hidden";
		rhip2_back.bool = "normal";
	}
			
 }
 

  //// Body location - Back

var back1_back = new Image();
back1_back.bool = "normal"; 

var back2_back = new Image();
back2_back.bool = "normal";
 

//chest 1

//normal 
function backBackDaily_1(){

	 document.getElementById("back_d_red_back").style.visibility="visible";
	 document.getElementById("back_d_blue_back").style.visibility="visible";
	 back1_back.bool = "red"; 
	 back2_back.bool = "blue";
}

//red 
function backBackDaily_2(){

	 document.getElementById("back_d_red_back").style.visibility="hidden";
	 back1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function backBackDaily_3(){

		document.getElementById("back_d_blue_back").style.visibility="visible";
		back2_back.bool = "blue";
		
}
 
//blue
function backBackDaily_4(){

	if(back1_back.bool == "red")
	{
	    return back2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("back_d_blue_back").style.visibility="hidden";
		back2_back.bool = "normal";
	}
			
 } 
 
 
 
  //// Body location - Left Hip

var lhip1_back = new Image();
lhip1_back.bool = "normal"; 

var lhip2_back = new Image();
lhip2_back.bool = "normal";
 

//chest 1

//normal 
function lHipBackDaily_1(){

	 document.getElementById("lhip_d_red_back").style.visibility="visible";
	 document.getElementById("lhip_d_blue_back").style.visibility="visible";
	 lhip1_back.bool = "red"; 
	 lhip2_back.bool = "blue";
}

//red 
function lHipBackDaily_2(){

	 document.getElementById("lhip_d_red_back").style.visibility="hidden";
	 lhip1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lHipBackDaily_3(){

		document.getElementById("lhip_d_blue_back").style.visibility="visible";
		lhip2_back.bool = "blue";
		
}
 
//blue
function lHipBackDaily_4(){

	if(lhip1_back.bool == "red")
	{
	    return lhip2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("lhip_d_blue_back").style.visibility="hidden";
		lhip2_back.bool = "normal";
	}
			
 }

  //// Body location - Right Leg

var rleg1_back = new Image();
rleg1_back.bool = "normal"; 

var rleg2_back = new Image();
rleg2_back.bool = "normal";
 

//chest 1

//normal 
function rLegBackDaily_1(){

	 document.getElementById("rleg_d_red_back").style.visibility="visible";
	 document.getElementById("rleg_d_blue_back").style.visibility="visible";
	 rleg1_back.bool = "red"; 
	 rleg2_back.bool = "blue";
}

//red 
function rLegBackDaily_2(){

	 document.getElementById("rleg_d_red_back").style.visibility="hidden";
	 rleg1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rLegBackDaily_3(){

		document.getElementById("rleg_d_blue_back").style.visibility="visible";
		rleg2_back.bool = "blue";
		
}
 
//blue
function rLegBackDaily_4(){

	if(rleg1_back.bool == "red")
	{
	    return rleg2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("rleg_d_blue_back").style.visibility="hidden";
		rleg2_back.bool = "normal";
	}
			
 }
 
  //// Body location - Left Leg

var lleg1_back = new Image();
lleg1_back.bool = "normal"; 

var lleg2_back = new Image();
lleg2_back.bool = "normal";
 

//chest 1

//normal 
function lLegBackDaily_1(){

	 document.getElementById("lleg_d_red_back").style.visibility="visible";
	 document.getElementById("lleg_d_blue_back").style.visibility="visible";
	 lleg1_back.bool = "red"; 
	 lleg2_back.bool = "blue";
}

//red 
function lLegBackDaily_2(){

	 document.getElementById("lleg_d_red_back").style.visibility="hidden";
	 lleg1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lLegBackDaily_3(){

		document.getElementById("lleg_d_blue_back").style.visibility="visible";
		lleg2_back.bool = "blue";
		
}
 
//blue
function lLegBackDaily_4(){

	if(lleg1_back.bool == "red")
	{
	    return lleg2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("lleg_d_blue_back").style.visibility="hidden";
		lleg2_back.bool = "normal";
	}
			
 } 
 
 
//// Body location - Left Foot

var lfoot1_back = new Image();
lfoot1_back.bool = "normal"; 

var lfoot2_back = new Image();
lfoot2_back.bool = "normal";
 

//chest 1

//normal 
function lFootBackDaily_1(){

	 document.getElementById("lfoot_d_red_back").style.visibility="visible";
	 document.getElementById("lfoot_d_blue_back").style.visibility="visible";
	 lfoot1_back.bool = "red"; 
	 lfoot2_back.bool = "blue";
}

//red 
function lFootBackDaily_2(){

	 document.getElementById("lfoot_d_red_back").style.visibility="hidden";
	 lfoot1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function lFootBackDaily_3(){

		document.getElementById("lfoot_d_blue_back").style.visibility="visible";
		lfoot2_back.bool = "blue";
		
}
 
//blue
function lFootBackDaily_4(){

	if(lfoot1_back.bool == "red")
	{
	    return lfoot2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("lfoot_d_blue_back").style.visibility="hidden";
		lfoot2_back.bool = "normal";
	}
			
 } 

 
//// Body location - Right Foot

var rfoot1_back = new Image();
rfoot1_back.bool = "normal"; 

var rfoot2_back = new Image();
rfoot2_back.bool = "normal";
 

//chest 1

//normal 
function rFootBackDaily_1(){

	 document.getElementById("rfoot_d_red_back").style.visibility="visible";
	 document.getElementById("rfoot_d_blue_back").style.visibility="visible";
	 rfoot1_back.bool = "red"; 
	 rfoot2_back.bool = "blue";
}

//red 
function rFootBackDaily_2(){

	 document.getElementById("rfoot_d_red_back").style.visibility="hidden";
	 rfoot1_back.bool = "normal"; 
 }


//Left shoulder 2

//normal
function rFootBackDaily_3(){

		document.getElementById("rfoot_d_blue_back").style.visibility="visible";
		rfoot2_back.bool = "blue";
		
}
 
//blue
function rFootBackDaily_4(){

	if(rfoot1_back.bool == "red")
	{
	    return rfoot2_back.bool; 
	}
	 
	else
	{	 
		document.getElementById("rfoot_d_blue_back").style.visibility="hidden";
		rfoot2_back.bool = "normal";
	}
			
 }
 

 // Image

////Before Exercise - Body location Front 

////// Body location - Head Front

var head1_b = new Image();
head1_b.bool = "normal"; 


//normal 
function headFrontDaily_1_b(){

	 document.getElementById("head_d_red_b").style.visibility="visible";
	 head1_b.bool = "red"; 

}

//red 
function headFrontDaily_2_b(){

	 document.getElementById("head_d_red_b").style.visibility="hidden";
	 head1_b.bool = "normal"; 
 }



//// Body location - Right shoulder


var rightShd1_b = new Image();
rightShd1_b.bool = "normal"; 

 

//Right shoulder 1

//normal 
function rShdFrontDaily_1_b(){

	 document.getElementById("rightshoulder_d_red_b").style.visibility="visible";
	 rightShd1_b.bool = "red"; 

}

//red 
function rShdFrontDaily_2_b(){

	 document.getElementById("rightshoulder_d_red_b").style.visibility="hidden";
	 rightShd1_b.bool = "normal"; 
 }

 
//// Body location - Left shoulder


var leftShd1_b = new Image();
leftShd1_b.bool = "normal"; 


//left shoulder 1

//normal 
function lShdFrontDaily_1_b(){

	 document.getElementById("leftshoulder_d_red_b").style.visibility="visible";
	 leftShd1_b.bool = "red"; 

}

//red 
function lShdFrontDaily_2_b(){

	 document.getElementById("leftshoulder_d_red_b").style.visibility="hidden";
	 leftShd1_b.bool = "normal"; 
 }

 
//// Body location - Chest

var chest1_b = new Image();
chest1_b.bool = "normal"; 




//normal 
function chestFrontDaily_1_b(){

	 document.getElementById("chest_d_red_b").style.visibility="visible";
	 chest1_b.bool = "red"; 

}

//red 
function chestFrontDaily_2_b(){

	 document.getElementById("chest_d_red_b").style.visibility="hidden";
	 chest1_b.bool = "normal"; 
 }


//Left shoulder 2

 
 //// Body location - Abdomen

var abdomen1_b = new Image();
abdomen1_b.bool = "normal"; 



//normal 
function abdomenFrontDaily_1_b(){

	 document.getElementById("abdomen_d_red_b").style.visibility="visible";
	 abdomen1_b.bool = "red"; 

}

//red 
function abdomenFrontDaily_2_b(){

	 document.getElementById("abdomen_d_red_b").style.visibility="hidden";
	 abdomen1_b.bool = "normal"; 
 }


//// Body location - Left Elbow

var lelbow1_b = new Image();
lelbow1_b.bool = "normal"; 


//normal 
function lElbowFrontDaily_1_b(){

	 document.getElementById("lelbow_d_red_b").style.visibility="visible";
	 lelbow1_b.bool = "red"; 

}

//red 
function lElbowFrontDaily_2_b(){

	 document.getElementById("lelbow_d_red_b").style.visibility="hidden";
	 lelbow1_b.bool = "normal"; 
 }

 
  //// Body location - Right Elbow

var relbow1_b = new Image();
relbow1_b.bool = "normal"; 


//normal 
function rElbowFrontDaily_1_b(){

	 document.getElementById("relbow_d_red_b").style.visibility="visible";
	 //document.getElementById("relbow_d_blue_b").style.visibility="visible";
	 relbow1_b.bool = "red"; 
	 //relbow2_b.bool = "blue";
}

//red 
function rElbowFrontDaily_2_b(){

	 document.getElementById("relbow_d_red_b").style.visibility="hidden";
	 relbow1_b.bool = "normal"; 
 }


 
  //// Body location - Left Hand

var lhand1_b = new Image();
lhand1_b.bool = "normal"; 



//normal 
function lHandFrontDaily_1_b(){

	 document.getElementById("lhand_d_red_b").style.visibility="visible";
	 lhand1_b.bool = "red"; 

}

//red 
function lHandFrontDaily_2_b(){

	 document.getElementById("lhand_d_red_b").style.visibility="hidden";
	 lhand1_b.bool = "normal"; 
 }

 

  //// Body location - Right Hand

var rhand1_b = new Image();
rhand1_b.bool = "normal"; 

//var rhand2_b = new Image();
//rhand2_b.bool = "normal";
 

//chest 1

//normal 
function rHandFrontDaily_1_b(){

	 document.getElementById("rhand_d_red_b").style.visibility="visible";
	 rhand1_b.bool = "red"; 

}

//red 
function rHandFrontDaily_2_b(){

	 document.getElementById("rhand_d_red_b").style.visibility="hidden";
	 rhand1_b.bool = "normal"; 
 }


//Left shoulder 2


  //// Body location - Right Hip

var rhip1_b = new Image();
rhip1_b.bool = "normal"; 

//var rhip2_b = new Image();
//rhip2_b.bool = "normal";
 

//chest 1

//normal 
function rHipFrontDaily_1_b(){

	 document.getElementById("rhip_d_red_b").style.visibility="visible";
	 rhip1_b.bool = "red"; 

}

//red 
function rHipFrontDaily_2_b(){

	 document.getElementById("rhip_d_red_b").style.visibility="hidden";
	 rhip1_b.bool = "normal"; 
 }


//Left shoulder 2


  //// Body location - Groin

var groin1_b = new Image();
groin1_b.bool = "normal"; 

//var groin2_b = new Image();
//groin2_b.bool = "normal";
 

//chest 1

//normal 
function groinFrontDaily_1_b(){

	 document.getElementById("groin_d_red_b").style.visibility="visible";
	 groin1_b.bool = "red"; 

}

//red 
function groinFrontDaily_2_b(){

	 document.getElementById("groin_d_red_b").style.visibility="hidden";
	 groin1_b.bool = "normal"; 
 }


//Left shoulder 2

 
 
  //// Body location - Left Hip

var lhip1_b = new Image();
lhip1_b.bool = "normal"; 

 

//chest 1

//normal 
function lHipFrontDaily_1_b(){

	 document.getElementById("lhip_d_red_b").style.visibility="visible";
	 lhip1_b.bool = "red"; 

}

//red 
function lHipFrontDaily_2_b(){

	 document.getElementById("lhip_d_red_b").style.visibility="hidden";
	 lhip1_b.bool = "normal"; 
 }


//Left shoulder 2


//// Body location - Right Leg

var rleg1_b = new Image();
rleg1_b.bool = "normal"; 


//normal 
function rLegFrontDaily_1_b(){

	 document.getElementById("rleg_d_red_b").style.visibility="visible";
	 rleg1_b.bool = "red"; 

}

//red 
function rLegFrontDaily_2_b(){

	 document.getElementById("rleg_d_red_b").style.visibility="hidden";
	 rleg1_b.bool = "normal"; 
 }

 
//// Body location - Left Leg

var lleg1_b = new Image();
lleg1_b.bool = "normal"; 


//normal 
function lLegFrontDaily_1_b(){

	 document.getElementById("lleg_d_red_b").style.visibility="visible";
	 lleg1_b.bool = "red"; 

}

//red 
function lLegFrontDaily_2_b(){

	 document.getElementById("lleg_d_red_b").style.visibility="hidden";
	 lleg1_b.bool = "normal"; 
 }

 
//// Body location - Left Foot

var lfoot1_b = new Image();
lfoot1_b.bool = "normal"; 


//normal 
function lFootFrontDaily_1_b(){

	 document.getElementById("lfoot_d_red_b").style.visibility="visible";
	 lfoot1_b.bool = "red"; 

}

//red 
function lFootFrontDaily_2_b(){

	 document.getElementById("lfoot_d_red_b").style.visibility="hidden";
	 lfoot1_b.bool = "normal"; 
 }


//// Body location - Right Foot

var rfoot1_b = new Image();
rfoot1_b.bool = "normal"; 

 

//chest 1

//normal 
function rFootFrontDaily_1_b(){

	 document.getElementById("rfoot_d_red_b").style.visibility="visible";
	 rfoot1_b.bool = "red"; 

}

//red 
function rFootFrontDaily_2_b(){

	 document.getElementById("rfoot_d_red_b").style.visibility="hidden";
	 rfoot1_b.bool = "normal"; 
 }



 
// Image

////Before Exercise - Body location Back

////// Body location - Head Back

var head1_back_b = new Image();
head1_back_b.bool = "normal"; 

//head 1

//normal 
function headBackDaily_1_b(){

	 document.getElementById("head_d_red_back_b").style.visibility="visible";
	 head1_back_b.bool = "red"; 

}

//red 
function headBackDaily_2_b(){

	 document.getElementById("head_d_red_back_b").style.visibility="hidden";
	 head1_back_b.bool = "normal"; 
 }


//// Body location - Right shoulder


var rightShd1_back_b = new Image();
rightShd1_back_b.bool = "normal"; 

 

//Right shoulder 1

//normal 
function rShdBackDaily_1_b(){

	 document.getElementById("rightshoulder_d_red_back_b").style.visibility="visible";
	 rightShd1_back.bool = "red"; 

}

//red 
function rShdBackDaily_2_b(){

	 document.getElementById("rightshoulder_d_red_back_b").style.visibility="hidden";
	 rightShd1_back_b.bool = "normal"; 
 }


 
//// Body location - Left shoulder


var leftShd1_back_b = new Image();
leftShd1_back_b.bool = "normal"; 

 

//left shoulder 1

//normal 
function lShdBackDaily_1_b(){

	 document.getElementById("leftshoulder_d_red_back_b").style.visibility="visible";
	 leftShd1_back_b.bool = "red"; 

}

//red 
function lShdBackDaily_2_b(){

	 document.getElementById("leftshoulder_d_red_back_b").style.visibility="hidden";
	 leftShd1_back_b.bool = "normal"; 
 }


 
//// Body location - Chest

var chest1_back_b = new Image();
chest1_back_b.bool = "normal"; 


//chest 1

//normal 
function chestBackDaily_1_b(){

	 document.getElementById("chest_d_red_back_b").style.visibility="visible";
	 chest1_back_b.bool = "red"; 

}

//red 
function chestBackDaily_2_b(){

	 document.getElementById("chest_d_red_back_b").style.visibility="hidden";
	 chest1_back_b.bool = "normal"; 
 }

 
 //// Body location - Abdomen

var abdomen1_back_b = new Image();
abdomen1_back_b.bool = "normal"; 

 

//chest 1

//normal 
function abdomenBackDaily_1_b(){

	 document.getElementById("abdomen_d_red_back_b").style.visibility="visible";
	 abdomen1_back_b.bool = "red"; 

}

//red 
function abdomenBackDaily_2_b(){

	 document.getElementById("abdomen_d_red_back_b").style.visibility="hidden";
	 abdomen1_back_b.bool = "normal"; 
 }


  //// Body location - Left Elbow

var lelbow1_back_b = new Image();
lelbow1_back_b.bool = "normal"; 

 

//chest 1

//normal 
function lElbowBackDaily_1_b(){

	 document.getElementById("lelbow_d_red_back_b").style.visibility="visible";
	 lelbow1_back_b.bool = "red"; 

}

//red 
function lElbowBackDaily_2_b(){

	 document.getElementById("lelbow_d_red_back_b").style.visibility="hidden";
	 lelbow1_back_b.bool = "normal"; 
 }

 
//// Body location - Right Elbow

var relbow1_back_b = new Image();
relbow1_back_b.bool = "normal"; 

//normal 
function rElbowBackDaily_1_b(){

	 document.getElementById("relbow_d_red_back_b").style.visibility="visible";
	 relbow1_back_b.bool = "red"; 

}

//red 
function rElbowBackDaily_2_b(){

	 document.getElementById("relbow_d_red_back_b").style.visibility="hidden";
	 relbow1_back_b.bool = "normal"; 
 }

 
//// Body location - Left Hand

var lhand1_back_b = new Image();
lhand1_back_b.bool = "normal"; 

//normal 
function lHandBackDaily_1_b(){

	 document.getElementById("lhand_d_red_back_b").style.visibility="visible";
	 lhand1_back_b.bool = "red"; 

}

//red 
function lHandBackDaily_2_b(){

	 document.getElementById("lhand_d_red_back_b").style.visibility="hidden";
	 lhand1_back_b.bool = "normal"; 
 }


  //// Body location - Right Hand

var rhand1_back_b = new Image();
rhand1_back_b.bool = "normal"; 


//normal 
function rHandBackDaily_1_b(){

	 document.getElementById("rhand_d_red_back_b").style.visibility="visible";
	 rhand1_back_b.bool = "red"; 

}

//red 
function rHandBackDaily_2_b(){

	 document.getElementById("rhand_d_red_back_b").style.visibility="hidden";
	 rhand1_back_b.bool = "normal"; 
 }


//// Body location - Right Hip

var rhip1_back_b = new Image();
rhip1_back_b.bool = "normal"; 



//normal 
function rHipBackDaily_1_b(){

	 document.getElementById("rhip_d_red_back_b").style.visibility="visible";
	 rhip1_back_b.bool = "red"; 

}

//red 
function rHipBackDaily_2_b(){

	 document.getElementById("rhip_d_red_back_b").style.visibility="hidden";
	 rhip1_back_b.bool = "normal"; 
 }



//// Body location - Back

var back1_back_b = new Image();
back1_back_b.bool = "normal"; 


//normal 
function backBackDaily_1_b(){

	 document.getElementById("back_d_red_back_b").style.visibility="visible";
	 document.getElementById("back_d_blue_back_b").style.visibility="visible";
	 back1_back_b.bool = "red"; 
	 back2_back_b.bool = "blue";
}

//red 
function backBackDaily_2_b(){

	 document.getElementById("back_d_red_back_b").style.visibility="hidden";
	 back1_back_b.bool = "normal"; 
 }


//// Body location - Left Hip

var lhip1_back_b = new Image();
lhip1_back_b.bool = "normal"; 


//normal 
function lHipBackDaily_1_b(){

	 document.getElementById("lhip_d_red_back_b").style.visibility="visible";
	 lhip1_back_b.bool = "red"; 

}

//red 
function lHipBackDaily_2_b(){

	 document.getElementById("lhip_d_red_back_b").style.visibility="hidden";
	 lhip1_back_b.bool = "normal"; 
 }


//// Body location - Right Leg

var rleg1_back_b = new Image();
rleg1_back_b.bool = "normal"; 



//normal 
function rLegBackDaily_1_b(){

	 document.getElementById("rleg_d_red_back_b").style.visibility="visible";
	 rleg1_back_b.bool = "red"; 

}

//red 
function rLegBackDaily_2_b(){

	 document.getElementById("rleg_d_red_back_b").style.visibility="hidden";
	 rleg1_back_b.bool = "normal"; 
 }


//// Body location - Left Leg

var lleg1_back_b = new Image();
lleg1_back_b.bool = "normal"; 


//normal 
function lLegBackDaily_1_b(){

	 document.getElementById("lleg_d_red_back_b").style.visibility="visible";
	 lleg1_back_b.bool = "red"; 

}

//red 
function lLegBackDaily_2_b(){

	 document.getElementById("lleg_d_red_back_b").style.visibility="hidden";
	 lleg1_back_b.bool = "normal"; 
 }

 
//// Body location - Left Foot

var lfoot1_back_b = new Image();
lfoot1_back_b.bool = "normal"; 


//normal 
function lFootBackDaily_1_b(){

	 document.getElementById("lfoot_d_red_back_b").style.visibility="visible";
	 lfoot1_back_b.bool = "red"; 

}

//red 
function lFootBackDaily_2_b(){

	 document.getElementById("lfoot_d_red_back_b").style.visibility="hidden";
	 lfoot1_back_b.bool = "normal"; 
 }


 
//// Body location - Right Foot

var rfoot1_back_b = new Image();
rfoot1_back_b.bool = "normal"; 


//normal 
function rFootBackDaily_1_b(){

	 document.getElementById("rfoot_d_red_back_b").style.visibility="visible";
	 rfoot1_back_b.bool = "red"; 

}

//red 
function rFootBackDaily_2_b(){

	 document.getElementById("rfoot_d_red_back_b").style.visibility="hidden";
	 rfoot1_back_b.bool = "normal"; 
 }

 
// Image

////After Exercise - Body location Front 

////// Body location - Head Front

var head1_a = new Image();
head1_a.bool = "normal"; 



//head 1

//normal 
function headFrontDaily_1_a(){

	 document.getElementById("head_d_red_a").style.visibility="visible";
	 head1_a.bool = "red"; 

}

//red 
function headFrontDaily_2_a(){

	 document.getElementById("head_d_red_a").style.visibility="hidden";
	 head1_a.bool = "normal"; 
 }


//// Body location - Right shoulder


var rightShd1_a = new Image();
rightShd1_a.bool = "normal"; 


//normal 
function rShdFrontDaily_1_a(){

	 document.getElementById("rightshoulder_d_red_a").style.visibility="visible";
	 rightShd1_a.bool = "red"; 
}

//red 
function rShdFrontDaily_2_a(){

	 document.getElementById("rightshoulder_d_red_a").style.visibility="hidden";
	 rightShd1_a.bool = "normal"; 
 }

 
 
//// Body location - Left shoulder


var leftShd1_a = new Image();
leftShd1_a.bool = "normal"; 


//normal 
function lShdFrontDaily_1_a(){

	 document.getElementById("leftshoulder_d_red_a").style.visibility="visible";
	 leftShd1_a.bool = "red"; 

}

//red 
function lShdFrontDaily_2_a(){

	 document.getElementById("leftshoulder_d_red_a").style.visibility="hidden";
	 leftShd1_a.bool = "normal"; 
 }

 
//// Body location - Chest

var chest1_a = new Image();
chest1_a.bool = "normal"; 


//normal 
function chestFrontDaily_1_a(){

	 document.getElementById("chest_d_red_a").style.visibility="visible";
	 chest1_a.bool = "red"; 

}

//red 
function chestFrontDaily_2_a(){

	 document.getElementById("chest_d_red_a").style.visibility="hidden";
	 chest1_a.bool = "normal"; 
 }


 
 //// Body location - Abdomen

var abdomen1_a = new Image();
abdomen1_a.bool = "normal"; 

//normal 
function abdomenFrontDaily_1_a(){

	 document.getElementById("abdomen_d_red_a").style.visibility="visible";
	 abdomen1_a.bool = "red"; 

}

//red 
function abdomenFrontDaily_2_a(){

	 document.getElementById("abdomen_d_red_a").style.visibility="hidden";
	 abdomen1_a.bool = "normal"; 
 }



//// Body location - Left Elbow

var lelbow1_a = new Image();
lelbow1_a.bool = "normal"; 



//normal 
function lElbowFrontDaily_1_a(){

	 document.getElementById("lelbow_d_red_a").style.visibility="visible";
	 lelbow1_a.bool = "red"; 

}

//red 
function lElbowFrontDaily_2_a(){

	 document.getElementById("lelbow_d_red_a").style.visibility="hidden";
	 lelbow1_a.bool = "normal"; 
 }
 
 
 //// Body location - Right Elbow

var relbow1_a = new Image();
relbow1_a.bool = "normal"; 


//normal 
function rElbowFrontDaily_1_a(){

	 document.getElementById("relbow_d_red_a").style.visibility="visible";
	 relbow1_a.bool = "red"; 
}

//red 
function rElbowFrontDaily_2_a(){

	 document.getElementById("relbow_d_red_a").style.visibility="hidden";
	 relbow1_a.bool = "normal"; 
 }
  
//// Body location - Left Hand

var lhand1_a = new Image();
lhand1_a.bool = "normal"; 

//normal 
function lHandFrontDaily_1_a(){

	 document.getElementById("lhand_d_red_a").style.visibility="visible";
	 lhand1_a.bool = "red"; 

}

//red 
function lHandFrontDaily_2_a(){

	 document.getElementById("lhand_d_red_a").style.visibility="hidden";
	 lhand1_a.bool = "normal"; 
 }

 
//// Body location - Right Hand

var rhand1_a = new Image();
rhand1_a.bool = "normal"; 


//normal 
function rHandFrontDaily_1_a(){

	 document.getElementById("rhand_d_red_a").style.visibility="visible";
	 rhand1_a.bool = "red"; 
}

//red 
function rHandFrontDaily_2_a(){

	 document.getElementById("rhand_d_red_a").style.visibility="hidden";
	 rhand1_a.bool = "normal"; 
 }


  //// Body location - Right Hip

var rhip1_a = new Image();
rhip1_a.bool = "normal"; 


//normal 
function rHipFrontDaily_1_a(){

	 document.getElementById("rhip_d_red_a").style.visibility="visible";
	 rhip1_a.bool = "red"; 

}

//red 
function rHipFrontDaily_2_a(){

	 document.getElementById("rhip_d_red_a").style.visibility="hidden";
	 rhip1_a.bool = "normal"; 
 }


//// Body location - Groin

var groin1_a = new Image();
groin1_a.bool = "normal"; 


//normal 
function groinFrontDaily_1_a(){

	 document.getElementById("groin_d_red_a").style.visibility="visible";
	 groin1_a.bool = "red"; 

}

//red 
function groinFrontDaily_2_a(){

	 document.getElementById("groin_d_red_a").style.visibility="hidden";
	 groin1_a.bool = "normal"; 
 }

 
 
//// Body location - Left Hip

var lhip1_a = new Image();
lhip1_a.bool = "normal"; 



//normal 
function lHipFrontDaily_1_a(){

	 document.getElementById("lhip_d_red_a").style.visibility="visible";
	 lhip1_a.bool = "red"; 

}

//red 
function lHipFrontDaily_2_a(){

	 document.getElementById("lhip_d_red_a").style.visibility="hidden";
	 lhip1_a.bool = "normal"; 
 }



//// Body location - Right Leg

var rleg1_a = new Image();
rleg1_a.bool = "normal"; 


//normal 
function rLegFrontDaily_1_a(){

	 document.getElementById("rleg_d_red_a").style.visibility="visible";
	 rleg1_a.bool = "red"; 

}

//red 
function rLegFrontDaily_2_a(){

	 document.getElementById("rleg_d_red_a").style.visibility="hidden";
	 rleg1_a.bool = "normal"; 
 }


//// Body location - Left Leg

var lleg1_a = new Image();
lleg1_a.bool = "normal"; 


//normal 
function lLegFrontDaily_1_a(){

	 document.getElementById("lleg_d_red_a").style.visibility="visible";
	 lleg1_a.bool = "red"; 

}

//red 
function lLegFrontDaily_2_a(){

	 document.getElementById("lleg_d_red_a").style.visibility="hidden";
	 lleg1_a.bool = "normal"; 
 }


 
//// Body location - Left Foot

var lfoot1_a = new Image();
lfoot1_a.bool = "normal"; 


//normal 
function lFootFrontDaily_1_a(){

	 document.getElementById("lfoot_d_red_a").style.visibility="visible";
	 lfoot1_a.bool = "red"; 

}

//red 
function lFootFrontDaily_2_a(){

	 document.getElementById("lfoot_d_red_a").style.visibility="hidden";
	 lfoot1_a.bool = "normal"; 
 }


 
//// Body location - Right Foot

var rfoot1_a = new Image();
rfoot1_a.bool = "normal"; 


//normal 
function rFootFrontDaily_1_a(){

	 document.getElementById("rfoot_d_red_a").style.visibility="visible";
	 rfoot1_a.bool = "red"; 
}

//red 
function rFootFrontDaily_2_a(){

	 document.getElementById("rfoot_d_red_a").style.visibility="hidden";
	 rfoot1_a.bool = "normal"; 
 }


 
//Back


// Image

////After Exercise - Body location Back

////// Body location - Head Back

var head1_back_a = new Image();
head1_back_a.bool = "normal"; 


//normal 
function headBackDaily_1_a(){

	 document.getElementById("head_d_red_back_a").style.visibility="visible";
	 head1_back_a.bool = "red"; 

}

//red 
function headBackDaily_2_a(){

	 document.getElementById("head_d_red_back_a").style.visibility="hidden";
	 head1_back_a.bool = "normal"; 
 }



//// Body location - Right shoulder


var rightShd1_back_a = new Image();
rightShd1_back_a.bool = "normal"; 



//normal 
function rShdBackDaily_1_a(){

	 document.getElementById("rightshoulder_d_red_back_a").style.visibility="visible";
	 rightShd1_back_a.bool = "red"; 

}

//red 
function rShdBackDaily_2_a(){

	 document.getElementById("rightshoulder_d_red_back_a").style.visibility="hidden";
	 rightShd1_back_a.bool = "normal"; 
 }
 
 
//// Body location - Left shoulder


var leftShd1_back_a = new Image();
leftShd1_back_a.bool = "normal"; 


//normal 
function lShdBackDaily_1_a(){

	 document.getElementById("leftshoulder_d_red_back_a").style.visibility="visible";
	 leftShd1_back_a.bool = "red"; 

}

//red 
function lShdBackDaily_2_a(){

	 document.getElementById("leftshoulder_d_red_back_a").style.visibility="hidden";
	 leftShd1_back_a.bool = "normal"; 
 }


//// Body location - Chest

var chest1_back_a = new Image();
chest1_back_a.bool = "normal"; 


//normal 
function chestBackDaily_1_a(){

	 document.getElementById("chest_d_red_back_a").style.visibility="visible";
	 chest1_back_a.bool = "red"; 

}

//red 
function chestBackDaily_2_a(){

	 document.getElementById("chest_d_red_back_a").style.visibility="hidden";
	 chest1_back_a.bool = "normal"; 
 }


 //// Body location - Abdomen

var abdomen1_back_a = new Image();
abdomen1_back_a.bool = "normal"; 



//normal 
function abdomenBackDaily_1_a(){

	 document.getElementById("abdomen_d_red_back_a").style.visibility="visible";
	 abdomen1_back_a.bool = "red"; 
}

//red 
function abdomenBackDaily_2_a(){

	 document.getElementById("abdomen_d_red_back_a").style.visibility="hidden";
	 abdomen1_back_a.bool = "normal"; 
 }



  //// Body location - Left Elbow

var lelbow1_back_a = new Image();
lelbow1_back_a.bool = "normal"; 


//normal 
function lElbowBackDaily_1_a(){

	 document.getElementById("lelbow_d_red_back_a").style.visibility="visible";
	 lelbow1_back_a.bool = "red"; 

}

//red 
function lElbowBackDaily_2_a(){

	 document.getElementById("lelbow_d_red_back_a").style.visibility="hidden";
	 lelbow1_back_a.bool = "normal"; 
 }


 
  //// Body location - Right Elbow

var relbow1_back_a = new Image();
relbow1_back_a.bool = "normal"; 



//normal 
function rElbowBackDaily_1_a(){

	 document.getElementById("relbow_d_red_back_a").style.visibility="visible";
	 relbow1_back_a.bool = "red"; 

}

//red 
function rElbowBackDaily_2_a(){

	 document.getElementById("relbow_d_red_back_a").style.visibility="hidden";
	 relbow1_back_a.bool = "normal"; 
 }



  //// Body location - Left Hand

var lhand1_back_a = new Image();
lhand1_back_a.bool = "normal"; 



//normal 
function lHandBackDaily_1_a(){

	 document.getElementById("lhand_d_red_back_a").style.visibility="visible";
	 lhand1_back_a.bool = "red"; 

}

//red 
function lHandBackDaily_2_a(){

	 document.getElementById("lhand_d_red_back_a").style.visibility="hidden";
	 lhand1_back_a.bool = "normal"; 
 }

 

  //// Body location - Right Hand

var rhand1_back_a = new Image();
rhand1_back_a.bool = "normal"; 


//normal 
function rHandBackDaily_1_a(){

	 document.getElementById("rhand_d_red_back_a").style.visibility="visible";
	 rhand1_back_a.bool = "red"; 

}

//red 
function rHandBackDaily_2_a(){

	 document.getElementById("rhand_d_red_back_a").style.visibility="hidden";
	 rhand1_back_a.bool = "normal"; 
 }


//// Body location - Right Hip

var rhip1_back_a = new Image();
rhip1_back_a.bool = "normal"; 


//normal 
function rHipBackDaily_1_a(){

	 document.getElementById("rhip_d_red_back_a").style.visibility="visible";
	 rhip1_back_a.bool = "red"; 

}

//red 
function rHipBackDaily_2_a(){

	 document.getElementById("rhip_d_red_back_a").style.visibility="hidden";
	 rhip1_back_a.bool = "normal"; 
 }

//// Body location - Back

var back1_back_a = new Image();
back1_back_a.bool = "normal"; 


//normal 
function backBackDaily_1_a(){

	 document.getElementById("back_d_red_back_a").style.visibility="visible";
	 back1_back_a.bool = "red"; 

}

//red 
function backBackDaily_2_a(){

	 document.getElementById("back_d_red_back_a").style.visibility="hidden";
	 back1_back_a.bool = "normal"; 
 }

 
//// Body location - Left Hip

var lhip1_back_a = new Image();
lhip1_back_a.bool = "normal"; 


//normal 
function lHipBackDaily_1_a(){

	 document.getElementById("lhip_d_red_back_a").style.visibility="visible";
	 lhip1_back_a.bool = "red"; 

}

//red 
function lHipBackDaily_2_a(){

	 document.getElementById("lhip_d_red_back_a").style.visibility="hidden";
	 lhip1_back_a.bool = "normal"; 
 }



  //// Body location - Right Leg

var rleg1_back_a = new Image();
rleg1_back_a.bool = "normal"; 


//normal 
function rLegBackDaily_1_a(){

	 document.getElementById("rleg_d_red_back_a").style.visibility="visible";
	 rleg1_back_a.bool = "red"; 

}

//red 
function rLegBackDaily_2_a(){

	 document.getElementById("rleg_d_red_back_a").style.visibility="hidden";
	 rleg1_back_a.bool = "normal"; 
 }


 //// Body location - Left Leg

var lleg1_back_a = new Image();
lleg1_back_a.bool = "normal"; 


//normal 
function lLegBackDaily_1_a(){

	 document.getElementById("lleg_d_red_back_a").style.visibility="visible";
	 lleg1_back_a.bool = "red"; 

}

//red 
function lLegBackDaily_2_a(){

	 document.getElementById("lleg_d_red_back_a").style.visibility="hidden";
	 lleg1_back_a.bool = "normal"; 
 }

 
//// Body location - Left Foot

var lfoot1_back_a = new Image();
lfoot1_back_a.bool = "normal"; 


//normal 
function lFootBackDaily_1_a(){

	 document.getElementById("lfoot_d_red_back_a").style.visibility="visible";
	 lfoot1_back_a.bool = "red"; 

}

//red 
function lFootBackDaily_2_a(){

	 document.getElementById("lfoot_d_red_back_a").style.visibility="hidden";
	 lfoot1_back_a.bool = "normal"; 
 }


 
//// Body location - Right Foot

var rfoot1_back_a = new Image();
rfoot1_back_a.bool = "normal"; 


//normal 
function rFootBackDaily_1_a(){

	 document.getElementById("rfoot_d_red_back_a").style.visibility="visible";
	 rfoot1_back_a.bool = "red"; 

}

//red 
function rFootBackDaily_2_a(){

	 document.getElementById("rfoot_d_red_back_a").style.visibility="hidden";
	 rfoot1_back_a.bool = "normal"; 
 }





////Daily Exercise - Pain Affec/Unpleasentness 

//emoticon-1
// 0 = original image
// 1 = red

var pic35 = new Image();
		pic35.src = "images/emoticons/daily/emo1_red.png"; // pic 35 red
		pic35.b = 0;


//pic 35
function changeSrc_35()
  {   
		if(pic35.b == 0)
		{
			document.getElementById("img57").src = pic35.src;  //pic 35
			pic35.b = 1; 
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
			pic36.b = 0;
			
			document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
			
			document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		   pic35.b = 0;
		}
  
  }	
  
  
//emoticon-2 
 var pic36 = new Image();
		pic36.src = "images/emoticons/daily/emo2_red.png"; // pic 36 red
		pic36.b = 0;

//pic 36
function changeSrc_36()
  {   
		if(pic36.b == 0)
		{
			document.getElementById("img58").src = pic36.src;  //pic 36
			pic36.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
			
			document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		    
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		    document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		}
 }


//emoticon-3

var pic37 = new Image();
		pic37.src = "images/emoticons/daily/emo3_red.png"; // pic 37 red
		pic37.b = 0;
		

//pic 37
function changeSrc_37()
  {   
		if(pic37.b == 0)
		{
			document.getElementById("img59").src = pic37.src;  //pic 37
			pic37.b = 1; 
			
		    document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
			
			document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		   pic37.b = 0;
		}
 }
 
  
//emoticon-4

var pic38 = new Image();
		pic38.src = "images/emoticons/daily/emo4_red.png"; // pic 38 red
		pic38.b = 0;
		

//pic 38
function changeSrc_38()
  {   
		if(pic38.b == 0)
		{
			document.getElementById("img60").src = pic38.src;  //pic 38
			pic38.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		   
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		   pic38.b = 0;
		}
 }

//emoticon-5

var pic39 = new Image();
		pic39.src = "images/emoticons/daily/emo5_red.png"; // pic 39 red
		pic39.b = 0;
		

//pic 39
function changeSrc_39()
  {   
		if(pic39.b == 0)
		{
			document.getElementById("img61").src = pic39.src;  //pic 39
			pic39.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		   
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
		   
		    document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		   pic39.b = 0;
		}
 }

//emoticon-6

var pic40 = new Image();
		pic40.src = "images/emoticons/daily/emo6_red.png"; // pic 40 red
		pic40.b = 0;
		

//pic 40
function changeSrc_40()
  {   
		if(pic40.b == 0)
		{
			document.getElementById("img62").src = pic40.src;  //pic 40
			pic40.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		   
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
		   
		    document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		   pic40.b = 0;
		}
 }

//emoticon-7

var pic41 = new Image();
		pic41.src = "images/emoticons/daily/emo7_red.png"; // pic 41 red
		pic41.b = 0;
		

//pic 41
function changeSrc_41()
  {   
		if(pic41.b == 0)
		{
			document.getElementById("img63").src = pic41.src;  //pic 41
			pic41.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		   
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
		   
		    document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		    pic42.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		   pic41.b = 0;
		}
 }
//emoticon-8

var pic42 = new Image();
		pic42.src = "images/emoticons/daily/emo8_red.png"; // pic 42 red
		pic42.b = 0;
		

//pic 42
function changeSrc_42()
  {   
		if(pic42.b == 0)
		{
			document.getElementById("img64").src = pic42.src;  //pic 42
			pic42.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		    pic36.b = 0;
		   
		    document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		    pic37.b = 0;
		   
		    document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		    pic38.b = 0;
		   
		    document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		    pic39.b = 0;
		   
		    document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		    pic40.b = 0;
		   
		    document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		    pic41.b = 0;
		   
		    document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		    pic43.b = 0;
		}
		else
		{
		   document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		   pic42.b = 0;
		}
 }

//emoticon-9

var pic43 = new Image();
		pic43.src = "images/emoticons/daily/emo9_red.png"; // pic 43 red
		pic43.b = 0;
		

//pic 43
function changeSrc_43()
  {   
		if(pic43.b == 0)
		{
			document.getElementById("img65").src = pic43.src;  //pic 43
			pic43.b = 1; 
			
			document.getElementById("img57").src = "images/emoticons/daily/emo1.png"; //original pic 35
		    pic35.b = 0;
			
			document.getElementById("img58").src = "images/emoticons/daily/emo2.png"; //original pic 36
		   pic36.b = 0;
		   
		   document.getElementById("img59").src = "images/emoticons/daily/emo3.png"; //original pic 37
		   pic37.b = 0;
		   
		   document.getElementById("img60").src = "images/emoticons/daily/emo4.png"; //original pic 37
		   pic38.b = 0;
		   
		   document.getElementById("img61").src = "images/emoticons/daily/emo5.png"; //original pic 37
		   pic39.b = 0;
		   
		   document.getElementById("img62").src = "images/emoticons/daily/emo6.png"; //original pic 40
		   pic40.b = 0;
		   
		   document.getElementById("img63").src = "images/emoticons/daily/emo7.png"; //original pic 41
		   pic41.b = 0;
		   
		   document.getElementById("img64").src = "images/emoticons/daily/emo8.png"; //original pic 42
		   pic42.b = 0;
		}
		else
		{
		   document.getElementById("img65").src = "images/emoticons/daily/emo9.png"; //original pic 43
		   pic43.b = 0;
		}
 }
 
 
 
 
////Before Exercise - Pain Affec/Unpleasentness 

//emoticon-1
// 0 = original image
// 1 = red

var pic85 = new Image();
		pic85.src = "images/emoticons/before/emo1_red.png"; // pic 35 red
		pic85.b = 0;


//pic 85
function pain_affect_85()
  {   
		if(pic85.b == 0)
		{
			document.getElementById("img85").src = pic85.src;  //pic 85
			pic85.b = 1; 
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 36
			pic88.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic87.b = 0;
			
			document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 37
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 35
		   pic85.b = 0;
		}
  
  }	
  
 
  //pic 86
  
 var pic86 = new Image();
		pic86.src = "images/emoticons/before/emo2_red.png"; // pic 86 red
		pic86.b = 0;

function pain_affect_86()
  {   
		if(pic86.b == 0)
		{
			document.getElementById("img86").src = pic86.src;  //pic 86
			pic86.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
			
			document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 35
		   pic86.b = 0;
		}
  
  }
  
  
  //pic 87
  
 var pic87 = new Image();
		pic87.src = "images/emoticons/before/emo3_red.png"; // pic 87 red
		pic87.b = 0;

function pain_affect_87()
  {   
		if(pic87.b == 0)
		{
			document.getElementById("img87").src = pic87.src;  //pic 87
			pic87.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 35
		   pic87.b = 0;
		}
  
  }
  
  //pic 88
  
 var pic88 = new Image();
		pic88.src = "images/emoticons/before/emo4_red.png"; // pic 88 red
		pic88.b = 0;

function pain_affect_88()
  {   
		if(pic88.b == 0)
		{
			document.getElementById("img88").src = pic88.src;  //pic 88
			pic88.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		   pic88.b = 0;
		}
  
  }
  
  
  //pic 89
  
 var pic89 = new Image();
		pic89.src = "images/emoticons/before/emo5_red.png"; // pic 89 red
		pic89.b = 0;

function pain_affect_89()
  {   
		if(pic89.b == 0)
		{
			document.getElementById("img89").src = pic89.src;  //pic 89
			pic89.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		   pic89.b = 0;
		}
  
  }
  
  //pic 90
  
 var pic90 = new Image();
		pic90.src = "images/emoticons/before/emo6_red.png"; // pic 90 red
		pic90.b = 0;

function pain_affect_90()
  {   
		if(pic90.b == 0)
		{
			document.getElementById("img90").src = pic90.src;  //pic 90
			pic90.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		   pic90.b = 0;
		}
  
  }
  
  
   //pic 91
  
 var pic91 = new Image();
		pic91.src = "images/emoticons/before/emo7_red.png"; // pic 91 red
		pic91.b = 0;

function pain_affect_91()
  {   
		if(pic91.b == 0)
		{
			document.getElementById("img91").src = pic91.src;  //pic 91
			pic91.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 91
		   pic91.b = 0;
		}
  
  }
  
  
   //pic 92
  
 var pic92 = new Image();
		pic92.src = "images/emoticons/before/emo8_red.png"; // pic 92 red
		pic92.b = 0;

function pain_affect_92()
  {   
		if(pic92.b == 0)
		{
			document.getElementById("img92").src = pic92.src;  //pic 92
			pic92.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 92
		    pic91.b = 0;
		   
		    document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 93
		    pic93.b = 0;
		}
		else
		{
		   document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		   pic92.b = 0;
		}
  
  }
  
  
  //pic 93
  
 var pic93 = new Image();
		pic93.src = "images/emoticons/before/emo9_red.png"; // pic 93 red
		pic93.b = 0;

function pain_affect_93()
  {   
		if(pic93.b == 0)
		{
			document.getElementById("img93").src = pic93.src;  //pic 92
			pic93.b = 1; 
			
			document.getElementById("img85").src = "images/emoticons/before/emo1.png"; //original pic 85
			pic85.b = 0;
			
			document.getElementById("img86").src = "images/emoticons/before/emo2.png"; //original pic 86
		    pic86.b = 0;
			
			document.getElementById("img87").src = "images/emoticons/before/emo3.png"; //original pic 87
		    pic87.b = 0;
		   
		    document.getElementById("img88").src = "images/emoticons/before/emo4.png"; //original pic 88
		    pic88.b = 0;
		   
		    document.getElementById("img89").src = "images/emoticons/before/emo5.png"; //original pic 89
		    pic89.b = 0;
		   
		    document.getElementById("img90").src = "images/emoticons/before/emo6.png"; //original pic 90
		    pic90.b = 0;
		   
		    document.getElementById("img91").src = "images/emoticons/before/emo7.png"; //original pic 92
		    pic91.b = 0;
		   
		    document.getElementById("img92").src = "images/emoticons/before/emo8.png"; //original pic 92
		    pic92.b = 0;
		}
		else
		{
		   document.getElementById("img93").src = "images/emoticons/before/emo9.png"; //original pic 92
		   pic93.b = 0;
		}
  
  }
  
 

////After Exercise - Pain Affec/Unpleasentness 

//emoticon-1
// 0 = original image
// 1 = red

//pic 94
var pic94 = new Image();
		pic94.src = "images/emoticons/before/emo1_red.png"; // pic 94 red
		pic94.b = 0;


function pain_affect_94()
  {   
		if(pic94.b == 0)
		{
			document.getElementById("img94").src = pic94.src;  //pic 94
			pic94.b = 1; 
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 36
			pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
			
			document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 37
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 94
		   pic94.b = 0;
		}
  
  }	
  
 //pic 95
var pic95 = new Image();
		pic95.src = "images/emoticons/before/emo2_red.png"; // pic 95 red
		pic95.b = 0;


function pain_affect_95()
  {   
		if(pic95.b == 0)
		{
			document.getElementById("img95").src = pic95.src;  //pic 95
			pic95.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
			
			document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 37
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 94
		   pic95.b = 0;
		}
  
  }
  
  //pic 96
var pic96 = new Image();
		pic96.src = "images/emoticons/before/emo3_red.png"; // pic 95 red
		pic96.b = 0;


function pain_affect_96()
  {   
		if(pic96.b == 0)
		{
			document.getElementById("img96").src = pic96.src;  //pic 95
			pic96.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 37
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 94
		   pic96.b = 0;
		}
  
  }
  
  
  //pic 97
var pic97 = new Image();
		pic97.src = "images/emoticons/before/emo4_red.png"; // pic 97 red
		pic97.b = 0;


function pain_affect_97()
  {   
		if(pic97.b == 0)
		{
			document.getElementById("img97").src = pic97.src;  //pic 95
			pic97.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 37
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 94
		   pic97.b = 0;
		}
  
  }
  
   
//pic 98
var pic98 = new Image();
		pic98.src = "images/emoticons/before/emo5_red.png"; // pic 98 red
		pic98.b = 0;


function pain_affect_98()
  {   
		if(pic98.b == 0)
		{
			document.getElementById("img98").src = pic98.src;  //pic 98
			pic98.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 40
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 94
		   pic98.b = 0;
		}
  
  }
  
  
    
//pic 99
var pic99 = new Image();
		pic99.src = "images/emoticons/before/emo6_red.png"; // pic 99 red
		pic99.b = 0;


function pain_affect_99()
  {   
		if(pic99.b == 0)
		{
			document.getElementById("img99").src = pic99.src;  //pic 98
			pic99.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 40
		    pic98.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 41
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 94
		   pic99.b = 0;
		}
  
  }
   
   
     
//pic 100
var pic100 = new Image();
		pic100.src = "images/emoticons/before/emo7_red.png"; // pic 100 red
		pic100.b = 0;


function pain_affect_100()
  {   
		if(pic100.b == 0)
		{
			document.getElementById("img100").src = pic100.src;  //pic 100
			pic100.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 40
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 41
		    pic99.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 42
		    pic101.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 94
		   pic100.b = 0;
		}
  
  }
 
 
      
//pic 101
var pic101 = new Image();
		pic101.src = "images/emoticons/before/emo8_red.png"; // pic 101 red
		pic101.b = 0;


function pain_affect_101()
  {   
		if(pic101.b == 0)
		{
			document.getElementById("img101").src = pic101.src;  //pic 100
			pic101.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 40
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 41
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 42
		    pic100.b = 0;
		   
		    document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 43
		    pic102.b = 0;
		}
		else
		{
		   document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 94
		   pic101.b = 0;
		}
  
  }
  
        
//pic 102
var pic102 = new Image();
		pic102.src = "images/emoticons/before/emo9_red.png"; // pic 102 red
		pic102.b = 0;


function pain_affect_102()
  {   
		if(pic102.b == 0)
		{
			document.getElementById("img102").src = pic102.src;  //pic 100
			pic102.b = 1; 
			
			document.getElementById("img94").src = "images/emoticons/before/emo1.png"; //original pic 36
			pic94.b = 0;
			
			document.getElementById("img95").src = "images/emoticons/before/emo2.png"; //original pic 37
		    pic95.b = 0;
			
			document.getElementById("img96").src = "images/emoticons/before/emo3.png"; //original pic 37
		    pic96.b = 0;
		   
		    document.getElementById("img97").src = "images/emoticons/before/emo4.png"; //original pic 37
		    pic97.b = 0;
		   
		    document.getElementById("img98").src = "images/emoticons/before/emo5.png"; //original pic 40
		    pic98.b = 0;
		   
		    document.getElementById("img99").src = "images/emoticons/before/emo6.png"; //original pic 41
		    pic99.b = 0;
		   
		    document.getElementById("img100").src = "images/emoticons/before/emo7.png"; //original pic 42
		    pic100.b = 0;
		   
		    document.getElementById("img101").src = "images/emoticons/before/emo8.png"; //original pic 43
		    pic101.b = 0;
		}
		else
		{
		   document.getElementById("img102").src = "images/emoticons/before/emo9.png"; //original pic 94
		   pic102.b = 0;
		}
  
  }
  
  
  
//////page 36 : PRE Scale

//Ball 1

var pic103 = new Image();
		pic103.src = "images/redball1.png"; // pic 35 red
		pic103.b = 0;

function prescale_1()
  {   
		if(pic103.b == 0)
		{
			document.getElementById("ball_1").src = pic103.src;  //pic 35
			pic103.b = 1; 
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 36
			pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_1").src = "images/ball1.png"; //original pic 35
		   pic103.b = 0;
		}
  
  }	
  
  
 // Ball 2
 
 
 
 var pic104 = new Image();
		pic104.src = "images/redball2.png"; // pic 35 red
		pic104.b = 0;

function prescale_2()
  {   
		if(pic104.b == 0)
		{
			document.getElementById("ball_2").src = pic104.src;  //pic 35
			pic104.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_2").src = "images/ball2.png"; //original pic 35
		   pic104.b = 0;
		}
  
  }	
  
  
 // Ball 3
 
 
 var pic105 = new Image();
		pic105.src = "images/redball3.png"; // pic 35 red
		pic105.b = 0;

function prescale_3()
  {   
		if(pic105.b == 0)
		{
			document.getElementById("ball_3").src = pic105.src;  //pic 35
			pic105.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_3").src = "images/ball3.png"; //original pic 35
		   pic105.b = 0;
		}
  
  }	
 
 
 
 
// Ball 4
  


 var pic106 = new Image();
		pic106.src = "images/redball4.png"; // pic 35 red
		pic106.b = 0;

function prescale_4()
  {   
		if(pic106.b == 0)
		{
			document.getElementById("ball_4").src = pic106.src;  //pic 35
			pic106.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_4").src = "images/ball4.png"; //original pic 35
		   pic106.b = 0;
		}
  
  }	
 
 
// Ball 5

 var pic107 = new Image();
		pic107.src = "images/redball5.png"; // pic 35 red
		pic107.b = 0;

function prescale_5()
  {   
		if(pic107.b == 0)
		{
			document.getElementById("ball_5").src = pic107.src;  //pic 35
			pic107.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_5").src = "images/ball5.png"; //original pic 35
		   pic107.b = 0;
		}
  
  }	
 
 
// Ball 6



var pic108 = new Image();
		pic108.src = "images/redball6.png"; // pic 35 red
		pic108.b = 0;

function prescale_6()
  {   
		if(pic108.b == 0)
		{
			document.getElementById("ball_6").src = pic108.src;  //pic 35
			pic108.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_6").src = "images/ball6.png"; //original pic 35
		   pic108.b = 0;
		}
  
  }

 
  
// Ball 7



var pic109 = new Image();
		pic109.src = "images/redball7.png"; // pic 35 red
		pic109.b = 0;

function prescale_7()
  {   
		if(pic109.b == 0)
		{
			document.getElementById("ball_7").src = pic109.src;  //pic 35
			pic109.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_7").src = "images/ball7.png"; //original pic 35
		   pic109.b = 0;
		}
  
  }
   
   
// Ball 8


var pic110 = new Image();
		pic110.src = "images/redball8.png"; // pic 35 red
		pic110.b = 0;

function prescale_8()
  {   
		if(pic110.b == 0)
		{
			document.getElementById("ball_8").src = pic110.src;  //pic 35
			pic110.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_8").src = "images/ball8.png"; //original pic 35
		   pic110.b = 0;
		}
  
  }
	
	
// Ball 9



var pic111 = new Image();
		pic111.src = "images/redball9.png"; // pic 35 red
		pic111.b = 0;

function prescale_9()
  {   
		if(pic111.b == 0)
		{
			document.getElementById("ball_9").src = pic111.src;  //pic 35
			pic111.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_9").src = "images/ball9.png"; //original pic 35
		   pic111.b = 0;
		}
  
  }
	

	 
	 
// Ball 10



var pic112 = new Image();
		pic112.src = "images/redball10.png"; // pic 35 red
		pic112.b = 0;

function prescale_10()
  {   
		if(pic112.b == 0)
		{
			document.getElementById("ball_10").src = pic112.src;  //pic 35
			pic112.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_11").src = "images/ball11.png"; //original pic 37
		    pic113.b = 0;

		}
		else
		{
		   document.getElementById("ball_10").src = "images/ball10.png"; //original pic 35
		   pic112.b = 0;
		}
  
  }
	
	  
	  
// Ball 11

var pic113 = new Image();
		pic113.src = "images/redball11.png"; // pic 35 red
		pic113.b = 0;

function prescale_11()
  {   
		if(pic113.b == 0)
		{
			document.getElementById("ball_11").src = pic113.src;  //pic 35
			pic113.b = 1; 
			
			document.getElementById("ball_1").src = "images/ball1.png"; //original pic 36
			pic103.b = 0;
			
			document.getElementById("ball_2").src = "images/ball2.png"; //original pic 37
		    pic104.b = 0;
			
			document.getElementById("ball_3").src = "images/ball3.png"; //original pic 37
		    pic105.b = 0;
			
			document.getElementById("ball_4").src = "images/ball4.png"; //original pic 37
		    pic106.b = 0;
			
			document.getElementById("ball_5").src = "images/ball5.png"; //original pic 37
		    pic107.b = 0;
			
			document.getElementById("ball_6").src = "images/ball6.png"; //original pic 37
		    pic108.b = 0;
			
			document.getElementById("ball_7").src = "images/ball7.png"; //original pic 37
		    pic109.b = 0;
			
			document.getElementById("ball_8").src = "images/ball8.png"; //original pic 37
		    pic110.b = 0;
			
			document.getElementById("ball_9").src = "images/ball9.png"; //original pic 37
		    pic111.b = 0;
			
			document.getElementById("ball_10").src = "images/ball10.png"; //original pic 37
		    pic112.b = 0;

		}
		else
		{
		   document.getElementById("ball_11").src = "images/ball11.png"; //original pic 35
		   pic113.b = 0;
		}
  
  }
 

 // Repitition 1

var pic114 = new Image();
		pic114.src = "images/repitition/rp1.png"; // pic 35 red
		pic114.b = 0;

function repition_1()
  {   
		if(pic114.b == 0)
		{
			document.getElementById("rpe1").src = pic114.src;  //pic 35
			pic114.b = 1; 
			
			document.getElementById("rpe4").src = "images/repitition/rpe4.png"; //original pic 36
			pic117.b = 0;
			
			document.getElementById("rpe7").src = "images/repitition/rpe7.png"; //original pic 37
		    pic120.b = 0;

		}
		else
		{
		   document.getElementById("rpe1").src = "images/repitition/rpe1.png"; //original pic 35
		   pic114.b = 0;
		}
  
  }
  
   // Repitition 2

var pic117 = new Image();
		pic117.src = "images/repitition/rp4.png"; // pic 35 red
		pic117.b = 0;

function repition_2()
  {   
		if(pic117.b == 0)
		{
			document.getElementById("rpe4").src = pic117.src;  //pic 35
			pic117.b = 1; 
			
			document.getElementById("rpe1").src = "images/repitition/rpe1.png"; //original pic 36
			pic114.b = 0;
			
			document.getElementById("rpe7").src = "images/repitition/rpe7.png"; //original pic 37
		    pic120.b = 0;

		}
		else
		{
		   document.getElementById("rpe4").src = "images/repitition/rpe4.png"; //original pic 35
		   pic117.b = 0;
		}
  
  }
  
 
 // Repitition 3

var pic120 = new Image();
		pic120.src = "images/repitition/rp7.png"; // pic 35 red
		pic120.b = 0;

function repition_3()
  {   
		if(pic120.b == 0)
		{
			document.getElementById("rpe7").src = pic120.src;  //pic 35
			pic120.b = 1; 
			
			document.getElementById("rpe1").src = "images/repitition/rpe1.png"; //original pic 36
			pic114.b = 0;
			
			document.getElementById("rpe4").src = "images/repitition/rpe4.png"; //original pic 37
		    pic117.b = 0;

		}
		else
		{
		   document.getElementById("rpe7").src = "images/repitition/rpe7.png"; //original pic 35
		   pic120.b = 0;
		}
  
  }
  
  
  // Repitition 4

var pic115 = new Image();
		pic115.src = "images/repitition/rp2.png"; // pic 35 red
		pic115.b = 0;

function repition_4()
  {   
		if(pic115.b == 0)
		{
			document.getElementById("rpe2").src = pic115.src;  //pic 35
			pic115.b = 1; 
			
			document.getElementById("rpe5").src = "images/repitition/rpe5.png"; //original pic 36
			pic118.b = 0;
			
			document.getElementById("rpe8").src = "images/repitition/rpe8.png"; //original pic 37
		    pic121.b = 0;

		}
		else
		{
		   document.getElementById("rpe2").src = "images/repitition/rpe2.png"; //original pic 35
		   pic115.b = 0;
		}
  
  }
  
  
 // Repitition 5

var pic118 = new Image();
		pic118.src = "images/repitition/rp5.png"; // pic 35 red
		pic118.b = 0;

function repition_5()
  {   
		if(pic118.b == 0)
		{
			document.getElementById("rpe5").src = pic118.src;  //pic 35
			pic118.b = 1; 
			
			document.getElementById("rpe2").src = "images/repitition/rpe2.png"; //original pic 36
			pic115.b = 0;
			
			document.getElementById("rpe8").src = "images/repitition/rpe8.png"; //original pic 37
		    pic121.b = 0;

		}
		else
		{
		   document.getElementById("rpe5").src = "images/repitition/rpe5.png"; //original pic 35
		   pic118.b = 0;
		}
  
  }
  
  
  // Repitition 6

var pic121 = new Image();
		pic121.src = "images/repitition/rp8.png"; // pic 35 red
		pic121.b = 0;

function repition_6()
  {   
		if(pic121.b == 0)
		{
			document.getElementById("rpe8").src = pic121.src;  //pic 35
			pic121.b = 1; 
			
			document.getElementById("rpe2").src = "images/repitition/rpe2.png"; //original pic 36
			pic115.b = 0;
			
			document.getElementById("rpe5").src = "images/repitition/rpe5.png"; //original pic 37
		    pic118.b = 0;

		}
		else
		{
		   document.getElementById("rpe8").src = "images/repitition/rpe8.png"; //original pic 35
		   pic121.b = 0;
		}
  
  }
  
  
  
  // Repitition 7

var pic116 = new Image();
		pic116.src = "images/repitition/rp3.png"; // pic 35 red
		pic116.b = 0;

function repition_7()
  {   
		if(pic116.b == 0)
		{
			document.getElementById("rpe3").src = pic116.src;  //pic 35
			pic116.b = 1; 
			
			document.getElementById("rpe6").src = "images/repitition/rpe6.png"; //original pic 36
			pic119.b = 0;
			
			document.getElementById("rpe9").src = "images/repitition/rpe9.png"; //original pic 37
		    pic122.b = 0;

		}
		else
		{
		   document.getElementById("rpe3").src = "images/repitition/rpe3.png"; //original pic 35
		   pic116.b = 0;
		}
  
  }
  
  
 // Repitition 8

var pic119 = new Image();
		pic119.src = "images/repitition/rp6.png"; // pic 35 red
		pic119.b = 0;

function repition_8()
  {   
		if(pic119.b == 0)
		{
			document.getElementById("rpe6").src = pic119.src;  //pic 35
			pic119.b = 1; 
			
			document.getElementById("rpe3").src = "images/repitition/rpe3.png"; //original pic 36
			pic116.b = 0;
			
			document.getElementById("rpe9").src = "images/repitition/rpe9.png"; //original pic 37
		    pic122.b = 0;

		}
		else
		{
		   document.getElementById("rpe6").src = "images/repitition/rpe6.png"; //original pic 35
		   pic119.b = 0;
		}
  
  }
  
  
  // Repitition 9

var pic122 = new Image();
		pic122.src = "images/repitition/rp9.png"; // pic 35 red
		pic122.b = 0;

function repition_9()
  {   
		if(pic122.b == 0)
		{
			document.getElementById("rpe9").src = pic122.src;  //pic 35
			pic122.b = 1; 
			
			document.getElementById("rpe3").src = "images/repitition/rpe3.png"; //original pic 36
			pic116.b = 0;
			
			document.getElementById("rpe6").src = "images/repitition/rpe6.png"; //original pic 37
		    pic119.b = 0;

		}
		else
		{
		   document.getElementById("rpe9").src = "images/repitition/rpe9.png"; //original pic 35
		   pic122.b = 0;
		}
  
  }
  

  // Repitition 10

var pic123 = new Image();
		pic123.src = "images/repitition/rp10.png"; // pic 35 red
		pic123.b = 0;

function repition_10()
  {   
		if(pic123.b == 0)
		{
			document.getElementById("rpe10").src = pic123.src;  //pic 35
			pic123.b = 1; 
			
			document.getElementById("rpe13").src = "images/repitition/rpe13.png"; //original pic 36
			pic126.b = 0;
			
			document.getElementById("rpe16").src = "images/repitition/rpe16.png"; //original pic 37
		    pic129.b = 0;

		}
		else
		{
		   document.getElementById("rpe10").src = "images/repitition/rpe10.png"; //original pic 35
		   pic123.b = 0;
		}
  
  }
  
  
 // Repitition 11

var pic126 = new Image();
		pic126.src = "images/repitition/rp13.png"; // pic 35 red
		pic126.b = 0;

function repition_11()
  {   
		if(pic126.b == 0)
		{
			document.getElementById("rpe13").src = pic126.src;  //pic 35
			pic126.b = 1; 
			
			document.getElementById("rpe10").src = "images/repitition/rpe10.png"; //original pic 36
			pic123.b = 0;
			
			document.getElementById("rpe16").src = "images/repitition/rpe16.png"; //original pic 37
		    pic129.b = 0;

		}
		else
		{
		   document.getElementById("rpe13").src = "images/repitition/rpe13.png"; //original pic 35
		   pic126.b = 0;
		}
  
  }
  
  // Repitition 12

var pic129 = new Image();
		pic129.src = "images/repitition/rp16.png"; // pic 35 red
		pic129.b = 0;

function repition_12()
  {   
		if(pic129.b == 0)
		{
			document.getElementById("rpe16").src = pic129.src;  //pic 35
			pic129.b = 1; 
			
			document.getElementById("rpe10").src = "images/repitition/rpe10.png"; //original pic 36
			pic123.b = 0;
			
			document.getElementById("rpe13").src = "images/repitition/rpe13.png"; //original pic 37
		    pic126.b = 0;

		}
		else
		{
		   document.getElementById("rpe16").src = "images/repitition/rpe16.png"; //original pic 35
		   pic129.b = 0;
		}
  
  }
  
 
 // Repitition 13

var pic124 = new Image();
		pic124.src = "images/repitition/rp11.png"; // pic 35 red
		pic124.b = 0;

function repition_13()
  {   
		if(pic124.b == 0)
		{
			document.getElementById("rpe11").src = pic124.src;  //pic 35
			pic124.b = 1; 
			
			document.getElementById("rpe14").src = "images/repitition/rpe14.png"; //original pic 36
			pic127.b = 0;
			
			document.getElementById("rpe17").src = "images/repitition/rpe17.png"; //original pic 37
		    pic130.b = 0;

		}
		else
		{
		   document.getElementById("rpe11").src = "images/repitition/rpe11.png"; //original pic 35
		   pic124.b = 0;
		}
  
  }
  
  
  // Repitition 14

var pic127 = new Image();
		pic127.src = "images/repitition/rp14.png"; // pic 35 red
		pic127.b = 0;

function repition_14()
  {   
		if(pic127.b == 0)
		{
			document.getElementById("rpe14").src = pic127.src;  //pic 35
			pic127.b = 1; 
			
			document.getElementById("rpe11").src = "images/repitition/rpe11.png"; //original pic 36
			pic124.b = 0;
			
			document.getElementById("rpe17").src = "images/repitition/rpe17.png"; //original pic 37
		    pic130.b = 0;

		}
		else
		{
		   document.getElementById("rpe14").src = "images/repitition/rpe14.png"; //original pic 35
		   pic127.b = 0;
		}
  
  }
  
  
  
   // Repitition 15

var pic130 = new Image();
		pic130.src = "images/repitition/rp17.png"; // pic 35 red
		pic130.b = 0;

function repition_15()
  {   
		if(pic130.b == 0)
		{
			document.getElementById("rpe17").src = pic130.src;  //pic 35
			pic130.b = 1; 
			
			document.getElementById("rpe11").src = "images/repitition/rpe11.png"; //original pic 36
			pic124.b = 0;
			
			document.getElementById("rpe14").src = "images/repitition/rpe14.png"; //original pic 37
		    pic127.b = 0;

		}
		else
		{
		   document.getElementById("rpe17").src = "images/repitition/rpe17.png"; //original pic 35
		   pic130.b = 0;
		}
  
  }
  
  
   // Repitition 16

var pic125 = new Image();
		pic125.src = "images/repitition/rp12.png"; // pic 35 red
		pic125.b = 0;

function repition_16()
  {   
		if(pic125.b == 0)
		{
			document.getElementById("rpe12").src = pic125.src;  //pic 35
			pic125.b = 1; 
			
			document.getElementById("rpe15").src = "images/repitition/rpe15.png"; //original pic 36
			pic128.b = 0;
			
			document.getElementById("rpe18").src = "images/repitition/rpe18.png"; //original pic 37
		    pic131.b = 0;

		}
		else
		{
		   document.getElementById("rpe12").src = "images/repitition/rpe12.png"; //original pic 35
		   pic125.b = 0;
		}
  
  }
  
  
 
 // Repitition 17

var pic128 = new Image();
		pic128.src = "images/repitition/rp15.png"; // pic 35 red
		pic128.b = 0;

function repition_17()
  {   
		if(pic128.b == 0)
		{
			document.getElementById("rpe15").src = pic128.src;  //pic 35
			pic128.b = 1; 
			
			document.getElementById("rpe12").src = "images/repitition/rpe12.png"; //original pic 36
			pic125.b = 0;
			
			document.getElementById("rpe18").src = "images/repitition/rpe18.png"; //original pic 37
		    pic131.b = 0;

		}
		else
		{
		   document.getElementById("rpe15").src = "images/repitition/rpe15.png"; //original pic 35
		   pic128.b = 0;
		}
  
  }
  
  
  // Repitition 18

var pic131 = new Image();
		pic131.src = "images/repitition/rp18.png"; // pic 35 red
		pic131.b = 0;

function repition_18()
  {   
		if(pic131.b == 0)
		{
			document.getElementById("rpe18").src = pic131.src;  //pic 35
			pic131.b = 1; 
			
			document.getElementById("rpe12").src = "images/repitition/rpe12.png"; //original pic 36
			pic125.b = 0;
			
			document.getElementById("rpe15").src = "images/repitition/rpe15.png"; //original pic 37
		    pic128.b = 0;

		}
		else
		{
		   document.getElementById("rpe18").src = "images/repitition/rpe18.png"; //original pic 35
		   pic131.b = 0;
		}
  
  }
  
  
  
 // Repitition 19

var pic132 = new Image();
		pic132.src = "images/repitition/rp19.png"; // pic 35 red
		pic132.b = 0;

function repition_19()
  {   
		if(pic132.b == 0)
		{
			document.getElementById("rpe19").src = pic132.src;  //pic 35
			pic132.b = 1; 
			
			document.getElementById("rpe22").src = "images/repitition/rpe22.png"; //original pic 36
			pic135.b = 0;
			
			document.getElementById("rpe25").src = "images/repitition/rpe25.png"; //original pic 37
		    pic138.b = 0;

		}
		else
		{
		   document.getElementById("rpe19").src = "images/repitition/rpe19.png"; //original pic 35
		   pic132.b = 0;
		}
  
  }
    
  
 // Repitition 20

var pic135 = new Image();
		pic135.src = "images/repitition/rp22.png"; // pic 35 red
		pic135.b = 0;

function repition_20()
  {   
		if(pic135.b == 0)
		{
			document.getElementById("rpe22").src = pic135.src;  //pic 35
			pic135.b = 1; 
			
			document.getElementById("rpe19").src = "images/repitition/rpe19.png"; //original pic 36
			pic132.b = 0;
			
			document.getElementById("rpe25").src = "images/repitition/rpe25.png"; //original pic 37
		    pic138.b = 0;

		}
		else
		{
		   document.getElementById("rpe22").src = "images/repitition/rpe22.png"; //original pic 35
		   pic135.b = 0;
		}
  
  }
  
    
 // Repitition 21

var pic138 = new Image();
		pic138.src = "images/repitition/rp25.png"; // pic 35 red
		pic138.b = 0;

function repition_21()
  {   
		if(pic138.b == 0)
		{
			document.getElementById("rpe25").src = pic138.src;  //pic 35
			pic138.b = 1; 
			
			document.getElementById("rpe19").src = "images/repitition/rpe19.png"; //original pic 36
			pic132.b = 0;
			
			document.getElementById("rpe22").src = "images/repitition/rpe22.png"; //original pic 37
		    pic135.b = 0;

		}
		else
		{
		   document.getElementById("rpe25").src = "images/repitition/rpe25.png"; //original pic 35
		   pic138.b = 0;
		}
  
  }
  
  
 // Repitition 22

var pic133 = new Image();
		pic133.src = "images/repitition/rp20.png"; // pic 35 red
		pic133.b = 0;

function repition_22()
  {   
		if(pic133.b == 0)
		{
			document.getElementById("rpe20").src = pic133.src;  //pic 35
			pic133.b = 1; 
			
			document.getElementById("rpe23").src = "images/repitition/rpe23.png"; //original pic 36
			pic136.b = 0;
			
			document.getElementById("rpe26").src = "images/repitition/rpe26.png"; //original pic 37
		    pic139.b = 0;

		}
		else
		{
		   document.getElementById("rpe20").src = "images/repitition/rpe20.png"; //original pic 35
		   pic133.b = 0;
		}
  
  }
  
  
   // Repitition 23

var pic136 = new Image();
		pic136.src = "images/repitition/rp23.png"; // pic 35 red
		pic136.b = 0;

function repition_23()
  {   
		if(pic136.b == 0)
		{
			document.getElementById("rpe23").src = pic136.src;  //pic 35
			pic136.b = 1; 
			
			document.getElementById("rpe20").src = "images/repitition/rpe20.png"; //original pic 36
			pic133.b = 0;
			
			document.getElementById("rpe26").src = "images/repitition/rpe26.png"; //original pic 37
		    pic139.b = 0;

		}
		else
		{
		   document.getElementById("rpe23").src = "images/repitition/rpe23.png"; //original pic 35
		   pic136.b = 0;
		}
  
  }
  
 
    // Repitition 24

var pic139 = new Image();
		pic139.src = "images/repitition/rp26.png"; // pic 35 red
		pic139.b = 0;

function repition_24()
  {   
		if(pic139.b == 0)
		{
			document.getElementById("rpe26").src = pic139.src;  //pic 35
			pic139.b = 1; 
			
			document.getElementById("rpe20").src = "images/repitition/rpe20.png"; //original pic 36
			pic133.b = 0;
			
			document.getElementById("rpe23").src = "images/repitition/rpe23.png"; //original pic 37
		    pic136.b = 0;

		}
		else
		{
		   document.getElementById("rpe26").src = "images/repitition/rpe26.png"; //original pic 35
		   pic139.b = 0;
		}
  
  }
  
  
  
    // Repitition 25

var pic134 = new Image();
		pic134.src = "images/repitition/rp21.png"; // pic 35 red
		pic134.b = 0;

function repition_25()
  {   
		if(pic134.b == 0)
		{
			document.getElementById("rpe21").src = pic134.src;  //pic 35
			pic134.b = 1; 
			
			document.getElementById("rpe24").src = "images/repitition/rpe24.png"; //original pic 36
			pic137.b = 0;
			
			document.getElementById("rpe27").src = "images/repitition/rpe27.png"; //original pic 37
		    pic140.b = 0;

		}
		else
		{
		   document.getElementById("rpe21").src = "images/repitition/rpe21.png"; //original pic 35
		   pic134.b = 0;
		}
  
  } 
  
  
   
// Repitition 26

var pic137 = new Image();
		pic137.src = "images/repitition/rp24.png"; // pic 35 red
		pic137.b = 0;

function repition_26()
  {   
		if(pic137.b == 0)
		{
			document.getElementById("rpe24").src = pic137.src;  //pic 35
			pic137.b = 1; 
			
			document.getElementById("rpe21").src = "images/repitition/rpe21.png"; //original pic 36
			pic134.b = 0;
			
			document.getElementById("rpe27").src = "images/repitition/rpe27.png"; //original pic 37
		    pic140.b = 0;

		}
		else
		{
		   document.getElementById("rpe24").src = "images/repitition/rpe24.png"; //original pic 35
		   pic137.b = 0;
		}
  
  } 
  
  
  // Repitition 27

var pic140 = new Image();
		pic140.src = "images/repitition/rp27.png"; // pic 35 red
		pic140.b = 0;

function repition_27()
  {   
		if(pic140.b == 0)
		{
			document.getElementById("rpe27").src = pic140.src;  //pic 35
			pic140.b = 1; 
			
			document.getElementById("rpe21").src = "images/repitition/rpe21.png"; //original pic 36
			pic134.b = 0;
			
			document.getElementById("rpe24").src = "images/repitition/rpe24.png"; //original pic 37
		    pic137.b = 0;

		}
		else
		{
		   document.getElementById("rpe27").src = "images/repitition/rpe27.png"; //original pic 35
		   pic140.b = 0;
		}
  
  }
  
  
    // Repitition 28

var pic141 = new Image();
		pic141.src = "images/repitition/rp28.png"; // pic 35 red
		pic141.b = 0;

function repition_28()
  {   
		if(pic141.b == 0)
		{
			document.getElementById("rpe28").src = pic141.src;  //pic 35
			pic141.b = 1; 
			
			document.getElementById("rpe31").src = "images/repitition/rpe31.png"; //original pic 36
			pic144.b = 0;
			
			document.getElementById("rpe34").src = "images/repitition/rpe34.png"; //original pic 37
		    pic147.b = 0;

		}
		else
		{
		   document.getElementById("rpe28").src = "images/repitition/rpe28.png"; //original pic 35
		   pic141.b = 0;
		}
  
  }
  
  
     // Repitition 29

var pic144 = new Image();
		pic144.src = "images/repitition/rp31.png"; // pic 35 red
		pic144.b = 0;

function repition_29()
  {   
		if(pic144.b == 0)
		{
			document.getElementById("rpe31").src = pic144.src;  //pic 35
			pic144.b = 1; 
			
			document.getElementById("rpe28").src = "images/repitition/rpe28.png"; //original pic 36
			pic141.b = 0;
			
			document.getElementById("rpe34").src = "images/repitition/rpe34.png"; //original pic 37
		    pic147.b = 0;

		}
		else
		{
		   document.getElementById("rpe31").src = "images/repitition/rpe31.png"; //original pic 35
		   pic144.b = 0;
		}
  
  }
  
  
// Repitition 30

var pic147 = new Image();
		pic147.src = "images/repitition/rp34.png"; // pic 35 red
		pic147.b = 0;

function repition_30()
  {   
		if(pic147.b == 0)
		{
			document.getElementById("rpe34").src = pic147.src;  //pic 35
			pic147.b = 1; 
			
			document.getElementById("rpe31").src = "images/repitition/rpe31.png"; //original pic 36
			pic144.b = 0;
			
			document.getElementById("rpe28").src = "images/repitition/rpe28.png"; //original pic 37
		    pic141.b = 0;

		}
		else
		{
		   document.getElementById("rpe34").src = "images/repitition/rpe34.png"; //original pic 35
		   pic147.b = 0;
		}
  
  }
  
  
 // Repitition 31

var pic142 = new Image();
		pic142.src = "images/repitition/rp29.png"; // pic 35 red
		pic142.b = 0;

function repition_31()
  {   
		if(pic142.b == 0)
		{
			document.getElementById("rpe29").src = pic142.src;  //pic 35
			pic142.b = 1; 
			
			document.getElementById("rpe32").src = "images/repitition/rpe32.png"; //original pic 36
			pic145.b = 0;
			
			document.getElementById("rpe35").src = "images/repitition/rpe35.png"; //original pic 37
		    pic148.b = 0;

		}
		else
		{
		   document.getElementById("rpe29").src = "images/repitition/rpe29.png"; //original pic 35
		   pic142.b = 0;
		}
  
  }
  
    
 // Repitition 32

var pic145 = new Image();
		pic145.src = "images/repitition/rp32.png"; // pic 35 red
		pic145.b = 0;

function repition_32()
  {   
		if(pic145.b == 0)
		{
			document.getElementById("rpe32").src = pic145.src;  //pic 35
			pic145.b = 1; 
			
			document.getElementById("rpe29").src = "images/repitition/rpe29.png"; //original pic 36
			pic142.b = 0;
			
			document.getElementById("rpe35").src = "images/repitition/rpe35.png"; //original pic 37
		    pic148.b = 0;

		}
		else
		{
		   document.getElementById("rpe32").src = "images/repitition/rpe32.png"; //original pic 35
		   pic145.b = 0;
		}
  
  }
  
  
   // Repitition 33

var pic148 = new Image();
		pic148.src = "images/repitition/rp35.png"; // pic 35 red
		pic148.b = 0;

function repition_33()
  {   
		if(pic148.b == 0)
		{
			document.getElementById("rpe35").src = pic148.src;  //pic 35
			pic148.b = 1; 
			
			document.getElementById("rpe29").src = "images/repitition/rpe29.png"; //original pic 36
			pic142.b = 0;
			
			document.getElementById("rpe32").src = "images/repitition/rpe32.png"; //original pic 37
		    pic145.b = 0;

		}
		else
		{
		   document.getElementById("rpe35").src = "images/repitition/rpe35.png"; //original pic 35
		   pic148.b = 0;
		}
  
  }
  
    
  
  // Repitition 34

var pic143 = new Image();
		pic143.src = "images/repitition/rp30.png"; // pic 35 red
		pic143.b = 0;

function repition_34()
  {   
		if(pic143.b == 0)
		{
			document.getElementById("rpe30").src = pic143.src;  //pic 35
			pic143.b = 1; 
			
			document.getElementById("rpe33").src = "images/repitition/rpe33.png"; //original pic 36
			pic146.b = 0;
			
			document.getElementById("rpe36").src = "images/repitition/rpe36.png"; //original pic 37
		    pic149.b = 0;

		}
		else
		{
		   document.getElementById("rpe30").src = "images/repitition/rpe30.png"; //original pic 35
		   pic143.b = 0;
		}
  
  }
  
 
  // Repitition 35

var pic146 = new Image();
		pic146.src = "images/repitition/rp33.png"; // pic 35 red
		pic146.b = 0;

function repition_35()
  {   
		if(pic146.b == 0)
		{
			document.getElementById("rpe33").src = pic146.src;  //pic 35
			pic146.b = 1; 
			
			document.getElementById("rpe30").src = "images/repitition/rpe30.png"; //original pic 36
			pic143.b = 0;
			
			document.getElementById("rpe36").src = "images/repitition/rpe36.png"; //original pic 37
		    pic149.b = 0;

		}
		else
		{
		   document.getElementById("rpe33").src = "images/repitition/rpe33.png"; //original pic 35
		   pic146.b = 0;
		}
  
  } 
  
   
  // Repitition 36

var pic149 = new Image();
		pic149.src = "images/repitition/rp36.png"; // pic 35 red
		pic149.b = 0;

function repition_36()
  {   
		if(pic149.b == 0)
		{
			document.getElementById("rpe36").src = pic149.src;  //pic 35
			pic149.b = 1; 
			
			document.getElementById("rpe30").src = "images/repitition/rpe30.png"; //original pic 36
			pic143.b = 0;
			
			document.getElementById("rpe33").src = "images/repitition/rpe33.png"; //original pic 37
		    pic146.b = 0;

		}
		else
		{
		   document.getElementById("rpe36").src = "images/repitition/rpe36.png"; //original pic 35
		   pic149.b = 0;
		}
  
  } 
  
  
// Repitition 37

var pic150 = new Image();
		pic150.src = "images/repitition/rp37.png"; // pic 35 red
		pic150.b = 0;

function repition_37()
  {   
		if(pic150.b == 0)
		{
			document.getElementById("rpe37").src = pic150.src;  //pic 35
			pic150.b = 1; 
			
			document.getElementById("rpe40").src = "images/repitition/rpe40.png"; //original pic 36
			pic153.b = 0;
			
			document.getElementById("rpe43").src = "images/repitition/rpe43.png"; //original pic 37
		    pic156.b = 0;

		}
		else
		{
		   document.getElementById("rpe37").src = "images/repitition/rpe37.png"; //original pic 35
		   pic150.b = 0;
		}
  
  }
  
   
// Repitition 38

var pic153 = new Image();
		pic153.src = "images/repitition/rp40.png"; // pic 35 red
		pic153.b = 0;

function repition_38()
  {   
		if(pic153.b == 0)
		{
			document.getElementById("rpe40").src = pic153.src;  //pic 35
			pic153.b = 1; 
			
			document.getElementById("rpe37").src = "images/repitition/rpe37.png"; //original pic 36
			pic150.b = 0;
			
			document.getElementById("rpe43").src = "images/repitition/rpe43.png"; //original pic 37
		    pic156.b = 0;

		}
		else
		{
		   document.getElementById("rpe40").src = "images/repitition/rpe40.png"; //original pic 35
		   pic153.b = 0;
		}
  
  }
  
  // Repitition 39

var pic156 = new Image();
		pic156.src = "images/repitition/rp43.png"; // pic 35 red
		pic156.b = 0;

function repition_39()
  {   
		if(pic156.b == 0)
		{
			document.getElementById("rpe43").src = pic156.src;  //pic 35
			pic156.b = 1; 
			
			document.getElementById("rpe37").src = "images/repitition/rpe37.png"; //original pic 36
			pic150.b = 0;
			
			document.getElementById("rpe40").src = "images/repitition/rpe40.png"; //original pic 37
		    pic153.b = 0;

		}
		else
		{
		   document.getElementById("rpe43").src = "images/repitition/rpe43.png"; //original pic 35
		   pic156.b = 0;
		}
  
  }
  
  
   
  // Repitition 40

var pic151 = new Image();
		pic151.src = "images/repitition/rp38.png"; // pic 35 red
		pic151.b = 0;

function repition_40()
  {   
		if(pic151.b == 0)
		{
			document.getElementById("rpe38").src = pic151.src;  //pic 35
			pic151.b = 1; 
			
			document.getElementById("rpe41").src = "images/repitition/rpe41.png"; //original pic 36
			pic154.b = 0;
			
			document.getElementById("rpe44").src = "images/repitition/rpe44.png"; //original pic 37
		    pic157.b = 0;

		}
		else
		{
		   document.getElementById("rpe38").src = "images/repitition/rpe38.png"; //original pic 35
		   pic151.b = 0;
		}
  
  }	
  
  
  
 // Repitition 41

var pic154 = new Image();
		pic154.src = "images/repitition/rp41.png"; // pic 35 red
		pic154.b = 0;

function repition_41()
  {   
		if(pic154.b == 0)
		{
			document.getElementById("rpe41").src = pic154.src;  //pic 35
			pic154.b = 1; 
			
			document.getElementById("rpe38").src = "images/repitition/rpe38.png"; //original pic 36
			pic151.b = 0;
			
			document.getElementById("rpe44").src = "images/repitition/rpe44.png"; //original pic 37
		    pic157.b = 0;

		}
		else
		{
		   document.getElementById("rpe41").src = "images/repitition/rpe41.png"; //original pic 35
		   pic154.b = 0;
		}
  
  }	
  
 
  // Repitition 42

var pic157 = new Image();
		pic157.src = "images/repitition/rp44.png"; // pic 35 red
		pic157.b = 0;

function repition_42()
  {   
		if(pic157.b == 0)
		{
			document.getElementById("rpe44").src = pic157.src;  //pic 35
			pic157.b = 1; 
			
			document.getElementById("rpe38").src = "images/repitition/rpe38.png"; //original pic 36
			pic151.b = 0;
			
			document.getElementById("rpe41").src = "images/repitition/rpe41.png"; //original pic 37
		    pic154.b = 0;

		}
		else
		{
		   document.getElementById("rpe44").src = "images/repitition/rpe44.png"; //original pic 35
		   pic157.b = 0;
		}
  
  }	
  

 
   // Repitition 43

var pic152 = new Image();
		pic152.src = "images/repitition/rp39.png"; // pic 35 red
		pic152.b = 0;

function repition_43()
  {   
		if(pic152.b == 0)
		{
			document.getElementById("rpe39").src = pic152.src;  //pic 35
			pic152.b = 1; 
			
			document.getElementById("rpe42").src = "images/repitition/rpe42.png"; //original pic 36
			pic155.b = 0;
			
			document.getElementById("rpe45").src = "images/repitition/rpe45.png"; //original pic 37
		    pic158.b = 0;

		}
		else
		{
		   document.getElementById("rpe39").src = "images/repitition/rpe39.png"; //original pic 35
		   pic152.b = 0;
		}
  
  }	
  
   
   
   // Repitition 44

var pic155 = new Image();
		pic155.src = "images/repitition/rp42.png"; // pic 35 red
		pic155.b = 0;

function repition_44()
  {   
		if(pic155.b == 0)
		{
			document.getElementById("rpe42").src = pic155.src;  //pic 35
			pic155.b = 1; 
			
			document.getElementById("rpe39").src = "images/repitition/rpe39.png"; //original pic 36
			pic152.b = 0;
			
			document.getElementById("rpe45").src = "images/repitition/rpe45.png"; //original pic 37
		    pic158.b = 0;

		}
		else
		{
		   document.getElementById("rpe42").src = "images/repitition/rpe42.png"; //original pic 35
		   pic155.b = 0;
		}
  
  }	
  
  
     
   // Repitition 45

var pic158 = new Image();
		pic158.src = "images/repitition/rp45.png"; // pic 35 red
		pic158.b = 0;

function repition_45()
  {   
		if(pic158.b == 0)
		{
			document.getElementById("rpe45").src = pic158.src;  //pic 35
			pic158.b = 1; 
			
			document.getElementById("rpe39").src = "images/repitition/rpe39.png"; //original pic 36
			pic152.b = 0;
			
			document.getElementById("rpe42").src = "images/repitition/rpe42.png"; //original pic 37
		    pic155.b = 0;

		}
		else
		{
		   document.getElementById("rpe45").src = "images/repitition/rpe45.png"; //original pic 35
		   pic158.b = 0;
		}
  
  }	
 

    
   // Repitition 46

var pic159 = new Image();
		pic159.src = "images/repitition/rp46.png"; // pic 35 red
		pic159.b = 0;

function repition_46()
  {   
		if(pic159.b == 0)
		{
			document.getElementById("rpe46").src = pic159.src;  //pic 35
			pic159.b = 1; 
			
			document.getElementById("rpe49").src = "images/repitition/rpe49.png"; //original pic 36
			pic162.b = 0;
			
			document.getElementById("rpe52").src = "images/repitition/rpe52.png"; //original pic 37
		    pic165.b = 0;

		}
		else
		{
		   document.getElementById("rpe46").src = "images/repitition/rpe46.png"; //original pic 35
		   pic159.b = 0;
		}
  
  }	
 

    // Repitition 47

var pic162= new Image();
		pic162.src = "images/repitition/rp49.png"; // pic 35 red
		pic162.b = 0;

function repition_47()
  {   
		if(pic162.b == 0)
		{
			document.getElementById("rpe49").src = pic162.src;  //pic 35
			pic162.b = 1; 
			
			document.getElementById("rpe46").src = "images/repitition/rpe46.png"; //original pic 36
			pic159.b = 0;
			
			document.getElementById("rpe52").src = "images/repitition/rpe52.png"; //original pic 37
		    pic165.b = 0;

		}
		else
		{
		   document.getElementById("rpe49").src = "images/repitition/rpe49.png"; //original pic 35
		   pic162.b = 0;
		}
  
  }


 
    // Repitition 48

var pic165= new Image();
		pic165.src = "images/repitition/rp52.png"; // pic 35 red
		pic165.b = 0;

function repition_48()
  {   
		if(pic165.b == 0)
		{
			document.getElementById("rpe52").src = pic165.src;  //pic 35
			pic165.b = 1; 
			
			document.getElementById("rpe46").src = "images/repitition/rpe46.png"; //original pic 36
			pic159.b = 0;
			
			document.getElementById("rpe49").src = "images/repitition/rpe49.png"; //original pic 37
		    pic162.b = 0;

		}
		else
		{
		   document.getElementById("rpe52").src = "images/repitition/rpe52.png"; //original pic 35
		   pic165.b = 0;
		}
  
  }  
  
  
 
 
// Repitition 49

var pic160= new Image();
		pic160.src = "images/repitition/rp47.png"; // pic 35 red
		pic160.b = 0;

function repition_49()
  {   
		if(pic160.b == 0)
		{
			document.getElementById("rpe47").src = pic160.src;  //pic 35
			pic160.b = 1; 
			
			document.getElementById("rpe50").src = "images/repitition/rpe50.png"; //original pic 36
			pic163.b = 0;
			
			document.getElementById("rpe53").src = "images/repitition/rpe53.png"; //original pic 37
		    pic166.b = 0;

		}
		else
		{
		   document.getElementById("rpe47").src = "images/repitition/rpe47.png"; //original pic 35
		   pic160.b = 0;
		}
  
  } 
  
   
  
// Repitition 50

var pic163= new Image();
		pic163.src = "images/repitition/rp50.png"; // pic 35 red
		pic163.b = 0;

function repition_50()
  {   
		if(pic163.b == 0)
		{
			document.getElementById("rpe50").src = pic163.src;  //pic 35
			pic163.b = 1; 
			
			document.getElementById("rpe47").src = "images/repitition/rpe47.png"; //original pic 36
			pic160.b = 0;
			
			document.getElementById("rpe53").src = "images/repitition/rpe53.png"; //original pic 37
		    pic166.b = 0;

		}
		else
		{
		   document.getElementById("rpe50").src = "images/repitition/rpe50.png"; //original pic 35
		   pic163.b = 0;
		}
  
  } 
  
   
   
// Repitition 51

var pic166= new Image();
		pic166.src = "images/repitition/rp53.png"; // pic 35 red
		pic166.b = 0;

function repition_51()
  {   
		if(pic166.b == 0)
		{
			document.getElementById("rpe53").src = pic166.src;  //pic 35
			pic166.b = 1; 
			
			document.getElementById("rpe47").src = "images/repitition/rpe47.png"; //original pic 36
			pic160.b = 0;
			
			document.getElementById("rpe50").src = "images/repitition/rpe50.png"; //original pic 37
		    pic163.b = 0;

		}
		else
		{
		   document.getElementById("rpe53").src = "images/repitition/rpe53.png"; //original pic 35
		   pic166.b = 0;
		}
  
  }
 
    
// Repitition 52

var pic161= new Image();
		pic161.src = "images/repitition/rp48.png"; // pic 35 red
		pic161.b = 0;

function repition_52()
  {   
		if(pic161.b == 0)
		{
			document.getElementById("rpe48").src = pic161.src;  //pic 35
			pic161.b = 1; 
			
			document.getElementById("rpe51").src = "images/repitition/rpe51.png"; //original pic 36
			pic164.b = 0;
			
			document.getElementById("rpe54").src = "images/repitition/rpe54.png"; //original pic 37
		    pic167.b = 0;

		}
		else
		{
		   document.getElementById("rpe48").src = "images/repitition/rpe48.png"; //original pic 35
		   pic161.b = 0;
		}
  
  }
 
 // Repitition 53

var pic164= new Image();
		pic164.src = "images/repitition/rp51.png"; // pic 35 red
		pic164.b = 0;

function repition_53()
  {   
		if(pic164.b == 0)
		{
			document.getElementById("rpe51").src = pic164.src;  //pic 35
			pic164.b = 1; 
			
			document.getElementById("rpe48").src = "images/repitition/rpe48.png"; //original pic 36
			pic161.b = 0;
			
			document.getElementById("rpe54").src = "images/repitition/rpe54.png"; //original pic 37
		    pic167.b = 0;

		}
		else
		{
		   document.getElementById("rpe51").src = "images/repitition/rpe51.png"; //original pic 35
		   pic164.b = 0;
		}
  
  }
  
  
  // Repitition 54

var pic167= new Image();
		pic167.src = "images/repitition/rp54.png"; // pic 35 red
		pic167.b = 0;

function repition_54()
  {   
		if(pic167.b == 0)
		{
			document.getElementById("rpe54").src = pic167.src;  //pic 35
			pic167.b = 1; 
			
			document.getElementById("rpe48").src = "images/repitition/rpe48.png"; //original pic 36
			pic161.b = 0;
			
			document.getElementById("rpe51").src = "images/repitition/rpe51.png"; //original pic 37
		    pic164.b = 0;

		}
		else
		{
		   document.getElementById("rpe54").src = "images/repitition/rpe54.png"; //original pic 35
		   pic167.b = 0;
		}
  
  }
  
  
  // Repitition 55

var pic168= new Image();
		pic168.src = "images/repitition/rp55.png"; // pic 35 red
		pic168.b = 0;

function repition_55()
  {   
		if(pic168.b == 0)
		{
			document.getElementById("rpe55").src = pic168.src;  //pic 35
			pic168.b = 1; 
			
			document.getElementById("rpe58").src = "images/repitition/rpe58.png"; //original pic 36
			pic171.b = 0;
			
			document.getElementById("rpe61").src = "images/repitition/rpe61.png"; //original pic 37
		    pic174.b = 0;

		}
		else
		{
		   document.getElementById("rpe55").src = "images/repitition/rpe55.png"; //original pic 35
		   pic168.b = 0;
		}
  
  }
  
  
    // Repitition 56

var pic171= new Image();
		pic171.src = "images/repitition/rp58.png"; // pic 35 red
		pic171.b = 0;

function repition_56()
  {   
		if(pic171.b == 0)
		{
			document.getElementById("rpe58").src = pic171.src;  //pic 35
			pic171.b = 1; 
			
			document.getElementById("rpe55").src = "images/repitition/rpe55.png"; //original pic 36
			pic168.b = 0;
			
			document.getElementById("rpe61").src = "images/repitition/rpe61.png"; //original pic 37
		    pic174.b = 0;

		}
		else
		{
		   document.getElementById("rpe58").src = "images/repitition/rpe58.png"; //original pic 35
		   pic171.b = 0;
		}
  
  }
  
  
      // Repitition 57

var pic174= new Image();
		pic174.src = "images/repitition/rp61.png"; // pic 35 red
		pic174.b = 0;

function repition_57()
  {   
		if(pic174.b == 0)
		{
			document.getElementById("rpe61").src = pic174.src;  //pic 35
			pic174.b = 1; 
			
			document.getElementById("rpe55").src = "images/repitition/rpe55.png"; //original pic 36
			pic168.b = 0;
			
			document.getElementById("rpe58").src = "images/repitition/rpe58.png"; //original pic 37
		    pic171.b = 0;

		}
		else
		{
		   document.getElementById("rpe61").src = "images/repitition/rpe61.png"; //original pic 35
		   pic174.b = 0;
		}
  
  }
  
  
   
// Repitition 58

var pic169= new Image();
		pic169.src = "images/repitition/rp56.png"; // pic 35 red
		pic169.b = 0;

function repition_58()
  {   
		if(pic169.b == 0)
		{
			document.getElementById("rpe56").src = pic169.src;  //pic 35
			pic169.b = 1; 
			
			document.getElementById("rpe59").src = "images/repitition/rpe59.png"; //original pic 36
			pic172.b = 0;
			
			document.getElementById("rpe62").src = "images/repitition/rpe62.png"; //original pic 37
		    pic175.b = 0;

		}
		else
		{
		   document.getElementById("rpe56").src = "images/repitition/rpe56.png"; //original pic 35
		   pic169.b = 0;
		}
  
  }
  
  
     
// Repitition 59

var pic172= new Image();
		pic172.src = "images/repitition/rp59.png"; // pic 35 red
		pic172.b = 0;

function repition_59()
  {   
		if(pic172.b == 0)
		{
			document.getElementById("rpe59").src = pic172.src;  //pic 35
			pic172.b = 1; 
			
			document.getElementById("rpe56").src = "images/repitition/rpe56.png"; //original pic 36
			pic169.b = 0;
			
			document.getElementById("rpe62").src = "images/repitition/rpe62.png"; //original pic 37
		    pic175.b = 0;

		}
		else
		{
		   document.getElementById("rpe59").src = "images/repitition/rpe59.png"; //original pic 35
		   pic172.b = 0;
		}
  
  }
  
  
   
     
// Repitition 60

var pic175= new Image();
		pic175.src = "images/repitition/rp62.png"; // pic 35 red
		pic175.b = 0;

function repition_60()
  {   
		if(pic175.b == 0)
		{
			document.getElementById("rpe62").src = pic175.src;  //pic 35
			pic175.b = 1; 
			
			document.getElementById("rpe56").src = "images/repitition/rpe56.png"; //original pic 36
			pic169.b = 0;
			
			document.getElementById("rpe59").src = "images/repitition/rpe59.png"; //original pic 37
		    pic172.b = 0;

		}
		else
		{
		   document.getElementById("rpe62").src = "images/repitition/rpe62.png"; //original pic 35
		   pic175.b = 0;
		}
  
  }
  
  
      
// Repitition 61

var pic170= new Image();
		pic170.src = "images/repitition/rp57.png"; // pic 35 red
		pic170.b = 0;

function repition_61()
  {   
		if(pic170.b == 0)
		{
			document.getElementById("rpe57").src = pic170.src;  //pic 35
			pic170.b = 1; 
			
			document.getElementById("rpe60").src = "images/repitition/rpe60.png"; //original pic 36
			pic173.b = 0;
			
			document.getElementById("rpe63").src = "images/repitition/rpe63.png"; //original pic 37
		    pic176.b = 0;

		}
		else
		{
		   document.getElementById("rpe57").src = "images/repitition/rpe57.png"; //original pic 35
		   pic170.b = 0;
		}
  
  }
  
  
       
// Repitition 62

var pic173= new Image();
		pic173.src = "images/repitition/rp60.png"; // pic 35 red
		pic173.b = 0;

function repition_62()
  {   
		if(pic173.b == 0)
		{
			document.getElementById("rpe60").src = pic173.src;  //pic 35
			pic173.b = 1; 
			
			document.getElementById("rpe57").src = "images/repitition/rpe57.png"; //original pic 36
			pic170.b = 0;
			
			document.getElementById("rpe63").src = "images/repitition/rpe63.png"; //original pic 37
		    pic176.b = 0;

		}
		else
		{
		   document.getElementById("rpe60").src = "images/repitition/rpe60.png"; //original pic 35
		   pic173.b = 0;
		}
  
  }
  
        
// Repitition 63

var pic176= new Image();
		pic176.src = "images/repitition/rp63.png"; // pic 35 red
		pic176.b = 0;

function repition_63()
  {   
		if(pic176.b == 0)
		{
			document.getElementById("rpe63").src = pic176.src;  //pic 35
			pic176.b = 1; 
			
			document.getElementById("rpe57").src = "images/repitition/rpe57.png"; //original pic 36
			pic170.b = 0;
			
			document.getElementById("rpe60").src = "images/repitition/rpe60.png"; //original pic 37
		    pic173.b = 0;

		}
		else
		{
		   document.getElementById("rpe63").src = "images/repitition/rpe63.png"; //original pic 35
		   pic176.b = 0;
		}
  
  } 
  



// onload	
$(function() {

// "Next" Button Visibility

					// Hiding'Next' buttons onload
					document.getElementById("next_page2").style.visibility="hidden";
					document.getElementById("next_page3").style.visibility="hidden";
					document.getElementById("next_page4").style.visibility="hidden";
					document.getElementById("next_page5").style.visibility="hidden";
					document.getElementById("next_page6").style.visibility="hidden";					
					document.getElementById("next_page7").style.visibility="hidden";
					document.getElementById("next_page7_1").style.visibility="hidden";
					document.getElementById("next_page7_2").style.visibility="hidden";
					document.getElementById("next_page8").style.visibility="hidden";
					document.getElementById("next_page9").style.visibility="hidden";
					document.getElementById("next_page10").style.visibility="hidden";
					document.getElementById("next_page11").style.visibility="hidden";
					document.getElementById("next_page12").style.visibility="hidden";
					document.getElementById("next_page13").style.visibility="hidden";
					document.getElementById("next_page13_1").style.visibility="hidden";
					document.getElementById("next_page14").style.visibility="hidden";
					document.getElementById("next_page14_1").style.visibility="hidden"; 
					document.getElementById("next_page15").style.visibility="hidden";
					document.getElementById("next_page16").style.visibility="hidden";
					document.getElementById("next_page17").style.visibility="hidden";
					document.getElementById("next_page18").style.visibility="hidden";
					document.getElementById("next_page19").style.visibility="hidden";
					document.getElementById("next_page20").style.visibility="hidden";
					document.getElementById("next_page21").style.visibility="hidden";
					document.getElementById("next_page22").style.visibility="hidden";
					document.getElementById("next_page23").style.visibility="hidden";
					document.getElementById("next_page24").style.visibility="hidden";
					document.getElementById("next_page25").style.visibility="hidden";
					document.getElementById("next_page26").style.visibility="hidden";
					document.getElementById("next_page27").style.visibility="hidden";
					document.getElementById("next_page28").style.visibility="hidden";
					document.getElementById("next_page29").style.visibility="hidden";
					document.getElementById("next_page30").style.visibility="hidden";
					document.getElementById("next_page31").style.visibility="hidden";
					document.getElementById("next_page32").style.visibility="hidden";
					document.getElementById("next_page33").style.visibility="hidden";
					document.getElementById("next_page34").style.visibility="hidden";
					document.getElementById("next_page35").style.visibility="hidden";
					document.getElementById("next_page36").style.visibility="hidden";
					document.getElementById("next_page37").style.visibility="hidden";
					document.getElementById("next_page37_1").style.visibility="hidden";
					document.getElementById("next_page37_2").style.visibility="hidden";
					document.getElementById("next_page37_3").style.visibility="hidden";
					document.getElementById("next_page37_4").style.visibility="hidden";
					document.getElementById("next_page37_5").style.visibility="hidden";
					document.getElementById("next_page38").style.visibility="hidden";
					document.getElementById("next_page38_1").style.visibility="hidden";
					document.getElementById("next_page38_2").style.visibility="hidden";
					document.getElementById("next_page38_3").style.visibility="hidden";
					document.getElementById("next_page38_4").style.visibility="hidden";
					document.getElementById("next_page38_5").style.visibility="hidden";
					document.getElementById("next_page39").style.visibility="hidden";
					document.getElementById("next_page39_1").style.visibility="hidden";
					document.getElementById("next_page39_2").style.visibility="hidden";
					document.getElementById("next_page39_3").style.visibility="hidden";
					document.getElementById("next_page39_4").style.visibility="hidden";
					document.getElementById("next_page39_5").style.visibility="hidden";
					document.getElementById("next_page40").style.visibility="hidden";
					document.getElementById("next_page40_1").style.visibility="hidden";
					document.getElementById("next_page40_2").style.visibility="hidden";
					document.getElementById("next_page40_3").style.visibility="hidden";
					document.getElementById("next_page40_4").style.visibility="hidden";
					document.getElementById("next_page40_5").style.visibility="hidden";
					document.getElementById("next_page41").style.visibility="hidden";
					document.getElementById("next_page41_1").style.visibility="hidden";
					document.getElementById("next_page41_2").style.visibility="hidden";
					document.getElementById("next_page41_3").style.visibility="hidden";
					document.getElementById("next_page41_4").style.visibility="hidden";
					document.getElementById("next_page41_5").style.visibility="hidden";					
					document.getElementById("next_page43").style.visibility="hidden";
					document.getElementById("next_page43_1").style.visibility="hidden";
					document.getElementById("next_page43_2").style.visibility="hidden";
					document.getElementById("next_page43_3").style.visibility="hidden";
					document.getElementById("next_page43_4").style.visibility="hidden";
					document.getElementById("next_page43_5").style.visibility="hidden";					
					document.getElementById("next_page44").style.visibility="hidden";
					document.getElementById("next_page44_1").style.visibility="hidden";
					document.getElementById("next_page44_2").style.visibility="hidden";
					document.getElementById("next_page44_3").style.visibility="hidden";
					document.getElementById("next_page44_4").style.visibility="hidden";
					document.getElementById("next_page44_5").style.visibility="hidden";					
					document.getElementById("next_page42").style.visibility="hidden";
										
					//slider
					$('#mySlider1').live('swiperight', function() {
		  				  document.getElementById("next_page4").style.visibility="visible";
					});	
					$('#mySlider1').live('swipeleft', function() {
		  				  document.getElementById("next_page4").style.visibility="visible";
					});	
					
					$('#mySlider2').live('swiperight', function() {
		  				  document.getElementById("next_page6").style.visibility="visible";
					});	
					$('#mySlider2').live('swipeleft', function() {
		  				  document.getElementById("next_page6").style.visibility="visible";
					});	
					
					$('#mySlider3').live('swiperight', function() {
		  				  document.getElementById("next_page9").style.visibility="visible";
					});	
					$('#mySlider3').live('swipeleft', function() {
		  				  document.getElementById("next_page9").style.visibility="visible";
					});	
					
					$('#mySlider4').live('swiperight', function() {
		  				  document.getElementById("next_page10").style.visibility="visible";
					});	
					$('#mySlider4').live('swipeleft', function() {
		  				  document.getElementById("next_page10").style.visibility="visible";
					});

					$('#mySlider5').live('swiperight', function() {
		  				  document.getElementById("next_page11").style.visibility="visible";
					});	
					$('#mySlider5').live('swipeleft', function() {
		  				  document.getElementById("next_page11").style.visibility="visible";
					});	
					
					$('#mySlider6').live('swiperight', function() {
		  				  document.getElementById("next_page12").style.visibility="visible";
					});	
					$('#mySlider6').live('swipeleft', function() {
		  				  document.getElementById("next_page12").style.visibility="visible";
					});
					
					$('#mySlider7').live('swiperight', function() {
		  				  document.getElementById("next_page13_1").style.visibility="visible";
					});	
					$('#mySlider7').live('swipeleft', function() {
		  				  document.getElementById("next_page13_1").style.visibility="visible";
					});
					
					$('#mySlider8').live('swiperight', function() {
		  				  document.getElementById("next_page14_1").style.visibility="visible";
					});	
					$('#mySlider8').live('swipeleft', function() {
		  				  document.getElementById("next_page14_1").style.visibility="visible";
					});
					$('#mySlider9').live('swiperight', function() {
		  				  document.getElementById("next_page18").style.visibility="visible";
					});	
					$('#mySlider9').live('swipeleft', function() {
		  				  document.getElementById("next_page18").style.visibility="visible";
					});
					$('#mySlider10').live('swiperight', function() {
		  				  document.getElementById("next_page21").style.visibility="visible";
					});	
					$('#mySlider10').live('swipeleft', function() {
		  				  document.getElementById("next_page21").style.visibility="visible";
					});
					$('#mySlider11').live('swiperight', function() {
		  				  document.getElementById("next_page22").style.visibility="visible";
					});	
					$('#mySlider11').live('swipeleft', function() {
		  				  document.getElementById("next_page22").style.visibility="visible";
					});
					$('#mySlider12').live('swiperight', function() {
		  				  document.getElementById("next_page23").style.visibility="visible";
					});	
					$('#mySlider12').live('swipeleft', function() {
		  				  document.getElementById("next_page23").style.visibility="visible";
					});
					$('#mySlider13').live('swiperight', function() {
		  				  document.getElementById("next_page24").style.visibility="visible";
					});	
					$('#mySlider13').live('swipeleft', function() {
		  				  document.getElementById("next_page24").style.visibility="visible";
					});
					$('#mySlider14').live('swiperight', function() {
		  				  document.getElementById("next_page28").style.visibility="visible";
					});	
					$('#mySlider14').live('swipeleft', function() {
		  				  document.getElementById("next_page28").style.visibility="visible";
					});
					$('#mySlider15').live('swiperight', function() {
		  				  document.getElementById("next_page30").style.visibility="visible";
					});	
					$('#mySlider15').live('swipeleft', function() {
		  				  document.getElementById("next_page30").style.visibility="visible";
					});
					$('#mySlider16').live('swiperight', function() {
		  				  document.getElementById("next_page32").style.visibility="visible";
					});	
					$('#mySlider16').live('swipeleft', function() {
		  				  document.getElementById("next_page32").style.visibility="visible";
					});
					$('#mySlider17').live('swiperight', function() {
		  				  document.getElementById("next_page33").style.visibility="visible";
					});	
					$('#mySlider17').live('swipeleft', function() {
		  				  document.getElementById("next_page33").style.visibility="visible";
					});
					$('#mySlider18').live('swiperight', function() {
		  				  document.getElementById("next_page34").style.visibility="visible";
					});	
					$('#mySlider18').live('swipeleft', function() {
		  				  document.getElementById("next_page34").style.visibility="visible";
					});
					$('#mySlider19').live('swiperight', function() {
		  				  document.getElementById("next_page35").style.visibility="visible";
					});	
					$('#mySlider19').live('swipeleft', function() {
		  				  document.getElementById("next_page35").style.visibility="visible";
					});
					$('#mySlider20').live('swiperight', function() {
		  				  document.getElementById("next_page37_4").style.visibility="visible";
					});	
					$('#mySlider20').live('swipeleft', function() {
		  				  document.getElementById("next_page37_4").style.visibility="visible";
					});
					$('#mySlider21').live('swiperight', function() {
		  				  document.getElementById("next_page38_4").style.visibility="visible";
					});	
					$('#mySlider21').live('swipeleft', function() {
		  				  document.getElementById("next_page38_4").style.visibility="visible";
					});
					$('#mySlider22').live('swiperight', function() {
		  				  document.getElementById("next_page39_4").style.visibility="visible";
					});	
					$('#mySlider22').live('swipeleft', function() {
		  				  document.getElementById("next_page39_4").style.visibility="visible";
					});
					$('#mySlider23').live('swiperight', function() {
		  				  document.getElementById("next_page40_4").style.visibility="visible";
					});	
					$('#mySlider23').live('swipeleft', function() {
		  				  document.getElementById("next_page40_4").style.visibility="visible";
					});
					$('#mySlider24').live('swiperight', function() {
		  				  document.getElementById("next_page41_4").style.visibility="visible";
					});	
					$('#mySlider24').live('swipeleft', function() {
		  				  document.getElementById("next_page41_4").style.visibility="visible";
					});	
					$('#mySlider25').live('swiperight', function() {
		  				  document.getElementById("next_page43_4").style.visibility="visible";
					});	
					$('#mySlider25').live('swipeleft', function() {
		  				  document.getElementById("next_page43_4").style.visibility="visible";
					});
					$('#mySlider26').live('swiperight', function() {
		  				  document.getElementById("next_page44_4").style.visibility="visible";
					});
					$('#mySlider26').live('swipeleft', function() {
		  				  document.getElementById("next_page44_4").style.visibility="visible";
					});
					
			
					
					//radio														
					$('.radio_1').bind('click',function () {					
						document.getElementById("next_page7").style.visibility="visible";
					}); 
					$('.radio_2').bind('click',function () {					
						document.getElementById("next_page7").style.visibility="visible";
					}); 					
					$('.radio_5').bind('click',function () {					
						document.getElementById("next_page7_2").style.visibility="visible";					   
					}); 
					$('.radio_6').bind('click',function () {					
						document.getElementById("next_page7_2").style.visibility="visible";					   
					});					
					$('.radio_12').bind('click',function () {					
						document.getElementById("next_page13").style.visibility="visible";					   
					});
					$('.radio_13').bind('click',function () {					
						document.getElementById("next_page13").style.visibility="visible";					   
					});
					$('.radio_22').bind('click',function () {					
						document.getElementById("next_page14").style.visibility="visible";					   
					});	
					$('.radio_23').bind('click',function () {					
						document.getElementById("next_page14").style.visibility="visible";					   
					});
					$('.radio-choice-32').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-33').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-34').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-35').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-36').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-37').bind('click',function () {					
						document.getElementById("next_page36").style.visibility="visible";					   
					});
					$('.radio-choice-42').bind('click',function () {					
						document.getElementById("next_page37").style.visibility="visible";					   
					});
					$('.radio-choice-43').bind('click',function () {					
						document.getElementById("next_page37").style.visibility="visible";					   
					});										
					$('.radio-choice-62').bind('click',function () {					
						document.getElementById("next_page37_2").style.visibility="visible";					   
					});
					$('.radio-choice-63').bind('click',function () {					
						document.getElementById("next_page37_2").style.visibility="visible";					   
					});
					$('.radio-choice-72').bind('click',function () {					
						document.getElementById("next_page37_3").style.visibility="visible";					   
					});
					$('.radio-choice-73').bind('click',function () {					
						document.getElementById("next_page37_3").style.visibility="visible";					   
					});
					$('.radio-choice-74').bind('click',function () {					
						document.getElementById("next_page38").style.visibility="visible";					   
					});									
					$('.radio-choice-75').bind('click',function () {					
						document.getElementById("next_page38").style.visibility="visible";					   
					});			
					$('.radio-choice-79').bind('click',function () {					
						document.getElementById("next_page38_2").style.visibility="visible";					   
					});
					$('.radio-choice-80').bind('click',function () {					
						document.getElementById("next_page38_2").style.visibility="visible";					   
					});
					$('.radio-choice-81').bind('click',function () {					
						document.getElementById("next_page38_3").style.visibility="visible";					   
					});
					$('.radio-choice-82').bind('click',function () {					
						document.getElementById("next_page38_3").style.visibility="visible";					   
					});
					$('.radio-choice-83').bind('click',function () {					
						document.getElementById("next_page39").style.visibility="visible";					   
					});
					$('.radio-choice-84').bind('click',function () {					
						document.getElementById("next_page39").style.visibility="visible";					   
					});
					$('.radio-choice-88').bind('click',function () {					
						document.getElementById("next_page39_2").style.visibility="visible";					   
					});
					$('.radio-choice-89').bind('click',function () {					
						document.getElementById("next_page39_2").style.visibility="visible";					   
					});
					$('.radio-choice-90').bind('click',function () {					
						document.getElementById("next_page39_3").style.visibility="visible";					   
					});
					$('.radio-choice-91').bind('click',function () {					
						document.getElementById("next_page39_3").style.visibility="visible";					   
					});
					$('.radio-choice-92').bind('click',function () {					
						document.getElementById("next_page40").style.visibility="visible";					   
					});
					$('.radio-choice-93').bind('click',function () {					
						document.getElementById("next_page40").style.visibility="visible";					   
					});
					$('.radio-choice-97').bind('click',function () {					
						document.getElementById("next_page40_2").style.visibility="visible";					   
					});
					$('.radio-choice-98').bind('click',function () {					
						document.getElementById("next_page40_2").style.visibility="visible";					   
					});
					$('.radio-choice-99').bind('click',function () {					
						document.getElementById("next_page40_3").style.visibility="visible";					   
					});
					$('.radio-choice-100').bind('click',function () {					
						document.getElementById("next_page40_3").style.visibility="visible";					   
					});
					$('.radio-choice-101').bind('click',function () {					
						document.getElementById("next_page41").style.visibility="visible";					   
					});
					$('.radio-choice-102').bind('click',function () {					
						document.getElementById("next_page41").style.visibility="visible";					   
					});										
					$('.radio-choice-106').bind('click',function () {					
						document.getElementById("next_page41_2").style.visibility="visible";					   
					});
					$('.radio-choice-107').bind('click',function () {					
						document.getElementById("next_page41_2").style.visibility="visible";					   
					});
					$('.radio-choice-108').bind('click',function () {					
						document.getElementById("next_page41_3").style.visibility="visible";					   
					});
					$('.radio-choice-109').bind('click',function () {					
						document.getElementById("next_page41_3").style.visibility="visible";					   
					});
					$('.radio-choice-110').bind('click',function () {					
						document.getElementById("next_page43").style.visibility="visible";					   
					});
					$('.radio-choice-111').bind('click',function () {					
						document.getElementById("next_page43").style.visibility="visible";					   
					});
					$('.radio-choice-115').bind('click',function () {					
						document.getElementById("next_page43_2").style.visibility="visible";					   
					});
					$('.radio-choice-116').bind('click',function () {					
						document.getElementById("next_page43_2").style.visibility="visible";					   
					});					
					$('.radio-choice-117').bind('click',function () {					
						document.getElementById("next_page43_3").style.visibility="visible";					   
					});
					$('.radio-choice-118').bind('click',function () {					
						document.getElementById("next_page43_3").style.visibility="visible";					   
					});					
					$('.radio-choice-119').bind('click',function () {					
						document.getElementById("next_page44").style.visibility="visible";					   
					});
					$('.radio-choice-120').bind('click',function () {					
						document.getElementById("next_page44").style.visibility="visible";					   
					});
					$('.radio-choice-124').bind('click',function () {					
						document.getElementById("next_page44_2").style.visibility="visible";					   
					});
					$('.radio-choice-125').bind('click',function () {					
						document.getElementById("next_page44_2").style.visibility="visible";					   
					});					
					$('.radio-choice-126').bind('click',function () {					
						document.getElementById("next_page44_3").style.visibility="visible";					   
					});
					$('.radio-choice-127').bind('click',function () {					
						document.getElementById("next_page44_3").style.visibility="visible";					   
					});
					

					//textarea					
					$('#textarea-a').bind('click',function () {					
						document.getElementById("next_page15").style.visibility="visible";						
					});	
					$('#textarea-b').bind('click',function () {					
						document.getElementById("next_page25").style.visibility="visible";						
					});
					$('#textarea-c').bind('click',function () {					
						document.getElementById("next_page37_5").style.visibility="visible";						
					});
					$('#textarea-d').bind('click',function () {					
						document.getElementById("next_page38_5").style.visibility="visible";						
					});
					$('#textarea-e').bind('click',function () {					
						document.getElementById("next_page39_5").style.visibility="visible";						
					});
					$('#textarea-f').bind('click',function () {					
						document.getElementById("next_page40_5").style.visibility="visible";						
					});
					$('#textarea-g').bind('click',function () {					
						document.getElementById("next_page41_5").style.visibility="visible";						
					});
					$('#textarea-i').bind('click',function () {					
						document.getElementById("next_page43_5").style.visibility="visible";						
					});
					$('#textarea-j').bind('click',function () {					
						document.getElementById("next_page44_5").style.visibility="visible";						
					});														
					$('#textarea-h').bind('click',function () {					
						document.getElementById("next_page42").style.visibility="visible";						
					});
					
					

                    //image
					$('.j57').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j58').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j59').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j60').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j61').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j62').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j63').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j64').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					$('.j65').bind('click',function () {					
						document.getElementById("next_page5").style.visibility="visible";					   
					}); 
					
					
					$('.j85').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j86').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j87').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j88').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j89').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j90').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j91').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j92').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					$('.j93').bind('click',function () {					
						document.getElementById("next_page19").style.visibility="visible";					   
					}); 
					
					$('.j94').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j95').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j96').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j97').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j98').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j99').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j100').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j101').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					$('.j102').bind('click',function () {					
						document.getElementById("next_page29").style.visibility="visible";					   
					}); 
					
					//div
					$('.front1').bind('click',function () {					
						document.getElementById("next_page2").style.visibility="visible";					   
					}); 					
					$('.front2').bind('click',function () {					
						document.getElementById("next_page2").style.visibility="visible";					   
					});
					$('.back1').bind('click',function () {					
						document.getElementById("next_page3").style.visibility="visible";					   
					}); 					
					$('.back2').bind('click',function () {					
						document.getElementById("next_page3").style.visibility="visible";					   
					});
					$('.front3').bind('click',function () {					
						document.getElementById("next_page16").style.visibility="visible";					   
					}); 					
					$('.front4').bind('click',function () {					
						document.getElementById("next_page16").style.visibility="visible";					   
					});
					$('.back3').bind('click',function () {					
						document.getElementById("next_page17").style.visibility="visible";					   
					}); 
					$('.back4').bind('click',function () {					
						document.getElementById("next_page17").style.visibility="visible";					   
					});	
					$('.front5').bind('click',function () {					
						document.getElementById("next_page26").style.visibility="visible";					   
					});
					$('.front6').bind('click',function () {					
						document.getElementById("next_page26").style.visibility="visible";					   
					});	
					$('.back5').bind('click',function () {					
						document.getElementById("next_page27").style.visibility="visible";					   
					}); 
					$('.back6').bind('click',function () {					
						document.getElementById("next_page27").style.visibility="visible";					   
					});						
	

					//checkbox
					//page 7_1
					$('.checkbox_16').bind('click',function () {					
						document.getElementById("next_page7_1").style.visibility="visible";						
					}); 
					$('.checkbox_17').bind('click',function () {					
						document.getElementById("next_page7_1").style.visibility="visible";						
					}); 
					//page 8
					$('.checkbox-1').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-2').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-3').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-4').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-5').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-18').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-19').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-20').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-21').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-22').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-23').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});										
					$('.checkbox-24').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-25').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-26').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-27').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-28').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-29').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-30').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-31').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-32').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-33').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-34').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-35').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-36').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-37').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-38').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-39').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-40').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});
					$('.checkbox-41').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-42').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-43').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	
					$('.checkbox-44').bind('click',function () {					
						document.getElementById("next_page8").style.visibility="visible";					   
					});	


					//page 20
					$('.checkbox-45').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-46').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-47').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-48').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-49').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-50').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-51').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-52').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-53').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-54').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-55').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});										
					$('.checkbox-56').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-57').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-58').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-59').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-60').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-61').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-62').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-63').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-64').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-65').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-66').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-67').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-68').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-69').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-70').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-71').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-72').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});
					$('.checkbox-73').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-74').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-75').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});	
					$('.checkbox-76').bind('click',function () {					
						document.getElementById("next_page20").style.visibility="visible";					   
					});


					//page 31
					$('.checkbox-77').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-78').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-79').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-80').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-81').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-82').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-83').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-84').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-85').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-86').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-87').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});										
					$('.checkbox-88').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-89').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-90').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-91').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-92').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-93').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-94').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-95').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-96').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-97').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-98').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-99').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-100').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-101').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-102').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-103').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-104').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});
					$('.checkbox-105').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-106').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-107').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	
					$('.checkbox-108').bind('click',function () {					
						document.getElementById("next_page31").style.visibility="visible";					   
					});	



// Business logic on "Next" button, determine the page location onclick
						
						// Page 7
						$(".next_page7").bind('click', function() {			

								if(document.getElementById('radio-choice-2').checked)
								{
										 $.mobile.changePage("#page7_1",{transition:"slide"});
								}
								else 
								{
										 $.mobile.changePage("#page9",{transition:"slide"});	
								}
						});
						
						$(".next_page7_1").bind('click', function() {			

								if(document.getElementById('checkbox-17').checked)
								{                                      
										 $.mobile.changePage("#page7_2",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page9",{transition:"slide"});	
								}
						});
						
						// Page 13
						$(".next_page13").bind('click', function() {			

								if(document.getElementById('radio-choice-12').checked)
								{                                      
										 $.mobile.changePage("#page13_1",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page14",{transition:"slide"});	
								}
						});
						
						// Page 14
						
						$(".next_page14").bind('click', function() {			

								if(document.getElementById('radio-choice-22').checked)
								{                                      
										 $.mobile.changePage("#page14_1",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page15",{transition:"slide"});	
								}
						});
						
						//Page 37
						
						$(".next_page37").bind('click', function() {			

								if(document.getElementById('radio-choice-42').checked)
								{                                      
										 $.mobile.changePage("#page37_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page37_1",{transition:"slide"});	
								}
						});
						
						$(".next_page37_2").bind('click', function() {			

								if(document.getElementById('radio-choice-62').checked)
								{                                      
										 $.mobile.changePage("#page37_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page37_3",{transition:"slide"});	
								}
						});
						
						$(".next_page37_3").bind('click', function() {			

								if(document.getElementById('radio-choice-72').checked)
								{                                      
										 $.mobile.changePage("#page37_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page38",{transition:"slide"});	
								}
						});
						
						//Page 38
						
						$(".next_page38").bind('click', function() {			

								if(document.getElementById('radio-choice-74').checked)
								{                                      
										 $.mobile.changePage("#page38_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page38_1",{transition:"slide"});	
								}
						});
						
						$(".next_page38_2").bind('click', function() {			

								if(document.getElementById('radio-choice-79').checked)
								{                                      
										 $.mobile.changePage("#page38_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page38_3",{transition:"slide"});	
								}
						});
						
						$(".next_page38_3").bind('click', function() {			

								if(document.getElementById('radio-choice-81').checked)
								{                                      
										 $.mobile.changePage("#page38_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page39",{transition:"slide"});	
								}
						});
						
						//Page 39
						
						$(".next_page39").bind('click', function() {			

								if(document.getElementById('radio-choice-83').checked)
								{                                      
										 $.mobile.changePage("#page39_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page39_1",{transition:"slide"});	
								}
						});
						
						$(".next_page39_2").bind('click', function() {			

								if(document.getElementById('radio-choice-88').checked)
								{                                      
										 $.mobile.changePage("#page39_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page39_3",{transition:"slide"});	
								}
						});
						
						$(".next_page39_3").bind('click', function() {			

								if(document.getElementById('radio-choice-90').checked)
								{                                      
										 $.mobile.changePage("#page39_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page40",{transition:"slide"});	
								}
						});
						
						//Page 40
						
						$(".next_page40").bind('click', function() {			

								if(document.getElementById('radio-choice-92').checked)
								{                                      
										 $.mobile.changePage("#page40_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page40_1",{transition:"slide"});	
								}
						});
						
						$(".next_page40_2").bind('click', function() {			

								if(document.getElementById('radio-choice-97').checked)
								{                                      
										 $.mobile.changePage("#page40_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page40_3",{transition:"slide"});	
								}
						});
						
						$(".next_page40_3").bind('click', function() {			

								if(document.getElementById('radio-choice-99').checked)
								{                                      
										 $.mobile.changePage("#page40_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page41",{transition:"slide"});	
								}
						});
						
						//Page 41
						
						$(".next_page41").bind('click', function() {			

								if(document.getElementById('radio-choice-101').checked)
								{                                      
										 $.mobile.changePage("#page41_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page41_1",{transition:"slide"});	
								}
						});
						
						$(".next_page41_2").bind('click', function() {			

								if(document.getElementById('radio-choice-106').checked)
								{                                      
										 $.mobile.changePage("#page41_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page41_3",{transition:"slide"});	
								}
						});
						
						$(".next_page41_3").bind('click', function() {			

								if(document.getElementById('radio-choice-108').checked)
								{                                      
										 $.mobile.changePage("#page41_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page43",{transition:"slide"});	
								}
						});
						
						//Page 43
						
						$(".next_page43").bind('click', function() {			

								if(document.getElementById('radio-choice-110').checked)
								{                                      
										 $.mobile.changePage("#page43_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page43_1",{transition:"slide"});	
								}
						});
						
						$(".next_page43_2").bind('click', function() {			

								if(document.getElementById('radio-choice-115').checked)
								{                                      
										 $.mobile.changePage("#page43_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page43_3",{transition:"slide"});	
								}
						});
						
						$(".next_page43_3").bind('click', function() {			

								if(document.getElementById('radio-choice-117').checked)
								{                                      
										 $.mobile.changePage("#page43_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page44",{transition:"slide"});	
								}
						});
						
						//Page 44
						
						$(".next_page44").bind('click', function() {			

								if(document.getElementById('radio-choice-119').checked)
								{                                      
										 $.mobile.changePage("#page44_3",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page44_1",{transition:"slide"});	
								}
						});
						
						$(".next_page44_2").bind('click', function() {			

								if(document.getElementById('radio-choice-124').checked)
								{                                      
										 $.mobile.changePage("#page44_5",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page44_3",{transition:"slide"});	
								}
						});
						
						$(".next_page44_3").bind('click', function() {			

								if(document.getElementById('radio-choice-126').checked)
								{                                      
										 $.mobile.changePage("#page44_4",{transition:"slide"});
								}
								else 
								{								        
										 $.mobile.changePage("#page42",{transition:"slide"});	
								}
						});
						
						
						// Page 36
						
						$('#ball_1').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_2').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_3').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_4').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_5').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_6').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_7').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_8').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_9').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_10').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						$('#ball_11').bind('click',function () {					
								document.getElementById("next_page36").style.visibility="visible";					   
						});
						

						
						
						
						// Page 37_1
						
						$("#rpe1").bind('click', function(){
												
								if(pic114.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic114.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe2").bind('click', function(){					

								if(pic114.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic114.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic117.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic117.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic120.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic120.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});
						$("#rpe3").bind('click', function(){								
						
								if(pic114.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic114.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic114.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}

								if(pic117.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic117.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic117.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}

								if(pic120.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic120.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic120.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
						});	
						
						$("#rpe4").bind('click', function(){
												
								if(pic117.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic117.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe5").bind('click', function(){								
						
								if(pic114.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic117.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic120.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								
						});	

						
						$("#rpe6").bind('click', function(){								
						
								if(pic114.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}																													
								if(pic114.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}						
								if(pic114.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic117.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}																													
								if(pic117.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}						
								if(pic117.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic120.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}																													
								if(pic120.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}						
								if(pic120.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								
						});	
						$("#rpe7").bind('click', function(){
												
								if(pic120.b==1 && pic115.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic115.b==1 && pic119.b==1)
								{ 									
									document.getElementById("next_page37_1").style.visibility="visible";
								}													
								if(pic120.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic118.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic118.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});	
						
						$("#rpe8").bind('click', function(){
												
								if(pic114.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic114.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic117.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic117.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic120.b==1 && pic121.b==1 && pic116.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic121.b==1 && pic119.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								if(pic120.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});

						
						$("#rpe9").bind('click', function(){								
															
								if(pic114.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic114.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic114.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic117.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic117.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic117.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
								if(pic120.b==1 && pic115.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic120.b==1 && pic118.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}								
								if(pic120.b==1 && pic121.b==1 && pic122.b==1)
								{
									document.getElementById("next_page37_1").style.visibility="visible";
								}
								
						});
						
						
						// Page 38_1
						
						$("#rpe10").bind('click', function(){
												
								if(pic123.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic123.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe11").bind('click', function(){
						
								if(pic123.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic123.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic126.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic126.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic129.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic129.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe12").bind('click', function(){
						
								if(pic123.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}

								if(pic126.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}

								if(pic129.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}								
						});
						
						$("#rpe13").bind('click', function(){
						
							    if(pic126.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic126.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe14").bind('click', function(){
						
							    if(pic123.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic126.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic129.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe15").bind('click', function(){
						
								if(pic123.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}								
								if(pic123.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic126.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}								
								if(pic126.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic129.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}								
								if(pic129.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe16").bind('click', function(){
												
								if(pic129.b==1 && pic124.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic124.b==1 && pic128.b==1)
								{ 									
									document.getElementById("next_page38_1").style.visibility="visible";
								}													
								if(pic129.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe17").bind('click', function(){
						
								if(pic123.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic126.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic129.b==1 && pic130.b==1 && pic125.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic128.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe18").bind('click', function(){
																			
								if(pic123.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic123.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic126.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic126.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								
								if(pic129.b==1 && pic124.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic127.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}
								if(pic129.b==1 && pic130.b==1 && pic131.b==1)
								{
									document.getElementById("next_page38_1").style.visibility="visible";
								}												
						});
						
						
						
						// Page 39_1
						
						$("#rpe19").bind('click', function(){
												
								if(pic132.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic132.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe20").bind('click', function(){
												
								if(pic132.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic132.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic135.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic135.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic138.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic138.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
						});
						
						$("#rpe21").bind('click', function(){
						
								if(pic132.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic132.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic132.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}

								if(pic135.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic135.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic135.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}	

								if(pic138.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic138.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic138.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
						});
						
						$("#rpe22").bind('click', function(){
												
								if(pic135.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic135.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe23").bind('click', function(){
						
								if(pic132.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic135.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic138.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe24").bind('click', function(){						

								if(pic132.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}														
								if(pic132.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic135.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}														
								if(pic135.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic138.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}														
								if(pic138.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}

						});
						
						$("#rpe25").bind('click', function(){
												
								if(pic138.b==1 && pic133.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic133.b==1 && pic137.b==1)
								{ 									
									document.getElementById("next_page39_1").style.visibility="visible";
								}													
								if(pic138.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic136.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic136.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe26").bind('click', function(){
						
								if(pic132.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic132.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic135.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic135.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic138.b==1 && pic139.b==1 && pic134.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic137.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								if(pic138.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe27").bind('click', function(){						
																	
								if(pic132.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic132.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic132.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic135.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic135.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic135.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
								
								if(pic138.b==1 && pic133.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic138.b==1 && pic136.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}								
								if(pic138.b==1 && pic139.b==1 && pic140.b==1)
								{
									document.getElementById("next_page39_1").style.visibility="visible";
								}
						
						});
						
					
						// Page 40_1
						
						$("#rpe28").bind('click', function(){
												
								if(pic141.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic141.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe29").bind('click', function(){
						
								if(pic141.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic141.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic144.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic144.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic147.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic147.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe30").bind('click', function(){
												
								if(pic141.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic141.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic141.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}

								if(pic144.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic144.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic144.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}

								if(pic147.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic147.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic147.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								
						});
						
						$("#rpe31").bind('click', function(){
												
								if(pic144.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic144.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe32").bind('click', function(){
						
								if(pic141.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic144.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic147.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe33").bind('click', function(){
																				
								if(pic141.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}																					
								if(pic141.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic141.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic144.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}																					
								if(pic144.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic144.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic147.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}																					
								if(pic147.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic147.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}																
						});
						
						$("#rpe34").bind('click', function(){
												
								if(pic147.b==1 && pic142.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic142.b==1 && pic146.b==1)
								{ 									
									document.getElementById("next_page40_1").style.visibility="visible";
								}													
								if(pic147.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic145.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic145.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe35").bind('click', function(){
						
								if(pic141.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic141.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic144.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic144.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic147.b==1 && pic148.b==1 && pic143.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic148.b==1 && pic146.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								if(pic147.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe36").bind('click', function(){
																										
								if(pic141.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic141.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic141.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic144.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic144.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic144.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
								
								if(pic147.b==1 && pic142.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic147.b==1 && pic145.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}								
								if(pic147.b==1 && pic148.b==1 && pic149.b==1)
								{
									document.getElementById("next_page40_1").style.visibility="visible";
								}
						
						});
						
						// Page 41_1
						
						$("#rpe37").bind('click', function(){
												
								if(pic150.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic150.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe38").bind('click', function(){
												
								if(pic150.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic150.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic153.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic156.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
						});
						
						$("#rpe39").bind('click', function(){
												
								if(pic150.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic150.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic150.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic153.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic153.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic156.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic156.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								
						});
						
						$("#rpe40").bind('click', function(){
												
								if(pic153.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic153.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe41").bind('click', function(){
						
								if(pic150.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe42").bind('click', function(){
												
								if(pic150.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}																					
								if(pic150.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic150.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}																					
								if(pic153.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic153.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}																					
								if(pic156.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic156.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
																
						});
						
						$("#rpe43").bind('click', function(){
												
								if(pic156.b==1 && pic151.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic151.b==1 && pic155.b==1)
								{ 									
									document.getElementById("next_page41_1").style.visibility="visible";
								}													
								if(pic156.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic154.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic154.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe44").bind('click', function(){
						
								if(pic150.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic150.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic153.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic157.b==1 && pic152.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic157.b==1 && pic155.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								if(pic156.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe45").bind('click', function(){												
																					
								if(pic150.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic150.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic150.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic153.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic153.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic153.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
								if(pic156.b==1 && pic151.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic156.b==1 && pic154.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}								
								if(pic156.b==1 && pic157.b==1 && pic158.b==1)
								{
									document.getElementById("next_page41_1").style.visibility="visible";
								}
								
						});
						
						// Page 43_1
						
						$("#rpe46").bind('click', function(){
												
								if(pic159.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic159.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe47").bind('click', function(){
												
								if(pic159.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic159.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic162.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic162.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic165.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
						});
						
						$("#rpe48").bind('click', function(){
												
								if(pic159.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic159.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic159.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic162.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic162.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic165.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic165.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								
						});
						
						$("#rpe49").bind('click', function(){
												
								if(pic159.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic159.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe50").bind('click', function(){
						
								if(pic159.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic162.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic162.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe51").bind('click', function(){
																				
								if(pic159.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}																					
								if(pic159.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic159.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}																					
								if(pic162.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic162.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}																					
								if(pic165.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic165.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe52").bind('click', function(){
												
								if(pic165.b==1 && pic160.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic160.b==1 && pic164.b==1)
								{ 									
									document.getElementById("next_page43_1").style.visibility="visible";
								}													
								if(pic165.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic163.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic163.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe53").bind('click', function(){
						
								if(pic159.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic159.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic162.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic162.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic166.b==1 && pic161.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic166.b==1 && pic164.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								if(pic165.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe54").bind('click', function(){
												
																					
								if(pic159.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic159.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic159.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic162.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic162.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic162.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
								if(pic165.b==1 && pic160.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic165.b==1 && pic163.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}								
								if(pic165.b==1 && pic166.b==1 && pic167.b==1)
								{
									document.getElementById("next_page43_1").style.visibility="visible";
								}
								
						});
						
						
						// Page 44_1
						
						$("#rpe55").bind('click', function(){
												
								if(pic168.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic168.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe56").bind('click', function(){
						
								if(pic168.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic168.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic171.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic174.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic174.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe57").bind('click', function(){
												
								if(pic168.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic168.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic168.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic171.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic171.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic174.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic174.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic174.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								
						});
						
						
						$("#rpe58").bind('click', function(){
												
								if(pic171.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic171.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe59").bind('click', function(){
						
								if(pic168.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic174.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe60").bind('click', function(){
																				
								if(pic168.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}																					
								if(pic168.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic168.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}																					
								if(pic171.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic171.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic174.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}																					
								if(pic174.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic174.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}																
						});
						
						$("#rpe61").bind('click', function(){
												
								if(pic174.b==1 && pic169.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic169.b==1 && pic173.b==1)
								{ 									
									document.getElementById("next_page44_1").style.visibility="visible";
								}													
								if(pic174.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic172.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic172.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
						});
						
						$("#rpe62").bind('click', function(){
						
								if(pic168.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic174.b==1 && pic175.b==1 && pic170.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic175.b==1 && pic173.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic174.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
						
						});
						
						$("#rpe63").bind('click', function(){												
																					
								if(pic168.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic168.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic168.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic171.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic171.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic171.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
								if(pic176.b==1 && pic169.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								if(pic176.b==1 && pic172.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}								
								if(pic176.b==1 && pic175.b==1 && pic176.b==1)
								{
									document.getElementById("next_page44_1").style.visibility="visible";
								}
								
						});
						
						
						
// Business logic on Button - "No pain"

						$(".no_pain_p2").bind('click', function() {	
								pain_p2.bool = 1; 
						   	    $.mobile.changePage("#page3",{transition:"slide"}); 								
						}); 
						$(".no_pain_p3").bind('click', function() {	
								pain_p3.bool = 1;
								//alert(pain_p2.bool);
                                // alert(pain_p3.bool);						
															
								if(pain_p2.bool==0 && pain_p3.bool==1)
								{
									$.mobile.changePage("#page4",{transition:"slide"}); 
								}
								if(pain_p2.bool==1 && pain_p3.bool==1)
								{
									$.mobile.changePage("#page7",{transition:"slide"}); 
								}													   	   								
						}); 
						
						$(".no_pain_p16").bind('click', function() {
								pain_p16.bool = 1; 						
						   	    $.mobile.changePage("#page17",{transition:"slide"}); 								
						});
						$(".no_pain_p17").bind('click', function() {						   
						   	    pain_p17.bool = 1;					
															
								if(pain_p16.bool==0 && pain_p17.bool==1)
								{
									$.mobile.changePage("#page18",{transition:"slide"}); 
								}
								if(pain_p16.bool==1 && pain_p17.bool==1)
								{
									$.mobile.changePage("#page21",{transition:"slide"}); 
								}									
						});
						$(".no_pain_p26").bind('click', function() {						   
						   	    pain_p26.bool = 1; 						
						   	    $.mobile.changePage("#page27",{transition:"slide"}); 									
						});
						$(".no_pain_p27").bind('click', function() {						   
						   	    pain_p27.bool = 1;
																				
								if(pain_p26.bool==0 && pain_p27.bool==1)
								{
									$.mobile.changePage("#page28",{transition:"slide"}); 
								}
								if(pain_p26.bool==1 && pain_p27.bool==1)
								{
									$.mobile.changePage("#page32",{transition:"slide"}); 
								} 								
						});						
						
// Hiding images
			
	document.getElementById("head_d_red").style.visibility="hidden";
	document.getElementById("head_d_blue").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red").style.visibility="hidden";
	document.getElementById("rightshoulder_d_blue").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red").style.visibility="hidden";
	document.getElementById("leftshoulder_d_blue").style.visibility="hidden";
	document.getElementById("chest_d_red").style.visibility="hidden";
	document.getElementById("chest_d_blue").style.visibility="hidden";
	document.getElementById("abdomen_d_red").style.visibility="hidden";
	document.getElementById("abdomen_d_blue").style.visibility="hidden";
	document.getElementById("lelbow_d_red").style.visibility="hidden";
	document.getElementById("lelbow_d_blue").style.visibility="hidden";
	document.getElementById("relbow_d_red").style.visibility="hidden";
	document.getElementById("relbow_d_blue").style.visibility="hidden";
	document.getElementById("lhand_d_red").style.visibility="hidden";
	document.getElementById("lhand_d_blue").style.visibility="hidden";
    document.getElementById("rhand_d_red").style.visibility="hidden";
	document.getElementById("rhand_d_blue").style.visibility="hidden";
	document.getElementById("rhip_d_red").style.visibility="hidden";
	document.getElementById("rhip_d_blue").style.visibility="hidden";
	document.getElementById("groin_d_red").style.visibility="hidden";
	document.getElementById("groin_d_blue").style.visibility="hidden";
	document.getElementById("lhip_d_red").style.visibility="hidden";
	document.getElementById("lhip_d_blue").style.visibility="hidden";
	document.getElementById("rleg_d_red").style.visibility="hidden";
	document.getElementById("rleg_d_blue").style.visibility="hidden";
	document.getElementById("lleg_d_red").style.visibility="hidden";
	document.getElementById("lleg_d_blue").style.visibility="hidden";
	document.getElementById("lfoot_d_red").style.visibility="hidden";
	document.getElementById("lfoot_d_blue").style.visibility="hidden";
	document.getElementById("rfoot_d_red").style.visibility="hidden";
	document.getElementById("rfoot_d_blue").style.visibility="hidden";
	document.getElementById("head_d_red_back").style.visibility="hidden";
	document.getElementById("head_d_blue_back").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red_back").style.visibility="hidden";
	document.getElementById("rightshoulder_d_blue_back").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red_back").style.visibility="hidden";
	document.getElementById("leftshoulder_d_blue_back").style.visibility="hidden";
	document.getElementById("chest_d_red_back").style.visibility="hidden";
	document.getElementById("chest_d_blue_back").style.visibility="hidden";
	document.getElementById("abdomen_d_red_back").style.visibility="hidden";
	document.getElementById("abdomen_d_blue_back").style.visibility="hidden";
	document.getElementById("lelbow_d_red_back").style.visibility="hidden";
	document.getElementById("lelbow_d_blue_back").style.visibility="hidden";
	document.getElementById("relbow_d_red_back").style.visibility="hidden";
	document.getElementById("relbow_d_blue_back").style.visibility="hidden";
	document.getElementById("lhand_d_red_back").style.visibility="hidden";
	document.getElementById("lhand_d_blue_back").style.visibility="hidden";
	document.getElementById("rhand_d_red_back").style.visibility="hidden";
	document.getElementById("rhand_d_blue_back").style.visibility="hidden";
	document.getElementById("rhip_d_red_back").style.visibility="hidden";
	document.getElementById("rhip_d_blue_back").style.visibility="hidden";
	document.getElementById("back_d_red_back").style.visibility="hidden";
	document.getElementById("back_d_blue_back").style.visibility="hidden";
	document.getElementById("lhip_d_red_back").style.visibility="hidden";
	document.getElementById("lhip_d_blue_back").style.visibility="hidden";
	document.getElementById("rleg_d_red_back").style.visibility="hidden";
	document.getElementById("rleg_d_blue_back").style.visibility="hidden";
	document.getElementById("lleg_d_red_back").style.visibility="hidden";
	document.getElementById("lleg_d_blue_back").style.visibility="hidden";
	document.getElementById("lfoot_d_red_back").style.visibility="hidden";
	document.getElementById("lfoot_d_blue_back").style.visibility="hidden";
	document.getElementById("rfoot_d_red_back").style.visibility="hidden";
	document.getElementById("rfoot_d_blue_back").style.visibility="hidden";
	
	document.getElementById("head_d_red_b").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red_b").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red_b").style.visibility="hidden";
	document.getElementById("chest_d_red_b").style.visibility="hidden";
	document.getElementById("abdomen_d_red_b").style.visibility="hidden";
	document.getElementById("lelbow_d_red_b").style.visibility="hidden";
	document.getElementById("relbow_d_red_b").style.visibility="hidden";
	document.getElementById("lhand_d_red_b").style.visibility="hidden";
    document.getElementById("rhand_d_red_b").style.visibility="hidden";
	document.getElementById("rhip_d_red_b").style.visibility="hidden";
	document.getElementById("groin_d_red_b").style.visibility="hidden";
	document.getElementById("lhip_d_red_b").style.visibility="hidden";
	document.getElementById("rleg_d_red_b").style.visibility="hidden";
	document.getElementById("lleg_d_red_b").style.visibility="hidden";
	document.getElementById("lfoot_d_red_b").style.visibility="hidden";
	document.getElementById("rfoot_d_red_b").style.visibility="hidden";
	document.getElementById("head_d_red_back_b").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red_back_b").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red_back_b").style.visibility="hidden";
	document.getElementById("chest_d_red_back_b").style.visibility="hidden";
	document.getElementById("abdomen_d_red_back_b").style.visibility="hidden";
	document.getElementById("lelbow_d_red_back_b").style.visibility="hidden";
	document.getElementById("relbow_d_red_back_b").style.visibility="hidden";
	document.getElementById("lhand_d_red_back_b").style.visibility="hidden";;
	document.getElementById("rhand_d_red_back_b").style.visibility="hidden";
	document.getElementById("rhip_d_red_back_b").style.visibility="hidden";
	document.getElementById("back_d_red_back_b").style.visibility="hidden";
	document.getElementById("lhip_d_red_back_b").style.visibility="hidden";
	document.getElementById("rleg_d_red_back_b").style.visibility="hidden";
	document.getElementById("lleg_d_red_back_b").style.visibility="hidden";
	document.getElementById("lfoot_d_red_back_b").style.visibility="hidden";
	document.getElementById("rfoot_d_red_back_b").style.visibility="hidden";
	
	document.getElementById("head_d_red_a").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red_a").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red_a").style.visibility="hidden";
	document.getElementById("chest_d_red_a").style.visibility="hidden";
	document.getElementById("abdomen_d_red_a").style.visibility="hidden";
	document.getElementById("lelbow_d_red_a").style.visibility="hidden";
	document.getElementById("relbow_d_red_a").style.visibility="hidden";
	document.getElementById("lhand_d_red_a").style.visibility="hidden";
    document.getElementById("rhand_d_red_a").style.visibility="hidden";
	document.getElementById("rhip_d_red_a").style.visibility="hidden";
	document.getElementById("groin_d_red_a").style.visibility="hidden";
	document.getElementById("lhip_d_red_a").style.visibility="hidden";
	document.getElementById("rleg_d_red_a").style.visibility="hidden";
	document.getElementById("lleg_d_red_a").style.visibility="hidden";
	document.getElementById("lfoot_d_red_a").style.visibility="hidden";
	document.getElementById("rfoot_d_red_a").style.visibility="hidden";
	document.getElementById("head_d_red_back_a").style.visibility="hidden";
	document.getElementById("rightshoulder_d_red_back_a").style.visibility="hidden";
	document.getElementById("leftshoulder_d_red_back_a").style.visibility="hidden";
	document.getElementById("chest_d_red_back_a").style.visibility="hidden";
	document.getElementById("abdomen_d_red_back_a").style.visibility="hidden";
	document.getElementById("lelbow_d_red_back_a").style.visibility="hidden";
	document.getElementById("relbow_d_red_back_a").style.visibility="hidden";
	document.getElementById("lhand_d_red_back_a").style.visibility="hidden";
	document.getElementById("rhand_d_red_back_a").style.visibility="hidden";
	document.getElementById("rhip_d_red_back_a").style.visibility="hidden";
	document.getElementById("back_d_red_back_a").style.visibility="hidden";
	document.getElementById("lhip_d_red_back_a").style.visibility="hidden";
	document.getElementById("rleg_d_red_back_a").style.visibility="hidden";
	document.getElementById("lleg_d_red_back_a").style.visibility="hidden";
	document.getElementById("lfoot_d_red_back_a").style.visibility="hidden";
	document.getElementById("rfoot_d_red_back_a").style.visibility="hidden";

	
	

		

 }); //jQuery function onload

//......................................................................

// Web SQL Database 

 var db;
 var fileSystem;
 var currentTime = new Date();


 function init(){
	//WebSQL
	db = window.openDatabase("pingo", "1.0", "pingo", 1000000);	
	
	//file system
	document.addEventListener("deviceready", onDeviceReady, true);
 }
 
 function onDeviceReady() {
   // alert("onDeviceReady");
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, createFile, errorHandler);    
 }

//Creating a file 
 function createFile(fs){  
   
    fileSystem = fs;

    fileSystem.root.getFile("Daily.txt", {create:true}, successFileCreate, errorHandler);
	fileSystem.root.getFile("Before.txt", {create:true}, successFileCreate, errorHandler);
	fileSystem.root.getFile("After.txt", {create:true}, successFileCreate, errorHandler);
	//alert(fileSystem.root.name);
 }
 

 
 //Creating table into Web SQL Database
 //Daily Exercise
 function createTableforDaily(){
        db.transaction(setupfordaily, errorHandler, successCreate);        
 } 
 
 function setupfordaily(tx){

		
	//tx.executeSql("DROP TABLE IF EXISTS " + tableName);
	//tx.executeSql("create table if not exists "+tableName+"(id INTEGER PRIMARY KEY AUTOINCREMENT, msg TEXT)");
	
	tx.executeSql("DROP TABLE IF EXISTS Daily");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Daily(id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, question TEXT, answer TEXT)");
 }
 

//Before Exercise 
 function createTableforBefore(){
        db.transaction(setupforbefore, errorHandler, successCreate);        
 } 
 
 function setupforbefore(tx){
	tx.executeSql("DROP TABLE IF EXISTS Before");
	tx.executeSql("CREATE TABLE IF NOT EXISTS Before(id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, question TEXT, answer TEXT)");
 }
 
 //After Exercise 
 function createTableforAfter(){
        db.transaction(setupforafter, errorHandler, successCreate);        
 } 
 
 function setupforafter(tx){
	 tx.executeSql("DROP TABLE IF EXISTS After");
	 tx.executeSql("CREATE TABLE IF NOT EXISTS After(id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, question TEXT, answer TEXT)");
 }
 
 
  // Inserting data into the table named "Daily"
 function addDatatoDaily(){  
        //db.transaction(adddaily, errorHandler, successAdd);	 
		db.transaction(adddaily, errorHandler, readDatafromDaily);
 }
 

 function adddaily(tx){
 
         //Current time
         var month = currentTime.getMonth() + 1;
		 var day = currentTime.getDate();
		 var year = currentTime.getFullYear();		 

		 var hour = currentTime.getHours();
		 var min = currentTime.getMinutes();		 
		 var time = month+ "/" +day+ "/" +year+"    "+ hour + ":" + min;		 
		 var newCurrentTime = time.toString();
		 		 
		 
		 //Question number 2 - page 2
		 var question2 = "2";
		 var daily_bodylocation_front = " ";
		 var pain_now = " ";
		 var pain_had = " ";
		 
		
		//Have pain right now
		 if(head1.bool == "red") pain_now += "Head, ";
		 if(rightShd1.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1.bool == "red") pain_now += "Chest, ";
		 if(lelbow1.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(groin1.bool == "red") pain_now += "Groin, ";
		 if(lhip1.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1.bool == "red") pain_now += "Left Foot, ";
		 
		 //Pain Had today
		 if(head2.bool == "blue") pain_had += "Head, ";
		 if(rightShd2.bool == "blue") pain_had += "Right Shoulder, ";
		 if(leftShd2.bool == "blue") pain_had += "Left Shoulder, ";
		 if(relbow2.bool == "blue") pain_had += "Right Elbow, ";
		 if(check2.bool == "blue") pain_had += "Chest, ";
		 if(lelbow2.bool == "blue") pain_had += "Left Elbow, ";
		 if(abdomen2.bool == "blue") pain_had += "Abdomen, ";
		// if(pic16.b == 1) pain_had += "Neck, ";
		 if(rhand2.bool == "blue") pain_had += "Right Hand, ";
		 if(rhip2.bool == "blue") pain_had += "Right Hip Thigh, ";
		 if(groin2.bool == "blue") pain_had += "Groin, ";
		 if(lhip2.bool == "blue") pain_had += "Left Hip Thigh, ";
		 if(lhand2.bool == "blue") pain_had += "Left Hand, ";
		 if(rleg2.bool == "blue") pain_had += "Right Knee, ";
		 if(lleg2.bool == "blue") pain_had += "Left Knee, ";
		 if(rfoot2.bool == "blue") pain_had += "Right Foot, ";
		 if(lfoot2.bool == "blue") pain_had += "Left Foot, ";
		 
		 daily_bodylocation_front = "Have pain right now == "+ pain_now + ";" +"     Had pain today == "+pain_had;      		 
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question2,daily_bodylocation_front]); 
	 
		  //Question number 3 - page 3
		  var question3 = "3";
		 var daily_bodylocation_back = " ";
		 var pain_now = " ";
		 var pain_had = " ";
		 
		
		//Have pain right now
		 if(head1_back.bool == "red") pain_now = "Head, ";
		 if(rightShd1_back.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1_back.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1_back.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1_back.bool == "red") pain_now += "Chest, ";
		 if(lelbow1_back.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1_back.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1_back.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1_back.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(back1_back.bool == "red") pain_now += "Back, ";
		 if(lhip1_back.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1_back.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1_back.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1_back.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1_back.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1_back.bool == "red") pain_now += "Left Foot, ";
		 
		 //Pain Had today
		 if(head2_back.bool == "blue") pain_had = "Head, ";
		 if(rightShd2_back.bool == "blue") pain_had += "Right Shoulder, ";
		 if(leftShd2_back.bool == "blue") pain_had += "Left Shoulder, ";
		 if(relbow2_back.bool == "blue") pain_had += "Right Elbow, ";
		 if(check2_back.bool == "blue") pain_had += "Chest, ";
		 if(lelbow2_back.bool == "blue") pain_had += "Left Elbow, ";
		 if(abdomen2_back.bool == "blue") pain_had += "Abdomen, ";
		// if(pic16.b == 1) pain_had += "Neck, ";
		 if(rhand2_back.bool == "blue") pain_had += "Right Hand, ";
		 if(rhip2_back.bool == "blue") pain_had += "Right Hip Thigh, ";
		 if(back2_back.bool == "blue") pain_had += "Back, ";
		 if(lhip2_back.bool == "blue") pain_had += "Left Hip Thigh, ";
		 if(lhand2_back.bool == "blue") pain_had += "Left Hand, ";
		 if(rleg2_back.bool == "blue") pain_had += "Right Knee, ";
		 if(lleg2_back.bool == "blue") pain_had += "Left Knee, ";
		 if(rfoot2_back.bool == "blue") pain_had += "Right Foot, ";
		 if(lfoot2_back.bool == "blue") pain_had += "Left Foot, ";
		 
		 daily_bodylocation_back = "Have pain right now == "+ pain_now + ";" +"     Had pain today == "+pain_had;      		 
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question3,daily_bodylocation_back]); 	 
		 
		 //Question number 4 - page 4
		 var question4 = "4";
		 
		 var slider1 = document.getElementById("slider1").value;
         var slider1String = slider1.toString();		 
		 //var json_i = JSON.stringify({Timestamp: "daily", Question: question, painintensity: slider1});				
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question4,slider1String]);
		 //tx.executeSql("insert into "+tableName+"(msg) values(?)",[json_i]);
		 
		//Question number 5 - page 5
		 var question5 = "5";  	
		 var daily_emoticon = " ";
		 var d_emoticon = " ";
		 
		 if(pic35.b == 1) d_emoticon = "emotion 1 ";
		 if(pic36.b == 1) d_emoticon += "emotion 2 ";
		 if(pic37.b == 1) d_emoticon += "emotion 3 ";
		 if(pic38.b == 1) d_emoticon += "emotion 4 ";
		 if(pic39.b == 1) d_emoticon += "emotion 5 ";
		 if(pic40.b == 1) d_emoticon += "emotion 6 ";
		 if(pic41.b == 1) d_emoticon += "emotion 7 ";
		 if(pic42.b == 1) d_emoticon += "emotion 8 ";
		 if(pic43.b == 1) d_emoticon += "emotion 9 ";

		 daily_emoticon = "Pain Affect == "+ d_emoticon; 
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question5,daily_emoticon]); 		 
	 
		 //Question number 6 - page 6
		 var question6 = "6";
		 
		 var slider2 = document.getElementById("slider2").value;
         var slider2String = slider2.toString();
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question6,slider2String]);
		 
		 //Question number 7 - page 7
		 var question7 = "7"; 
         var radio1;		 
		 if(document.getElementById("radio-choice-1").checked)
				{                                      
					radio1 = document.getElementById("radio-choice-1").value;	 
				}
		 else 
				{								        
					radio1 = document.getElementById("radio-choice-2").value;									
				}

		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question7,radio1]);
		 
		 //Question number 7_1 - page 7_1
		 var question7_1 = "7_1";		 
		 var checkbox16 = "";
		 var checkbox17 = "";
         var checkbox18;		 
		 if(document.getElementById("radio-choice-2").checked)
				{  				  
					if(document.getElementById("checkbox-16").checked)
					{
							checkbox16 = document.getElementById("checkbox-16").value; 
					}
					if(document.getElementById("checkbox-17").checked)
					{
							checkbox17 = document.getElementById("checkbox-17").value; 
					}
								
				}
		checkbox18 = checkbox16 +"  "+ checkbox17;			
		tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question7_1,checkbox18]);

		//Question number 7_2 - page 7_2
		var question7_2 = "7_2";		
		var radio5 = " ";		 
		if(document.getElementById("checkbox-17").checked)
				{                                      
					if(document.getElementById("radio-choice-5").checked)
					{
							radio5 = document.getElementById("radio-choice-5").value; 
					}
					else(document.getElementById("radio-choice-6").checked)
					{
							radio5 = document.getElementById("radio-choice-6").value; 
					} 
				}		
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question7_2,radio5]);
		
		 
         //Question number 8 - page 8
		 var question8 = "8";var checkbox1 = "";var checkbox2 = "";var checkbox3 = "";var checkbox4 = "";
		 var checkbox5 = "";var checkbox18 = "";var checkbox19 = "";var checkbox20 = "";var checkbox21 = "";
		 var checkbox22 = "";var checkbox23 = "";var checkbox24 = "";var checkbox25 = "";var checkbox26 = "";
		 var checkbox27 = "";var checkbox28 = "";var checkbox29 = "";var checkbox30 = "";var checkbox31 = "";
		 var checkbox32 = "";var checkbox33 = "";var checkbox34 = "";var checkbox35 = "";var checkbox36 = "";
		 var checkbox37 = "";var checkbox38 = "";var checkbox39 = "";var checkbox40 = "";var checkbox41 = "";
		 var checkbox42 = "";var checkbox43 = "";var checkbox44 = "";
		 var checkbox_p8;
		 
		 if(document.getElementById("checkbox-1").checked)
		 {
				checkbox1 = document.getElementById("checkbox-1").value;
		 }
		 if(document.getElementById("checkbox-2").checked)
		 {
				checkbox2 = document.getElementById("checkbox-2").value;
		 }
		 if(document.getElementById("checkbox-3").checked)
		 {
				checkbox3 = document.getElementById("checkbox-3").value;
		 }
		 if(document.getElementById("checkbox-4").checked)
		 {
				checkbox4 = document.getElementById("checkbox-4").value;
		 }
		 if(document.getElementById("checkbox-5").checked)
		 {
				checkbox5 = document.getElementById("checkbox-5").value;
		 }
		 if(document.getElementById("checkbox-18").checked)
		 {
				checkbox18 = document.getElementById("checkbox-18").value;
		 }
		 if(document.getElementById("checkbox-19").checked)
		 {
				checkbox19 = document.getElementById("checkbox-19").value;
		 }
		 if(document.getElementById("checkbox-20").checked)
		 {
				checkbox20 = document.getElementById("checkbox-20").value;
		 }
		 if(document.getElementById("checkbox-21").checked)
		 {
				checkbox21 = document.getElementById("checkbox-21").value;
		 }
		 if(document.getElementById("checkbox-22").checked)
		 {
				checkbox22 = document.getElementById("checkbox-22").value;
		 }
		 if(document.getElementById("checkbox-23").checked)
		 {
				checkbox23 = document.getElementById("checkbox-23").value;
		 }
		  if(document.getElementById("checkbox-24").checked)
		 {
				checkbox24 = document.getElementById("checkbox-24").value;
		 }
		  if(document.getElementById("checkbox-25").checked)
		 {
				checkbox25 = document.getElementById("checkbox-25").value;
		 }
		  if(document.getElementById("checkbox-26").checked)
		 {
				checkbox26 = document.getElementById("checkbox-26").value;
		 }
		  if(document.getElementById("checkbox-27").checked)
		 {
				checkbox27 = document.getElementById("checkbox-27").value;
		 }
		  if(document.getElementById("checkbox-28").checked)
		 {
				checkbox28 = document.getElementById("checkbox-28").value;
		 }
		  if(document.getElementById("checkbox-29").checked)
		 {
				checkbox29 = document.getElementById("checkbox-29").value;
		 }
		  if(document.getElementById("checkbox-30").checked)
		 {
				checkbox30 = document.getElementById("checkbox-30").value;
		 }
		  if(document.getElementById("checkbox-31").checked)
		 {
				checkbox31 = document.getElementById("checkbox-31").value;
		 }
		  if(document.getElementById("checkbox-32").checked)
		 {
				checkbox32 = document.getElementById("checkbox-32").value;
		 }
		  if(document.getElementById("checkbox-33").checked)
		 {
				checkbox33 = document.getElementById("checkbox-33").value;
		 }
		  if(document.getElementById("checkbox-34").checked)
		 {
				checkbox34 = document.getElementById("checkbox-34").value;
		 }
		  if(document.getElementById("checkbox-35").checked)
		 {
				checkbox35 = document.getElementById("checkbox-35").value;
		 }
		  if(document.getElementById("checkbox-36").checked)
		 {
				checkbox36 = document.getElementById("checkbox-36").value;
		 }
		  if(document.getElementById("checkbox-37").checked)
		 {
				checkbox37 = document.getElementById("checkbox-37").value;
		 }
		  if(document.getElementById("checkbox-38").checked)
		 {
				checkbox38 = document.getElementById("checkbox-38").value;
		 }
		  if(document.getElementById("checkbox-39").checked)
		 {
				checkbox39 = document.getElementById("checkbox-39").value;
		 }
		  if(document.getElementById("checkbox-40").checked)
		 {
				checkbox40 = document.getElementById("checkbox-40").value;
		 }
		  if(document.getElementById("checkbox-41").checked)
		 {
				checkbox41 = document.getElementById("checkbox-41").value;
		 }
		  if(document.getElementById("checkbox-42").checked)
		 {
				checkbox42 = document.getElementById("checkbox-42").value;
		 }
		  if(document.getElementById("checkbox-43").checked)
		 {
				checkbox43 = document.getElementById("checkbox-43").value;
		 }
		  if(document.getElementById("checkbox-44").checked)
		 {
				checkbox44 = document.getElementById("checkbox-44").value;
		 }
		 
		 
		 checkbox_p8 = checkbox1 +"  "+ checkbox2+"  "+ checkbox3+"  "+ checkbox4+"  "+ checkbox5+"  "+ checkbox18+"  "+ checkbox19+"  "+ checkbox20+"  "+ checkbox21+"  "+ checkbox22+"  "+ checkbox23+"  "+ checkbox24+"  "+ checkbox25+"  "+ checkbox26+"  "+ checkbox27+"  "+ checkbox28+"  "+ checkbox29+"  "+ checkbox30+"  "+ checkbox31+"  "+ checkbox32+"  "+ checkbox33+"  "+ checkbox34+"  "+ checkbox35+"  "+ checkbox36+"  "+ checkbox37+"  "+ checkbox38+"  "+ checkbox39+"  "+ checkbox40+"  "+ checkbox41+"  "+ checkbox42+"  "+ checkbox43+"  "+ checkbox44;
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question8,checkbox_p8]);
		 
		 
		 
		 //Question number 9 - page 9
		 var question9 = "9";
		 
		 var slider3 = document.getElementById("slider3").value;
         var slider3String = slider3.toString();
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question9,slider3String]);
		 
		 //Question number 10 - page 10
		 var question10 = "10";
		 
		 var slider4 = document.getElementById("slider4").value;
         var slider4String = slider4.toString();
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question10,slider4String]);
		 
		 //Question number 11 - page 11
		 var question11 = "11";
		 
		 var slider5 = document.getElementById("slider5").value;
         var slider5String = slider5.toString();
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question11,slider5String]);
		 
		  //Question number 12 - page 6
		 var question12 = "12";
		 
		 var slider6 = document.getElementById("slider6").value;
         var slider6String = slider6.toString();
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question12,slider6String]);
		 	 
		 //Question number 13 - page 13	 
		var question13 = "13";		
		var radio13;		 
	                                     
		 if(document.getElementById("radio-choice-12").checked)
		 {
				radio13 = document.getElementById("radio-choice-12").value;
		 }
		 if(document.getElementById("radio-choice-13").checked)
		 {
				radio13 = document.getElementById("radio-choice-13").value;
		 } 
			
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question13,radio13]);		 
		 		
        //Question number 13_1 - page 13_1
		 var question13_1 = "13_1";		 
		 var slider7String = " ";

		if(document.getElementById("radio-choice-12").checked)
				{                                      
					var slider7 = document.getElementById("slider7").value;
					var slider7String = slider7.toString();

				}		
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question13_1,slider7String]);	

		//Question number 14 - page 14
		 var question14 = "14";		 
		 var radio22;
		 
		 if(document.getElementById("radio-choice-22").checked)
				{                                      
					radio22 = document.getElementById("radio-choice-22").value;	 
				}
		 else 
				{								        
					radio22 = document.getElementById("radio-choice-23").value;									
				}
		 tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question14,radio22]);	

        //Question number 14_1 - page 14_1
		 var question14_1 = "14_1";		 
		 var slider8String = " ";

		if(document.getElementById("radio-choice-22").checked)
				{                                      
					var slider8 = document.getElementById("slider8").value;
					var slider8String = slider8.toString();

				}		
		tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question14_1,slider8String]);			 
		 
		//Question number 15 - page 15
		var question15 = "15";		 
		var textareaA = "  ";
		
		textareaA = document.getElementById("textarea-a").value;
		tx.executeSql("insert into Daily(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question15,textareaA]);
		 		 
		
 } //adddaily()
 
 // Inserting data into the table "Before"
 function addDatatoBefore(){  
        db.transaction(addbefore, errorHandler, readDatafromBefore);	
 }
 
 function addbefore(tx){
     
		 var month = currentTime.getMonth() + 1;
		 var day = currentTime.getDate();
		 var year = currentTime.getFullYear();		 

		 var hour = currentTime.getHours();
		 var min = currentTime.getMinutes();		 
		 var time = month+ "/" +day+ "/" +year+"    "+ hour + ":" + min;		 
		 var newCurrentTime = time.toString();
		 
		 
		//Question number 2 - page 16
		 var question2 = "2";
		 var daily_bodylocation_before = " ";
		 var pain_now = " ";
		// var pain_had = " ";
		 
		
		//Have pain right now
		 if(head1_b.bool == "red") pain_now = "Head, ";
		 if(rightShd1_b.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1_b.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1_b.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1_b.bool == "red") pain_now += "Chest, ";
		 if(lelbow1_b.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1_b.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1_b.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1_b.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(groin1_b.bool == "red") pain_now += "Groin, ";
		 if(lhip1_b.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1_b.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1_b.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1_b.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1_b.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1_b.bool == "red") pain_now += "Left Foot, ";
		 
		 
		 daily_bodylocation_before = "Have pain right now == "+ pain_now;      		 
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question2,daily_bodylocation_before]); 		
		
		//Question number 3	- page 17
		 var question3 = "3";
		 var before_bodylocation_back = " ";
		 var pain_now = " ";
		 //var pain_had = " ";
		 
		
		//Have pain right now
		 if(head1_back_b.bool == "red") pain_now = "Head, ";
		 if(rightShd1_back_b.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1_back_b.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1_back_b.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1_back_b.bool == "red") pain_now += "Chest, ";
		 if(lelbow1_back_b.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1_back_b.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1_back_b.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1_back_b.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(back1_back_b.bool == "red") pain_now += "Back, ";
		 if(lhip1_back_b.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1_back_b.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1_back_b.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1_back_b.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1_back_b.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1_back_b.bool == "red") pain_now += "Left Foot, ";
		 
		 
		 before_bodylocation_back = "Have pain right now == "+ pain_now;     		 
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question3,before_bodylocation_back]); 
	 
 
		//Question number 4 - page 18
		 var question4 = "4";
		 
		 var slider9 = document.getElementById("slider9").value;
         var slider9String = slider9.toString();		 
		 
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question4,slider9String]);

        //Question number 5 - page 19
		 var question5 = "5";  	
		 var before_emoticon = " ";
		 var b_emoticon = " ";
		 
		 if(pic85.b == 1) b_emoticon = "emotion 1 ";
		 if(pic86.b == 1) b_emoticon += "emotion 2 ";
		 if(pic87.b == 1) b_emoticon += "emotion 3 ";
		 if(pic88.b == 1) b_emoticon += "emotion 4 ";
		 if(pic89.b == 1) b_emoticon += "emotion 5 ";
		 if(pic90.b == 1) b_emoticon += "emotion 6 ";
		 if(pic91.b == 1) b_emoticon += "emotion 7 ";
		 if(pic92.b == 1) b_emoticon += "emotion 8 ";
		 if(pic93.b == 1) b_emoticon += "emotion 9 ";

		 before_emoticon = "Pain Affect == "+ b_emoticon; 
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question5,before_emoticon]); 		 

		
		//Question number 8 - page 20
		 var question8 = "8";var checkbox45 = "";var checkbox46 = "";var checkbox47 = "";var checkbox48 = "";
		 var checkbox49 = "";var checkbox50 = "";var checkbox51 = "";var checkbox52 = "";var checkbox53 = "";
		 var checkbox54 = "";var checkbox55 = "";var checkbox56 = "";var checkbox57 = "";var checkbox58 = "";
		 var checkbox59 = "";var checkbox60 = "";var checkbox61 = "";var checkbox62 = "";var checkbox63 = "";
		 var checkbox64 = "";var checkbox65 = "";var checkbox66 = "";var checkbox67 = "";var checkbox68 = "";
		 var checkbox69 = "";var checkbox70 = "";var checkbox71 = "";var checkbox72 = "";var checkbox73 = "";
		 var checkbox74 = "";var checkbox75 = "";var checkbox76 = "";
		 var checkbox_p8b;
		 
		 if(document.getElementById("checkbox-45").checked)
		 {
				checkbox45 = document.getElementById("checkbox-45").value;
		 }
		 if(document.getElementById("checkbox-46").checked)
		 {
				checkbox46 = document.getElementById("checkbox-46").value;
		 }
		 if(document.getElementById("checkbox-47").checked)
		 {
				checkbox47 = document.getElementById("checkbox-47").value;
		 }
		 if(document.getElementById("checkbox-48").checked)
		 {
				checkbox48 = document.getElementById("checkbox-48").value;
		 }
		 if(document.getElementById("checkbox-49").checked)
		 {
				checkbox49 = document.getElementById("checkbox-49").value;
		 }
		 if(document.getElementById("checkbox-50").checked)
		 {
				checkbox50 = document.getElementById("checkbox-50").value;
		 }
		 if(document.getElementById("checkbox-51").checked)
		 {
				checkbox51 = document.getElementById("checkbox-51").value;
		 }
		 if(document.getElementById("checkbox-52").checked)
		 {
				checkbox52 = document.getElementById("checkbox-52").value;
		 }
		 if(document.getElementById("checkbox-53").checked)
		 {
				checkbox53 = document.getElementById("checkbox-53").value;
		 }
		 if(document.getElementById("checkbox-54").checked)
		 {
				checkbox54 = document.getElementById("checkbox-54").value;
		 }
		 if(document.getElementById("checkbox-55").checked)
		 {
				checkbox55 = document.getElementById("checkbox-55").value;
		 }
		 if(document.getElementById("checkbox-56").checked)
		 {
				checkbox56 = document.getElementById("checkbox-56").value;
		 }
		 if(document.getElementById("checkbox-57").checked)
		 {
				checkbox57 = document.getElementById("checkbox-57").value;
		 }
		 if(document.getElementById("checkbox-58").checked)
		 {
				checkbox58 = document.getElementById("checkbox-58").value;
		 }
		 if(document.getElementById("checkbox-59").checked)
		 {
				checkbox59 = document.getElementById("checkbox-59").value;
		 }
		 if(document.getElementById("checkbox-60").checked)
		 {
				checkbox60 = document.getElementById("checkbox-60").value;
		 }
		 if(document.getElementById("checkbox-61").checked)
		 {
				checkbox61 = document.getElementById("checkbox-61").value;
		 }
		 if(document.getElementById("checkbox-62").checked)
		 {
				checkbox62 = document.getElementById("checkbox-62").value;
		 }
		 if(document.getElementById("checkbox-63").checked)
		 {
				checkbox63 = document.getElementById("checkbox-63").value;
		 }
		 if(document.getElementById("checkbox-64").checked)
		 {
				checkbox64 = document.getElementById("checkbox-64").value;
		 }
		 if(document.getElementById("checkbox-65").checked)
		 {
				checkbox65 = document.getElementById("checkbox-65").value;
		 }
		 if(document.getElementById("checkbox-66").checked)
		 {
				checkbox66 = document.getElementById("checkbox-66").value;
		 }
		 if(document.getElementById("checkbox-67").checked)
		 {
				checkbox67 = document.getElementById("checkbox-67").value;
		 }
		 if(document.getElementById("checkbox-68").checked)
		 {
				checkbox68 = document.getElementById("checkbox-68").value;
		 }
		 if(document.getElementById("checkbox-69").checked)
		 {
				checkbox69 = document.getElementById("checkbox-69").value;
		 }
		 if(document.getElementById("checkbox-70").checked)
		 {
				checkbox70 = document.getElementById("checkbox-70").value;
		 }
		 if(document.getElementById("checkbox-71").checked)
		 {
				checkbox71 = document.getElementById("checkbox-71").value;
		 }
		 if(document.getElementById("checkbox-72").checked)
		 {
				checkbox72 = document.getElementById("checkbox-72").value;
		 }
		 if(document.getElementById("checkbox-73").checked)
		 {
				checkbox73 = document.getElementById("checkbox-73").value;
		 }
		 if(document.getElementById("checkbox-74").checked)
		 {
				checkbox74 = document.getElementById("checkbox-74").value;
		 }
		 if(document.getElementById("checkbox-75").checked)
		 {
				checkbox75 = document.getElementById("checkbox-75").value;
		 }
		 if(document.getElementById("checkbox-76").checked)
		 {
				checkbox76 = document.getElementById("checkbox-76").value;
		 }
		 
		 checkbox_p8b = checkbox45 +"  "+ checkbox46+"  "+ checkbox47+"  "+ checkbox48+"  "+ checkbox49+"  "+ checkbox50+"  "+ checkbox51+"  "+ checkbox52+"  "+ checkbox53+"  "+ checkbox54+"  "+ checkbox55+"  "+ checkbox56+"  "+ checkbox57+"  "+ checkbox58+"  "+ checkbox59+"  "+ checkbox60+"  "+ checkbox61+"  "+ checkbox62+"  "+ checkbox63+"  "+ checkbox64+"  "+ checkbox65+"  "+ checkbox66+"  "+ checkbox67+"  "+ checkbox68+"  "+ checkbox69+"  "+ checkbox70+"  "+ checkbox71+"  "+ checkbox72+"  "+ checkbox73+"  "+ checkbox74+"  "+ checkbox75+"  "+ checkbox76;
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question8,checkbox_p8b]);
		 
		//Question number 9 - page 21
		 var question9 = "9";
		 
		 var slider10 = document.getElementById("slider10").value;
         var slider10String = slider10.toString();
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question9,slider10String]);
		 
		 
		 //Question number 10 - page 22
		 var question10 = "10";
		 
		 var slider11 = document.getElementById("slider11").value;
         var slider11String = slider11.toString();
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question10,slider11String]);
		 
		 //Question number 11 - page 23
		 var question11 = "11";
		 
		 var slider12 = document.getElementById("slider12").value;
         var slider12String = slider12.toString();
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question11,slider12String]);
		 
		  //Question number 12 - page 24
		 var question12 = "12";
		 
		 var slider13 = document.getElementById("slider13").value;
         var slider13String = slider13.toString();
		 tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question12,slider13String]);
		 
		 //Question number 15 - page 25
		var question15 = "15";		 
		var textareaB = "  ";
		
		textareaB = document.getElementById("textarea-b").value;
		tx.executeSql("insert into Before(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question15,textareaB]);
		
		
 } //addbefore
 
 
  // Inserting data into the table "After"
 function addDatatoAfter(){  
        db.transaction(addafter, errorHandler, readDatafromAfter);	
 }
 
 function addafter(tx){
 
		 var month = currentTime.getMonth() + 1;
		 var day = currentTime.getDate();
		 var year = currentTime.getFullYear();		 

		 var hour = currentTime.getHours();
		 var min = currentTime.getMinutes();		 
		 var time = month+ "/" +day+ "/" +year+"    "+ hour + ":" + min;		 
		 var newCurrentTime = time.toString();
		 
		 
		//Question number 2 - page 26
		
		 var question2 = "2";
		 var daily_bodylocation_after = " ";
		 var pain_now = " ";

	
		//Have pain right now
		 if(head1_a.bool == "red") pain_now = "Head, ";
		 if(rightShd1_a.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1_a.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1_a.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1_a.bool == "red") pain_now += "Chest, ";
		 if(lelbow1_a.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1_a.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1_a.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1_a.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(groin1_a.bool == "red") pain_now += "Groin, ";
		 if(lhip1_a.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1_a.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1_a.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1_a.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1_a.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1_a.bool == "red") pain_now += "Left Foot, ";
		 
		 daily_bodylocation_after = "Have pain right now == "+ pain_now;      		 
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question2,daily_bodylocation_after]); 
	 
		
		//Question number 3	- page 27	
		 var question3 = "3";
		 var after_bodylocation_back = " ";
		 var pain_now = " ";
		 	
		//Have pain right now
		 if(head1_back_a.bool == "red") pain_now = "Head, ";
		 if(rightShd1_back_a.bool == "red") pain_now += "Right Shoulder, ";
		 if(leftShd1_back_a.bool == "red") pain_now += "Left Shoulder, ";
		 if(relbow1_back_a.bool == "red") pain_now += "Right Elbow, ";
		 if(chest1_back_a.bool == "red") pain_now += "Chest, ";
		 if(lelbow1_back_a.bool == "red") pain_now += "Left Elbow, ";
		 if(abdomen1_back_a.bool == "red") pain_now += "Abdomen, ";
		// if(pic15.b == 1) pain_now += "Neck, ";
		 if(rhand1_back_a.bool == "red") pain_now += "Right Hand, ";
		 if(rhip1_back_a.bool == "red") pain_now += "Right Hip Thigh, ";
		 if(back1_back_a.bool == "red") pain_now += "Back, ";
		 if(lhip1_back_a.bool == "red") pain_now += "Left Hip Thigh, ";
		 if(lhand1_back_a.bool == "red") pain_now += "Left Hand, ";
		 if(rleg1_back_a.bool == "red") pain_now += "Right Knee, ";
		 if(lleg1_back_a.bool == "red") pain_now += "Left Knee, ";
		 if(rfoot1_back_a.bool == "red") pain_now += "Right Foot, ";
		 if(lfoot1_back_a.bool == "red") pain_now += "Left Foot, ";

		 
		 after_bodylocation_back = "Have pain right now == "+ pain_now;     		 
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question3,after_bodylocation_back]); 
 
		//Question number 4 - page 28
		 var question4 = "4";
		 
		 var slider14 = document.getElementById("slider14").value;
         var slider14String = slider14.toString();		 
		 
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question4,slider14String]);

         //Question number 5 - page 29
		 var question5 = "5";  	
		 var after_emoticon = " ";
		 var a_emoticon = " ";
		 
		 if(pic94.b == 1) a_emoticon = "emotion 1 ";
		 if(pic95.b == 1) a_emoticon += "emotion 2 ";
		 if(pic96.b == 1) a_emoticon += "emotion 3 ";
		 if(pic97.b == 1) a_emoticon += "emotion 4 ";
		 if(pic98.b == 1) a_emoticon += "emotion 5 ";
		 if(pic99.b == 1) a_emoticon += "emotion 6 ";
		 if(pic100.b == 1) a_emoticon += "emotion 7 ";
		 if(pic101.b == 1) a_emoticon += "emotion 8 ";
		 if(pic102.b == 1) a_emoticon += "emotion 9 ";

		 after_emoticon = "Pain Affect == "+ a_emoticon; 
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question5,after_emoticon]); 		 

		
		 //Question number 6 - page 30
		 var question6 = "6";
		 
		 var slider15 = document.getElementById("slider15").value;
         var slider15String = slider15.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question6,slider15String]);
		 
		//Question number 8 - page 31
		 var question8 = "8";var checkbox77 = "";var checkbox78 = "";var checkbox79 = "";var checkbox80 = "";
		 var checkbox81 = "";var checkbox82 = "";var checkbox83 = "";var checkbox84 = "";var checkbox85 = "";
		 var checkbox86 = "";var checkbox87 = "";var checkbox88 = "";var checkbox89 = "";var checkbox90 = "";
		 var checkbox91 = "";var checkbox92 = "";var checkbox93 = "";var checkbox94 = "";var checkbox95 = "";
		 var checkbox96 = "";var checkbox97 = "";var checkbox98 = "";var checkbox99 = "";var checkbox100 = "";
		 var checkbox101 = "";var checkbox102 = "";var checkbox103 = "";var checkbox104 = "";var checkbox105 = "";
		 var checkbox106 = "";var checkbox107 = "";var checkbox108 = "";
		 var checkbox_p8a;
		 
		 if(document.getElementById("checkbox-77").checked)
		 {
				checkbox77 = document.getElementById("checkbox-77").value;
		 }
		 if(document.getElementById("checkbox-78").checked)
		 {
				checkbox78 = document.getElementById("checkbox-78").value;
		 }
		 if(document.getElementById("checkbox-79").checked)
		 {
				checkbox79 = document.getElementById("checkbox-79").value;
		 }
		 if(document.getElementById("checkbox-80").checked)
		 {
				checkbox80 = document.getElementById("checkbox-80").value;
		 }
		 if(document.getElementById("checkbox-81").checked)
		 {
				checkbox81 = document.getElementById("checkbox-81").value;
		 }
		 if(document.getElementById("checkbox-82").checked)
		 {
				checkbox82 = document.getElementById("checkbox-82").value;
		 }
		 if(document.getElementById("checkbox-83").checked)
		 {
				checkbox83 = document.getElementById("checkbox-83").value;
		 }
		 if(document.getElementById("checkbox-84").checked)
		 {
				checkbox84 = document.getElementById("checkbox-84").value;
		 }
		 if(document.getElementById("checkbox-85").checked)
		 {
				checkbox85 = document.getElementById("checkbox-85").value;
		 }
		 if(document.getElementById("checkbox-86").checked)
		 {
				checkbox86 = document.getElementById("checkbox-86").value;
		 }
		 if(document.getElementById("checkbox-87").checked)
		 {
				checkbox87 = document.getElementById("checkbox-87").value;
		 }
		 if(document.getElementById("checkbox-88").checked)
		 {
				checkbox88 = document.getElementById("checkbox-88").value;
		 }
		 if(document.getElementById("checkbox-89").checked)
		 {
				checkbox89 = document.getElementById("checkbox-89").value;
		 }
		 if(document.getElementById("checkbox-90").checked)
		 {
				checkbox90 = document.getElementById("checkbox-90").value;
		 }
		 if(document.getElementById("checkbox-91").checked)
		 {
				checkbox91 = document.getElementById("checkbox-91").value;
		 }
		 if(document.getElementById("checkbox-92").checked)
		 {
				checkbox92 = document.getElementById("checkbox-92").value;
		 }
		 if(document.getElementById("checkbox-93").checked)
		 {
				checkbox93 = document.getElementById("checkbox-93").value;
		 }
		 if(document.getElementById("checkbox-94").checked)
		 {
				checkbox94 = document.getElementById("checkbox-94").value;
		 }
		 if(document.getElementById("checkbox-95").checked)
		 {
				checkbox95 = document.getElementById("checkbox-95").value;
		 }
		 if(document.getElementById("checkbox-96").checked)
		 {
				checkbox96 = document.getElementById("checkbox-96").value;
		 }
		 if(document.getElementById("checkbox-97").checked)
		 {
				checkbox97 = document.getElementById("checkbox-97").value;
		 }
		 if(document.getElementById("checkbox-98").checked)
		 {
				checkbox98 = document.getElementById("checkbox-98").value;
		 }
		 if(document.getElementById("checkbox-99").checked)
		 {
				checkbox99 = document.getElementById("checkbox-99").value;
		 }
		 if(document.getElementById("checkbox-100").checked)
		 {
				checkbox100 = document.getElementById("checkbox-100").value;
		 }
		 if(document.getElementById("checkbox-101").checked)
		 {
				checkbox101 = document.getElementById("checkbox-101").value;
		 }
		 if(document.getElementById("checkbox-102").checked)
		 {
				checkbox102 = document.getElementById("checkbox-102").value;
		 }
		 if(document.getElementById("checkbox-103").checked)
		 {
				checkbox103 = document.getElementById("checkbox-103").value;
		 }
		 if(document.getElementById("checkbox-104").checked)
		 {
				checkbox104 = document.getElementById("checkbox-104").value;
		 }
		 if(document.getElementById("checkbox-105").checked)
		 {
				checkbox105 = document.getElementById("checkbox-105").value;
		 }
		 if(document.getElementById("checkbox-106").checked)
		 {
				checkbox106 = document.getElementById("checkbox-106").value;
		 }
		 if(document.getElementById("checkbox-107").checked)
		 {
				checkbox107 = document.getElementById("checkbox-107").value;
		 }
		 if(document.getElementById("checkbox-108").checked)
		 {
				checkbox108 = document.getElementById("checkbox-108").value;
		 }
		 
		 checkbox_p8a = checkbox77 +"  "+ checkbox78+"  "+ checkbox79+"  "+ checkbox80+"  "+ checkbox81+"  "+ checkbox82+"  "+ checkbox83+"  "+ checkbox84+"  "+ checkbox85+"  "+ checkbox86+"  "+ checkbox87+"  "+ checkbox88+"  "+ checkbox89+"  "+ checkbox90+"  "+ checkbox91+"  "+ checkbox92+"  "+ checkbox93+"  "+ checkbox94+"  "+ checkbox95+"  "+ checkbox96+"  "+ checkbox97+"  "+ checkbox98+"  "+ checkbox99+"  "+ checkbox100+"  "+ checkbox101+"  "+ checkbox102+"  "+ checkbox103+"  "+ checkbox104+"  "+ checkbox105+"  "+ checkbox106+"  "+ checkbox107+"  "+ checkbox108;
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question8,checkbox_p8a]);
		 
		//Question number 9 - page 32
		 var question9 = "9";
		 
		 var slider16 = document.getElementById("slider16").value;
         var slider16String = slider16.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question9,slider16String]);
		 
		 //Question number 10 - page 33
		 var question10 = "10";
		 
		 var slider17 = document.getElementById("slider17").value;
         var slider17String = slider17.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question10,slider17String]);
		 
		 //Question number 11 - page 34
		 var question11 = "11";
		 
		 var slider18 = document.getElementById("slider18").value;
         var slider18String = slider18.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question11,slider18String]);
		 
		 //Question number 12 - page 35
		 var question12 = "12";
		 
		 var slider19 = document.getElementById("slider19").value;
         var slider19String = slider19.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question12,slider19String]);
		 
		 
		 //Question number 36 - page 36
		 var question36 = "36";
		 var preScale;
		 var preScale_result;
		 
		 if(pic103.b == 1) preScale = "0";
		 if(pic104.b == 1) preScale = "1";
		 if(pic105.b == 1) preScale = "2";
		 if(pic106.b == 1) preScale = "3";
		 if(pic107.b == 1) preScale = "4";
		 if(pic108.b == 1) preScale = "5";
		 if(pic109.b == 1) preScale = "6";
		 if(pic110.b == 1) preScale = "7";
		 if(pic111.b == 1) preScale = "8";
		 if(pic112.b == 1) preScale = "9";
		 if(pic113.b == 1) preScale = "10";

		 preScale_result = "Perceived Exertion == "+ preScale; 
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question36,preScale_result]); 
		 
		 		 
		 
//Exercise 1
		 
		 //Question number 37 - page 37
		 var question37 = "37";
		 var radio42;		 
	                                     
		 if(document.getElementById("radio-choice-42").checked)
		 {
				radio42 = document.getElementById("radio-choice-42").value;
		 }
		 if(document.getElementById("radio-choice-43").checked)
		 {
				radio42 = document.getElementById("radio-choice-43").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37,radio42]);		 
		 
		//Question number 37_1 - page 37_1
		 var question37_1 = "37_1";
		 
		 var circuit1_e1;
		 var circuit2_e1;
		 var circuit3_e1;
		 
		 var repitition_result_e1;
		 
		 if(pic114.b == 1) circuit1_e1 = "none_c1";
		 if(pic117.b == 1) circuit1_e1 = "1-5_c1";
		 if(pic120.b == 1) circuit1_e1 = "more than 6_c1";
		 
		 if(pic115.b == 1) circuit2_e1 = "none_c2";
		 if(pic118.b == 1) circuit2_e1 = "1-5_c2";
		 if(pic121.b == 1) circuit2_e1 = "more than 6_c2";
		 
		 if(pic116.b == 1) circuit3_e1 = "none_c3";
		 if(pic119.b == 1) circuit3_e1 = "1-5_c3";
		 if(pic122.b == 1) circuit3_e1 = "more than 6_c3";
		 
		 
		 repitition_result_e1 = "Circuit 1 == "+circuit1_e1+";  Circuit 2 == "+circuit2_e1+";  Circuit 3 == "+circuit3_e1;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37_1,repitition_result_e1]);		 
		 
		 
		//Question number 37_2 - page 37_2
		 var question37_2 = "37_2";
		 var radio62 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-62").checked)
		 {
				radio62 = document.getElementById("radio-choice-62").value;
		 }
		 if(document.getElementById("radio-choice-63").checked)
		 {
				radio62 = document.getElementById("radio-choice-63").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37_2,radio62]);		 
		

		//Question number 37_3 - page 37_3
		 var question37_3 = "37_3";
		 var radio72 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-72").checked)
		 {
				radio72 = document.getElementById("radio-choice-72").value;
		 }
		 if(document.getElementById("radio-choice-73").checked)
		 {
				radio72 = document.getElementById("radio-choice-73").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37_3,radio72]);		 
		  		
         //Question number 37_4 - page 37_4
		 var question37_4 = "37_4";
		 
		 var slider20 = document.getElementById("slider20").value;
         var slider20String = slider20.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37_4,slider20String]);
		 		
        //Question number 37_5 - page 37_5
		var question37_5 = "37_5";
		var textareaC= " ";
		
		textareaC = document.getElementById("textarea-c").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question37_5,textareaC]);
		
//Exercise 2

		//Question number 38 - page 38
		 var question38 = "38";
		 var radio74;		 
	                                     
		 if(document.getElementById("radio-choice-74").checked)
		 {
				radio74 = document.getElementById("radio-choice-74").value;
		 }
		 if(document.getElementById("radio-choice-75").checked)
		 {
				radio74 = document.getElementById("radio-choice-75").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38,radio74]);		 
		 
		//Question number 38_1 - page 38_1
		 var question38_1 = "38_1";
		 		 
		 var circuit1_e2;
		 var circuit2_e2;
		 var circuit3_e2;
		 
		 var repitition_result_e2;
		 
		 if(pic123.b == 1) circuit1_e2 = "none_c1";
		 if(pic126.b == 1) circuit1_e2 = "1-5_c1";
		 if(pic129.b == 1) circuit1_e2 = "more than 6_c1";
		 
		 if(pic124.b == 1) circuit2_e2 = "none_c2";
		 if(pic127.b == 1) circuit2_e2 = "1-5_c2";
		 if(pic130.b == 1) circuit2_e2 = "more than 6_c2";
		 
		 if(pic125.b == 1) circuit3_e2 = "none_c3";
		 if(pic128.b == 1) circuit3_e2 = "1-5_c3";
		 if(pic131.b == 1) circuit3_e2 = "more than 6_c3";
		 
		 
		 repitition_result_e2 = "Circuit 1 == "+circuit1_e2+";  Circuit 2 == "+circuit2_e2+";  Circuit 3 == "+circuit3_e2;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38_1,repitition_result_e2]);		 
		 
		 
		//Question number 38_2 - page 38_2
		 var question38_2 = "38_2";
		 var radio79 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-79").checked)
		 {
				radio79 = document.getElementById("radio-choice-79").value;
		 }
		 if(document.getElementById("radio-choice-80").checked)
		 {
				radio79 = document.getElementById("radio-choice-80").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38_2,radio79]);		 
		

		//Question number 38_3 - page 38_3
		 var question38_3 = "38_3";
		 var radio81 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-81").checked)
		 {
				radio81 = document.getElementById("radio-choice-81").value;
		 }
		 if(document.getElementById("radio-choice-82").checked)
		 {
				radio81 = document.getElementById("radio-choice-82").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38_3,radio81]);		 
		  		
         //Question number 38_4 - page 38_4
		 var question38_4 = "38_4";
		 
		 var slider21 = document.getElementById("slider21").value;
         var slider21String = slider21.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38_4,slider21String]);
		 		
        //Question number 38_5 - page 38_5
		var question38_5 = "38_5";
		var textareaD= " ";
		
		textareaD = document.getElementById("textarea-d").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question38_5,textareaD]);
		
//Exercise 3


		//Question number 39
		 var question39 = "39";
		 var radio83;		 
	                                     
		 if(document.getElementById("radio-choice-83").checked)
		 {
				radio83 = document.getElementById("radio-choice-83").value;
		 }
		 if(document.getElementById("radio-choice-84").checked)
		 {
				radio83 = document.getElementById("radio-choice-84").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39,radio83]);		 
		 
		//Question number 39_1
		 var question39_1 = "39_1";
		 
		 var circuit1_e3;
		 var circuit2_e3;
		 var circuit3_e3;
		 
		 var repitition_result_e3;
		 
		 if(pic123.b == 1) circuit1_e3 = "none_c1";
		 if(pic126.b == 1) circuit1_e3 = "1-5_c1";
		 if(pic129.b == 1) circuit1_e3 = "more than 6_c1";
		 
		 if(pic124.b == 1) circuit2_e3 = "none_c2";
		 if(pic127.b == 1) circuit2_e3 = "1-5_c2";
		 if(pic130.b == 1) circuit2_e3 = "more than 6_c2";
		 
		 if(pic125.b == 1) circuit3_e3 = "none_c3";
		 if(pic128.b == 1) circuit3_e3 = "1-5_c3";
		 if(pic131.b == 1) circuit3_e3 = "more than 6_c3";
		 
		 
		 repitition_result_e3 = "Circuit 1 == "+circuit1_e3+";  Circuit 2 == "+circuit2_e3+";  Circuit 3 == "+circuit3_e3;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39_1,repitition_result_e3]);	
		 		 		
		 
		//Question number 39_2
		 var question39_2 = "39_2";
		 var radio88 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-88").checked)
		 {
				radio88 = document.getElementById("radio-choice-88").value;
		 }
		 if(document.getElementById("radio-choice-89").checked)
		 {
				radio88 = document.getElementById("radio-choice-89").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39_2,radio88]);		 
		

		//Question number 39_3
		 var question39_3 = "39_3";
		 var radio90 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-90").checked)
		 {
				radio90 = document.getElementById("radio-choice-90").value;
		 }
		 if(document.getElementById("radio-choice-91").checked)
		 {
				radio90 = document.getElementById("radio-choice-91").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39_3,radio90]);		 
		  		
         //Question number 39_4
		 var question39_4 = "39_4";
		 
		 var slider22 = document.getElementById("slider22").value;
         var slider22String = slider22.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39_4,slider22String]);
		 		
        //Question number 39_5
		var question39_5 = "39_5";
		var textareaE= " ";
		
		textareaE = document.getElementById("textarea-e").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question39_5,textareaE]);
	
//Exercise 4

	
		//Question number 40
		 var question40 = "40";
		 var radio92;		 
	                                     
		 if(document.getElementById("radio-choice-92").checked)
		 {
				radio92 = document.getElementById("radio-choice-92").value;
		 }
		 if(document.getElementById("radio-choice-93").checked)
		 {
				radio92 = document.getElementById("radio-choice-93").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40,radio92]);		 
		 
		//Question number 40_1
		 var question40_1 = "40_1";
		 
		 
		 var circuit1_e4;
		 var circuit2_e4;
		 var circuit3_e4;
		 
		 var repitition_result_e4;
		 
		 if(pic141.b == 1) circuit1_e4 = "none_c1";
		 if(pic144.b == 1) circuit1_e4 = "1-5_c1";
		 if(pic147.b == 1) circuit1_e4 = "more than 6_c1";
		 
		 if(pic142.b == 1) circuit2_e4 = "none_c2";
		 if(pic145.b == 1) circuit2_e4 = "1-5_c2";
		 if(pic148.b == 1) circuit2_e4 = "more than 6_c2";
		 
		 if(pic143.b == 1) circuit3_e4 = "none_c3";
		 if(pic146.b == 1) circuit3_e4 = "1-5_c3";
		 if(pic149.b == 1) circuit3_e4 = "more than 6_c3";
		 
		 
		 repitition_result_e4 = "Circuit 1 == "+circuit1_e4+";  Circuit 2 == "+circuit2_e4+";  Circuit 3 == "+circuit3_e4;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40_1,repitition_result_e4]);	
		 
		 
		//Question number 40_2
		 var question40_2 = "40_2";
		 var radio97 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-97").checked)
		 {
				radio97 = document.getElementById("radio-choice-97").value;
		 }
		 if(document.getElementById("radio-choice-98").checked)
		 {
				radio97 = document.getElementById("radio-choice-98").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40_2,radio97]);		 
		

		//Question number 40_3
		 var question40_3 = "40_3";
		 var radio99 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-99").checked)
		 {
				radio99 = document.getElementById("radio-choice-99").value;
		 }
		 if(document.getElementById("radio-choice-100").checked)
		 {
				radio99 = document.getElementById("radio-choice-100").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40_3,radio99]);		 
		  		
         //Question number 40_4
		 var question40_4 = "40_4";
		 
		 var slider23 = document.getElementById("slider23").value;
         var slider23String = slider23.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40_4,slider23String]);
		 		
        //Question number 40_5
		var question40_5 = "40_5";
		var textareaF= " ";
		
		textareaF = document.getElementById("textarea-f").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question40_5,textareaF]);


//Exercise 5


		//Question number 41
		 var question41 = "41";
		 var radio101;		 
	                                     
		 if(document.getElementById("radio-choice-101").checked)
		 {
				radio101 = document.getElementById("radio-choice-101").value;
		 }
		 if(document.getElementById("radio-choice-102").checked)
		 {
				radio101 = document.getElementById("radio-choice-102").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41,radio101]);		 
		 
		//Question number 41_1
		 var question41_1 = "41_1";
		 		 
		 var circuit1_e5;
		 var circuit2_e5;
		 var circuit3_e5;
		 
		 var repitition_result_e5;
		 
		 if(pic150.b == 1) circuit1_e5 = "none_c1";
		 if(pic153.b == 1) circuit1_e5 = "1-5_c1";
		 if(pic156.b == 1) circuit1_e5 = "more than 6_c1";
		 
		 if(pic151.b == 1) circuit2_e5 = "none_c2";
		 if(pic154.b == 1) circuit2_e5 = "1-5_c2";
		 if(pic157.b == 1) circuit2_e5 = "more than 6_c2";
		 
		 if(pic152.b == 1) circuit3_e5 = "none_c3";
		 if(pic155.b == 1) circuit3_e5 = "1-5_c3";
		 if(pic158.b == 1) circuit3_e5 = "more than 6_c3";
		 
		 
		 repitition_result_e5 = "Circuit 1 == "+circuit1_e5+";  Circuit 2 == "+circuit2_e5+";  Circuit 3 == "+circuit3_e5;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41_1,repitition_result_e5]);	
		  		 

		//Question number 41_2
		 var question41_2 = "41_2";
		 var radio106 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-106").checked)
		 {
				radio106 = document.getElementById("radio-choice-106").value;
		 }
		 if(document.getElementById("radio-choice-107").checked)
		 {
				radio106 = document.getElementById("radio-choice-107").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41_2,radio106]);		 
		

		//Question number 41_3
		 var question41_3 = "41_3";
		 var radio108 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-108").checked)
		 {
				radio108 = document.getElementById("radio-choice-108").value;
		 }
		 if(document.getElementById("radio-choice-109").checked)
		 {
				radio108 = document.getElementById("radio-choice-109").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41_3,radio108]);		 
		  		
         //Question number 41_4
		 var question41_4 = "41_4";
		 
		 var slider24 = document.getElementById("slider24").value;
         var slider24String = slider24.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41_4,slider24String]);
		 		
        //Question number 41_5
		var question41_5 = "41_5";
		var textareaG= " ";
		
		textareaG = document.getElementById("textarea-g").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question41_5,textareaG]);



//Exercise 6

//Question number 43
		 var question43 = "43";		 
		 var radio110;		 
	                                     
		 if(document.getElementById("radio-choice-110").checked)
		 {
				radio110 = document.getElementById("radio-choice-110").value;
		 }
		 if(document.getElementById("radio-choice-111").checked)
		 {
				radio110 = document.getElementById("radio-choice-111").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43,radio110]);		 
		 
		//Question number 43_1
		 var question43_1 = "43_1";		 
		 
		 var circuit1_e6;
		 var circuit2_e6;
		 var circuit3_e6;
		 
		 var repitition_result_e6;
		 
		 if(pic159.b == 1) circuit1_e6 = "none_c1";
		 if(pic162.b == 1) circuit1_e6 = "1-5_c1";
		 if(pic165.b == 1) circuit1_e6 = "more than 6_c1";
		 
		 if(pic160.b == 1) circuit2_e6 = "none_c2";
		 if(pic163.b == 1) circuit2_e6 = "1-5_c2";
		 if(pic166.b == 1) circuit2_e6 = "more than 6_c2";
		 
		 if(pic161.b == 1) circuit3_e6 = "none_c3";
		 if(pic164.b == 1) circuit3_e6 = "1-5_c3";
		 if(pic167.b == 1) circuit3_e6 = "more than 6_c3";
		 
		 
		 repitition_result_e6 = "Circuit 1 == "+circuit1_e6+";  Circuit 2 == "+circuit2_e6+";  Circuit 3 == "+circuit3_e6;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43_1,repitition_result_e6]);	
		    
		 
		//Question number 43_2
		 var question43_2 = "43_2";
		 var radio115 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-115").checked)
		 {
				radio115 = document.getElementById("radio-choice-115").value;
		 }
		 if(document.getElementById("radio-choice-116").checked)
		 {
				radio115 = document.getElementById("radio-choice-116").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43_2,radio115]);		 
		

		//Question number 43_3
		 var question43_3 = "43_3";
		 var radio117 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-117").checked)
		 {
				radio117 = document.getElementById("radio-choice-117").value;
		 }
		 if(document.getElementById("radio-choice-118").checked)
		 {
				radio117 = document.getElementById("radio-choice-118").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43_3,radio117]);		 
		  		
         //Question number 43_4
		 var question43_4 = "43_4";
		 
		 var slider25 = document.getElementById("slider25").value;
         var slider25String = slider25.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43_4,slider25String]);
		 		
        //Question number 43_5
		var question43_5 = "43_5";
		var textareaI= " ";
		
		textareaI = document.getElementById("textarea-i").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question43_5,textareaI]);



//Exercise 7


//Question number 44
		 var question44 = "44";		 
		 var radio119;		 
	                                     
		 if(document.getElementById("radio-choice-119").checked)
		 {
				radio119 = document.getElementById("radio-choice-119").value;
		 }
		 if(document.getElementById("radio-choice-120").checked)
		 {
				radio119 = document.getElementById("radio-choice-120").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44,radio119]);		 
		 
		//Question number 44_1
		 var question44_1 = "44_1";		 
		 
		 var circuit1_e7;
		 var circuit2_e7;
		 var circuit3_e7;
		 
		 var repitition_result_e7;
		 
		 if(pic168.b == 1) circuit1_e7 = "none_c1";
		 if(pic171.b == 1) circuit1_e7 = "1-5_c1";
		 if(pic174.b == 1) circuit1_e7 = "more than 6_c1";
		 
		 if(pic169.b == 1) circuit2_e7 = "none_c2";
		 if(pic172.b == 1) circuit2_e7 = "1-5_c2";
		 if(pic175.b == 1) circuit2_e7 = "more than 6_c2";
		 
		 if(pic170.b == 1) circuit3_e7 = "none_c3";
		 if(pic173.b == 1) circuit3_e7 = "1-5_c3";
		 if(pic176.b == 1) circuit3_e7 = "more than 6_c3";
		 
		 
		 repitition_result_e7 = "Circuit 1 == "+circuit1_e7+";  Circuit 2 == "+circuit2_e7+";  Circuit 3 == "+circuit3_e7;	
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44_1,repitition_result_e7]);	
		  		
		 
		//Question number 44_2
		 var question44_2 = "44_2";
		 var radio124 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-124").checked)
		 {
				radio124 = document.getElementById("radio-choice-124").value;
		 }
		 if(document.getElementById("radio-choice-125").checked)
		 {
				radio124 = document.getElementById("radio-choice-125").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44_2,radio124]);		 
		

		//Question number 44_3
		 var question44_3 = "44_3";
		 var radio126 = " ";		 
	                                     
		 if(document.getElementById("radio-choice-126").checked)
		 {
				radio126 = document.getElementById("radio-choice-126").value;
		 }
		 if(document.getElementById("radio-choice-127").checked)
		 {
				radio126 = document.getElementById("radio-choice-127").value;
		 } 
			
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44_3,radio126]);		 
		  		
         //Question number 44_4
		 var question44_4 = "44_4";
		 
		 var slider26 = document.getElementById("slider26").value;
         var slider26String = slider26.toString();
		 tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44_4,slider26String]);
		 		
        //Question number 44_5
		var question44_5 = "44_5";
		var textareaJ= " ";
		
		textareaJ = document.getElementById("textarea-j").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question44_5,textareaJ]);

		
//Question number 42 (Last page)
		var question42 = "42";
		var textareaH= " ";
		
		textareaH = document.getElementById("textarea-h").value;
		tx.executeSql("insert into After(timestamp, question, answer) values(?,?,?)",[newCurrentTime,question42,textareaH]);

		 
 } //end of addafter()

// Reading data from table "Daily" 
 function readDatafromDaily(){      
		db.transaction(readdaily, errorHandler);			
 }
 
 function readdaily(tx){	
		tx.executeSql("select * from Daily", [], gotLogDaily, errorHandler);		
 }//stop
  
 
 // Reading data from table named "Before" 
 function readDatafromBefore(){      
		db.transaction(readbefore, errorHandler);			
 }
 
 function readbefore(tx){
		tx.executeSql("select * from Before", [], gotLogBefore, errorHandler);				
 }//stop
 
 // Reading data from table named "After" 
 function readDatafromAfter(){      
		db.transaction(readafter, errorHandler);			
 }
 
 function readafter(tx){
		tx.executeSql("select * from After", [], gotLogAfter, errorHandler);					
 }//stop
 

//.............
 
function gotLogDaily(tx, results){
  /*
	if(results.rows.length == 0){
		$.mobile.changePage("#DBResult",{transition:"slide"}); 
		$("#result").html("No data.");
		return false;
	}
 */
	
	//if there is results
	var json_s = "";
    var devide="******************************************************************************************************";	
	for(var i=0; i<results.rows.length; i++){
	
		json_s += JSON.stringify({ID: results.rows.item(i).id, Timestamp: results.rows.item(i).timestamp, Question: results.rows.item(i).question, Answer:results.rows.item(i).answer})+"<br/>";		 	
	}

	//file write	
	fileSystem.root.getFile("Daily.txt", {create:true}, appendFile, errorHandler);
		
		function appendFile(f) {

			f.createWriter(function(writerOb) {
				writerOb.onwrite=function() {
				//	alert("Done writing to a file");
				}
				//go to the end of the file...
				writerOb.seek(writerOb.length);				
				writerOb.write(json_s +"\n"+ devide+"\n");				
			})
		}	
	//end file write
	
	
	//$.mobile.changePage("#DBResult",{transition:"slide"});
	//$("#result").html(json_s); 	
	
} // gotLogDaily


function gotLogBefore(tx, results){

	if(results.rows.length == 0){
		$.mobile.changePage("#DBResult",{transition:"slide"}); 
		$("#result").html("No data.");
		return false;
	}
	
	//if there is results
	var json_s = "";
	var devide="******************************************************************************************************";		
	for(var i=0; i<results.rows.length; i++){
	
		json_s += JSON.stringify({ID: results.rows.item(i).id, Timestamp: results.rows.item(i).timestamp, Question: results.rows.item(i).question, Answer:results.rows.item(i).answer})+"<br/>";		 	
	}

	//file write	
	fileSystem.root.getFile("Before.txt", {create:true}, appendFile, errorHandler);
		
		function appendFile(f) {

			f.createWriter(function(writerOb) {
				writerOb.onwrite=function() {
				}
				writerOb.seek(writerOb.length);
				writerOb.write(json_s + "\n"+devide+ "\n");
			})
		}	
	//end file write
	
	
	//$.mobile.changePage("#DBResult",{transition:"slide"});
	//$("#result").html(json_s); 	

} // gotLogBefore


function gotLogAfter(tx, results){

	if(results.rows.length == 0){
		$.mobile.changePage("#DBResult",{transition:"slide"}); 
		$("#result").html("No data.");
		return false;
	}
	
	//if there is results
	var json_s = "";
    var devide="******************************************************************************************************";			
	for(var i=0; i<results.rows.length; i++){
	
		json_s += JSON.stringify({ID: results.rows.item(i).id, Timestamp: results.rows.item(i).timestamp, Question: results.rows.item(i).question, Answer:results.rows.item(i).answer})+"<br/>";		 	
	}
	
	//file write	
	fileSystem.root.getFile("After.txt", {create:true}, appendFile, errorHandler);
		
		function appendFile(f) {

			f.createWriter(function(writerOb) {
				writerOb.onwrite=function() {
				}
				writerOb.seek(writerOb.length);
				writerOb.write(json_s + "\n"+devide+ "\n");
			})
		}	
	//end file write

	//$.mobile.changePage("#DBResult",{transition:"slide"});
	//$("#result").html(json_s); 	

} // gotLogAfter

function successCreate() {
	//alert("Table Successfully created...");
}

function fileSystemSuccess() {
	//alert("Filesystem is successfully created...");
}	

function successFileCreate() {
	//alert("File is successfully created...");
}


function successAdd() {
   
    alert("Row added");  
    //$("#result").html("Row added");
 }

function errorHandler(){
	alert("error");
}

//end of Database 