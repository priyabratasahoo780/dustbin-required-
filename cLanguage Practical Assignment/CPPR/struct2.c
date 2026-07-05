#include<stdio.h>
struct student{
    int rollNo;
    char name[50];
    float marks;
};
int main(){
    struct student s[5];

    for(int i =0; i<5; i++){
        printf("\n Enter a student Details\n");

        printf("Enter a roll_no:");
        scanf("%d", &s[i].rollNo);
           printf("Enter a name:");
        scanf("%s", s[i].name);
           printf("Enter a marks:");
        scanf("%f", &s[i].rollNo);
    }
        printf("\nstudent Details\n");
         for(int i =0; i<5; i++){
        printf("Roll No:%d\n",s[i].rollNo);
        printf("Name:%s\n",s[i].name);
        printf("Marks:%.2f\n",s[i].marks);
         }
    return 0;
}