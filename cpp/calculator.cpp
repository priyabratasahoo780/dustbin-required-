#include<iostream>
using namespace std;
int main(){
    int a;
    int b;
    int choice;
    cin>>a;
    cin>>b;
cin>>choice;
    switch(choice){
        case 1:
            cout<<"Answer:"<<a+b<<endl;
        break;
        case 2:
            cout<<"Answer:"<<a-b<<endl;
        break;
        case 3:
        cout<<"Answer:"<<a*b<<endl;
        break;
        case 4:
            if(b != 0){
                cout<<"Answer:"<<a/b<<endl;
            } else {
                cout<<"Division by zero error!"<<endl;
            }
            break;
        default:
            cout<<"Invalid operator!"<<endl;
    }
    return 0;
}