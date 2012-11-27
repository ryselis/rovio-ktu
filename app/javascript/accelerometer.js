function processAccelerometer(accelerationX, accelerationY, accelerationZ)
		{
			if (accelerometer_on){
			direction = 'stop_moving';	// stop if tablet in lying position
			if (accelerationZ < -4){
				if(accelerationX > 2) direction = 'move_forward'; 	// forward
				if(accelerationX < -2) direction = 'move_back'; 	// backward
				if(accelerationY > 2) direction = 'move_left'; 		// left
				if(accelerationY < -2) direction = 'move_right'; 	// right
				if((accelerationX > 2)&&(accelerationY > 2)) direction = 'move_fwd_left';		// forward left
				if((accelerationX > 2)&&(accelerationY < -2)) direction = 'move_fwd_right';	// forward right
				if((accelerationX < -2)&&(accelerationY > 2)) direction = 'move_bck_left';		// forward left
				if((accelerationX < -2)&&(accelerationY < -2)) direction = 'move_bck_right';	// forward right
			}
			else{
				if (accelerationY > 2) direction = 'rot_left';
				if (accelerationY < -2) direction = 'rot_right';
			}
			// logAction('AX='+accelerationX+"dir="+direction);
			if(direction!='stop_moving') 
			{
				if((is_moving==0)||(direction!=lastDirection) && speed != 1)
				{
					setAllButtonsUp('forward', 'forward', 'strifeleft', 'left', 
						'striferight', 'right', 'backward', 'backward', 'rotate_left',
						 'left', 'rotate_right', 'right');
					stopMoving();
					switch (direction)
					{
						case "move_forward":
							setButtonDown('forward', 'forward', 0, 36);
							break;
						case "move_back":
							setButtonDown('backward', 'backward', 0, 36);
							break;
						case "move_left":
							setButtonDown('strifeleft', 'left', 36, 0);
							break;
						case "move_right":
							setButtonDown('striferight', 'right', 36, 0);
							break;
						case "move_fwd_left":
							setButtonBackground('forward', 'forward', 0, 36);
							setButtonBackground('strifeleft', 'left', 36, 0);
							startMoving(direction,speed);
							break;
						case "move_fwd_right":
							setButtonBackground('forward', 'forward', 0, 36);
							setButtonBackground('striferight', 'right', 36, 0);
							startMoving(direction,speed);
							break;
						case "move_bck_left":
							setButtonBackground('backward', 'backward', 0, 36);
							setButtonBackground('strifeleft', 'left', 36, 0);
							startMoving(direction,speed);
							break;
						case "move_bck_right":
							setButtonBackground('backward', 'backward', 0, 36);
							setButtonBackground('striferight', 'right', 36, 0);
							startMoving(direction,speed);
							break;
					}
				}
			}
			else stopMoving();
			lastDirection = direction;
			}
		}
		