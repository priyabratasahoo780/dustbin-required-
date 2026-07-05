#include<iostream>
#include<string>
using namespace std;

template<class T1, class T2>



// void add(T1 a, T2 b){
//      cout << a+b << endl;
// }

class Pair{
    
    public:
      
      T1 first;
      T2 second;
      
      Pair(T1 a, T2 b){
          first = a;
          second = b;
      }
      
      void display(){
          cout << "First value is -> " << first << " and Second value is-> " << second << endl;
      }
    
};


// void add3(string a,  char b){
//     cout << a+b<<endl;
// }

// void add2(char a,  char b){
//     cout << a+b<<endl;
// }

// void add1(int a,  float b){
//     cout << a+b<<endl;
// }

// void add(int a,  int b){
//     cout << a+b<<endl;
// }

int main(){
    
    // map<int, string> m1();
    Pair<string, char>p1("Samir", 'G');
    p1.display();
    
    // add(10, 20);
    // add(10, 56.3);
    // add(23.678, 34.2);
    // add("HII ", '!');
    return 0;
}



// #include <iostream>
// #include <vector>

// int main() {
//     // Declaration and Initialization
//     std::vector<int> myVector; // Empty vector
//     std::vector<int> otherVector = {1, 2, 3, 4, 5}; // Initializer list

//     // Adding elements
//     myVector.push_back(10); // Adds 10 to the end
//     myVector.push_back(20);
//     myVector.push_back(30);

//     // Accessing elements
//     std::cout << "First element: " << myVector[0] << std::endl; // Access using []
//     std::cout << "Second element: " << myVector.at(1) << std::endl; // Access using .at() (with bounds checking)

//     // Modifying elements
//     myVector[1] = 99; // Change the second element

//     // Iterating through the vector (range-based for loop)
//     for (int element : myVector) {
//         std::cout << element << " ";
//     }
//     std::cout << std::endl; // Output: 10 99 30

//     // Removing the last element
//     myVector.pop_back(); // Removes 30

//     std::cout << "Size after pop_back: " << myVector.size() << std::endl; // Output: Size after pop_back: 2

//     return 0;
// }
