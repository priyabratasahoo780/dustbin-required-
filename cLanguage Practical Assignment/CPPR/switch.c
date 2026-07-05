#include <stdio.h>

int main() {

    int a = 20, b = 0;     // hardcoded numbers
    int op = 4;            // hardcoded operation code
                           // 1=Add, 2=Subtract, 3=Multiply, 4=Divide

    switch(op) {
        case 1:
            printf("Addition = %d\n", a + b);
            break;

        case 2:
            printf("Subtraction = %d\n", a - b);
            break;

        case 3:
            printf("Multiplication = %d\n", a * b);
            break;

        case 4:
            if (b != 0)
                printf("Division = %d\n", a / b);
            else
                printf("Error: Division by zero not allowed!\n");
            break;

        default:
            printf("Invalid Operation Code\n");
    }

    return 0;
}
