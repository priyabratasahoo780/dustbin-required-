#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int rollNo;
    float marks1, marks2, marks3;
    float totalMarks;

public:
    void inputDetails() {
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter roll number: ";
        cin >> rollNo;
        cout << "Enter marks in subject 1: ";
        cin >> marks1;
        cout << "Enter marks in subject 2: ";
        cin >> marks2;
        cout << "Enter marks in subject 3: ";
        cin >> marks3;
        totalMarks = marks1 + marks2 + marks3;
    }

    void displayDetails() {
        cout << "\n--- Student Details ---" << endl;
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
        cout << "Marks 1: " << marks1 << endl;
        cout << "Marks 2: " << marks2 << endl;
        cout << "Marks 3: " << marks3 << endl;
        cout << "Total Marks: " << totalMarks << endl;
    }
};

int main() {
    Student students[3];

    cout << "Enter details for 3 students:\n" << endl;
    for (int i = 0; i < 3; i++) {
        cout << "Student " << i + 1 << ":" << endl;
        students[i].inputDetails();
    }

    cout << "\n\n=== All Students Details ===" << endl;
    for (int i = 0; i < 3; i++) {
        students[i].displayDetails();
    }

    return 0;
}

