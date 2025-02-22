'use strict';

Entry.ProboTechnic = {
    id: ['63.2', '63.3'], // 파워: 63.2, 일반: 63.3
    name: 'ProboTechnic',
    url: 'https://www.aluxonline.com',
    imageName: 'ProboConnect.png',
    blockIndex: 0,
    title: {
        ko: '프로보테크닉',
        en: 'ProboTechnic'
    },
    Color: [
        [13, 37],   // 빨강
        [38, 62],   // 초록
        [63, 87],   // 파랑
        [88, 112],  // 노랑
        [113, 137], // 검정
        [138, 162] // 하양
    ],
    /**
     * 48   = 1*3*4*4:    32분음표
     * 96   = 2*3*4*4:    16분음표
     * 144  = 3*3*4*4:  점16분음표
     * 64   = 2*2*4*4:    16분음표 스타카토
     * 192  = 4*3*4*4:    8분음표
     * 288  = 6*3*4*4:  점8분음표
     * 128  = 4*2*4*4:    8분음표 스타카토
     * 384  = 8*3*4*4:    4분음표
     * 576  = 12*3*4*4: 점4분음표
     * 256  = 8*2*4*4:    4분음표 스타카토
     * 768  = 16*3*4*4:   2분음표
     * 1152 = 24*3*4*4: 점2분음표
     * 512  = 16*2*4*4:   2분음표 스타카토
     * 1536 = 32*3*4*4:   온음표
     **/
    Note:{
        n32	: 48,
        n16	: 96,  n16d: 144,   n16t: 64,
        n8	: 192, n8d	: 288,  n8t	: 128,
        n4	: 384, n4d	: 576,  n4t	: 256,
        n2	: 768, n2d	: 1152, n2t	: 512,
        n1	: 1536
    },

    RGB_LED:{
        red :	    1,		//RED ON
        red1: 	    2,		//RED 0.05 ON  -> OFF 반복
        red2: 	    3,		//RED 0.1  ON  -> OFF 반복
        red3: 	    4,		//RED 0.2  ON  -> OFF 반복
        red4: 	    5,		//RED 0.5  ON  -> OFF 반복
        red5: 	    6,		//RED 1    ON  -> OFF 반복
        _red1: 	    7,		//RED 0.05 OFF -> ON 반복
        _red2: 	    8,		//RED 0.1  OFF -> ON 반복
        _red3: 	    9,		//RED 0.2  OFF -> ON 반복
        _red4: 	    10,		//RED 0.5  OFF -> ON 반복
        _red5: 	    11,		//RED 1    OFF -> ON 반복
                    
        yellow: 	12,		//YELLOW ON
        yellow1: 	13,		//YELLOW 0.05 ON  -> OFF 반복
        yellow2: 	14,		//YELLOW 0.1  ON  -> OFF 반복
        yellow3: 	15,		//YELLOW 0.2  ON  -> OFF 반복
        yellow4: 	16,		//YELLOW 0.5  ON  -> OFF 반복
        yellow5: 	17,		//YELLOW 1    ON  -> OFF 반복
        _yellow1: 	18,		//YELLOW 0.05 OFF -> ON 반복
        _yellow2: 	19,		//YELLOW 0.1  OFF -> ON 반복
        _yellow3: 	20,		//YELLOW 0.2  OFF -> ON 반복
        _yellow4: 	21,		//YELLOW 0.5  OFF -> ON 반복
        _yellow5: 	22,		//YELLOW 1    OFF -> ON 반복
                    
        green :	    23,		//GREEN ON
        green1: 	24,		//GREEN 0.05 ON  -> OFF 반복
        green2: 	25,		//GREEN 0.1  ON  -> OFF 반복
        green3: 	26,		//GREEN 0.2  ON  -> OFF 반복
        green4: 	27,		//GREEN 0.5  ON  -> OFF 반복
        green5: 	28,		//GREEN 1    ON  -> OFF 반복
        _green1: 	29,		//GREEN 0.05 OFF -> ON 반복
        _green2: 	30,		//GREEN 0.1  OFF -> ON 반복
        _green3: 	31,		//GREEN 0.2  OFF -> ON 반복
        _green4: 	32,		//GREEN 0.5  OFF -> ON 반복
        _green5: 	33,		//GREEN 1    OFF -> ON 반복
                    
        cyan :	    34,		//CYAN ON
        cyan1: 	    35,		//CYAN 0.05 ON  -> OFF 반복
        cyan2: 	    36,		//CYAN 0.1  ON  -> OFF 반복
        cyan3: 	    37,		//CYAN 0.2  ON  -> OFF 반복
        cyan4: 	    38,		//CYAN 0.5  ON  -> OFF 반복
        cyan5: 	    39,		//CYAN 1    ON  -> OFF 반복
        _cyan1: 	40,		//CYAN 0.05 OFF -> ON 반복
        _cyan2: 	41,		//CYAN 0.1  OFF -> ON 반복
        _cyan3: 	42,		//CYAN 0.2  OFF -> ON 반복
        _cyan4: 	43,		//CYAN 0.5  OFF -> ON 반복
        _cyan5: 	44,		//CYAN 1    OFF -> ON 반복
                    
        blue:	    45,		//BLUE ON
        blue1: 	    46,		//BLUE 0.05 ON  -> OFF 반복
        blue2: 	    47,		//BLUE 0.1  ON  -> OFF 반복
        blue3: 	    48,		//BLUE 0.2  ON  -> OFF 반복
        blue4: 	    49,		//BLUE 0.5  ON  -> OFF 반복
        blue5: 	    50,		//BLUE 1    ON  -> OFF 반복
        _blue1: 	51,		//BLUE 0.05 OFF -> ON 반복
        _blue2: 	52,		//BLUE 0.1  OFF -> ON 반복
        _blue3: 	53,		//BLUE 0.2  OFF -> ON 반복
        _blue4: 	54,		//BLUE 0.5  OFF -> ON 반복
        _blue5: 	55,		//BLUE 1    OFF -> ON 반복
                    
        magenta: 	56,		//MAGENTA ON
        magenta1: 	57,		//MAGENTA 0.05 ON  -> OFF 반복
        magenta2: 	58,		//MAGENTA 0.1  ON  -> OFF 반복
        magenta3: 	59,		//MAGENTA 0.2  ON  -> OFF 반복
        magenta4: 	60,		//MAGENTA 0.5  ON  -> OFF 반복
        magenta5: 	61,		//MAGENTA 1    ON  -> OFF 반복
        _magenta1: 	62,		//MAGENTA 0.05 OFF -> ON 반복
        _magenta2: 	63,		//MAGENTA 0.1  OFF -> ON 반복
        _magenta3: 	64,		//MAGENTA 0.2  OFF -> ON 반복
        _magenta4: 	65,		//MAGENTA 0.5  OFF -> ON 반복
        _magenta5: 	66,		//MAGENTA 1    OFF -> ON 반복
                    
        white:	    67,		//WHITE ON
        white1: 	68,		//WHITE 0.05 ON  -> OFF 반복
        white2: 	69,		//WHITE 0.1  ON  -> OFF 반복
        white3: 	70,		//WHITE 0.2  ON  -> OFF 반복
        white4: 	71,		//WHITE 0.5  ON  -> OFF 반복
        white5: 	72,		//WHITE 1    ON  -> OFF 반복
        _white1: 	73,		//WHITE 0.05 OFF -> ON 반복
        _white2: 	74,		//WHITE 0.1  OFF -> ON 반복
        _white3: 	75,		//WHITE 0.2  OFF -> ON 반복
        _white4: 	76,		//WHITE 0.5  OFF -> ON 반복
        _white5: 	77,		//WHITE 1    OFF -> ON 반복
                    
        rgbrnd1:	78,		//RANDOM 1
        rgbrnd2:	79,		//RANDOM 2
                    
        red_d:		90,	//RED 
        yellow_d:	91,	//YELLOW 
        green_d:	92,	//GREEN
        cyan_d:		93,	//CYAN
        blue_d:		94,	//BLUE
        magenta_d:	95,	//MAGENTA
        white_d:	96,	//WHITE
                    
        rgboff:		100	//RGB LED OFF
    },

    Melody: [0, 35391, 33405, 31530, 29760, 28090, 26513, 25025, 23621, 22295, 21044, 19863, 18748],
    Melody_S: [0, 35391, 31530, 28090, 26513, 23621, 21044, 18748],

    Track:[
        [0x451F, 0x3D95, 0x36DD, 0x33C8, 0x2E22, 0x291A, 0x249E], // Start : size 7,
        [0x228F, 0x249E, 0x291A, 0x2E22, 0x33C8, 0x36DD, 0x3D95, 0x451F], // End : size 8,
        [0x228F, 0x1B6E, 0x1711, 0x1147 ], // LevelUp : size 4,
        [0x1147, 0x1711, 0x1B6E, 0x228F ]  // LevelDwon : size 4,
    ],
    
    Infinite_Buff: {
        AA1: 0, AA2: 0, AA3: 0, AA4: 0
    },
    Infinite_Count: {
        AA1: 0, AA2: 0, AA3: 0, AA4: 0
    },
    Infinite_Start: {
        AA1: 0, AA2: 0, AA3: 0, AA4: 0
    },

    SenserSet:{
        AA1: 0, AA2: 0, AA3: 0, AA4: 0
    },

    InputData: {
        Analog: {
            AA1: 0, AA2: 0, AA3: 0, AA4: 0
        },
        Digital: {
            A1: 0, A2: 0, A3: 0, A4: 0,
            FEA1: 0, FEA2: 0, FEA3: 0, FEA4: 0,
            REA1: 0, REA2: 0, REA3: 0, REA4: 0,
            BEA1: 0, BEA2: 0, BEA3: 0, BEA4: 0
        },
        Remote: {
            R_1: 0, R_2: 0, R_3: 0, R_4: 0,
            R_5: 0, R_6: 0, R_7: 0, R_8: 0,
            R_L1: 0, R_L2: 0, R_R1: 0, R_R2: 0
        },
        EEPROM: {
            EC: 0,
            EEPR2: 0, EEPR1: 0
        },
        Infinite: {
            ROTATION_1: 0, ROTATION_2: 0, ROTATION_3: 0, ROTATION_4: 0
        },
        Acceler:{
            AXIS_X1: 0, AXIS_X2: 0, AXIS_X3: 0, AXIS_X4: 0,
            AXIS_Y1: 0, AXIS_Y2: 0, AXIS_Y3: 0, AXIS_Y4: 0,
            AXIS_Z1: 0, AXIS_Z2: 0, AXIS_Z3: 0, AXIS_Z4: 0
        }
    },
    RemoteData: {
        B1: 0, B2: 0, B3: 0, B4: 0,
        Servo1: 0, Servo2: 0, Servo3: 0, Servo4: 0,
        DC1: 0, DC2: 0, DC3: 0, DC4: 0,
        MEL2: 0, MEL1: 0,
        FND: 100,
        EEPR4: 0, EEPR3: 0, EEPR2: 0, EEPR1: 0,
        ASET2: 0, ASET1: 0
    },
    EdgeFlag: {
        FEA1: 0, FEA2: 0, FEA3: 0, FEA4: 0,
        REA1: 0, REA2: 0, REA3: 0, REA4: 0,
        BEA1: 0, BEA2: 0, BEA3: 0, BEA4: 0
    },
    EEPROM: {
        EEPROM_Buff: 0,
        EEPROM_Count: 0
    },

    setZero: function() {
        for (let key in this.EdgeFlag) {
            this.EdgeFlag[key] = 0;
        }
        for (let key in this.RemoteData) {
            Entry.hw.sendQueue[key] = this.RemoteData[key];
        }
        for (let key in this.SenserSet) {
            this.SenserSet[key] = 0;
        }
        Entry.hw.update();
    },
    afterReceive(pd) {
        if(Entry.engine.isState('run')) {
            Entry.engine.fireEvent('event_remote_input');
            Entry.engine.fireEvent('event_digital_input');
        }
    },
    convertDropdownRemote(value) {
        switch (value) {
            case '1':
            case 'R_1':
                return 'R_1';
            case '2':
            case 'R_2':
                return 'R_2';
            case '3':
            case 'R_3':
                return 'R_3';
            case '4':
            case 'R_4':
                return 'R_4';
            case '5':
            case 'R_5':
                return 'R_5';
            case '6':
            case 'R_6':
                return 'R_6';
            case '7':
            case 'R_7':
                return 'R_7';
            case '8':
            case 'R_8':
                return 'R_8';
            case '9':
            case 'R_L1':
                return 'R_L1';
            case '10':
            case 'R_L2':
                return 'R_L2';
            case '11':
            case 'R_R1':
                return 'R_R1';
            case '12':
            case 'R_R2':
                return 'R_R2';
            default:
                return Lang.template.value_error;
        }
    },    
    convertDropdownDigital(value) {
        switch (value) {
            case '1':
            case 'A1':
                return 'A1';
            case '2':
            case 'A2':
                return 'A2';
            case '3':
            case 'A3':
                return 'A3';
            case '4':
            case 'A4':
                return 'A4';
            case '5':
            case 'FEA1':
                return 'FEA1';
            case '6':
            case 'FEA2':
                return 'FEA2';
            case '7':
            case 'FEA3':
                return 'FEA3';
            case '8':
            case 'FEA4':
                return 'FEA4';
            case '9':
            case 'REA1':
                return 'REA1';
            case '10':
            case 'REA2':
                return 'REA2';
            case '11':
            case 'REA3':
                return 'REA3';
            case '12':
            case 'REA4':
                return 'REA4';
            case '13':
            case 'BEA1':
                return 'BEA1';
            case '14':
            case 'BEA2':
                return 'BEA2';
            case '15':
            case 'BEA3':
                return 'BEA3';
            case '16':
            case 'BEA4':
                return 'BEA4';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownAnalog(value) {
        switch (value) {
            case '1':
            case 'AA1':
                return 'AA1';
            case '2':
            case 'AA2':
                return 'AA2';
            case '3':
            case 'AA3':
                return 'AA3';
            case '4':
            case 'AA4':
                return 'AA4';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownAxis(value, axis) {
        switch (value) {
            case '1':
            case 'AA1':
                return "AXIS_" + axis + "1";
            case '2':
            case 'AA2':
                return "AXIS_" + axis + "2";
            case '3':
            case 'AA3':
                return "AXIS_" + axis + "3";
            case '4':
            case 'AA4':
                return "AXIS_" + axis + "4";
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownSensor1(value) {
        switch (value) {
            case '1':
            case Lang.template.item_switch:
                return 1;
            case '2':
            case Lang.template.item_infrared:
                return 2;
            case '3':
            case Lang.template.item_magnetic:
                return 3;
            case '4':
            case Lang.template.item_rotation:
                return 4;
            case '5':
            case Lang.template.item_color:
                return 5;
            case '6':
            case Lang.template.item_acceleration:
                return 6;
            case '7':
            case Lang.template.item_ultrasonic:
                return 7;
            case '8':
            case Lang.template.item_heart_rate:
                return 8;
            case '9':
            case Lang.template.item_illuminance:
                return 9;
            case '10':
            case Lang.template.item_sound:
                return 10;
            case '11':
            case Lang.template.item_tilt:
                return 11;
            case '12':
            case Lang.template.item_pressure:
                return 12;
            case '13':
            case Lang.template.item_multi_touch:
                return 13;
            case '14':
            case Lang.template.item_compass:
                return 14;
            case '15':
            case Lang.template.item_3acceleration:
                return 15;        
            case '16':
            case Lang.template.item_multi_switch:
                return 16;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownSensor2(value) {        
        switch (value) {
            case '1':
            case Lang.template.item_infinite_rotation:
                return 1;
            case '2':
            case Lang.template.item_compass:
                return 2;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownKey(value) {
        switch (value) {
            case '1':
            case Lang.template.item_key_1:
                return 0;
            case '2':
            case Lang.template.item_key_2:
                return 1;
            case '3':
            case Lang.template.item_key_3:
                return 2;
            case '4':
            case Lang.template.item_key_4:
                return 3;
            case '5':
            case Lang.template.item_key_5:
                return 4;
            case '6':
            case Lang.template.item_key_6:
                return 5;
            case '7':
            case Lang.template.item_key_7:
                return 6;
            case '8':
            case Lang.template.item_key_8:
                return 7;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownOnOff(value) {
        switch (value) {
            case '0':
            case Lang.template.item_off:
                return 0;
            case '1':
            case Lang.template.item_on:
                return 1;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownDC(value) {
        switch (value) {
            case '1':
            case 'DC1':
                return 'DC1';
            case '2':
            case 'DC2':
                return 'DC2';
            case '3':
            case 'DC3':
                return 'DC3';
            case '4':
            case 'DC4':
                return 'DC4';
            case '5':
            case 'DC5':
                return 'DC5';
            case '6':
            case 'DC6':
                return 'DC6';
            case '7':
            case 'DC7':
                return 'DC7';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownServo(value) {
        switch (value) {
            case '1':
            case 'Servo1':
                return 'Servo1';
            case '2':
            case 'Servo2':
                return 'Servo2';
            case '3':
            case 'Servo3':
                return 'Servo3';
            case '4':
            case 'Servo4':
                return 'Servo4';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownPort(value) {
        switch (value) {
            case '1':
            case 'B1':
                return 'B1';
            case '2':
            case 'B2':
                return 'B2';
            case '3':
            case 'B3':
                return 'B3';
            case '4':
            case 'B4':
                return 'B4';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownSensorTransfer(value) {
        switch (value) {
            case '1':
            case Lang.template.item_value:
                return 1;
            case '2':
            case Lang.template.item_angle:
                return 2;
            case '3':
            case Lang.template.item_absolute_angle:
                return 3;
            case '4':
            case Lang.template.item_number_of_rotations:
                return 4;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownPitch(pitch) {
        // 배열의 인덱스 1번부터 음표
        if (typeof(pitch) === 'number') {
            const index = (pitch % 12) + 1;
            let value = 0;
            if (36 <= pitch && pitch <= 47)
                value = Entry.ProboTechnic.Melody[index];
            else if (48 <= pitch && pitch <= 59)
                value = Entry.ProboTechnic.Melody[index] >> 1;
            else if (60 <= pitch && pitch <= 71)
                value = Entry.ProboTechnic.Melody[index] >> 2;
            else if (72 <= pitch && pitch <= 83)
                value = Entry.ProboTechnic.Melody[index] >> 3;
            else
                value = Entry.ProboTechnic.Melody[0];            
            return value;
        } else {
            return Lang.template.value_error;
        }
    },
    convertDropdownNote(value) {        
        switch (value) {
            case '1':
            case Lang.template.item_note_whole:
                return 'n1';
            case '2':
            case Lang.template.item_note_half:
                return 'n2';
            case '4':
            case Lang.template.item_note_quarter:
                return 'n4';
            case '8':
            case Lang.template.item_note_eighth:
                return 'n8';
            case '16':
            case Lang.template.item_note_sixteenth:
                return 'n16';
            case '32':
            case Lang.template.item_note_thirty_second:
                return 'n32';
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownMelody(value) {
        switch (value) {
            case '1':
            case Lang.template.item_melody_start:
                return 0;
            case '2':
            case Lang.template.item_melody_end: 
                return 1;
            case '3':
            case Lang.template.item_melody_level_up: 
                return 2;
            case '4':
            case Lang.template.item_melody_level_down:
                return 3;
            default:
                return Lang.template.value_error;
        }
    },  
    convertDropdownColor1(value) {
        
        switch (value) {
            case '1':
            case Lang.template.item_color_red:
                return 0;
            case '2':
            case Lang.template.item_color_green:
                return 1;
            case '3':
            case Lang.template.item_color_blue:
                return 2;
            case '4':
            case Lang.template.item_color_yellow:
                return 3;
            case '5':
            case Lang.template.item_color_black:
                return 4;
            case '6':
            case Lang.template.item_color_white:
                return 5;
            default:
                return Lang.template.value_error;
        }
    },
    convertDropdownColor2(value) {
        switch (value) {
            case '1':
            case Lang.template.item_color_red:
                return this.RGB_LED.red;
            case '2':
            case Lang.template.item_color_green:
                return this.RGB_LED.green;
            case '3':
            case Lang.template.item_color_blue:
                return this.RGB_LED.blue;
            case '4':
            case Lang.template.item_color_cyan:
                return this.RGB_LED.cyan;
            case '5':
            case Lang.template.item_color_magenta:
                return this.RGB_LED.magenta;
            case '6':
            case Lang.template.item_color_yellow:
                return this.RGB_LED.yellow;
            case '7':
            case Lang.template.item_color_white:
                return this.RGB_LED.white;
            default:
                return Lang.template.value_error;
        }
    }
};

Entry.ProboTechnic.setLanguage = function() {
    return {
        ko: {
            template: {
                value_error: '값 오류',
                item_switch: '스위치',
                item_infrared: '적외선',
                item_magnetic: '자석',
                item_rotation: '회전',
                item_color: '컬러',
                item_acceleration: '가속도',
                item_ultrasonic: '초음파',
                item_heart_rate: '심박',
                item_illuminance: '조도',
                item_temperature: '온도',
                item_sound: '소리',
                item_tilt: '기울기',
                item_pressure: '압력',
                item_multi_touch: '멀티키',
                item_compass: '나침반',
                item_3acceleration: '3가속',
                item_multi_switch: '분배기',
                item_infinite_rotation: '무한회전',
                item_color_red: '빨간색',
                item_color_green: '초록색',
                item_color_blue: '파란색',
                item_color_cyan: '청녹색',
                item_color_magenta: '자홍색',
                item_color_yellow: '노란색',
                item_color_black: '검정색',
                item_color_white: '하얀색',
                item_value: '값',
                item_angle: '각도',
                item_absolute_angle: '절대각도',
                item_number_of_rotations: '회전 수',
                item_key_1: '키1',
                item_key_2: '키2',
                item_key_3: '키3',
                item_key_4: '키4',
                item_key_5: '키5',
                item_key_6: '키6',
                item_key_7: '키7',
                item_key_8: '키8',
                item_all: '모두',
                item_on: '켜기',
                item_off: '끄기',
                item_note_whole: '온',
                item_note_half: '2분',
                item_note_quarter: '4분',
                item_note_eighth: '8분',
                item_note_sixteenth: '16분',
                item_note_thirty_second: '32분',
                item_pitch_do: '도',
                item_pitch_do_sharp: '도#',
                item_pitch_re: '레',
                item_pitch_re_sharp: '레#',
                item_pitch_mi: '미',
                item_pitch_fa: '파',
                item_pitch_fa_sharp: '파#',
                item_pitch_sol: '솔',
                item_pitch_sol_sharp: '솔#',
                item_pitch_ra: '라',
                item_pitch_ra_sharp: '라#',
                item_pitch_si: '시',
                item_melody_start: '시작음',
                item_melody_end: '종료음',
                item_melody_level_up: '레벨 업',
                item_melody_level_down: '레벨 다운',

                technic_remote_event: '%1 리모컨 %2 키를 눌렀을 때',
                technic_digital_event: '%1 디지털 입력 %2 이(가) 들어왔을 때',

                technic_senser_setting: '입력포트 %1 을(를) %2 센서로 설정 %3',

                technic_remote_input: '리모컨 입력 %1',
                technic_digital_input: '디지털 입력 %1',
                technic_analog_input: '아날로그 입력 %1',
                technic_3axis_acceler_x: '3가속도 %1의 X축',
                technic_3axis_acceler_y: '3가속도 %1의 Y축',
                technic_3axis_acceler_z: '3가속도 %1의 Z축',
                technic_value_mapping: '%1 의 %2 ~ %3 값을 %4 ~ %5 (으)로 변환',
                technic_color_input_b: '컬러 센서 %1 이(가) %2 인가?',
                technic_color_input_r: '컬러 센서 %1 의 색상',
                technic_infinite_setting: '%1 센서 %2 을 %3 값으로 정하기 %4',
                technic_infinite_mm_diameter: '%1 센서 %2 지름 %3 의 mm 값',
                technic_infinite_transform_input: '%1 센서 %2 의  %3',
                technic_multi_sensor: '멀티키 센서 %1의 %2',
                technic_multi_switch: '분배 스위치 %1의 %2',
                technic_eeprom_buffset: 'EEPROM %1 주소의 값 호출하기 %2',
                technic_eeprom_address_value: 'EEPROM 주소의 값',      

                technic_port_output: '출력핀 %1 을(를) %2 %3',
                technic_servo_output: '서보 모터 %1 의 위치를 %2 로 이동 %3',
                technic_s_dc_output: 'S 모터 %1 을(를) %2 속도로 회전 %3',
                technic_dc_output: 'DC 모터 %1 을(를) %2 속도로 회전 %3',
                technic_melody_note_output: '%1 을(를) %2 음표로 연주하기 %3',
                technic_melody_sec_output: '%1 을(를) %2 초 동안 연주하기 %3',
                technic_melody_output: '%1 을(를) 연주하기 %2',
                technic_value_sec_output: '%1 값을(를) %2 초 동안 연주하기 %3',
                technic_value_output: '%1 값을(를) 연주하기 %2',
                technic_melody_track_output: '%1 을(를) %2초 간격으로 재생하기 %3',
                technic_melody_off: '멜로디 중지 %1',
                technic_rgbled_on_output: 'RGB LED %1 을(를) %2 으로 켜기 %3',
                technic_rgbled_off_output: 'RGB LED %1 을(를) 끄기 %2',
                technic_rgbled_dimming_output: 'RGB LED %1 을(를) %2 으로 디밍 %3',
                technic_rgbled_flashing_output: 'RGB LED %1 %2 으로 %3 초 간격 %4',
                technic_fnd_output: 'FND를 %1 (으)로 설정 %2',
                technic_fnd_off: 'FND 끄기 %1',
                technic_eeprom_write: 'EEPROM %1 주소에 %2 값 설정하기 %3'
            }
        },
        en: {
            template: {
                value_error: 'value Error',
                item_switch: 'Switch',
                item_infrared: 'Infrared',
                item_magnetic: 'Magnetic',
                item_rotation: 'Rotation',
                item_color: 'Color',
                item_acceleration: 'Acceleration',
                item_ultrasonic: 'Ultrasonic',
                item_heart_rate: 'Heart Rate',
                item_illuminance: 'Illuminance',
                item_temperature: 'Temperature',
                item_sound: 'Sound',
                item_tilt: 'Tilt',
                item_pressure: 'Pressure',
                item_multi_touch: 'Multi Touch',
                item_compass: 'Compass',
                item_3acceleration: '3Acceleration',
                item_multi_switch: 'Multi Switch',
                item_infinite_rotation: 'Infinite Rotation',
                item_color_red: 'Red',
                item_color_green: 'Green',
                item_color_blue: 'Blue',
                item_color_cyan: 'Cyan',
                item_color_magenta: 'Magenta',
                item_color_yellow: 'Yellow',
                item_color_black: 'Black',
                item_color_white: 'White',
                item_value: 'Value',
                item_angle: 'Angle',
                item_absolute_angle: 'Absolute Angle',
                item_number_of_rotations: 'Number of Rotations',
                item_key_1: 'Key1',
                item_key_2: 'Key2',
                item_key_3: 'Key3',
                item_key_4: 'Key4',
                item_key_5: 'Key5',
                item_key_6: 'Key6',
                item_key_7: 'Key7',
                item_key_8: 'Key8',
                item_all: 'All',
                item_on: 'On',
                item_off: 'Off',
                item_note_whole: 'Whole',
                item_note_half: 'Half',
                item_note_quarter: 'Quarter',
                item_note_eighth: 'Eighth',
                item_note_sixteenth: 'Sixteenth',
                item_note_thirty_second: 'Thirty-Second',
                item_pitch_do: 'do',
                item_pitch_do_sharp: 'xdo',
                item_pitch_re: 're',
                item_pitch_re_sharp: 'xre',
                item_pitch_mi: 'mi',
                item_pitch_fa: 'fa',
                item_pitch_fa_sharp: 'xfa',
                item_pitch_sol: 'sol',
                item_pitch_sol_sharp: 'xsol',
                item_pitch_ra: 'ra',
                item_pitch_ra_sharp: 'xra',
                item_pitch_si: 'si',
                item_melody_start: 'Start',
                item_melody_end: 'End',
                item_melody_level_up: 'Level up',
                item_melody_level_down: 'Level down',

                technic_remote_event: '%1 When %2 remote control key pressed',
                technic_digital_event: '%1 When %2 digital pin input',

                technic_senser_setting: 'Set input port %1 to %2 sensor %3',

                technic_remote_input: 'Remote control %1',
                technic_digital_input: 'Read digital pin %1',
                technic_analog_input: 'Read analog pin %1',
                technic_3axis_acceler_x: '3acceleration %1 and X',
                technic_3axis_acceler_y: '3acceleration %1 and Y',
                technic_3axis_acceler_z: '3acceleration %1 and Z',
                technic_value_mapping: '%1 to value %2 ~ %3 change %4 ~ %5',
                technic_color_input_b: 'Is color sensor %1 %2 ?',
                technic_color_input_r: 'Color of color sensor %1',
                technic_infinite_setting: 'Set %1 sensor %2 to %3 value %4',
                technic_infinite_mm_diameter: 'The move distance(in mm) when the %1 sensor %2 is %3 mm in diameter',
                technic_infinite_transform_input: '%1 rotation sensor %2 to %3',
                technic_multi_sensor: 'Multi sensor %1 key %2',
                technic_multi_switch: 'A key number of the multi-switch sensor %1 = %2',
                technic_eeprom_buffset:'Calling the value of EEPROM %1 address',
                technic_eeprom_address_value: 'Value of EEPROM address',

                technic_dc_output: 'DC motor %1 velocity %2 %3',
                technic_servo_output: 'Servo motor %1 position %2 %3',
                technic_s_dc_output: 'Servo motor %1 speed %2 %3',
                technic_port_output: 'Set digital pint %1 as %2 %3',
                technic_melody_note_output: 'Play key %1 for %2 note %3',
                technic_melody_sec_output: 'Play key %1 for %2 secs %3',
                technic_melody_output: 'Play key %1 %2',
                technic_value_sec_output: 'Play value %1 for %2 secs %3',
                technic_value_output: 'Play value %1 %2',
                technic_melody_track_output: 'Play sound %1 for %2 secs %3',
                technic_melody_off: 'Stop tone %1',
                technic_rgbled_on_output: 'Turn on RGB LED %1 to %2 %3',
                technic_rgbled_off_output: 'Turn off RGB LED %1 %2',
                technic_rgbled_dimming_output: 'Dimming RGB LED %1 to %2 %3',
                technic_rgbled_flashing_output: 'RGB LED %1 Blinking %2 at %3 second intervals %4',
                technic_fnd_output: 'Set FND to %1 %2',
                technic_fnd_off: 'Turn off FND %1',
                technic_eeprom_write: 'Set EEPROM %1 address to %2 %3'
            }
        }
    };
};

Entry.ProboTechnic.blockMenuBlocks = [
    'technic_dropdown_remote',
    'technic_dropdown_digital',
    'technic_dropdown_analog',
    'technic_dropdown_sensor_1',
    'technic_dropdown_sensor_2',
    'technic_dropdown_color_1',
    'technic_dropdown_color_2',
    'technic_dropdown_sensor_transfer',
    'technic_dropdown_key',
    'technic_dropdown_dc_1_all',
    'technic_dropdown_servo_1_4',
    'technic_dropdown_port_1_4',
    'technic_dropdown_on_off',
    'technic_dropdown_velocity',
    'technic_dropdown_servo_position',
    'technic_dropdown_note',
    'technic_dropdown_time_1',
    'technic_dropdown_time_2',
    'technic_dropdown_time_3',
    'technic_dropdown_pitch',
    'technic_dropdown_melody',

    //event
    'technic_remote_event',
    'technic_digital_event',

    //input
    'technic_senser_setting',
    'technic_remote_input',
    'technic_digital_input',
    'technic_analog_input',
    //'technic_3axis_acceler_x', // 테크닉 에서 사용하지 않음
    //'technic_3axis_acceler_y', // 테크닉 에서 사용하지 않음
    //'technic_3axis_acceler_z', // 테크닉 에서 사용하지 않음
    'technic_value_mapping',
    'technic_color_input_b',
    'technic_color_input_r',
    'technic_infinite_setting',
    'technic_infinite_mm_diameter',
    'technic_infinite_transform_input',
    //'technic_multi_sensor', // 테크닉 에서 사용하지 않음
    'technic_multi_switch',
    'technic_eeprom_buffset',
    'technic_eeprom_address_value',

    //output
    'technic_dc_output',
    'technic_servo_output',
    //'technic_s_dc_output', // 테크닉 에서 사용하지 않음
    'technic_port_output',
    'technic_melody_note_output',
    'technic_melody_sec_output',
    'technic_melody_output',
    'technic_value_sec_output',
    'technic_value_output',    
    'technic_melody_track_output',
    'technic_melody_off',
    'technic_rgbled_on_output',
    'technic_rgbled_off_output',
    'technic_rgbled_flashing_output',
    'technic_rgbled_dimming_output',
    //'technic_fnd_output', // 테크닉 에서 사용하지 않음
    //'technic_fnd_off',    // 테크닉 에서 사용하지 않음
    // EEPROM
    'technic_eeprom_write'
];

// 블록 생성
Entry.ProboTechnic.getBlocks = function() {
    return {
        ///========================================================================================
        /// Dropdown block
        ///========================================================================================
        technic_dropdown_remote: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['R_1', '1'],
                        ['R_2', '2'],
                        ['R_3', '3'],
                        ['R_4', '4'],
                        ['R_5', '5'],
                        ['R_6', '6'],
                        ['R_7', '7'],
                        ['R_8', '8'],
                        ['R_L1', '9'],
                        ['R_L2', '10'],
                        ['R_R1', '11'],
                        ['R_R2', '12'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_digital: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['A1', '1'],
                        ['A2', '2'],
                        ['A3', '3'],
                        ['A4', '4'],
                        ['FEA1', '5'],
                        ['FEA2', '6'],
                        ['FEA3', '7'],
                        ['FEA4', '8'],
                        ['REA1', '9'],
                        ['REA2', '10'],
                        ['REA3', '11'],
                        ['REA4', '12'],
                        ['BEA1', '13'],
                        ['BEA2', '14'],
                        ['BEA3', '15'],
                        ['BEA4', '16'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_analog: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['AA1', '1'],
                        ['AA2', '2'],
                        ['AA3', '3'],
                        ['AA4', '4'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_sensor_1: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_switch, '1'],
                        [Lang.template.item_infrared, '2'],
                        [Lang.template.item_magnetic, '3'],
                        [Lang.template.item_rotation, '4'],
                        [Lang.template.item_color, '5'],
                        //[Lang.template.item_acceleration, '6'], // 테크닉 에서 사용하지 않음
                        [Lang.template.item_ultrasonic, '7'],
                        [Lang.template.item_heart_rate, '8'],
                        [Lang.template.item_illuminance, '9'],
                        [Lang.template.item_sound, '10'],
                        [Lang.template.item_tilt, '11'],
                        [Lang.template.item_pressure, '12'],
                        //[Lang.template.item_multi_touch, '13'], // 테크닉 에서 사용하지 않음
                        //[Lang.template.item_compass, '14'], // 테크닉 에서 사용하지 않음
                        //[Lang.template.item_3acceleration, '15'], // 테크닉에서 사용하지 않음
                        [Lang.template.item_multi_switch, '16'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_sensor_2: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_infinite_rotation, '1'],
                        //[Lang.template.item_compass, '2'], // 테크닉 에서 사용하지 않음
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_color_1: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_color_red, '1'],
                        [Lang.template.item_color_green, '2'],
                        [Lang.template.item_color_blue, '3'],
                        [Lang.template.item_color_yellow, '4'],
                        [Lang.template.item_color_black, '5'],
                        [Lang.template.item_color_white, '6'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_color_2: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_color_red, '1'],
                        [Lang.template.item_color_green, '2'],
                        [Lang.template.item_color_blue, '3'],
                        [Lang.template.item_color_cyan, '4'],
                        [Lang.template.item_color_magenta, '5'],
                        [Lang.template.item_color_yellow, '6'],
                        [Lang.template.item_color_white, '7'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_sensor_transfer: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_value, '1'],
                        [Lang.template.item_angle, '2'],
                        [Lang.template.item_absolute_angle, '3'],
                        [Lang.template.item_number_of_rotations, '4'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_key: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_key_1, '1'],
                        [Lang.template.item_key_2, '2'],
                        [Lang.template.item_key_3, '3'],
                        [Lang.template.item_key_4, '4'],
                        [Lang.template.item_key_5, '5'],
                        [Lang.template.item_key_6, '6'],
                        [Lang.template.item_key_7, '7'],
                        [Lang.template.item_key_8, '8'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_dc_1_all: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['1', 'DC1'],
                        ['2', 'DC2'],
                        ['3', 'DC3'],
                        ['4', 'DC4'],
                        ['1,2', 'DC5'],
                        ['3,4', 'DC6'],
                        [Lang.template.item_all, 'DC7'],
                    ],
                    value: 'DC1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_servo_1_4: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['1', 'Servo1'],
                        ['2', 'Servo2'],
                        ['3', 'Servo3'],
                        ['4', 'Servo4'],
                    ],
                    value: 'Servo1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_velocity: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['20', '20'],
                        ['15', '15'],
                        ['10', '10'],
                        ['5', '5'],
                        ['0', '0'],
                        ['-5', '-5'],
                        ['-10', '-10'],
                        ['-15', '-15'],
                        ['-20', '-20'],
                    ],
                    value: '0',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_servo_position: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['1', '1'],
                        ['20', '20'],
                        ['40', '40'],
                        ['60', '60'],
                        ['80', '80'],
                        ['100', '100'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_port_1_4: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['1', 'B1'],
                        ['2', 'B2'],
                        ['3', 'B3'],
                        ['4', 'B4'],
                    ],
                    value: 'B1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },           
        technic_dropdown_on_off: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_on, '1'],
                        [Lang.template.item_off, '0'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_note: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_note_whole, '1'],
                        [Lang.template.item_note_half, '2'],
                        [Lang.template.item_note_quarter, '4'],
                        [Lang.template.item_note_eighth, '8'],
                        [Lang.template.item_note_sixteenth, '16'],
                        [Lang.template.item_note_thirty_second, '32'],
                    ],
                    value: '4',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_time_1: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['0.1', '0.1'],
                        ['0.3', '0.3'],
                        ['0.5', '0.5'],
                        ['0.7', '0.7'],
                        ['1', '1'],
                        ['2', '2'],
                    ],
                    value: '0.5',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_time_2: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['0.1', '0.1'],
                        ['0.3', '0.3'],
                        ['0.5', '0.5'],
                        ['0.7', '0.7'],
                        ['1', '1'],
                        ['2', '2'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_time_3: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        ['0.05', '0.05'],
                        ['0.1', '0.1'],
                        ['0.2', '0.2'],
                        ['0.5', '0.5'],
                        ['1', '1'],
                    ],
                    value: '0.5',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        technic_dropdown_pitch: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'DropdownExtra',
                    options: [
                        [Lang.template.item_pitch_do + ' (36)', '36'],
                        [Lang.template.item_pitch_do_sharp + ' (37)', '37'],
                        [Lang.template.item_pitch_re + ' (38)', '38'],
                        [Lang.template.item_pitch_re_sharp + ' (39)', '39'],
                        [Lang.template.item_pitch_mi + ' (40)', '40'],
                        [Lang.template.item_pitch_fa + ' (41)', '41'],
                        [Lang.template.item_pitch_fa_sharp + ' (42)', '42'],
                        [Lang.template.item_pitch_sol + ' (43)', '43'],
                        [Lang.template.item_pitch_sol_sharp + ' (44)', '44'],
                        [Lang.template.item_pitch_ra + ' (45)', '45'],
                        [Lang.template.item_pitch_ra_sharp + ' (46)', '46'],
                        [Lang.template.item_pitch_si + ' (47)', '47'],

                        [Lang.template.item_pitch_do + ' (48)', '48'],
                        [Lang.template.item_pitch_do_sharp + ' (49)', '49'],
                        [Lang.template.item_pitch_re + ' (50)', '50'],
                        [Lang.template.item_pitch_re_sharp + ' (51)', '51'],
                        [Lang.template.item_pitch_mi + ' (52)', '52'],
                        [Lang.template.item_pitch_fa + ' (53)', '53'],
                        [Lang.template.item_pitch_fa_sharp + ' (54)', '54'],
                        [Lang.template.item_pitch_sol + ' (55)', '55'],
                        [Lang.template.item_pitch_sol_sharp + ' (56)', '56'],
                        [Lang.template.item_pitch_ra + ' (57)', '57'],
                        [Lang.template.item_pitch_ra_sharp + ' (58)', '58'],
                        [Lang.template.item_pitch_si + ' (59)', '59'],

                        [Lang.template.item_pitch_do + ' (60)', '60'],
                        [Lang.template.item_pitch_do_sharp + ' (61)', '61'],
                        [Lang.template.item_pitch_re + ' (62)', '62'],
                        [Lang.template.item_pitch_re_sharp + ' (63)', '63'],
                        [Lang.template.item_pitch_mi + ' (64)', '64'],
                        [Lang.template.item_pitch_fa + ' (65)', '65'],
                        [Lang.template.item_pitch_fa_sharp + ' (66)', '66'],
                        [Lang.template.item_pitch_sol + ' (67)', '67'],
                        [Lang.template.item_pitch_sol_sharp + ' (68)', '68'],
                        [Lang.template.item_pitch_ra + ' (69)', '69'],
                        [Lang.template.item_pitch_ra_sharp + ' (70)', '70'],
                        [Lang.template.item_pitch_si + ' (71)', '71'],

                        [Lang.template.item_pitch_do + ' (72)', '72'],
                        [Lang.template.item_pitch_do_sharp + ' (73)', '73'],
                        [Lang.template.item_pitch_re + ' (74)', '74'],
                        [Lang.template.item_pitch_re_sharp + ' (75)', '75'],
                        [Lang.template.item_pitch_mi + ' (76)', '76'],
                        [Lang.template.item_pitch_fa + ' (77)', '77'],
                        [Lang.template.item_pitch_fa_sharp + ' (78)', '78'],
                        [Lang.template.item_pitch_sol + ' (79)', '79'],
                        [Lang.template.item_pitch_sol_sharp + ' (80)', '80'],
                        [Lang.template.item_pitch_ra + ' (81)', '81'],
                        [Lang.template.item_pitch_ra_sharp + ' (82)', '82'],
                        [Lang.template.item_pitch_si + ' (83)', '83'],
                    ],
                    value: '60',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                const value = script.getField('PARAM0');
                return value;
            }
        },
        technic_dropdown_melody: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic_string_field',
            statements: [],
            template: '%1',
            params: [
                {
                    type: 'Dropdown',
                    options: [
                        [Lang.template.item_melody_start, '1'],
                        [Lang.template.item_melody_end, '2'],
                        [Lang.template.item_melody_level_up, '3'],
                        [Lang.template.item_melody_level_down, '4'],
                    ],
                    value: '1',
                    fontSize: 11,
                    bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            def: {
                params: [
                    null
                ],
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            events: {},
            func: function(sprite, script) {
                return script.getField('PARAM0');
            }
        },
        ///========================================================================================
        /// Event block
        ///========================================================================================
        // 리모컨 R_1 키를 눌렀을 때
        technic_remote_event: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_event',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/start_icon_hardware.svg',
                    size: 14,
                    position: {
                        x: 0,
                        y: -2,
                    },
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            events: {},
            def: {
                params: [
                    null,
                    {
                        type: 'technic_dropdown_remote',
                    },
                ],
                type: 'technic_remote_event',
            },
            paramsKeyMap: {
                PARAM1: 1,
            },
            class: 'event',
            isNotFor: ['ProboTechnic'],
            event: 'event_remote_input',
            func(sprite, script) {
                const btn = Entry.ProboTechnic.convertDropdownRemote(
                    script.getStringValue('PARAM1')
                );
                if (Entry.hw.portData.InputData.Remote[btn] == 1 ) {
                    return script.callReturn();
                }
                return this.die();
            },
        },        
        // 디지털 입력 A1 이(가) 들어왔을 때
        technic_digital_event: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_event',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/start_icon_hardware.svg',
                    size: 14,
                    position: {
                        x: 0,
                        y: -2,
                    },
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            events: {},
            def: {
                params: [
                    null,
                    {
                        type: 'technic_dropdown_digital',
                    },
                ],
                type: 'technic_digital_event',
            },
            paramsKeyMap: {
                PARAM1: 1,
            },
            class: 'event',
            isNotFor: ['ProboTechnic'],
            event: 'event_digital_input',
            func(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownDigital(
                    script.getStringValue('PARAM1')
                );
                switch(port) {
                    case 'FEA1':
                    case 'FEA2':
                    case 'FEA3':
                    case 'FEA4':
                    case 'REA1':
                    case 'REA2':
                    case 'REA3':
                    case 'REA4':
                    case 'BEA1':
                    case 'BEA2':
                    case 'BEA3':
                    case 'BEA4':
                        if (Entry.hw.portData.InputData.Digital[port] == 1) {
                            if (Entry.ProboTechnic.EdgeFlag[port] == 0) {
                                Entry.ProboTechnic.EdgeFlag[port] = 1;
                                return script.callReturn();
                            }
                        } else {
                            Entry.ProboTechnic.EdgeFlag[port] = 0;
                        }
                        break;
                    default:
                        if (Entry.hw.portData.InputData.Digital[port] == 1 ) {
                            return script.callReturn();
                        }
                        break;
                }

                return this.die();
            },
        },
        ///========================================================================================
        /// Input block
        ///========================================================================================
        // 입력포트 AA1 을(를) 스위치 센서로 설정
        technic_senser_setting: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'technic_dropdown_sensor_1',
                    },
                    null,
                ],
                type: 'technic_senser_setting',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'setting',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;
                    const port = Entry.ProboTechnic.convertDropdownAnalog(
                        script.getStringValue('PARAM0')
                    );
                    const sensor = Entry.ProboTechnic.convertDropdownSensor1(
                        script.getStringValue('PARAM1')
                    );
                    let index = 0;
                    switch (port) {
                        case 'AA1':
                            index = 0;
                            break;
                        case 'AA2':
                            index = 1;
                            break;
                        case 'AA3':
                            index = 2;
                            break;
                        case 'AA4':
                            index = 3;
                            break;
                    }

                    let Aset = [0, 0, 0, 0];
                    let value = [0, 0, 0, 0];

                    Aset[index] = sensor;
                    for (let i = 0; i < 4; i++) {
                        switch (Aset[i]) {
                            case 1: // 스위치
                            case 2: // 적외선
                            case 3: // 자석
                            case 16: // 분배기
                                value[i] = 1;
                                break;
                            case 4: // 회전
                            case 9: // 조도
                            case 7: // 초음파
                                value[i] = 2;
                                break;
                            case 10: // 소리
                                value[i] = 3;
                                break;                                
                            case 11: // 기울기
                                value[i] = 4;
                                break;
                            case 12: // 압력
                                value[i] = 5;
                                break;
                            case 8: // 심박
                                value[i] = 6;
                                break;
                            case 5: // 컬러
                                value[i] = 7;
                                break;
                            case 6: // 가속도
                                value[i] = 8;
                                break;
                            case 14: // 나침반
                            case 15: // 3가속
                                value[i] = 9;
                                break;
                            case 13: // 멀티터치(멀티키)
                                value[i] = 11;
                                break;
                        }
                    }

                    Entry.ProboTechnic.SenserSet.AA1 = value[0];
                    Entry.ProboTechnic.SenserSet.AA2 = value[1];
                    Entry.ProboTechnic.SenserSet.AA3 = value[2];
                    Entry.ProboTechnic.SenserSet.AA4 = value[3];

                    Entry.hw.sendQueue['ASET2'] = (value[0] << 4) | value[1];
                    Entry.hw.sendQueue['ASET1'] = (value[2] << 4) | value[3];

                    let fps = Entry.FPS || 60;
                    let timeValue = 60 / fps * 200; // 0.2초

                    let blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }

            },
        },
        // 리모컨 입력 R_1
        technic_remote_input: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_remote',
                    },
                ],
                type: 'technic_remote_input',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const btn = Entry.ProboTechnic.convertDropdownRemote(
                    script.getStringValue('PARAM0')
                );
                return Entry.hw.portData.InputData.Remote[btn] == 1 ? true : false;
            },
        },
        // 디지털 입력 A1
        technic_digital_input: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_digital',
                    },
                ],
                type: 'technic_digital_input',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownDigital(
                    script.getStringValue('PARAM0')
                );                
                let rt = false;
                switch(port) {
                    case 'FEA1':
                    case 'FEA2':
                    case 'FEA3':
                    case 'FEA4':
                    case 'REA1':
                    case 'REA2':
                    case 'REA3':
                    case 'REA4':
                    case 'BEA1':
                    case 'BEA2':
                    case 'BEA3':
                    case 'BEA4':
                        if (Entry.hw.portData.InputData.Digital[port] == 1) {
                            if (Entry.ProboTechnic.EdgeFlag[port] == 0) {
                                Entry.ProboTechnic.EdgeFlag[port] = 1;
                                rt = true;
                            }
                        } else {
                            Entry.ProboTechnic.EdgeFlag[port] = 0;
                        }
                        break;
                    default:
                        rt = Entry.hw.portData.InputData.Digital[port] == 1 ? true : false;
                        break;
                }
                return rt;
            },
        },
        // 아날로그 입력 AA1
        technic_analog_input: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                ],
                type: 'technic_analog_input',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                let value = Entry.ProboTechnic.SenserSet[port] == 5
                    ? 255 - Entry.hw.portData.InputData.Analog[port]
                    : Entry.hw.portData.InputData.Analog[port];
                return value;
            },
        },
        // 3가속도 AA1 의 X축
        technic_3axis_acceler_x: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                ],
                type: 'technic_3axis_acceler_x',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const axis = Entry.ProboTechnic.convertDropdownAxis(
                    script.getStringValue('PARAM0'),
                    "X"
                );
                let value = (Entry.hw.portData.InputData.Acceler[axis]);
                if (value & 0x80) {
                    value = (value - 255);
                }
                return Number(value / 10).toFixed(1);
            },
        },
        // 3가속도 AA1의 Y축
        technic_3axis_acceler_y: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                ],
                type: 'technic_3axis_acceler_y',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const axis = Entry.ProboTechnic.convertDropdownAxis(
                    script.getStringValue('PARAM0'),
                    "Y"
                );
                let value = (Entry.hw.portData.InputData.Acceler[axis]);
                if (value & 0x80) {
                    value = (value - 255);
                }
                return Number(value / 10).toFixed(1);
            },
        },
        // 3가속도 AA1 의 Z축
        technic_3axis_acceler_z: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                ],
                type: 'technic_3axis_acceler_z',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const axis = Entry.ProboTechnic.convertDropdownAxis(
                    script.getStringValue('PARAM0'),
                    "Z"
                );
                let value = (Entry.hw.portData.InputData.Acceler[axis]);
                if (value & 0x80) {
                    value = (value - 255);
                }
                return Number(value / 10).toFixed(1);
            },
        },
        // AA1의 0 ~ 255 값을 0 ~ 100 (으)로 변환
        technic_value_mapping: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'number',
                        params: [ 0 ],
                    },
                    {
                        type: 'number',
                        params: [ 255 ],
                    },
                    {
                        type: 'number',
                        params: [ 0 ],
                    },
                    {
                        type: 'number',
                        params: [ 100 ],
                    },
                ],
                type: 'technic_value_mapping',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
                PARAM2: 2,
                PARAM3: 3,
                PARAM4: 4,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                const source1 = script.getNumberValue('PARAM1');
                const source2 = script.getNumberValue('PARAM2');
                const target1 = script.getNumberValue('PARAM3');
                const target2 = script.getNumberValue('PARAM4');

                // Port 라는 key값을 가진 정보를 읽는다.
                let data = 0;
                if (Entry.ProboTechnic.SenserSet[port] == 5) {
                    data = 255 - Entry.hw.portData.InputData.Analog[port];
                } else {
                    data = Entry.hw.portData.InputData.Analog[port];
                }
                let value = 0;
                let rate = (data - source1) / (source2 - source1);
                let num = 0;

                if (target1 < target2) {
                    value = (target2 - target1) * rate;
                    num = value % 1;
                    if (num < 0.5) {
                        value -= num;
                    }
                    else {
                        value += 1 - num;
                    }
                    value = target1 + value;
                    if (value < target1) {
                        value = target1;
                    } else if (value > target2) {
                        value = target2;
                    }
                } else {
                    value = (target1 - target2) * rate;
                    num = value % 1;
                    if (num < 0.5) {
                        value -= num;
                    } else {
                        value += 1 - num;
                    }
                    value = target1 - value;
                    if (value > target1) {
                        value = target1;
                    } else if (value < target2) {
                        value = target2;
                    }
                }
                return value;
            },
        },
        // 컬러센서 AA1 이(가) 빨간색 색인가?
        technic_color_input_b: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'technic_dropdown_color_1',
                    },
                ],
                type: 'technic_color_input_b',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                const target = Entry.ProboTechnic.convertDropdownColor1(
                    script.getStringValue('PARAM1')
                );
                const value = Entry.hw.portData.InputData.Analog[port];
                const color = Entry.ProboTechnic.Color;
                return color[target][0] <= value && value <= color[target][1];
            },
        },
        // 컬러센서 AA1 의 색상
        technic_color_input_r: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                    defaultType: 'number',
                },
            ],
            def: {
                params: [                    
                    {
                        type: 'technic_dropdown_analog',
                    },
                ],
                type: 'technic_color_input_r',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                const value = Entry.hw.portData.InputData.Analog[port];
                const color = Entry.ProboTechnic.Color;
                let colorName = '';
                for (let i = 0; i < 6; i++) {
                    if (color[i][0] <= value && value <= color[i][1]) {
                        switch (i) {
                            case 0:
                                colorName = Lang.template.item_color_red;
                                break;
                            case 1:
                                colorName = Lang.template.item_color_green;
                                break;
                            case 2:
                                colorName = Lang.template.item_color_blue;
                                break;
                            case 3:
                                colorName = Lang.template.item_color_yellow;
                                break;
                            case 4:
                                colorName = Lang.template.item_color_black;
                                break;
                            case 5:
                                colorName = Lang.template.item_color_white;
                                break;
                        }
                    }
                }
                return colorName;
            },
        },
        // 무한회전 센서 AA1 을 0 값으로 정하기
        technic_infinite_setting: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                }
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_sensor_2',
                    },
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'number',
                        params: [ 0 ],
                    },
                    null
                ],
                type: 'technic_infinite_setting',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
                PARAM2: 2,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM1')
                );
                let value = script.getNumberValue('PARAM2');
                let count = 0;
                
                if (value != 0) {
                    count = Number(value / 255).toFixed(0);
                    value = value % 255;
                } else {
                    value = 0;
                    count = 0;
                }
                
                Entry.ProboTechnic.Infinite_Buff[port] = Entry.hw.portData.InputData.Analog[port];
                Entry.ProboTechnic.Infinite_Start[port] = Entry.hw.portData.InputData.Analog[port]-value;
                Entry.ProboTechnic.Infinite_Count[port] = count;

                return script.callReturn();
            },
        },
        // 무한회전 센서 AA1 지름 53.5 의 mm 값
        technic_infinite_mm_diameter: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_sensor_2',
                    },
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'number',
                        params: [ 53.5 ],
                    },
                ],
                type: 'technic_infinite_mm_diameter',
            },
            paramsKeyMap: {
                PARAM1: 1,
                PARAM2: 2,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM1')
                );
                const diameter = script.getNumberValue('PARAM2');
                let value = Entry.hw.portData.InputData.Analog[port];

                if (value < Entry.ProboTechnic.Infinite_Buff[port] - 150) {

                    Entry.ProboTechnic.Infinite_Count[port]++;
                } else if (value > Entry.ProboTechnic.Infinite_Buff[port] + 150) {
                    Entry.ProboTechnic.Infinite_Count[port]--;
                }                    
                Entry.ProboTechnic.Infinite_Buff[port] = value;
                value = (Entry.ProboTechnic.Infinite_Buff[port] - Entry.ProboTechnic.Infinite_Start[port]) + (Entry.ProboTechnic.Infinite_Count[port] * 255);

                return Number(
                    2 *
                    3.141592 *
                    (diameter / 2) /
                    255 *
                    value
                ).toFixed(3);
            },
        },
        // 무한회전 센서 AA1 의 값
        technic_infinite_transform_input: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [                    
                    {
                        type: 'technic_dropdown_sensor_2',
                    },
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'technic_dropdown_sensor_transfer',
                    },
                ],
                type: 'technic_infinite_transform_input',
            },
            paramsKeyMap: {
                PARAM1: 1,
                PARAM2: 2,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM1')
                );
                const select = Entry.ProboTechnic.convertDropdownSensorTransfer(
                    script.getStringValue('PARAM2')
                );
                let value = Entry.hw.portData.InputData.Analog[port];

                if (value < (Entry.ProboTechnic.Infinite_Buff[port] - 150)) {
                    Entry.ProboTechnic.Infinite_Count[port]++;
                } else if (value > (Entry.ProboTechnic.Infinite_Buff[port] + 150)) {
                    Entry.ProboTechnic.Infinite_Count[port]--;
                }
                Entry.ProboTechnic.Infinite_Buff[port] = value;
                value = (Entry.ProboTechnic.Infinite_Buff[port] - Entry.ProboTechnic.Infinite_Start[port]) + (Entry.ProboTechnic.Infinite_Count[port] * 255);

                switch (select) {
                    case 2:
                        if (value > 0) {
                            return Math.floor((value%255) * 1.41732);
                        } else {
                            return Math.ceil((value%255) * 1.41732);
                        }                            
                    case 3:
                        return Number((360/255) * Entry.hw.portData.InputData.Analog[port]).toFixed(0);
                    case 4:
                        if (value > 0) {
                            return Math.floor(value / 255);
                        } else {
                            return Math.ceil(value / 255);
                        }
                    default:
                        return value;
                }
            },
        },
        // 멀티키 센서 AA1 의 키1
        technic_multi_sensor: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'technic_dropdown_key',
                    },
                ],
                type: 'technic_multi_sensor',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                const key = Entry.ProboTechnic.convertDropdownKey(
                    script.getStringValue('PARAM1')
                );
                const value = Entry.hw.portData.InputData.Analog[port] & (0x1 << key)? 1 : 0;
                return value;
            },
        },
        // 분배스위치 센서 AA1의 키1
        technic_multi_switch: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_boolean_field',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
            ],
            def: {
                params: [
                    {
                        type: 'technic_dropdown_analog',
                    },
                    {
                        type: 'technic_dropdown_key',
                    },
                ],
                type: 'technic_multi_switch',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownAnalog(
                    script.getStringValue('PARAM0')
                );
                const key = Entry.ProboTechnic.convertDropdownKey(
                    script.getStringValue('PARAM1')
                );
                const analog = Entry.hw.portData.InputData.Analog[port];
                let  value = -1;
                if (1 <= analog && analog <= 19) {
                    value = 0;
                } else if (26 <= analog && analog <= 44) {
                    value = 1;
                } else if (53 <= analog && analog <= 77) {
                    value = 2;
                } else if (83 <= analog && analog <= 101) {
                    value = 3;
                } else if (107 <= analog && analog <= 125) {
                    value = 4;
                } else if (139 <= analog && analog <= 157) {
                    value = 5;
                } else if (160 <= analog && analog <= 178) {
                    value = 6;
                } else if (191 <= analog && analog <= 209) {
                    value = 7;
                }
                return key === value ? 1 : 0;
            },
        },
        technic_eeprom_buffset: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [{ type: 'number', params: ['0'] }, null],
                type: 'technic_eeprom_buffset',
            },
            paramsKeyMap: {
                ADDRESS: 0,
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const address = script.getNumberValue('ADDRESS', script);
                if (!script.isStart) {
                    Entry.ProboTechnic.EEPROM.EEPROM_Count = Entry.hw.portData.InputData.EEPROM.EC;
                    Entry.hw.sendQueue['EEPR4'] = 0x40;
                    Entry.hw.sendQueue['EEPR3'] = address;

                    script.isStart = true;
                    script.timeFlag = 1;
                    var timeValue = 0.05;
                    var fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;

                    var blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );

                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    Entry.ProboTechnic.EEPROM.EEPROM_Buff =
                        (Entry.hw.portData.InputData.EEPROM.EEPR2 << 8) +
                        Entry.hw.portData.InputData.EEPROM.EEPR1;
                    Entry.hw.sendQueue['EEPR4'] = 0;

                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
        // EEPROM 주소의 값
        technic_eeprom_address_value: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic_string_field',
            def: {
                type: 'technic_eeprom_address_value',
            },
            class: 'input',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                var value = 0;
                const count = Entry.ProboTechnic.EEPROM.EEPROM_Count;
                if (Entry.hw.portData.InputData.EEPROM.EC != count) {
                    value = Entry.ProboTechnic.EEPROM.EEPROM_Buff;
                }
                return value;
            },
        },
        ///========================================================================================
        /// output block
        ///========================================================================================
        // DC 모터 1을(를) 0 속도로 회전
        technic_dc_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_dc_1_all',
                    },
                    {
                        type: 'technic_dropdown_velocity',
                    },
                    null,
                ],
                type: 'technic_dc_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const motor = Entry.ProboTechnic.convertDropdownDC(
                    script.getStringValue('PARAM0')
                ); 
                const value = script.getNumberValue('PARAM1');
                switch (motor) {
                    case 'DC5':
                        Entry.hw.sendQueue['DC1'] = value;
                        Entry.hw.sendQueue['DC2'] = value;
                        break;
                    case 'DC6':
                        Entry.hw.sendQueue['DC3'] = value;
                        Entry.hw.sendQueue['DC4'] = value;
                        break;
                    case 'DC7':
                        Entry.hw.sendQueue['DC1'] = value;
                        Entry.hw.sendQueue['DC2'] = value;
                        Entry.hw.sendQueue['DC3'] = value;
                        Entry.hw.sendQueue['DC4'] = value;
                        break;
                    default:
                        Entry.hw.sendQueue[motor] = value;
                        break;
                }
                return script.callReturn();
            },
        },
        // 서보모터 1 의 위치를 1 로 이동 
        technic_servo_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    {
                        type: 'technic_dropdown_servo_position',
                    },
                    null,
                ],
                type: 'technic_servo_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const servo = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                let value = script.getNumberValue('PARAM1');
                if (value < 1) {
                    value = 0;
                } else if (value > 100) {
                    value = 100;
                }

                Entry.hw.sendQueue[servo] = value;
                return script.callReturn();
            },
        },
        // S 모터 1 을(를) 0 속도로 회전
        technic_s_dc_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    {
                        type: 'technic_dropdown_velocity',
                    },
                    null,
                ],
                type: 'technic_s_dc_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const motor = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                let value = script.getNumberValue('PARAM1');

                if (value > 20) {
                    value = 20;
                } else if (value < -20) {
                    value = -20;
                }
                value += 148;

                switch (motor) {
                    case 'Servo5':
                        Entry.hw.sendQueue['Servo1'] = value;
                        Entry.hw.sendQueue['Servo2'] = value;
                        break;
                    case 'Servo6':
                        Entry.hw.sendQueue['Servo3'] = value;
                        Entry.hw.sendQueue['Servo4'] = value;
                        break;
                    default:
                        Entry.hw.sendQueue[motor] = value;
                        break;
                }
                return script.callReturn();
            },
        },
        // 출력핀 1 을(를) 켜기
        technic_port_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_port_1_4',
                    },
                    {
                        type: 'technic_dropdown_on_off',
                    },
                    null
                ],
                type: 'technic_port_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const motor = Entry.ProboTechnic.convertDropdownPort(
                    script.getStringValue('PARAM0')
                );
                const value = Entry.ProboTechnic.convertDropdownOnOff(
                    script.getStringValue('PARAM1')
                );
                Entry.hw.sendQueue[motor] = value;
                return script.callReturn();
            },
        },
        // 도(60) 을(를) 4분 음표로 연주하기
        technic_melody_note_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_pitch',
                    },
                    {
                        type: 'technic_dropdown_note',
                    },
                    null
                ],
                type: 'technic_melody_note_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;
                    const pitch = Entry.ProboTechnic.convertDropdownPitch(
                        script.getNumberValue('PARAM0')
                    );
                    const note = Entry.ProboTechnic.convertDropdownNote(
                        script.getStringValue('PARAM1')
                    );
                    
                    let timeValue = Entry.ProboTechnic.Note[note];

                    Entry.hw.sendQueue['MEL2'] = pitch >> 8;
                    Entry.hw.sendQueue['MEL1'] = pitch;

                    let fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue;

                    let blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    Entry.hw.sendQueue['MEL2'] = 0;
                    Entry.hw.sendQueue['MEL1'] = 0;

                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
        // 도(60) 을(를) 0.5 초 동안 연주하기
        technic_melody_sec_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_pitch',
                    },
                    {
                        type: 'technic_dropdown_time_1',
                    },
                    null
                ],
                type: 'technic_melody_sec_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;
                    const pitch = Entry.ProboTechnic.convertDropdownPitch(
                        script.getNumberValue('PARAM0')
                    );
                    let timeValue = script.getNumberValue('PARAM1');
                   
                    Entry.hw.sendQueue['MEL2'] = pitch >> 8;
                    Entry.hw.sendQueue['MEL1'] = pitch;

                    let fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;
                    let blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    Entry.hw.sendQueue['MEL2'] = 0;
                    Entry.hw.sendQueue['MEL1'] = 0;

                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
        // 도(60) 을(를) 연주하기
        technic_melody_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_pitch',
                    },
                    null
                ],
                type: 'technic_melody_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const pitch = Entry.ProboTechnic.convertDropdownPitch(
                    script.getNumberValue('PARAM0')
                );

                Entry.hw.sendQueue['MEL2'] = pitch >> 8;
                Entry.hw.sendQueue['MEL1'] = pitch;
                return script.callReturn();
            },
        },
        // 35391 값을 0.5 초 동안 연주하기
        technic_value_sec_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    {
                        type: 'number',
                        params: [ 35391 ],
                    },
                    {
                        type: 'technic_dropdown_time_1',
                    },
                    null
                ],
                type: 'technic_value_sec_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                if (!script.isStart) {
                    script.isStart = true;
                    script.timeFlag = 1;

                    let melody = script.getNumberValue('PARAM0');
                    let timeValue = script.getNumberValue('PARAM1');

                    Entry.hw.sendQueue['MEL2'] = (melody >> 8) & 0xff;
                    Entry.hw.sendQueue['MEL1'] = melody & 0xff;

                    let fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;

                    let blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    Entry.hw.sendQueue['MEL2'] = 0;
                    Entry.hw.sendQueue['MEL1'] = 0;

                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
        // 35391 값을(를) 연주하기
        technic_value_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    {
                        type: 'number',
                        params: [ 35391 ],
                    },
                    null
                ],
                type: 'technic_value_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                let melody = script.getNumberValue('PARAM0');
                Entry.hw.sendQueue['MEL2'] = (melody >> 8) & 0xff;
                Entry.hw.sendQueue['MEL1'] = melody & 0xff;
                return script.callReturn();
            },
        },
        // 시작음 을(를) 1 초 간격으로 재생하기
        technic_melody_track_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_melody',
                    },
                    { 
                        type: 'technic_dropdown_time_2',
                    },
                    null
                ],
                type: 'technic_melody_track_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                function getTrackStep(track,script){
                    if(!script.isStart){
                        script.isStart = true;
                        script.trackStep = 0;
                    }
                    else {
                        script.trackStep++;
                    }
                    let timeValue = script.getNumberValue('PARAM1');
                    script.timeFlag = 1;
                    let melody = Entry.ProboTechnic.Track[track][script.trackStep];
                    Entry.hw.sendQueue['MEL2'] = (melody >> 8) & 0xff;
                    Entry.hw.sendQueue['MEL1'] = melody & 0xff;

                    let fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;

                    Entry.TimeWaitManager.add(
                        script.block.id,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                }
                const TR = Entry.ProboConnect.convertDropdownMelody(
                    script.getStringValue('PARAM0')
                );
                if (!script.isStart) {
                    switch(TR) {
                        case 0 :
                            script.maxStep = 6;
                            break;
                        case 1 :
                            script.maxStep = 7;
                            break;
                        case 2 :
                            script.maxStep = 3;
                            break;
                        case 3 :
                            script.maxStep = 3;
                            break;
                    }
                    getTrackStep(TR,script);
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else if (script.trackStep < script.maxStep){
                    getTrackStep(TR,script);
                    return script;
                } else {
                    Entry.hw.sendQueue['MEL2'] = 0;
                    Entry.hw.sendQueue['MEL1'] = 0;

                    delete script.trackStep;
                    delete script.maxStep;
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
        // 멜로디 중지
        technic_melody_off: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    null
                ],
                type: 'technic_melody_off',
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                Entry.hw.sendQueue['MEL2'] = 0;
                Entry.hw.sendQueue['MEL1'] = 0;
                return script.callReturn();
            },
        },
        // RGB LED 1 을(를) 빨간색 으로 켜기
        technic_rgbled_on_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    {
                        type: 'technic_dropdown_color_2',
                    },
                    null
                ],
                type: 'technic_rgbled_on_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                const color = Entry.ProboTechnic.convertDropdownColor2(
                    script.getStringValue('PARAM1')
                );
                Entry.hw.sendQueue[port] = color;
                return script.callReturn();
            },
        },    
        // RGB LED 을(를) 끄기    
        technic_rgbled_off_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    null
                ],
                type: 'technic_rgbled_off_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                Entry.hw.sendQueue[port] = 0;
            },
        },
        // RGB LED 1 빨간색으로 0.5초 간격
        technic_rgbled_flashing_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    { 
                        type: 'technic_dropdown_color_2',
                    },
                    { 
                        type: 'technic_dropdown_time_3',
                    },
                    null
                ],
                type: 'technic_rgbled_flashing_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
                PARAM2: 2,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                const color = Entry.ProboTechnic.convertDropdownColor2(
                    script.getStringValue('PARAM1')
                );
                const sec = script.getNumberValue('PARAM2');
                let value = 0;
                switch (sec) {
                    case 0.05:
                        value = color + 0;
                        break;
                    case 0.1:
                        value = color + 1;
                        break;
                    case 0.2:
                        value = color + 2;
                        break;                    
                    case 0.5:
                        value = color + 3;
                        break;                        
                    case 1:
                        value = color + 4;
                        break;
                }
                Entry.hw.sendQueue[port] = value;
                return script.callReturn();
            },
        },
        // RGB LED 1을(를) 빨간색으로 디밍
        technic_rgbled_dimming_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'technic_dropdown_servo_1_4',
                    },
                    { 
                        type: 'technic_dropdown_color_2',
                    },
                    null
                ],
                type: 'technic_rgbled_dimming_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const port = Entry.ProboTechnic.convertDropdownServo(
                    script.getStringValue('PARAM0')
                );
                let color = 0;
                switch (script.getStringValue('PARAM1')) {
                    case '1':
                        color = 90;
                        break;
                    case '2':
                        color = 92;
                        break;
                    case '3':
                        color = 94;
                        break;
                    case '4':
                        color = 93;
                        break;
                    case '5':
                        color = 95;
                        break;
                    case '6':
                        color = 91;
                        break;
                    case '7':
                        color = 96;
                        break;
                }
                Entry.hw.sendQueue[port] = color;
                return script.callReturn();
            },
        },
        // FND를 0 (으)로 설정
        technic_fnd_output: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    {
                        type: 'number',
                        params: [ 0 ],
                    },
                    null
                ],
                type: 'technic_fnd_output',
            },
            paramsKeyMap: {
                PARAM0: 0,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const fnd = script.getNumberValue('PARAM0');
                Entry.hw.sendQueue['FND'] = fnd;
                return script.callReturn();
            },
        },
        // FND 끄기
        technic_fnd_off: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    null
                ],
                type: 'technic_fnd_off',
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                Entry.hw.sendQueue['FND'] = 100;
                return script.callReturn();
            },
        },
        // EEPROM 0 주소에 0 값 설정하기
        technic_eeprom_write: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor: '#fff',
            skeleton: 'basic',
            params: [
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Block',
                    accept: 'string',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 12,
                },
            ],
            def: {
                params: [
                    { 
                        type: 'number',
                        params: [ 0 ]
                    },
                    {
                        type: 'number',
                        params: [ 0 ]
                    },
                    null,
                ],
                type: 'technic_eeprom_write',
            },
            paramsKeyMap: {
                PARAM0: 0,
                PARAM1: 1,
            },
            class: 'output',
            isNotFor: ['ProboTechnic'],
            func: function(sprite, script) {
                const address = script.getNumberValue('PARAM0');
                const value = script.getNumberValue('PARAM1');
                if (!script.isStart) {
                    Entry.hw.update();
                    Entry.hw.sendQueue['EEPR4'] = 0x80;
                    Entry.hw.sendQueue['EEPR3'] = address;
                    Entry.hw.sendQueue['EEPR2'] = (value >> 8) & 0xff;
                    Entry.hw.sendQueue['EEPR1'] = value & 0xff;
                    script.isStart = true;
                    script.timeFlag = 1;
                    let timeValue = 0.05;
                    let fps = Entry.FPS || 60;
                    timeValue = 60 / fps * timeValue * 1000;

                    let blockId = script.block.id;
                    Entry.TimeWaitManager.add(
                        blockId,
                        function() {
                            script.timeFlag = 0;
                        },
                        timeValue
                    );
                    return script;
                } else if (script.timeFlag == 1) {
                    return script;
                } else {
                    Entry.hw.update();
                    Entry.hw.sendQueue['EEPR4'] = 0x40;
                    Entry.hw.sendQueue['EEPR3'] = address;
                    Entry.hw.sendQueue['EEPR2'] = 0;
                    Entry.hw.sendQueue['EEPR1'] = 0;

                    setTimeout(function() {  
                        Entry.hw.update();                      
                        Entry.hw.sendQueue['EEPR4'] = 0;
                        Entry.hw.sendQueue['EEPR3'] = 0;
                        Entry.hw.sendQueue['EEPR2'] = 0;
                        Entry.hw.sendQueue['EEPR1'] = 0;
                    }, 100);
                    
                    delete script.timeFlag;
                    delete script.isStart;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
            },
        },
    };
};

module.exports = Entry.ProboTechnic;
