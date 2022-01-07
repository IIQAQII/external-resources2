/*******************
color_sen.h
*******************/

#ifndef _color_sen_H__
#define _color_sen_H__

//����Arduino����ͷ�ļ�
#include<Arduino.h> 
#include <Wire.h>              //IIC           


/*��ɫ������*/
#define RGB_2           0x00
#define ADDR            0x53
#define W_ADDR_L        0x66
#define R_ADDR_L        0x67
//ADDR->High
#define RGB_1           0x01
#define W_ADDR_H        0x98
#define R_ADDR_H        0x99

//Register Address
#define ControlReg_Addr 0x00
#define RGBCON_Addr     0x04

#define ID_Addr         0x06

#define CDATAL_Addr     0x12
#define CDATAH_Addr     0x13

#define RDATAL_Addr     0x10
#define RDATAM_Addr     0x11
#define RDATAH_Addr     0x12

#define GDATAL_Addr     0x0D
#define GDATAM_Addr     0x0E
#define GDATAH_Addr     0x0F

#define BDATAL_Addr     0x13
#define BDATAM_Addr     0x14
#define BDATAH_Addr     0x15
/*  Confi Arg  */
//Control Register 
#define RST             0x00

/*��ɫʶ�𴫸���*/
class color_sen_Color
{
	private:
		void RGB_Config(void);
		unsigned int Red = 0;
		unsigned int Green  =0;
		unsigned int Blue = 0;
	public:
          
		color_sen_Color();   //���캯��         
		~color_sen_Color();  //��������

		void color_sen_Color_Init(); //��ʼ������
		bool color_sen_Identify_Color(byte color);//�ж�ʶ�𵽵���ɫ��������ɫ����ѡ�����ɫ�򷵻�true
		void get_ColorSensor();//��ȡ��ɫʶ�𴫸�����⵽��ֵ
		int ReturnRedValue();  //���غ�ɫֵ
		int ReturnGreenValue();//������ɫֵ
		int ReturnBlueValue(); //������ɫֵ

};

#endif