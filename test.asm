section .bss

section .data
	hello_world: db "Hello World", 10
	hello_worldLen: equ $-hello_world

section .text
	global_start


	_start:
		mov		rax,1			
		mov		rdi,1			
		mov		rsi,hello_world		
		mov		rdx,hello_worldLen	
		syscall					

		mov		rax,60			
		mov		rdi,0
		syscall	
