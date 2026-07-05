// Private Static Member:

// Config class: 

// private static int value=0; 

// static setter setValue(int v), static getter getValue(). 

// Main: Config::setValue(42);
//  cout << Config::getValue() → 42.
// ​
#include<iostream>
using namespace std;

class config{
private:
static int value;

public:
static void setValue(int v){
    value = v;
}
static int getValue(){
    return value;
}
};
int config::value = 0;

int main(){
    config::setValue(42);
    cout << config::getValue() << endl;
    return 0;
}

