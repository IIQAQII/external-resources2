
#ifndef CKPS22_H
#define CKPS22_H

#include <stdbool.h>
#include <stdint.h>
#include <Arduino.h>

#ifdef ME_PORT_DEFINED
#endif 

#define MeJOYSTICK_RX           16
#define MeJOYSTICK_RY           17
#define MeJOYSTICK_LX           14
#define MeJOYSTICK_LY           15

#define MeJOYSTICK_R1           2
#define MeJOYSTICK_R2           3
#define MeJOYSTICK_L1           0
#define MeJOYSTICK_L2           1

#define MeJOYSTICK_TRIANGLE     8
#define MeJOYSTICK_XSHAPED      10
#define MeJOYSTICK_SQUARE       11
#define MeJOYSTICK_ROUND        9


#define MeJOYSTICK_UP           4
#define MeJOYSTICK_DOWN         5
#define MeJOYSTICK_LEFT         6
#define MeJOYSTICK_RIGHT        7

#define MeJOYSTICK_START        12
#define MeJOYSTICK_MODE         13


#define MeJOYSTICK_SELECT       18
#define MeJOYSTICK_BUTTON_L     20
#define MeJOYSTICK_BUTTON_R     21
#define MeJOYSTICK_INIT_VALUE   0
#define MeJOYSTICK_ANALOG_ERROR 0

/**
 * Class: MePS2
 * \par Description
 * Declaration of Class MePS2.
 */

 class CKPS22
{
public:


  CKPS22(int Mpin);


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
  void readSerial(void);

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
  uint8_t readBuffer(int16_t index);

/**
 * \par Function
 *    writeBuffer
 * \par Description
 *    Write the datas to the buffer.
 * \param[in]
 *    index,c
 * \par Output
 *    None
 * \par Return
 *    None
 * \par Others
 *    None
 */
  void writeBuffer(int16_t index,uint8_t c);

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
  void readjoystick(void);


  void parseData(void);

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
 *    Analog value(0~255). if none return 128.
 * \par Others
 *    None
 */
  int16_t MeAnalog(uint8_t button);

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
  boolean ButtonPressed(uint8_t button);


  boolean ButtonUp(uint8_t button);

  boolean NoButtonPress(void);
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
  void loop(void);

private:
  int Mpin;
  uint8_t _serialRead;
  uint8_t _Mpin1;
  uint8_t _Mpin2;
  uint8_t _dataLen;
  uint8_t _index = 0;
  uint8_t _prevc = 0;
  uint8_t buffer[30];
  uint8_t ps2_data_list[25];
  uint8_t ps2_data_list_bak[25];
  long _lasttime;

  boolean _isStart;
  boolean _isAvailable;
  boolean _isReady;


  uint8_t pressBtns[25];
};
#endif
