// Static Object Counter
// Employee class: private string name, public constructor increments static int totalEmployees and sets name. Static getTotal() returns count. Main: create 4 employees, print total=4.
//


#include<iostream>
#include<string>
using namespace std;

class Employee{
    private:
    string name;
    static int totalEmployees;
    public:
    Employee(string n){
        name = n;
        totalEmployees++;
    }
    static int getTotal(){
      return totalEmployees;
    } 
};
  int Employee::totalEmployees = 0;
int main(){
Employee e1("A");
    Employee e2("B");
    Employee e3("C");
    Employee e4("D");
    cout << "Total Employees = " << Employee::getTotal() << endl;
    return 0;
}


































// #include <iostream>
// #include <string>
// using namespace std;

// class Employee {
// private:
//     string name;
//     static int totalEmployee;

// public:
//     Employee(string n) {
//         name = n;
//         totalEmployee++;
//     }

//     static int getTotal() {
//         return totalEmployee;
//     }
// };

// int Employee::totalEmployee = 0;

// int main() {
//     Employee e1("A");
//     Employee e2("B");
//     Employee e3("C");
//     Employee e4("D");

//     cout << "Total Employees = " << Employee::getTotal() << endl;

//     return 0;
// }
