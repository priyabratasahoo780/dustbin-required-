// #include<stdio.h>
// int main(){
//     int n = 16;
//     int m = n%2==0?10:20;
//     printf("%d",m);
//     return 0;
// }


#include<stdio.h>
int main(){
    int a = 160;
    int b = 20;
    int c = 100;
    int large = (a>b)?((a>c)?a:c):((b>c)?b:c);
    printf("%d",large);
    return 0;
}