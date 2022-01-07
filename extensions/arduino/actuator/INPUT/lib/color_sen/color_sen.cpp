/*****************
color_sen.cpp
******************/

#include"color_sen.h"
#include "avr/pgmspace.h"
//PROGMEN类型用到上面的头文件

#define G5 392//小字组G
#define A6 440//小字组A
#define B7 494//小字组B
#define c1 525//小字一组c即中央c
#define d2 587//小字一组d
#define e3 659//小字一组e
#define f4 698//小字一组f
#define g5 784//小字一组g
#define a6 880//小字一组a
#define b7 988//小字一组b
#define C1 1047//小字二组C
#define D2 1175//小字二组D
#define E3 1319//小字二组E
#define F4 1397//小字二组F
#define GG5 1568//小字二组G
#define AA6 1769//小字二组A

enum enMusic
	{
		enBirthday=1,
		Childhood=2,
		Fenshuajiang=3,
		Huanlesong=4,
		Shishangzhiyoumamahao=5,
		Rangwomendangqishuangjiang=6,
		Liangzhilaohu=7,
		Xinnianhao=8,
		Xiaoxingxing=9,
		Yuemayangbian=10,
		Wanghouyusheng=11,   
		Guangdongaiqinggushi=12 
	};
	
enum enstaticPicture
	{
		encircle=1,
		triangle=2,
		rect=3,
		roundrect=4,
		heart=5,
		star=6,
		right2=7,
		error=8,
		house=9,
		boat=10,
		umbrella=11,
		smile=12,
		cry=13,
		note=14,
		xhr=15,
		pkq=16,
		hmbb=17,
		xzpq=18
	}; 

enum endynamicPicture
	{
		enfillrect=1,
		filltriangle=2,
		fillroundrect=3,
		beatingheart=4,
		babysbreath=5,
		geometryanimation=6
	}; 

enum enstartscroll
	{
		enstatic=1,
		left=2,
		right=3,
		diagright=4,
		diagleft=5,
	};

//显示一个心形
const static uint8_t PROGMEM Heart_16x16[]=
{
  B00000000, B00000000,
  B00000000, B00000000,
  B00000000, B00000000,
  B00011110, B00111100,
  B00111111, B01111110,
  B00111111, B11111110,
  B00011111, B11111100,
  B00001111, B11111000,
  B00000111, B11110000,
  B00000011, B11100000,
  B00000001, B11000000,
  B00000000, B10000000,
  B00000000, B00000000,
  B00000000, B00000000,
  B00000000, B00000000,
  B00000000, B00000000 
};

uint16_t val_R = 0;
uint16_t val_G = 0;
uint16_t val_B = 0;

int nFrames = 36;


/*********************************************************************/
/*颜色识别传感器*/
/******************************************************************/
//参考OMIBOX
color_sen_Color::color_sen_Color()
{
		
}
color_sen_Color::~color_sen_Color()
{
		
}
void color_sen_Color::RGB_Config()
{
	uint8_t W_ADDR;

	//复位寄存器，200ms积分时间，CRGB通道全部开启
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(ControlReg_Addr);   
	Wire.write(0x06); 
	Wire.endTransmission();        //发送结速信号

	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(0x04);   
	Wire.write(0x41);              //16bit 50ms
	Wire.endTransmission();        //发送结速信号

	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(0x05);   
	Wire.write(0x01); 
	Wire.endTransmission();        //发送结速信号
}

void color_sen_Color::color_sen_Color_Init()
{

	Wire.begin();
  	Wire.setClock(100000);
  	RGB_Config();
}

/* 第一种写法 */
bool color_sen_Color::color_sen_Identify_Color(byte color)
{
	int nowcolor = 0;
	int index = 0;
	char ColorData[6] = {0};
	digitalWrite(4,1);
	//红色

	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(0x10);  
	Wire.endTransmission();     //发送结束信号
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.requestFrom(ADDR, 2);    // request 1 bytes from slave device #2
	while(Wire.available())    // slave may send less than requested
	{ 
	char ff = Wire.read();    // receive a byte as character
	ColorData[index] = ff;
	index++;

	}
	Wire.endTransmission();     //发送结束信号

	//绿色
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(0x0D);  
	Wire.endTransmission();     //发送结束信号
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.requestFrom(ADDR, 2);    // request 1 bytes from slave device #2
	while(Wire.available())    // slave may send less than requested
	{ 
	char ff = Wire.read();    // receive a byte as character
	ColorData[index] = ff;
	index++;
	//   printf("Green:%x\n", ff);  
	}
	Wire.endTransmission();     //发送结束信号

	//蓝色
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.write(0x13);  
	Wire.endTransmission();     //发送结束信号
	Wire.beginTransmission(ADDR);  //发送Device地址
	Wire.requestFrom(ADDR, 2);    // request 1 bytes from slave device #2
	while(Wire.available())    // slave may send less than requested
	{ 
	char ff = Wire.read();    // receive a byte as character
	ColorData[index] = ff;
	index++;
	//printf("Blue:%x\n", ff);  
	}
	Wire.endTransmission();     //发送结束信号
	//delay(500);  
	// printf("R:%x,%x, G:%x,%x, B:%x, %x,\n",ColorData[0], ColorData[1], ColorData[2], ColorData[3], ColorData[4], ColorData[5]);

	Red = ((int)(ColorData[1]&0xff) << 8 | (ColorData[0]&0xff));//2.06
	Green = ((int)(ColorData[3]&0xff) << 8 | (ColorData[2]&0xff));
	Blue = ((int)(ColorData[5]&0xff) << 8 | (ColorData[4]&0xff));//1.19

	// printf("R:%d, G:%d, B:%d\n", Red, Green, Blue);
	// Serial.println("R:%d, G:%d, B:%d\n", Red, Green, Blue);
	// Serial.println(Red,DEC);
	// Serial.println(Green,DEC);
	// Serial.println(Blue,DEC);
	// Serial.println(0);

	if(Red >= 1100 && Red <= 2500 && Green >= 900 && Green <= 2100 && Blue >= 100 && Blue <= 1000)//红色
	{
		Red = 255;
		Green = 0;
		Blue = 0;
		nowcolor = 1;
	}

	else if(Red >= 450 && Red <= 1200 && Green >= 800 && Green <= 2000 && Blue >= 500 && Blue <= 1100) //绿色

	{
		Red = 0;
		Green = 255;
		Blue = 0;
		nowcolor = 2;
	}

	else if(Red >= 400 && Red <= 1200 && Green >= 1500 && Green <= 3000 && Blue >= 1100 && Blue <= 3000)//蓝色
	{
		Red = 0;
		Green = 0;
		Blue = 255;
		nowcolor = 3;
	}

	else if(Red >= 2500 && Green >= 5000 && Blue >= 2600 ) //白色
	{
		Red = 0;
		Green = 0;
		Blue = 0;
		nowcolor = 4;
	}

	if(nowcolor == color)
		return true;
	else
		return false;
  	
}

