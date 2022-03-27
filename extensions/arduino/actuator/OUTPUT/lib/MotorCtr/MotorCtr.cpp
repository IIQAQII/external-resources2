


#include "MotorCtr.h"


MotorCtr::MotorCtr()
{
}

void MotorCtr::RunMotor(int16_t pin, int16_t turn, int16_t pwm)
{
	if (prePin == pin && preDir == turn && prePwm == pwm) { 
			
		//Serial.println("不执行");
		return; 
	
	}
	else {
		prePin = pin;
		preDir = turn;
		prePwm = pwm;
		//Serial.println("执行");
		switch (pin)
		{
			case 0:   //全部停止

				digitalWrite(4, 0);
				analogWrite(5, 0);
				digitalWrite(A1, 0);
				analogWrite(3, 0);
				digitalWrite(A0, 0);
				analogWrite(11, 0);
				digitalWrite(A2, 0);
				analogWrite(10, 0);
				digitalWrite(A3, 0);
				analogWrite(9, 0);
				digitalWrite(7, 0);
				analogWrite(6, 0);

				break;
			case 1:
				pinMode(A0, OUTPUT);
				pinMode(11, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A0, 1);
					int temp = 255 - pwm;
					analogWrite(11, temp);
				}
				else if (turn == 2)
				{
					digitalWrite(A0, 0);
					analogWrite(11, pwm*0.5);
				}
				else if (turn == 0) {
					digitalWrite(A0, 0);
					digitalWrite(11, 0);
				};

				break;
			case 2: //
				pinMode(A2, OUTPUT);
				pinMode(10, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A2, 1);
					int temp = 255 - pwm;
					analogWrite(10, temp);

				}
				else if (turn == 2)
				{
					digitalWrite(A2, 0);
					analogWrite(10, pwm*0.5);
				}
				else if (turn == 0) {
					digitalWrite(A2, 0);
					digitalWrite(10, 0);
				};
				break;
			case 3:
				pinMode(A1, OUTPUT);
				//pinMode(3, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A1, 1);
					int temp = 255 - pwm;
					analogWrite(3, temp);
				}
				else if (turn == 2)
				{
					digitalWrite(A1, 0);
					analogWrite(3, pwm*0.5);
				}
				else if (turn == 0) {
					digitalWrite(A1, 0);
					digitalWrite(3, 0);
				};
				break;
			case 4:
				pinMode(A3, OUTPUT);
				// pinMode(9, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A3, 1);
					int temp = 255 - pwm;
					analogWrite(9, temp);

				}
				else if (turn == 2)
				{
					digitalWrite(A3, 0);
					analogWrite(9, pwm*0.5);
				}
				else if (turn == 0) {
					digitalWrite(A3, 0);
					digitalWrite(9, 0);
				};
				break;

			case 6:
				// pinMode(6, OUTPUT);
				pinMode(7, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(7, 1);
					int temp = 255 - pwm;
					analogWrite(6, temp);
				}
				else if (turn == 2)
				{
					digitalWrite(7, 0);
					analogWrite(6, pwm*0.5);
				}
				else if (turn == 0) {
					digitalWrite(7, 0);
					digitalWrite(6, 0);
				};
				break;
			case 7:
				pinMode(4, OUTPUT);
				// pinMode(5, OUTPUT); //设置端口输出方式
				if (turn == 2)
				{
					digitalWrite(4, 0);
					digitalWrite(5, 1);
				}
				else if (turn == 1)
				{
					digitalWrite(4, 1);
					digitalWrite(5, 0);
				}
				else if (turn == 0) {
					digitalWrite(4, 0);
					digitalWrite(5, 0);
				};
				break;

			case 8:
				pinMode(12, OUTPUT);
				//pinMode(13, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(12, 0);
					digitalWrite(13, 1);
				}
				else if (turn == 2)
				{
					digitalWrite(12, 1);
					digitalWrite(13, 0);
				}
				else if (turn == 0) {
					digitalWrite(12, 0);
					digitalWrite(13, 0);
				};
				break;
		}

	}

}
