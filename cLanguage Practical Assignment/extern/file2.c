#include <stdio.h>
extern int global;   // declare, not define

int main() {
    printf("Global in file2.c = %d\n", global);
    return 0;
}