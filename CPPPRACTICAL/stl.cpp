#include<iostream>
#include<vector>
using namespace std;
int main(){
 vector<int> s = {10,20,5,40,15};
 int largest = s[0];
 int smallest = s[0];
 int sum = 0;
  for(int i=1;i<s.size();i++){
      if(s[i]>largest){
          largest = s[i];
      }
  }
    for(int i=1;i<s.size();i++){
        if(s[i]<smallest){
            smallest = s[i];
        }
    }
    for(int i=0;i<s.size();i++){
        sum+=s[i];
    }
    cout << "largest : "<<largest<<endl;
    cout << "smallest : "<<smallest<<endl;
    cout << "sum : "<<sum<<endl;
  }
