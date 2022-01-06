
#ifndef MotorCtr_H
#define MotorCtr_H

#include <stdbool.h>
#include <stdint.h>
#include <Arduino.h>


/**
 * Class: MePS2
 * \par Description
 * Declaration of Class MePS2.
 */

 class MotorCtr
{
	public:

	MotorCtr();
	void RunMotor(int16_t pin, int16_t turn, int16_t pwm);


	private:
	
	uint8_t preDir = 0;
	uint8_t prePin = 0;
	uint8_t prePwm = 0;
};
#endif
