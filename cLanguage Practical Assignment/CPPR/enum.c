// // #include<stdio.h>
// // enum Day{
// //     M,
// //     T,
// //     W,
// //     Th,
// //     F,
// //     S,
// //     Su,
// // };
// // int main(){
// //     enum Day today;
// //     today = Su;
// //     if(today == S || today == Su){
// // printf("WeekEnd");
// //     }
// //     else{
// // printf("Weekday");
// //     }
// //         return 0;
// // }


// #include<stdio.h>
// enum Day{
//     M,
//     T,
//     W,
//     Th,
//     F,
//     S,
//     Su,
// };
// int main(){
//     enum Day today;
//     today = F;
//    switch(today){
//     case 0:
//     printf("Weekday");
//     break;
//      case 1:
//     printf("Weekday");
//     break;
//      case 2:
//     printf("Weekday");
//     break;
//      case 3:
//     printf("Weekday");
//     break;
//      case 4:
//     printf("Weekday");
//     break;
//      case 5:
//     printf("Weekend");
//     break;
//      case 6:
//     printf("Weekend");
//     break;
//     default:
//     printf("Invalid");
//    }
//         return 0;
// }

// #include <stdio.h>
// #include <math.h>

// int main() {
//     float a = 5.5, b = 2.0;
//     printf("Remainder = %.2f\n", fmod(a, b)); // ✅ 1.50
//     return 0;
// }
 #include <stdio.h>
 int main() {
int a = 5;
printf("%d \n", a++ + ++a);
  return 0;
 }
// Output may surprise beginners: "6 6"