/* 第二种写法 */
//输出颜色识别传感器检测到的值
void color_sen_Color::get_ColorSensor()
{
	int index = 0;
    char ColorData[6] = {0};
	digitalWrite(4,1);
	//红色
	Wire.beginTransmission(ADDR);   //发送Device地址
	Wire.write(0x10);  
	Wire.endTransmission();         //发送结束信号
	Wire.beginTransmission(ADDR);   //发送Device地址
	Wire.requestFrom(ADDR, 2);      // request 1 bytes from slave device #2
	while(Wire.available())         // slave may send less than requested
	{ 
		char ff = Wire.read();      // receive a byte as character
		ColorData[index] = ff;
		index++;
    }
	Wire.endTransmission();     //发送结束信号
	
	//绿色
	Wire.beginTransmission(ADDR);   //发送Device地址
	Wire.write(0x0D);  
	Wire.endTransmission();         //发送结束信号
	Wire.beginTransmission(ADDR);   //发送Device地址
	Wire.requestFrom(ADDR, 2);      // request 1 bytes from slave device #2
	while(Wire.available())         // slave may send less than requested
	{ 
		char ff = Wire.read();      // receive a byte as character
		ColorData[index] = ff; 
		index++;
		//printf("Green:%x\n", ff);  
	}
	Wire.endTransmission();         //发送结束信号
	
	//蓝色
	Wire.beginTransmission(ADDR);     //发送Device地址
	Wire.write(0x13);  
	Wire.endTransmission();          //发送结束信号
	Wire.beginTransmission(ADDR);    //发送Device地址
	Wire.requestFrom(ADDR, 2);       // request 1 bytes from slave device #2
	while(Wire.available())          // slave may send less than requested
	{ 
		char ff = Wire.read();          // receive a byte as character
		ColorData[index] = ff;
		index++;
		//printf("Blue:%x\n", ff);  
	}
	Wire.endTransmission();     //发送结束信号
	//delay(500);  

	Red = ((unsigned int)(ColorData[1]&0xff) << 8 | (ColorData[0]&0xff));//2.06
	Green = ((unsigned int)(ColorData[3]&0xff) << 8 | (ColorData[2]&0xff));
	Blue = ((unsigned int)(ColorData[5]&0xff) << 8 | (ColorData[4]&0xff));
	
	
    if(Red > 4500) Red = 4500;
	if(Green > 7600) Green = 7600;
	if(Blue > 4600) Blue = 4600;
	val_R = map(Red, 0, 4500, 0, 255);
	val_B = map(Blue, 0, 4600, 0, 255);
    val_G = map(Green, 0, 7600, 0, 255);
		
	if (val_R > val_G && val_R > val_B)  
	{ 		
		val_R = 255;
		val_G /= 2;
		val_B /= 2;
		
	} 
	else if (val_G > val_R && val_G > val_B) 	 	
	{

		val_G = 255;
		val_R /= 2;
		val_B /= 2;
	} 
	else if (val_B > val_R && val_B >  val_G) 	 		
	{
		val_B = 255;
		val_R /=2;
		val_G /= 2;
    }

  
}  

//输出颜色识别传感器检测到的Red的值
int color_sen_Color::ReturnRedValue()
{
	get_ColorSensor();
	return val_R;
}

//输出颜色识别传感器检测到的Green的值
int color_sen_Color::ReturnGreenValue()
{
	get_ColorSensor();
	return val_G;
}

//输出颜色识别传感器检测到的Blue的值
int color_sen_Color::ReturnBlueValue()
{
	get_ColorSensor();
	return val_B;
}
