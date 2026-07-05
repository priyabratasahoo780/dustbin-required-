// Encapsulated Rectangle Class:
// Write Rectangle class with private double width, height. Public methods: setDimensions(double w, double h) (validate >0), getArea() returns widthheight, getPerimeter() returns 2(w+h). Main: create object, set 5x3, print area=15, perimeter=16.
// ​




#include <iostream>
using namespace std;

class Rectangle {
private:
    double width;
    double height;

public:
    void setDimensions(double w, double h) {
        if (w > 0 && h > 0) {
            width = w;
            height = h;
        } else {
            cout << "Dimensions must be positive!" << endl;
        }
    }

    double getArea() {
        return width * height;
    }

    double getPerimeter() {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle rect;
    rect.setDimensions(5, 3);
    cout << "Area = " << rect.getArea() << endl;
    cout << "Perimeter = " << rect.getPerimeter() << endl;
    return 0;
}











































// #include <iostream>
// using namespace std;

// class Rectangle {
// private:
//     double width;
//     double height;

// public:
//     void setDimensions(double w, double h) {
//         if (w > 0 && h > 0) {
//             width = w;
//             height = h;
//         } else {
//             cout << "Dimensions must be positive!" << endl;
//         }
//     }

//     double getArea() {
//         return width * height;
//     }

//     double getPerimeter() {
//         return 2 * (width + height);
//     }
// };

// int main() {
//     Rectangle rect;
//     rect.setDimensions(5, 3);
//     cout << "Area = " << rect.getArea() << endl;
//     cout << "Perimeter = " << rect.getPerimeter() << endl;
//     return 0;
// }
