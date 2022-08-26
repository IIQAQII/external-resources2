


#include "CKPS22.h"
#include <SoftwareSerial.h>



/**
 * Alternate Constructor which can call your own function to map the MePS2 to arduino port,
 * no pins are used or initialized here.
 * \param[in]
 *   None
 */
CKPS22::CKPS22(int Mpin)
{
  if(Mpin == 1){
	_Mpin1 = 11;
	_Mpin2 = A0;
  }
  else if(Mpin == 2){
	_Mpin1 = 10;
	_Mpin2 = A2;
  }
  else if(Mpin == 3){
	_Mpin1 = 3;
	_Mpin2 = A1;
  }
  else if(Mpin == 4){
	_Mpin1 = 9;
	_Mpin2 = A3;
  }
  else if(Mpin == 6){
	_Mpin1 = 6;
	_Mpin2 = 7;
  }
  else if(Mpin == 7){
	_Mpin1 = 5;
	_Mpin2 = 4;
  }
  else if(Mpin == 8){
	_Mpin1 = 13;
	_Mpin2 = 12;
  }
  _isReady = false;
  _isAvailable = false;
  _isStart = false;
  _lasttime = millis();

  ps2_data_list[MeJOYSTICK_L1] =  false;
  ps2_data_list[MeJOYSTICK_L2] =  false;
  ps2_data_list[MeJOYSTICK_R1] =  false;
  ps2_data_list[MeJOYSTICK_R2] =  false;

  ps2_data_list[MeJOYSTICK_UP] =  false;
  ps2_data_list[MeJOYSTICK_DOWN] =  false;
  ps2_data_list[MeJOYSTICK_LEFT] = false;
  ps2_data_list[MeJOYSTICK_RIGHT] = false;

  ps2_data_list[MeJOYSTICK_TRIANGLE] =  false;
  ps2_data_list[MeJOYSTICK_XSHAPED] =  false;
  ps2_data_list[MeJOYSTICK_SQUARE] =  false;
  ps2_data_list[MeJOYSTICK_ROUND] =  false;

  ps2_data_list[MeJOYSTICK_START] =  false;
  ps2_data_list[MeJOYSTICK_MODE] = false;

  ps2_data_list_bak[MeJOYSTICK_L1] = false;
  ps2_data_list_bak[MeJOYSTICK_L2] = false;
  ps2_data_list_bak[MeJOYSTICK_R1] = false;
  ps2_data_list_bak[MeJOYSTICK_R2] = false;

  ps2_data_list_bak[MeJOYSTICK_UP] = false;
  ps2_data_list_bak[MeJOYSTICK_DOWN] = false;
  ps2_data_list_bak[MeJOYSTICK_LEFT] = false;
  ps2_data_list_bak[MeJOYSTICK_RIGHT] = false;

  ps2_data_list_bak[MeJOYSTICK_TRIANGLE] = false;
  ps2_data_list_bak[MeJOYSTICK_XSHAPED] = false;
  ps2_data_list_bak[MeJOYSTICK_SQUARE] = false;
  ps2_data_list_bak[MeJOYSTICK_ROUND] = false;

  ps2_data_list_bak[MeJOYSTICK_START] = false;
  ps2_data_list_bak[MeJOYSTICK_MODE] = false;
  

  pressBtns[MeJOYSTICK_L1] = false;
  pressBtns[MeJOYSTICK_L2] = false;
  pressBtns[MeJOYSTICK_R1] = false;
  pressBtns[MeJOYSTICK_R2] = false;

  pressBtns[MeJOYSTICK_UP] = false;
  pressBtns[MeJOYSTICK_DOWN] = false;
  pressBtns[MeJOYSTICK_LEFT] = false;
  pressBtns[MeJOYSTICK_RIGHT] = false;

  pressBtns[MeJOYSTICK_TRIANGLE] = false;
  pressBtns[MeJOYSTICK_XSHAPED] = false;
  pressBtns[MeJOYSTICK_SQUARE] = false;
  pressBtns[MeJOYSTICK_ROUND] = false;

  pressBtns[MeJOYSTICK_START] = false;
  pressBtns[MeJOYSTICK_MODE] = false;
}




/**
 * \par Function
 *    readBuffer
 * \par Description
 *    Read the buffer data.
 * \param[in]
 *    index
 * \par Output
 *    None
 * \par Return
 *    buffer
 * \par Others
 *    None
 */
uint8_t CKPS22::readBuffer(int16_t index)
{
  _index=index;
  return buffer[_index];
}

