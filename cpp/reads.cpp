#include <iostream>
#include<string>
#include<fstream>
using namespace std;
int main()
{
    string onelinestatement;
    
    ifstream file1;
    file1.open("sample.txt");

    if(file1.is_open()){
        cout<< "The actual data is gonna print for a given file below: "<< endl;
        while(getline(file1, onelinestatement)){
            cout<<onelinestatement<<endl;
        }
        file1.close();
    }
    return 0;
}