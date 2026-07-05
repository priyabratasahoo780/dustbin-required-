#include <iostream>
#include<fstream>
using namespace std;
int main()
{
    ofstream file;
    file.open("sample.txt",ios::app);
    if(file.is_open()){
        char str[100];
       cin.getline(str, 100);
        // file<< "First time using the file operation with the help of ofstream method."<<endl;
        cout<<str<<endl;
        file.close();
    }
    return 0;
}


