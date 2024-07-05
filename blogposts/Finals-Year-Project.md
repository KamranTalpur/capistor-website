---
title: 'My Final Year Project: Laser Projector'
date: '2023-03-17'
---


Project was officially approved on march 19th 2024 by the comitte of physics department. I had the first meeting with my supervisor after a few days where he explained the experimental setup, our aim and the procedure we would follow. 

# Laser projector with 3 lasers (RGB) incident on an x-cube(dichroic) with galvanomirror
In an attempt to create multi colored beams of laser combined and then projected onto the screen with a galvanomirror and an stm32 microcontroller. This is the stm32 part where i'll be figuring out the firmware required to steer the combined resultant laser beam and changing colors as i please.

# NOTES STM Timer module 

Timer module in be in several different types 

1- timer mode 
TCNT register gets incremented by 1 after every clock cycle. the oscillating source goes through prescaler and then increments after every clock cycle. this mode can give an overflow interrupt when register is full. usually at 80Mhz and 1:1024 prescaler it's 0.89seconds. but if we want the interrupt to occure every 1 second.. we can use the preloader to not start the count from 0 but from some other value.

2- counter mode 
Instead of clock source can take any input and at rising or falling edge of signal the TCNT register increments by one. note that in this mode it also goes through the prescaler so we can set that to 1:1 to get real value


3- general timer module
all timer module consists of counter register, Auto-reload register with a preload register access and prescaler register.


# PWM Mode of timer module
In PWM mode, the timer module is clocked from an internal clock source and produces a digital waveform on the output channel pin called the PWM signal. By using output compare registers (OCR), the incrementing timer’s register value is constantly compared against this OCR register. When a match occurs the output pin state is flipped until the end of the period and the whole process is repeated.

The timer in PWM mode will produce a PWM signal at the specified frequency the user chose. The duty cycle is also programmatically controlled by its register. The PWM resolution is affected by the desired FPWM and other factors as we’ll see in the dedicated tutorials for PWM generation.

I'll be following "Discovering the STM32 Microcontroller" by 
Geoffrey Brown to get a better understanding of this controller.. too many concepts are flying right over my head as of right now. 

# Update Thu/27/June/2024 PWM working now
The pins are just outlets, the main work is done by the clock. I had to select a pin and see which timer it was attached to. these ones are all attached to timer 1 namely channel 1, 2, and 3. i enabled all of them one by one, chose the clock source as internal as the board i'm using does not have an external source. then selected following settings, note the prescaler and period value. that defined the frquency i'll get. the equation is something like (note you have to figure out which timer corresponds to which APB and use that speed instead of system clock incase its different.)

frquency = APB1 clock speed(not system) / ((Prescal + 1) * (period + 1))
in my case it was = 72 Mhz / (72*100) = 10 Khz
if want 1Khz signal then, only need to change Period. so equation becomes 

period +1 = APB1 clock / (frquency * (prescale +1))
so it should give me, 
period + 1 = 72 Mhz / (1Khz * (71+1)) 
period = 999 + 1 - 1 = 999

I chekced with an oscilloscope that it indeed was giving the desired freqency!

but i switched to stm32 to enjoy 16 bit PWM with possible values of 0-65573 yet i'm not sure if it generates the 1khz signal with 16 bit or not. let's find out. 

The formula with which to find resolution is as follows 

Resolution (R) = log(ARR (period) + 1)
so 
R = log(999 + 1)
R = 9.97, approximately 10 bits. which is still better than 8 bits
that
gave 256 possible values. but this will give 2^10 = 1024 discrete steps.. i wonder if there is a way to get to 16 bits while having the same frequency? my question is why would frequency of the signal matter while we are only looking at duty cycle? 


