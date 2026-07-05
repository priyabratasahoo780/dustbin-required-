#include<iostream>
#include<fstream>

using namespace std;

int main(){
    string name;
ofstream st("sample.txt");
   cout << "enter your name:" << endl;
   getline(cin,name);
   st << name << endl;
   st.close();


   ifstream sts("sample.txt");
   string data;
   getline(sts,data);
    cout << "name is:" << data <<endl;
   sts.close();
   return 0;
}
