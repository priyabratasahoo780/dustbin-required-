#include <stdio.h>
int main() {
    int arra[5];
    printf("Enter 5 numbers:");
    for(int i=0; i<5; i++){
        scanf("%d\n",&arra[i]);
      printf("%d\n",arra[i]);
    }
     printf("Entered number is");
    for(int i=0; i<5; i++){
      printf("%d\n",arra[i]);
    }
    return 0;
}