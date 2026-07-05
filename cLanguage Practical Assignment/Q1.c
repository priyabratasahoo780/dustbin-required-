// Q1. Write a C program to print your name, age, and city using printf().

// #include<stdio.h>
// int main(){
//     char*name = "Priyabrata";
//     printf("%s\n",name);
//     int age = 19;
//     printf("%d\n",age);
//     char city[10] = "Surat"; 
//     printf("%s\n",city);
//     return 0;
// }

// output :
        //  Priyabrata
        //  19
          //Surat

 // q2. Write a program to take an integer input from the user and print the same value back.

//  #include<stdio.h>
// int main(){
//     int num;
//     printf("Enter a number:");
//     scanf("%d", &num); 
//     printf("%d\n",num);
//     return 0;
// }

// output:
//        Enter a number:10
//        10

// Q3. Write a program to declare one int, one float, and one char variable and print their sizes using sizeof().

// #include<stdio.h>
// int main(){
//    int myInt = 10;
//     float myFloat = 3.14;
//     char myChar = 'A';
//     printf("Size of int: %zu bytes\n", sizeof(myInt));
//     printf("Size of float: %zu bytes\n", sizeof(myFloat));
//     printf("Size of char: %zu byte\n", sizeof(myChar));
//     return 0;
// }

// output:
//       Size of int: 4 bytes
//       Size of float: 4 bytes
//       Size of char: 1 byte

// Q4. Write a program that takes two integers from the user and prints their sum.
 
// #include<stdio.h>
// int main(){
//    int a,b;
//    printf("Enter two number a & b:");
//    scanf("%d %d",&a,&b);
//    int sum = a + b;
//    printf("Sum = %d",sum);
//     return 0;
// }

// input:
//       3
//       2
//output:
 //      Sum = 5
       
// Q5. Write a program to check whether a number entered by the user is even or odd using the % operator.

// #include<stdio.h>
// int main(){
//     int num;
//     printf("Enter a number:");
//     scanf("%d",&num);
//     if(num%2==0){
//         printf("%d is Even",num);
//     }else{
//         printf("%d is Odd",num);
//     }
//     return 0;
// }

// input:
//       3
// output:
//        Odd


// Q6. Write a program to compare two integers entered by the user and print the larger one using if-else.

// #include<stdio.h>
// int main(){
//     int num1,num2;
//     printf("Enter two numbers:");
//     scanf("%d %d",&num1,&num2);
//     if(num1 > num2){
//         printf("%d is greater",num1);
//     }
//     else{
//         printf("%d is greater",num2);
//     }
//     return 0;
// }

//input:
 //     Enter two numbers:12
 //                       1
 //output:
//       12 is greater

// Q7. Write a program using a for loop to print numbers from 1 to 10.

// #include<stdio.h>
// int main(){
//     int i;
//     for(i = 1; i<=10; i++){
//         printf("%d\n",i);
//     }
//     return 0;
// }

// output:
//         1
//         2
//         3
//         4
//         5
//         6
//         7
//         8
//         9
//         10

// Q8. Write a program using a while loop to calculate the sum of the first 10 natural numbers.

// #include <stdio.h>
// int main() {
//    int n = 1;
//    int sum = 0;
//    while(n<=10){
//        sum = sum + n;
//        n++;
//    }
//    printf("%d", sum);
//     return 0;
// }

// Output :
//         55

// Q9. Write a program to take 5 integers into an array and print them.

// #include <stdio.h>
// int main() {
//    int arra[5] ={1,2,3,4,5};
//    for(int i=0; i<5; i++){
//       printf("%d\n",arra[i]);
//    }
//     return 0;
// }
// Output :
//         1
//         2
//         3
 //        4
//         5

// Q10. Write a program to find and print the sum of all elements in an integer array of size 5.


// #include <stdio.h>
// int main() {
//     int sum = 0;
//    int arra[5] ={1,2,3,4,5};
//    for(int i=0; i<5; i++){
//        sum = sum + arra[i];
//    }
//      printf("%d\n",sum);
//     return 0;
// }

// Output :
//         15

//Q11.  Write a program to input a string (one word) and print its length using strlen().

