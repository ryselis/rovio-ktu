function processAccelerometer(accelerationX, accelerationY, accelerationZ)
		{
			if (accelerometer_on){
			direction = 'stop_moving';	// stop if tablet in lying position
			if (accelerationZ < -4){
				if(accelerationX > 2) direction = 'move_forward';	// forward
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
				if((is_moving==0)||(direction!=lastDirection))
				{
					stopMoving();
					startMoving(direction,speed);
				}
			}
			else stopMoving();
			lastDirection = direction;
		}
		}
		