/**
 * \par Function
 *    writeBuffer
 * \par Description
 *    Write the data to the buffer.
 * \param[in]
 *    index,c
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void CKPS22::writeBuffer(int16_t index,uint8_t c)
{
  _index=index;
  buffer[_index]=c;
}

/**
 * \par Function
 *    readSerial
 * \par Description
 *    Read the Serial data.
 * \param[in]
 *   None
 * \par Output
 *    None
 * \par Return
 *   None
 * \par Others
 *    Save the data to _serialRead.
 */
void CKPS22::readSerial(void)
{/*
  _isAvailable = false;
  if( serial.available() > 0)
  {
    _isAvailable = true;
    _serialRead =  serial.read();
    Serial.write(_serialRead);
  }*/
}

/**
 * \par Function
 *    readjoystick
 * \par Description
 *    This function is used to read the handle datas.
 * \param[in]
 *    None
 * \par Output
 *    None
 * \par Return
 *    Returns 0 if no data ready, 1 if data ready.
 * \par Others
 *    None
 */
void CKPS22::readjoystick(boolean _isAvailable, uint8_t _serialRead)
{
  
  //readSerial();
  if (_isAvailable) {
	  unsigned char c = _serialRead & 0xff;
    
	  if (c == 0x55 && _isStart == false) {
		  if (_prevc == 0xff) {
			  _index = 1;
			  _isStart = true;
		  }
	  }
	  else {
		  _prevc = c;
		  if (_isStart) {
			  if (_index == 2) {
				  _dataLen = c;
			  }
			  else if (_index > 2) {
				  _dataLen--;
			  }
        
			  writeBuffer(_index, c);
		  }
	  }
	  _index++;
	  if(_index > 51){
		  _index = 0;
		  _isStart = false;
	  }
	  if (_isStart && _dataLen == 0 && _index > 3) {
		  _isStart = false;
		  _index = 0;
      parseData();
	  }
  }
}

void CKPS22::parseData(void)
{
	int btn_index = readBuffer(12);
	int state = readBuffer(13);
  
	switch (btn_index)
	{
	case 0x10:
		btn_index = 10;
		break;
	case 0x11:
		btn_index = 11;
		break;
	case 0x12:
		btn_index = 12;
		break;
	case 0x13:
		btn_index = 13;
		break;
	case 0x14:
		btn_index = 14;
		break;
	default:
		break;
	}


	boolean IsPress = state == 0x01 ? true : false;
	ps2_data_list[btn_index - 1] = IsPress;

	if (IsPress) {
		pressBtns[btn_index - 1] = true;
	}

}

/**
 * \par Function
 *    MeAnalog
 * \par Description
 *    Read the handle remote sensing analog value.
 * \param[in]
 *    Button
 * \par Output
 
 *    None
 * \par Return
 *    Analog value(-128~127). if none return 0.
 * \par Others
 *    None
 */
int16_t CKPS22::MeAnalog(uint8_t button)
{
  int16_t result;
  if (!_isReady)
  {
    return (MeJOYSTICK_ANALOG_ERROR);
  }
  else
  {
    if(button == MeJOYSTICK_RX || button == MeJOYSTICK_RY || button == MeJOYSTICK_LX || button == MeJOYSTICK_LY)
    {
      result = 2*(ps2_data_list[button]-128);
      if((button == MeJOYSTICK_RY) || (button == MeJOYSTICK_LY))
      {
        result = -result;
      }
      if((result == -256) || (result == -254))
      {
        result = -255;
      }
      else if((result == 254) || (result == 256))
      {
        result = 255;
      }
      return result;
    }
    else
    {
      return MeJOYSTICK_INIT_VALUE;
    }
  }
}

/**
 * \par Function
 *    ButtonPressed
 * \par Description
 *   This function is used to check the button whether to press.
 * \param[in]
 *    Button
 * \par Output
 *    None
 * \par Return
 *   Return button state.
 * \par Others
 *    None
 */
boolean CKPS22::ButtonPressed(uint8_t button) 
{
    
    ps2_data_list_bak[button] = ps2_data_list[button];

    return  ps2_data_list[button];
  
}

boolean CKPS22::ButtonUp(uint8_t button) {

		if (pressBtns[button] && ps2_data_list_bak[button] == false) {
			pressBtns[button] = false;
			return true;
		}
	
	return false;
}

boolean CKPS22::NoButtonPress(void) {
	for (int i = 0; i < sizeof(ps2_data_list) / sizeof(int); i++)
	{
		if (ps2_data_list[i] == true) return false;
	}

	return true;
}

/**
 * \par Function
 *   loop
 * \par Description
 *   Save the MePS2 datas to the datalist.
 * \param[in]
 *    None
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
void CKPS22::loop(void)
{
		//readjoystick();
}
