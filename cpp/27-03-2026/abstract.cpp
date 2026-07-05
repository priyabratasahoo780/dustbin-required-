#include<iostream>

using namespace std;

class Car{
    
    public:
    
    // By using pure virtual fucntion we will list out those neccesary info which has to be shown to user...
    
        virtual void engineInfo()= 0;
        
        virtual void brakeInfo()= 0;
        

    
};

class Tata : public Car{
    
    public:
    
        void engineInfo(){
            cout << "Engine started with the help of the key"<<endl;
        }
        
        void brakeInfo(){
            cout<<"The brake is used to stop the car and only front brake is there"<<endl;
        }
};

class Honda : public Car{
    
    public:
    
        void engineInfo(){
            cout << "Engine started which is keyless"<<endl;
        }
        
        void brakeInfo(){
            cout<<"The brake is used to stop the car and both front/back brake is there"<<endl;
        }   
    
};



int main(){
    
    Tata obj1;
    
    obj1.engineInfo();
    
    Honda obj2;
    
    obj2.engineInfo();
    
    return 0;
}

