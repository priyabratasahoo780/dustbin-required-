#include<stdio.h>
struct book {
    char title[30];
    char author[30];
    float price;
};
 int main(){
    struct book s = {"w","as",12.34};
    // printf("Enter a title of a book:");
    // scanf("%s", s.title);
    //  printf("Enter a author of a book:");
    // scanf("%s", s.author);
    //  printf("Enter a price of a book:");
    // scanf("%f", &s.price);
    printf("\n Details Books:\n");
    printf("title of a book: %s\n", s.title);
     printf("author of a book:%s\n", s.author);
     printf("price of a book:%.2f\n",s.price);
    return 0;
}