#include <stdio.h>
int global = 42;  // defined here

void show() {
    printf("Global in file1.c = %d\n", global);
}