#include <stdio.h>

struct Book {
    int id;
    char title[50];
    float price;
};

// Function to find the book with lowest price
struct Book findLowest(struct Book b[], int n) {
    int minIndex = 0;
    for(int i = 1; i < n; i++) {
        if(b[i].price < b[minIndex].price) {
            minIndex = i;
        }
    }
    return b[minIndex];
}

// Function to calculate average price
float getAverage(struct Book b[], int n) {
    float sum = 0;
    for(int i = 0; i < n; i++) {
        sum += b[i].price;
    }
    return sum / n;
}

int main() {

    // Predefined data
    struct Book books[5] = {
        {1, "C Programming", 450.50},
        {2, "Data Structures", 380.00},
        {3, "Operating System", 500.75},
        {4, "DBMS", 300.00},
        {5, "Computer Networks", 420.25}
    };

    int n = 5;

    // Find lowest price book
    struct Book lowest = findLowest(books, n);

    printf("Book with Lowest Price:\n");
    printf("ID: %d\nTitle: %s\nPrice: %.2f\n\n", lowest.id, lowest.title, lowest.price);

    // Find average price
    float avg = getAverage(books, n);
    printf("Average Price = %.2f\n", avg);

    // Print books whose price is above average
    printf("\nBooks with price ABOVE average:\n");
    for(int i = 0; i < n; i++) {
        if(books[i].price > avg) {
            printf("ID: %d  Title: %s  Price: %.2f\n",
                    books[i].id, books[i].title, books[i].price);
        }
    }

    return 0;
}
